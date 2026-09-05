import { readFile } from 'node:fs/promises';

const failures = [];

async function source(path) {
  return readFile(path, 'utf8');
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

const revenueLinks = await source('src/app/lib/revenue-links.ts');
for (const token of [
  "const GUMROAD_BASE = 'https://methodstackhq.gumroad.com/l'",
  "utm_source: 'eawf'",
  "utm_medium: 'owned'",
  "utm_campaign: CAMPAIGN",
  "utm_content: content",
  "gumroadLink('ai-workflow-reset', 'free_reset')",
  "gumroadLink('ai-workday-system', 'workday_system')",
  "gumroadLink('method-stack-complete-system', 'complete_system')",
]) {
  assert(revenueLinks.includes(token), `revenue-links.ts is missing ${token}`);
}

const methodStackCta = await source('src/app/components/MethodStackCTA.tsx');
for (const token of [
  'methodStackLinks.freeReset',
  'methodStackLinks.workdaySystem',
  'methodStackLinks.completeSystem',
  'data-analytics-product="ai-workflow-reset"',
  'data-analytics-product="ai-workday-system"',
  'data-analytics-product="method-stack-complete-system"',
  'Product links are provided for readers who want implementation assets',
]) {
  assert(methodStackCta.includes(token), `MethodStackCTA.tsx is missing ${token}`);
}

const newsletter = await source('src/app/blog/components/NewsletterCapture.tsx');
for (const token of [
  'methodStackLinks.freeReset',
  'data-analytics-product="ai-workflow-reset"',
  'data-analytics-template="free_reset"',
]) {
  assert(newsletter.includes(token), `NewsletterCapture.tsx is missing ${token}`);
}

for (const path of [
  'src/app/blog/ai-email-triage-system/page.tsx',
  'src/app/blog/ai-meeting-summarizer-workflow/page.tsx',
  'src/app/blog/ai-for-competitor-analysis/page.tsx',
  'src/app/blog/ai-content-repurposing-workflow/page.tsx',
]) {
  const page = await source(path);
  assert(page.includes('MethodStackCTA'), `${path} is missing the product handoff`);
  assert(page.includes('<WorkflowArtifact'), `${path} is missing the local worksheet`);
}

if (failures.length) {
  console.error('Revenue link check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Revenue link check passed: Gumroad slugs, UTM contract, CTA markers, and four flagship handoffs are present.');
