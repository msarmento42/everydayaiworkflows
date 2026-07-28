import { NextResponse } from "next/server";
import { submitToNewsletterProvider } from "../../../lib/newsletter-provider";
import { validateNewsletterSubmission } from "../../../lib/newsletter";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 4_096;
const NO_STORE_HEADERS = { "cache-control": "no-store" };

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (contentType.split(";", 1)[0].trim() !== "application/json") {
    return NextResponse.json({ status: "error" }, { status: 415, headers: NO_STORE_HEADERS });
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json({ status: "error" }, { status: 413, headers: NO_STORE_HEADERS });
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return NextResponse.json({ status: "error" }, { status: 413, headers: NO_STORE_HEADERS });
    }
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ status: "error" }, { status: 400, headers: NO_STORE_HEADERS });
  }

  const validation = validateNewsletterSubmission(body);
  if (!validation.ok) {
    return NextResponse.json({ status: "error" }, { status: 400, headers: NO_STORE_HEADERS });
  }

  const result = await submitToNewsletterProvider(validation.submission);
  if (result.status === "unavailable") {
    return NextResponse.json({ status: "unavailable" }, { status: 503, headers: NO_STORE_HEADERS });
  }
  if (result.status === "duplicate") {
    return NextResponse.json({ status: "duplicate" }, { status: 409, headers: NO_STORE_HEADERS });
  }
  if (result.status === "error") {
    return NextResponse.json({ status: "error" }, { status: 502, headers: NO_STORE_HEADERS });
  }
  return NextResponse.json({ status: "success" }, { status: 201, headers: NO_STORE_HEADERS });
}
