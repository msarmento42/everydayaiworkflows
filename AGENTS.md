# AGENTS.md — everydayaiworkflows

You are the Codex cloud agent implementing tasks for everydayaiworkflows,
an AI productivity blog at everydayaiworkflows.com.

## Project overview
- **Stack:** Next.js 15, TypeScript, React, App Router
- **Deploy:** Vercel (auto-deploys on merge to main)
- **Structure:**
  - `src/app/` — pages and layouts
  - `src/app/blog/[slug]/` — individual blog post pages (each post is a folder)
  - `src/app/components/` — shared components
  - `public/` — static assets

## Rules for this project
- Do not modify `.github/`, `.agios/`, or any `*.env*` files
- Blog posts live as folders in `src/app/blog/[slug]/page.tsx`
- New pages go in `src/app/[page-name]/page.tsx`
- New components go in `src/app/components/`
- Do not modify `BACKLOG.md`, `BLOG_PLAN.md`, or `IMPROVEMENTS.md` — these are human planning docs
- Run `npm run build` before opening a PR to catch type errors

## If the issue is ambiguous
Leave a comment on the issue explaining what is unclear. Do not open a PR with guesses.

## PR body must include
- `Closes #[issue number]`
- Summary of changes (2–5 sentences)
- Files changed
- Verification steps run
