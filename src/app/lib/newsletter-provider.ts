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
      body: JSON.stringify({
        email: submission.email,
        source: submission.source,
        consent_timestamp: (options.now ?? (() => new Date()))().toISOString(),
      }),
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
