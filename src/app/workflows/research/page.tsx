import WorkflowHub from '../WorkflowHub';

export const metadata = {
  title: 'AI Research Workflows | Everyday AI Workflows',
  description: 'AI workflows for market research, academic research, image analysis, legal review, and data analysis.',
};

export default function ResearchWorkflowsPage() {
  return (
    <WorkflowHub
      eyebrow="Workflow hub"
      title="AI Research Workflows"
      description="Research workflows work best when AI helps map the question, process sources, compare evidence, and stress-test conclusions instead of inventing facts."
      primaryTool="Claude for long-context synthesis, ChatGPT for exploration, and GPT-4o for image or document analysis"
      posts={[
        { slug: 'using-claude-for-research', title: 'Using Claude for Research', summary: 'Map topics, process sources, and convert notes into usable deliverables.' },
        { slug: 'chatgpt-for-market-research', title: 'ChatGPT for Market Research', summary: 'Compress competitor analysis, personas, and market synthesis into a repeatable workflow.' },
        { slug: 'ai-for-academic-research', title: 'AI for Academic Research', summary: 'Accelerate literature review while keeping claims and citations under control.' },
        { slug: 'gpt-4o-for-image-analysis', title: 'GPT-4o Image Analysis', summary: 'Extract data, critique visuals, and analyze screenshots or charts.' },
      ]}
    />
  );
}
