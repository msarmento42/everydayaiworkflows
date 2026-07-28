/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const Module = require("node:module");
const path = require("node:path");
const test = require("node:test");
const ts = require("typescript");

/**
 * @param {string} filename
 * @param {Array<[string, string]>} replacements
 * @returns {Record<string, any>}
 */
function loadTypeScriptModule(filename, replacements = []) {
  let source = fs.readFileSync(filename, "utf8");
  for (const [search, replacement] of replacements) source = source.replace(search, replacement);
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    fileName: filename,
  }).outputText;
  const loadedModule = new Module(filename);
  loadedModule.filename = filename;
  Reflect.get(loadedModule, "_compile").call(loadedModule, compiled, filename);
  return loadedModule.exports;
}

const directory = __dirname;
const newsletter = loadTypeScriptModule(path.join(directory, "newsletter.ts"));
const provider = loadTypeScriptModule(path.join(directory, "newsletter-provider.ts"), [
  ['import "server-only";', ""],
]);

test("validation normalizes a consented allowlisted submission", () => {
  assert.deepEqual(newsletter.validateNewsletterSubmission({
    email: "  Reader@Example.com ",
    source: "homepage",
    consent: true,
    honeypot: "",
  }), {
    ok: true,
    submission: { email: "reader@example.com", source: "homepage", consent: true },
  });
});

test("validation rejects bad input, missing consent, unknown sources, and bots", () => {
  assert.equal(newsletter.validateNewsletterSubmission(null).reason, "invalid_request");
  assert.equal(newsletter.validateNewsletterSubmission({ email: "bad", source: "blog", consent: true }).reason, "invalid_email");
  assert.equal(newsletter.validateNewsletterSubmission({ email: "a@b.co", source: "other", consent: true }).reason, "invalid_source");
  assert.equal(newsletter.validateNewsletterSubmission({ email: "a@b.co", source: "blog", consent: false }).reason, "consent_required");
  assert.equal(newsletter.validateNewsletterSubmission({ email: "a@b.co", source: "blog", consent: true, honeypot: "bot" }).reason, "spam");
});

test("missing or unsafe provider configuration is honestly unavailable", async () => {
  const submission = { email: "reader@example.com", source: "blog", consent: true };
  assert.deepEqual(await provider.submitToNewsletterProvider(submission, { webhookUrl: "" }), { status: "unavailable" });
  assert.deepEqual(await provider.submitToNewsletterProvider(submission, { webhookUrl: "not-a-url" }), { status: "unavailable" });
  assert.deepEqual(await provider.submitToNewsletterProvider(submission, { webhookUrl: "http://example.com/hook" }), { status: "unavailable" });
});

test("provider sends the minimal consent record and maps responses", async () => {
  /** @type {Array<[string, RequestInit]>} */
  const calls = [];
  const submission = { email: "reader@example.com", source: "recruiting", consent: true };
  const fetchImpl = async (/** @type {URL} */ url, /** @type {RequestInit} */ init) => {
    calls.push([url.toString(), init]);
    return { ok: true, status: 201 };
  };
  assert.deepEqual(await provider.submitToNewsletterProvider(submission, {
    webhookUrl: "https://example.com/newsletter",
    webhookToken: "secret",
    fetchImpl,
    now: () => new Date("2026-07-28T00:00:00.000Z"),
  }), { status: "success" });
  assert.equal(calls[0][0], "https://example.com/newsletter");
  assert.equal(calls[0][1].headers.authorization, "Bearer secret");
  assert.deepEqual(JSON.parse(calls[0][1].body), {
    email: "reader@example.com",
    source: "recruiting",
    consent_timestamp: "2026-07-28T00:00:00.000Z",
  });

  const duplicateFetch = async () => ({ ok: false, status: 409 });
  assert.deepEqual(await provider.submitToNewsletterProvider(submission, { webhookUrl: "https://example.com", fetchImpl: duplicateFetch }), { status: "duplicate" });
  const failingFetch = async () => { throw new Error("network"); };
  assert.deepEqual(await provider.submitToNewsletterProvider(submission, { webhookUrl: "https://example.com", fetchImpl: failingFetch }), { status: "error" });
});
