import WorkflowHub from '../WorkflowHub';

export const metadata = {
  title: 'AI Meeting Workflows | Everyday AI Workflows',
  description: 'AI workflows for meeting summaries, CRM notes, customer onboarding, project updates, and follow-up automation.',
  alternates: { canonical: 'https://everydayaiworkflows.com/workflows/meetings' },
};

export default function MeetingWorkflowsPage() {
  return (
    <WorkflowHub
      eyebrow="Workflow hub"
      title="AI Meeting Workflows"
      description="Meetings create value only when decisions, context, and next steps survive afterward. These workflows turn calls, notes, and transcripts into action."
      primaryTool="Claude for summaries, Notion AI for decision logs, and Make.com for follow-up automation"
      posts={[
        { slug: 'ai-meeting-summarizer-workflow', title: 'AI Meeting Summarizer Workflow', summary: 'Convert transcripts into summaries, decisions, risks, and action items.' },
        { slug: 'building-ai-powered-crm-notes', title: 'Building AI-Powered CRM Notes', summary: 'Turn sales calls into structured CRM updates and follow-up data.' },
        { slug: 'ai-powered-customer-onboarding', title: 'AI-Powered Customer Onboarding', summary: 'Personalize onboarding emails, setup guides, and activation tracking.' },
        { slug: 'ai-for-project-management', title: 'AI for Project Management', summary: 'Generate task breakdowns, retrospectives, and status updates faster.' },
      ]}
    />
  );
}
