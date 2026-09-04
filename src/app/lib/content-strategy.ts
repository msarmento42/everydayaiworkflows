export type CanonicalArticle = {
  slug: string;
  focus: string;
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
  },
  {
    slug: "ai-productivity-stack-2026",
    focus: "choosing a small, practical AI productivity stack",
  },
  {
    slug: "ai-for-competitor-analysis",
    focus: "turning source material into a decision-ready competitor brief",
  },
  {
    slug: "ai-for-data-analysis-beginners",
    focus: "beginner-friendly, review-gated spreadsheet analysis",
  },
  {
    slug: "best-ai-tools-for-freelancers-2026",
    focus: "task-fit AI support for client work",
  },
  {
    slug: "ai-for-customer-support",
    focus: "human-reviewed customer-support workflows",
  },
  {
    slug: "ai-meeting-summarizer-workflow",
    focus: "meeting notes, decisions, and follow-up routing",
  },
  {
    slug: "ai-content-repurposing-workflow",
    focus: "reviewable content repurposing systems",
  },
  {
    slug: "ai-tools-for-content-creators",
    focus: "content-creation tools chosen by workflow fit",
  },
  {
    slug: "best-ai-writing-assistants",
    focus: "writing-tool comparisons with a reproducible checklist",
  },
  {
    slug: "chatgpt-vs-claude-2026",
    focus: "task-fit comparison of general-purpose AI assistants",
  },
  {
    slug: "ai-for-grant-writing",
    focus: "source-aware grant-writing workflows for lean teams",
  },
] as const;

export const canonicalArticleSlugs = canonicalArticles.map(({ slug }) => slug);

const canonicalSlugSet = new Set(canonicalArticleSlugs);

export function isCanonicalArticle(slug: string): boolean {
  return canonicalSlugSet.has(slug);
}

