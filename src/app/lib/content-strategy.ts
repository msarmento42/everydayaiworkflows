export type CanonicalArticle = {
  slug: string;
  focus: string;
  publishedOn: string;
  updatedOn: string;
};

/**
 * The small set of articles that currently represents the site's editorial
 * promise. Other routes remain available while they are reviewed and
 * upgraded; they are intentionally not promoted in the public index or
 * sitemap until they meet the same standard.
 */
export const canonicalArticles: readonly CanonicalArticle[] = [
  {
    slug: "ai-email-triage-system",
    focus: "reviewable email triage and drafting",
    publishedOn: "2026-05-08",
    updatedOn: "2026-09-04",
  },
  {
    slug: "ai-productivity-stack-2026",
    focus: "choosing a small, practical AI productivity stack",
    publishedOn: "2026-06-18",
    updatedOn: "2026-09-04",
  },
  {
    slug: "ai-for-competitor-analysis",
    focus: "turning source material into a decision-ready competitor brief",
    publishedOn: "2026-07-08",
    updatedOn: "2026-09-04",
  },
  {
    slug: "ai-for-data-analysis-beginners",
    focus: "beginner-friendly, review-gated spreadsheet analysis",
    publishedOn: "2026-05-21",
    updatedOn: "2026-09-04",
  },
  {
    slug: "best-ai-tools-for-freelancers-2026",
    focus: "task-fit AI support for client work",
    publishedOn: "2026-06-12",
    updatedOn: "2026-09-04",
  },
  {
    slug: "ai-for-customer-support",
    focus: "human-reviewed customer-support workflows",
    publishedOn: "2026-06-21",
    updatedOn: "2026-09-04",
  },
  {
    slug: "ai-meeting-summarizer-workflow",
    focus: "meeting notes, decisions, and follow-up routing",
    publishedOn: "2026-06-17",
    updatedOn: "2026-09-04",
  },
  {
    slug: "ai-content-repurposing-workflow",
    focus: "reviewable content repurposing systems",
    publishedOn: "2026-06-16",
    updatedOn: "2026-09-04",
  },
  {
    slug: "ai-tools-for-content-creators",
    focus: "content-creation tools chosen by workflow fit",
    publishedOn: "2026-05-09",
    updatedOn: "2026-09-04",
  },
  {
    slug: "best-ai-writing-assistants",
    focus: "writing-tool comparisons with a reproducible checklist",
    publishedOn: "2026-06-11",
    updatedOn: "2026-09-04",
  },
  {
    slug: "chatgpt-vs-claude-2026",
    focus: "task-fit comparison of general-purpose AI assistants",
    publishedOn: "2026-03-12",
    updatedOn: "2026-09-04",
  },
  {
    slug: "ai-for-grant-writing",
    focus: "source-aware grant-writing workflows for lean teams",
    publishedOn: "2026-07-17",
    updatedOn: "2026-09-04",
  },
] as const;

export const canonicalArticleSlugs = canonicalArticles.map(({ slug }) => slug);

const canonicalSlugSet = new Set(canonicalArticleSlugs);

export function isCanonicalArticle(slug: string): boolean {
  return canonicalSlugSet.has(slug);
}
