import WorkflowHub from '../WorkflowHub';

export const metadata = {
  title: 'AI Writing Workflows | Everyday AI Workflows',
  description: 'Practical AI writing workflows for newsletters, social media, nonfiction books, technical docs, and content repurposing.',
  alternates: { canonical: 'https://everydayaiworkflows.com/workflows/writing' },
};

export default function WritingWorkflowsPage() {
  return (
    <WorkflowHub
      eyebrow="Workflow hub"
      title="AI Writing Workflows"
      description="Use AI to plan, draft, edit, repurpose, and publish better writing without turning your voice into generic output. Start with the workflow closest to your weekly publishing bottleneck."
      primaryTool="Claude or ChatGPT for drafting, Jasper for brand-consistent campaigns, and Notion AI for organizing drafts"
      posts={[
        { slug: 'ai-for-newsletter-writing', title: 'AI for Newsletter Writing', summary: 'Build a repeatable weekly newsletter process from idea capture to final edit.' },
        { slug: 'ai-writing-for-nonfiction-books', title: 'AI Writing for Nonfiction Books', summary: 'Turn rough ideas into outlines, chapters, and revision passes without losing your voice.' },
        { slug: 'ai-writing-for-technical-docs', title: 'AI for Writing Technical Documentation', summary: 'Create clearer API docs, runbooks, and user guides with structured prompts.' },
        { slug: 'ai-content-repurposing-workflow', title: 'AI Content Repurposing Workflow', summary: 'Turn one source asset into multiple platform-native posts and scripts.' },
      ]}
    />
  );
}
