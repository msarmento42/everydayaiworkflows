# AdSense Readiness Checklist

Use this checklist before requesting or re-requesting AdSense review for everydayaiworkflows.com.

## Required Site Checks

- `https://everydayaiworkflows.com/ads.txt` returns HTTP 200.
- `ads.txt` contains `google.com, pub-6175161566333696, DIRECT, f08c47fec0942fa0`.
- `https://everydayaiworkflows.com/sitemap.xml` returns HTTP 200.
- The sitemap includes `/start-here`.
- The homepage links to `/start-here`.
- Core trust pages are present: `/about`, `/contact`, `/privacy`, `/editorial-policy`.
- Optional next trust-page improvement: add `/terms` and include it in this checklist after it is merged.
- A production build passes with `npm run build`.
- The post-deploy smoke check passes with `npm run check:adsense`.

## AdSense Console Flow

1. In AdSense, open **Sites**.
2. Click `everydayaiworkflows.com`.
3. If `Ads.txt status` is `Not found`, click **Check for updates**.
4. Do not click **Request review** until `Ads.txt status` is `Authorized`.
5. After `Authorized`, request review and leave the site unchanged unless Google flags a concrete issue.

## Vercel Deployment Notes

- Vercel project: `everydayaiworkflows`.
- Production domain: `everydayaiworkflows.com`.
- Manual production deploy fallback:

```bash
npx vercel@latest --prod --yes --token "$VERCEL_TOKEN" --name everydayaiworkflows
```

Keep Vercel tokens and pulled environment files out of git.
