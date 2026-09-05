import "server-only";

import type { NewsletterSubmission } from "./newsletter";

export type NewsletterProviderResult =
  | { status: "success" }
  | { status: "duplicate" }
  | { status: "unavailable" }
  | { status: "error" };

type ProviderOptions = {
  webhookUrl?: string;
  webhookToken?: string;
  fetchImpl?: typeof fetch;
  now?: () => Date;
};

function isBeehiivSubscriptionsEndpoint(url: URL) {
  return url.hostname === "api.beehiiv.com"
    && /^\/v2\/publications\/pub_[^/]+\/subscriptions\/?$/.test(url.pathname);
}

function buildProviderPayload(submission: NewsletterSubmission, now: () => Date, url: URL) {
  if (isBeehiivSubscriptionsEndpoint(url)) {
    return {
      email: submission.email,
      utm_source: "eawf",
      utm_medium: "website",
      utm_campaign: "eawf_funnel_2026q3",
      utm_content: submission.source,
      referring_site: "https://everydayaiworkflows.com",
      send_welcome_email: false,
      double_opt_override: "not_set",
    };
  }

  return {
    email: submission.email,
    source: submission.source,
    consent_timestamp: now().toISOString(),
  };
}

export async function submitToNewsletterProvider(
  submission: NewsletterSubmission,
  options: ProviderOptions = {},
): Promise<NewsletterProviderResult> {
  const webhookUrl = options.webhookUrl ?? process.env.NEWSLETTER_WEBHOOK_URL;
  const webhookToken = options.webhookToken ?? process.env.NEWSLETTER_WEBHOOK_TOKEN;
  if (!webhookUrl) return { status: "unavailable" };

  let url: URL;
  try {
    url = new URL(webhookUrl);
  } catch {
    return { status: "unavailable" };
  }
  if (url.protocol !== "https:") return { status: "unavailable" };

  const headers: Record<string, string> = { "content-type": "application/json" };
  if (webhookToken) headers.authorization = `Bearer ${webhookToken}`;

  try {
    const response = await (options.fetchImpl ?? fetch)(url, {
      method: "POST",
      headers,
      body: JSON.stringify(buildProviderPayload(submission, options.now ?? (() => new Date()), url)),
      cache: "no-store",
      signal: AbortSignal.timeout(8_000),
    });

    if (response.status === 409) return { status: "duplicate" };
    if (response.ok) return { status: "success" };
    return { status: "error" };
  } catch {
    return { status: "error" };
  }
}
