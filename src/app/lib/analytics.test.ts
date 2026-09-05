/* eslint-disable @typescript-eslint/no-require-imports */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const Module = require("node:module");
const path = require("node:path");
const test = require("node:test");
const ts = require("typescript");

const filename = path.join(__dirname, "analytics.ts");
const source = fs.readFileSync(filename, "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
  },
  fileName: filename,
}).outputText;
const analyticsModule = new Module(filename);
analyticsModule.filename = filename;
analyticsModule._compile(compiled, filename);

const {
  ANALYTICS_EVENTS,
  sanitizeAnalyticsPayload,
  trackAnalyticsEvent,
} = analyticsModule.exports;

test("the shared contract contains every supported funnel event", () => {
  assert.deepEqual(ANALYTICS_EVENTS, [
    "lead_view", "lead_start", "lead_submit", "lead_success",
    "template_download", "affiliate_click", "outbound_click",
    "product_view", "checkout_start", "purchase",
  ]);
});

test("categorical payloads are normalized and unknown keys are rejected", () => {
  assert.deepEqual(
    sanitizeAnalyticsPayload("affiliate_click", {
      page: "/Blog/AI-Tools",
      placement: "Hero_CTA",
      partner: "Make",
      page_intent: "Commercial",
    }),
    {
      page: "/blog/ai-tools",
      placement: "hero_cta",
      partner: "make",
      page_intent: "commercial",
    },
  );
  assert.throws(
    () => sanitizeAnalyticsPayload("lead_submit", { arbitrary: "value" }),
    /not allowed/,
  );
  assert.throws(
    () => sanitizeAnalyticsPayload("lead_submit", { placement: "arbitrary user text" }),
    /not a safe category/,
  );
});

test("sensitive keys and email-shaped values are rejected", () => {
  for (const key of ["email", "prompt", "form_content", "checkout_id", "customer_identifier"]) {
    assert.throws(
      () => sanitizeAnalyticsPayload("lead_submit", { [key]: "secret" }),
      /not allowed/,
    );
  }
  assert.throws(
    () => sanitizeAnalyticsPayload("lead_submit", { placement: "person@example.com" }),
    /not a safe category/,
  );
});

test("missing gtag fails safely and valid dispatch succeeds", () => {
  assert.equal(trackAnalyticsEvent("lead_view", { page: "/" }), false);

  const calls = [];
  const gtag = (...args) => calls.push(args);
  assert.equal(
    trackAnalyticsEvent("template_download", { page: "/research", template: "competitor_brief" }, gtag),
    true,
  );
  assert.deepEqual(calls, [[
    "event",
    "template_download",
    { page: "/research", template: "competitor_brief" },
  ]]);
});

test("paid checkout-start telemetry stays within the safe product contract", () => {
  const calls = [];
  const gtag = (...args) => calls.push(args);
  assert.equal(
    trackAnalyticsEvent("checkout_start", {
      page: "/blog/ai-email-triage-system",
      placement: "method-stack-workday-system",
      page_intent: "workflow",
      partner: "gumroad",
      product: "ai-workday-system",
      link_domain: "methodstackhq.gumroad.com",
    }, gtag),
    true,
  );
  assert.deepEqual(calls, [[
    "event",
    "checkout_start",
    {
      page: "/blog/ai-email-triage-system",
      placement: "method-stack-workday-system",
      page_intent: "workflow",
      partner: "gumroad",
      product: "ai-workday-system",
      link_domain: "methodstackhq.gumroad.com",
    },
  ]]);
});
