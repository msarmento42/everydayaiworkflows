import { access, readFile } from 'node:fs/promises';

const BASE_URL = (process.env.BASE_URL || 'https://everydayaiworkflows.com').replace(/\/$/, '');
const ADS_LINE = 'google.com, pub-6175161566333696, DIRECT, f08c47fec0942fa0';

const requiredFiles = [
  'public/ads.txt',
  'src/app/start-here/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/editorial-policy/page.tsx',
];

const requiredRoutes = [
  '/',
  '/ads.txt',
  '/sitemap.xml',
  '/start-here',
  '/about',
  '/contact',
  '/privacy',
  '/editorial-policy',
];

async function assertFile(path) {
  await access(path);
  console.log(`ok file ${path}`);
}

async function fetchText(path) {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, { redirect: 'follow' });
  if (!response.ok) {
    throw new Error(`${url} returned HTTP ${response.status}`);
  }
  const text = await response.text();
  console.log(`ok url ${url}`);
  return text;
}

async function main() {
  for (const path of requiredFiles) {
    await assertFile(path);
  }

  const adsTxt = await readFile('public/ads.txt', 'utf8');
  if (!adsTxt.includes(ADS_LINE)) {
    throw new Error('public/ads.txt does not contain the expected AdSense publisher line');
  }
  console.log('ok local ads.txt publisher line');

  for (const route of requiredRoutes) {
    await fetchText(route);
  }

  const [home, sitemap, liveAdsTxt] = await Promise.all([
    fetchText('/'),
    fetchText('/sitemap.xml'),
    fetchText('/ads.txt'),
  ]);

  if (!home.includes('/start-here')) {
    throw new Error('Homepage does not link to /start-here');
  }
  if (!sitemap.includes('/start-here')) {
    throw new Error('Sitemap does not include /start-here');
  }
  if (!liveAdsTxt.includes(ADS_LINE)) {
    throw new Error('Live ads.txt does not contain the expected AdSense publisher line');
  }

  console.log(`AdSense readiness smoke check passed for ${BASE_URL}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
