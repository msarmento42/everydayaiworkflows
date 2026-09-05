This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## EAWF rehabilitation plan

EAWF is being treated as one focused, evidence-led publication rather than a
high-volume AI content network. The public blog index and sitemap now promote a
small canonical set of workflow, comparison, and tool-fit articles. Existing
article routes remain available while they are reviewed; a route is not
considered ready for promotion merely because it builds.

The editorial gate for promoted pages is:

- define a specific reader decision and workflow outcome;
- anchor capability and pricing claims to current first-party sources;
- show inputs, review points, limitations, and the human judgment that remains;
- keep affiliate links disclosed and secondary to the useful explanation; and
- date deliberate reviews and invite corrections through the contact page.

This is a quality and discoverability rehabilitation, not a promise of AdSense
approval or revenue. Before any AdSense re-review, the remaining human gates
must be satisfied: restore account access, add genuine firsthand evidence where
the page implies testing, verify production after deployment, and confirm that
the site has a coherent audience and no unresolved quality blocker. No new
automated content should be published while those gates are open.

## Revenue instrumentation handoff

The revenue funnel is instrumented without sending email addresses, prompts, or
user content to analytics. The browser event contract is defined in
`src/app/lib/analytics.ts`; the current emitted paths are lead view/start/
submit/success, free-template download, product view, affiliate click, and
outbound click. Checkout and purchase remain provider-side until a truthful
provider callback or report is available.

Production configuration is intentionally external to the repository:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional public GA4 measurement ID; the
  readiness check accepts the `G-...` format and does not require a value for a
  build.
- `NEWSLETTER_WEBHOOK_URL` — server-only HTTPS endpoint for consented signup
  delivery.
- `NEWSLETTER_WEBHOOK_TOKEN` — optional server-only bearer token; never commit
  it or expose it to the browser.

When the provider variables are absent, the newsletter route remains honest:
it reports that delivery is unavailable and the existing instant-download
Gumroad fallback remains available. Validate the handoff with:

```bash
node scripts/check-analytics-readiness.mjs
npm run check:newsletter
```
