import WorkflowHub from '../WorkflowHub';

export const metadata = {
  title: 'AI Automation Workflows | Everyday AI Workflows',
  description: 'AI automation workflows for email triage, invoices, social media scheduling, lead generation, and content calendars.',
  alternates: { canonical: 'https://everydayaiworkflows.com/workflows/automation' },
};

export default function AutomationWorkflowsPage() {
  return (
    <WorkflowHub
      eyebrow="Workflow hub"
      title="AI Automation Workflows"
      description="Automation is where AI starts saving real hours. These workflows combine prompts, routing logic, and no-code tools so repeat tasks happen with less manual effort."
      primaryTool="Make.com for routing, Claude for structured analysis, and Zapier for quick app-to-app automations"
      posts={[
        { slug: 'ai-email-triage-system', title: 'AI Email Triage System', summary: 'Sort, prioritize, and draft email replies with a repeatable AI process.' },
        { slug: 'how-to-automate-tasks-with-make', title: 'Automate Repetitive Tasks with Make.com', summary: 'Build no-code automations that connect AI to everyday business systems.' },
        { slug: 'automating-invoices-with-ai', title: 'Automating Invoices with AI', summary: 'Generate invoices, delivery emails, and payment follow-ups faster.' },
        { slug: 'ai-powered-lead-generation', title: 'AI-Powered Lead Generation', summary: 'Automate prospect research and outreach without losing personalization.' },
      ]}
    />
  );
}
