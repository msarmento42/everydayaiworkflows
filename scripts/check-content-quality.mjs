import { access, readFile } from 'node:fs/promises';

const BASE_URL = 'https://everydayaiworkflows.com';
const failures = [];

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function read(path) {
  return readFile(path, 'utf8');
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

const strategyPath = 'src/app/lib/content-strategy.ts';
const strategy = await read(strategyPath);
const canonicalSlugs = [...strategy.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
const canonicalSet = new Set(canonicalSlugs);
const articleJsonLdComponent = await read('src/app/blog/components/ArticleJsonLd.tsx');

for (const requiredToken of [
  '"@context"',
  '"@type"',
  'mainEntityOfPage',
  'author',
  'publisher',
  'datePublished',
  'dateModified',
  'JSON.stringify',
]) {
  assert(articleJsonLdComponent.includes(requiredToken), `ArticleJsonLd is missing required structured-data token: ${requiredToken}`);
}

assert(canonicalSlugs.length >= 8 && canonicalSlugs.length <= 12, `canonical allowlist must contain 8–12 slugs (found ${canonicalSlugs.length})`);
assert(canonicalSlugs.length === canonicalSet.size, 'canonical allowlist contains duplicate slugs');
assert(!strategy.includes('new Date()'), 'content strategy must not use clock-generated dates');

for (const slug of canonicalSlugs) {
  const path = `src/app/blog/${slug}/page.tsx`;
  assert(await exists(path), `canonical article is missing: ${path}`);
  if (!(await exists(path))) continue;

  const source = await read(path);
  assert(source.includes(`canonical: "/blog/${slug}"`), `${slug} is missing its self-canonical metadata`);
  assert(source.includes('robots: {') && source.includes('index: true') && source.includes('follow: true'), `${slug} must explicitly opt into indexing`);
  assert(source.includes('ArticleJsonLd'), `${slug} is missing Article JSON-LD`);
  assert(source.includes('EditorialQualityNotice'), `${slug} is missing the editorial quality note`);
  assert(source.includes('SourceMethodBlock'), `${slug} is missing its method/source block`);
  assert(source.includes('AffiliateDisclosure'), `${slug} is missing its affiliate disclosure`);
  assert(source.includes('dateModified="2026-09-04"'), `${slug} is missing the stable review date`);

  const sourceBlock = source.match(/sources=\{\[(.*?)\]\}/s)?.[1] || '';
  const sourceHrefs = [...sourceBlock.matchAll(/href:\s*"([^"]+)"/g)].map((match) => match[1]);
  assert(sourceHrefs.length >= 3, `${slug} must include at least three method/source links`);
  for (const href of sourceHrefs) {
    try {
      const parsed = new URL(href);
      assert(parsed.protocol === 'https:', `${slug} has a non-HTTPS source link: ${href}`);
      assert(Boolean(parsed.hostname), `${slug} has a source link without a hostname: ${href}`);
    } catch {
      assert(false, `${slug} has a malformed source link: ${href}`);
    }
  }

  const internalArticleLinks = [...source.matchAll(/href="\/blog\/([a-z0-9-]+)"/g)].map((match) => match[1]);
  for (const target of internalArticleLinks) {
    assert(canonicalSet.has(target), `${slug} links to non-flagship article ${target}`);
  }

  const unsupportedHeadlineClaims = [
    'Zero Inbox in Under 10 Minutes',
    'Replaces a Week of Manual Research',
    'cuts manual load by 40-60%',
    'best general-purpose AI writer',
    'best knowledge management tool',
    'most actionable tool for content optimization',
    'consistently outperforms either tool alone',
    '8 to 12 hours per week',
    'covers 95% of use cases',
    'reliably saves meaningful time',
    'removing yourself from the process entirely',
  ];
  for (const claim of unsupportedHeadlineClaims) {
    assert(!source.toLowerCase().includes(claim.toLowerCase()), `${slug} still contains unsupported headline claim: ${claim}`);
  }
}

// When a production build is present, parse the emitted Article JSON-LD as a
// second line of defense against malformed structured data. The check remains
// usable before a build by validating the shared component above.
for (const slug of canonicalSlugs) {
  const renderedPath = `.next/server/app/blog/${slug}.html`;
  if (!(await exists(renderedPath))) continue;
  const rendered = await read(renderedPath);
  const jsonLdBlocks = [...rendered.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((match) => match[1]);
  const articleBlock = jsonLdBlocks.find((block) => block.includes('"@type":"Article"'));
  assert(Boolean(articleBlock), `${slug} build output is missing Article JSON-LD`);
  if (!articleBlock) continue;
  try {
    const parsed = JSON.parse(articleBlock);
    assert(parsed['@context'] === 'https://schema.org', `${slug} Article JSON-LD has the wrong context`);
    assert(parsed['@type'] === 'Article', `${slug} Article JSON-LD has the wrong type`);
    assert(parsed.mainEntityOfPage?.['@id'] === `${BASE_URL}/blog/${slug}`, `${slug} Article JSON-LD has the wrong canonical id`);
    assert(typeof parsed.datePublished === 'string' && typeof parsed.dateModified === 'string', `${slug} Article JSON-LD is missing dates`);
  } catch {
    assert(false, `${slug} emitted Article JSON-LD is not valid JSON`);
  }
}

for (const slug of ['ai-email-triage-system', 'ai-meeting-summarizer-workflow', 'ai-for-competitor-analysis', 'ai-content-repurposing-workflow']) {
  const source = await read(`src/app/blog/${slug}/page.tsx`);
  assert(source.includes('WorkflowLab'), `${slug} is missing its Workflow Lab evidence record`);
  assert(source.includes('observationStatus='), `${slug} is missing an explicit observation status`);
  assert(source.includes('sources={[') && source.includes('updateLog={['), `${slug} is missing an evidence ledger or update log`);
}

const blogLayout = await read('src/app/blog/layout.tsx');
assert(blogLayout.includes('index: false'), 'blog archive default must be noindex');
assert(blogLayout.includes('follow: true'), 'blog archive default must remain followable');

const sitemap = await read('src/app/sitemap.ts');
assert(sitemap.includes('canonicalArticles'), 'sitemap must use the shared canonical article set');
assert(!sitemap.includes('new Date()'), 'sitemap must use deterministic lastModified values');
assert(sitemap.includes('updatedOn'), 'sitemap must use per-article update dates');

const staticSitemap = (await read('public/sitemap-urls.txt'))
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);
const expectedStaticPaths = new Set([
  '/', '/blog', '/start-here', '/ai-tools', '/ai-tools-by-role',
  '/workflows/automation', '/workflows/meetings', '/workflows/research', '/workflows/writing',
  '/about', '/contact', '/editorial-policy', '/privacy', '/terms',
  ...canonicalSlugs.map((slug) => `/blog/${slug}`),
]);
assert(staticSitemap.length === new Set(staticSitemap).size, 'public/sitemap-urls.txt contains duplicate URLs');
for (const url of staticSitemap) {
  const path = url.replace(BASE_URL, '');
  assert(url.startsWith(`${BASE_URL}/`) || url === BASE_URL, `static sitemap URL is outside the site: ${url}`);
  assert(expectedStaticPaths.has(path || '/'), `static sitemap contains a non-allowlisted URL: ${url}`);
}
assert(staticSitemap.length === expectedStaticPaths.size, `static sitemap should contain exactly ${expectedStaticPaths.size} allowlisted URLs (found ${staticSitemap.length})`);

const layout = await read('src/app/layout.tsx');
for (const trustPath of ['/about', '/contact', '/editorial-policy', '/privacy', '/terms']) {
  assert(layout.includes(`href: '${trustPath}'`), `sitewide footer is missing ${trustPath}`);
}
assert(layout.includes('ca-pub-6175161566333696'), 'AdSense loader publisher id must remain present');

const privacy = await read('src/app/privacy/page.tsx');
assert(privacy.includes('account is pending review'), 'privacy page must describe the pending AdSense review state');
assert(!privacy.includes('We use <strong style={{ color: \'#fff\' }}>Google AdSense</strong> to display advertisements'), 'privacy page must not claim approved AdSense serving');

const robots = await read('public/robots.txt');
assert(robots.includes('User-agent: *') && robots.includes('Allow: /') && robots.includes('/sitemap.xml'), 'robots.txt must allow the site and advertise the sitemap');

if (failures.length) {
  console.error('Content quality check failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Content quality check passed: ${canonicalSlugs.length} flagships, ${staticSitemap.length} static sitemap URLs, archive default noindex.`);
