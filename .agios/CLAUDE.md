# CLAUDE.md — everydayaiworkflows (project-specific)

Extends global AGIOS CLAUDE.md in agios-control. Read that first.

## Project context
- **URL:** everydayaiworkflows.com
- **Type:** AI productivity blog (income site — affiliate)
- **Stack:** Next.js 15 App Router, TypeScript
- **Deploy:** Vercel

## What this site does
Blog covering AI workflows, tools, and productivity for everyday users.
Revenue: affiliate links to AI tools and productivity software.

## Key files
- `src/app/page.tsx` — homepage
- `src/app/blog/` — blog listing and individual posts
- `src/app/components/` — shared components including CommentSection
- `BACKLOG.md` — human's list of pending ideas (read for context, do not edit)
- `BLOG_PLAN.md` — human's content plan (read for context, do not edit)
- `IMPROVEMENTS.md` — human's improvement list (read for context, do not edit)

## Success metrics to track
- Organic sessions per week
- Blog posts published (total count)
- Affiliate link clicks

## What Claude should prioritize for this project
1. New blog post pages on high-traffic AI workflow topics
2. Internal linking between related posts
3. Meta tags and SEO improvements on existing posts
4. Affiliate link placement in relevant content

## Notes
- Blog posts are folder-based pages, not JSON files (unlike strongpasswordgenerator.dev)
- The existing BACKLOG.md, BLOG_PLAN.md, and IMPROVEMENTS.md contain the human's
  prior planning — Claude should read these when planning new issues
