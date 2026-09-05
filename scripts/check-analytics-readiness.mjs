import { readFile } from 'node:fs/promises';

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const configured = typeof measurementId === 'string' && /^G-[A-Z0-9]+$/.test(measurementId);
const failures = [];

if (measurementId && !configured) failures.push('NEXT_PUBLIC_GA_MEASUREMENT_ID has an invalid format');

const checks = [
  ['src/app/components/Analytics.tsx', ['trackAnalyticsEvent(template ? "template_download" : "product_view"', 'trackAnalyticsEvent("checkout_start"', 'trackAnalyticsEvent(isAffiliate ? "affiliate_click" : "outbound_click"', 'VALID_GA_MEASUREMENT_ID']],
  ['src/app/blog/components/NewsletterCapture.tsx', ['trackAnalyticsEvent("lead_view"', 'trackAnalyticsEvent("lead_start"', 'trackAnalyticsEvent("lead_submit"', 'trackAnalyticsEvent("lead_success"']],
  ['src/app/components/MethodStackCTA.tsx', ['data-analytics-product="ai-workflow-reset"', 'data-analytics-product="ai-workday-system"', 'data-analytics-product="ai-research-decision-kit"', 'data-analytics-product="ai-weekly-planning-kit"', 'data-analytics-product="method-stack-complete-system"']],
];

for (const [file, tokens] of checks) {
  const source = await readFile(file, 'utf8');
  for (const token of tokens) {
    if (!source.includes(token)) failures.push(`${file} is missing ${token}`);
  }
}

console.log(`Analytics readiness: GA4 measurement ID is ${configured ? 'configured' : 'not configured'}; source event wiring is ${failures.length ? 'incomplete' : 'present'}.`);
if (failures.length) {
  for (const failure of failures) console.error(`Analytics readiness: ${failure}`);
  process.exitCode = 1;
}
