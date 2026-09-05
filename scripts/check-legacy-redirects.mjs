const BASE_URL = (process.env.BASE_URL || 'https://everydayaiworkflows.com').replace(/\/$/, '');

const expectedRedirects = [
  ['/home', '/'],
  ['/sites/utility-network-landing', '/'],
  ['/sites/utility-network-landing/index.html', '/'],
];

for (const [path, destination] of expectedRedirects) {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, { redirect: 'manual' });
  if (response.status !== 301 && response.status !== 308) {
    throw new Error(`${url} returned HTTP ${response.status}; expected a permanent redirect`);
  }

  const location = response.headers.get('location');
  if (!location) {
    throw new Error(`${url} returned a permanent redirect without a Location header`);
  }

  const resolved = new URL(location, url);
  if (resolved.origin !== new URL(BASE_URL).origin || resolved.pathname !== destination) {
    throw new Error(`${url} redirects to ${resolved.href}; expected ${BASE_URL}${destination}`);
  }

  console.log(`ok redirect ${url} -> ${resolved.href}`);
}

console.log(`Legacy redirect check passed for ${BASE_URL}`);
