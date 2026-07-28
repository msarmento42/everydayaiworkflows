export const ANALYTICS_EVENTS = [
  "lead_view",
  "lead_start",
  "lead_submit",
  "lead_success",
  "template_download",
  "affiliate_click",
  "outbound_click",
  "product_view",
  "checkout_start",
  "purchase",
] as const;

export type AnalyticsEventName = (typeof ANALYTICS_EVENTS)[number];

export type AnalyticsPayload = Record<string, string | number | undefined>;

type Gtag = (
  command: "event",
  eventName: AnalyticsEventName,
  payload: Record<string, string | number>,
) => void;

const SUPPORTED_EVENTS = new Set<string>(ANALYTICS_EVENTS);
const ALLOWED_KEYS = new Set([
  "page",
  "placement",
  "partner",
  "page_intent",
  "product",
  "template",
  "link_domain",
  "currency",
  "value",
]);
const SENSITIVE_KEY = /(?:email|e_mail|prompt|form|content|message|name|phone|address|checkout|session|customer|user|token|identifier|id)$/i;
const CATEGORY_VALUE = /^[a-z0-9](?:[a-z0-9._:/-]{0,79})$/;
const PAGE_VALUE = /^\/(?:[a-z0-9][a-z0-9._/-]{0,78})?$/;
const EMAIL_VALUE = /[^\s@]+@[^\s@]+\.[^\s@]+/;

export function isSupportedAnalyticsEvent(value: string): value is AnalyticsEventName {
  return SUPPORTED_EVENTS.has(value);
}

export function sanitizeAnalyticsPayload(
  eventName: AnalyticsEventName,
  payload: AnalyticsPayload = {},
): Record<string, string | number> {
  if (!isSupportedAnalyticsEvent(eventName)) {
    throw new Error(`Unsupported analytics event: ${eventName}`);
  }

  const sanitized: Record<string, string | number> = {};

  for (const [key, value] of Object.entries(payload)) {
    if (value === undefined) continue;
    if (SENSITIVE_KEY.test(key) || !ALLOWED_KEYS.has(key)) {
      throw new Error(`Analytics payload key is not allowed: ${key}`);
    }

    if (typeof value === "number") {
      if (key !== "value" || !Number.isFinite(value) || value < 0 || value > 1_000_000) {
        throw new Error(`Analytics payload value is invalid for: ${key}`);
      }
      sanitized[key] = value;
      continue;
    }

    const normalized = value.trim().toLowerCase();
    const isSafeCategory = key === "page" ? PAGE_VALUE.test(normalized) : CATEGORY_VALUE.test(normalized);
    if (!normalized || EMAIL_VALUE.test(normalized) || !isSafeCategory) {
      throw new Error(`Analytics payload value is not a safe category for: ${key}`);
    }
    sanitized[key] = normalized;
  }

  return sanitized;
}

export function trackAnalyticsEvent(
  eventName: AnalyticsEventName,
  payload: AnalyticsPayload = {},
  gtag?: Gtag,
): boolean {
  const browserGtag = gtag ?? (
    typeof window !== "undefined"
      ? (window as typeof window & { gtag?: Gtag }).gtag
      : undefined
  );

  if (!browserGtag) return false;

  try {
    browserGtag("event", eventName, sanitizeAnalyticsPayload(eventName, payload));
    return true;
  } catch {
    return false;
  }
}
