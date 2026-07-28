const webhookConfigured = Boolean(process.env.NEWSLETTER_WEBHOOK_URL);
const tokenConfigured = Boolean(process.env.NEWSLETTER_WEBHOOK_TOKEN);

console.log(`Newsletter readiness: webhook is ${webhookConfigured ? "configured" : "not configured"}.`);
console.log(`Newsletter readiness: authentication token is ${tokenConfigured ? "configured" : "not configured"}.`);

if (tokenConfigured && !webhookConfigured) {
  console.error("Newsletter readiness: authentication is configured without a webhook.");
  process.exitCode = 1;
}
