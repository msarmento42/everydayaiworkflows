export const NEWSLETTER_SOURCES = [
  "blog",
  "homepage",
  "lead-magnet",
  "recruiting",
  "customer-feedback",
] as const;

export type NewsletterSource = (typeof NEWSLETTER_SOURCES)[number];

export type NewsletterSubmission = {
  email: string;
  source: NewsletterSource;
  consent: true;
};

export type NewsletterValidationResult =
  | { ok: true; submission: NewsletterSubmission }
  | { ok: false; reason: "invalid_email" | "invalid_source" | "consent_required" | "invalid_request" | "spam" };

const SOURCE_SET = new Set<string>(NEWSLETTER_SOURCES);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateNewsletterSubmission(input: unknown): NewsletterValidationResult {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, reason: "invalid_request" };
  }

  const candidate = input as Record<string, unknown>;
  if (typeof candidate.honeypot === "string" && candidate.honeypot.trim()) {
    return { ok: false, reason: "spam" };
  }
  if (candidate.consent !== true) {
    return { ok: false, reason: "consent_required" };
  }
  if (typeof candidate.source !== "string" || !SOURCE_SET.has(candidate.source)) {
    return { ok: false, reason: "invalid_source" };
  }
  if (typeof candidate.email !== "string") {
    return { ok: false, reason: "invalid_email" };
  }

  const email = candidate.email.trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return { ok: false, reason: "invalid_email" };
  }

  return {
    ok: true,
    submission: {
      email,
      source: candidate.source as NewsletterSource,
      consent: true,
    },
  };
}
