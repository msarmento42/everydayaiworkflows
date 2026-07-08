import AffiliateDisclosure from '../components/AffiliateDisclosure';

export const metadata = {
  title: 'Best AI Tools by Role (2026) - Freelancers, Sales, Marketing, Agencies',
  description: 'Choose the best AI tools for your actual job: freelancers, sales teams, marketers, creators, agencies, small businesses, and operators.',
};

const roleStacks = [
  {
    role: 'Freelancers',
    outcome: 'Win work, deliver faster, and keep client context organized.',
    tools: [
      ['Notion AI', 'Client notes, deliverables, content calendars, and reusable project templates.', 'https://affiliate.notion.so/everydayaiworkflows'],
      ['Claude Pro', 'Long-form drafting, client strategy docs, proposals, and research synthesis.', 'https://claude.ai'],
      ['Make.com', 'Automate invoice reminders, client onboarding, and handoff checklists.', 'https://www.make.com/en/register?pc=msarmento42'],
    ],
    workflow: 'Capture every client call in Notion, summarize next actions with AI, draft deliverables in Claude, then use Make to trigger follow-ups and invoice reminders.',
  },
  {
    role: 'Sales Teams',
    outcome: 'Personalize outreach and follow-up without writing from scratch every time.',
    tools: [
      ['ChatGPT Plus', 'Account research, objection handling, call prep, and email drafts.', 'https://chat.openai.com'],
      ['Make.com', 'Route CRM events into follow-up drafts and Slack alerts.', 'https://www.make.com/en/register?pc=msarmento42'],
      ['Perplexity Pro', 'Fast prospect and company research with source links.', 'https://perplexity.ai'],
    ],
    workflow: 'Use Perplexity for account research, ChatGPT for personalized outreach drafts, and Make to trigger follow-up prompts from CRM stage changes.',
  },
  {
    role: 'Marketing Teams',
    outcome: 'Turn campaigns into reusable systems instead of one-off content pushes.',
    tools: [
      ['Jasper AI', 'Campaign copy, landing pages, email sequences, and brand voice consistency.', 'https://jasper.ai'],
      ['Surfer SEO', 'Briefs, keyword coverage, and on-page optimization.', 'https://surferseo.com'],
      ['Notion AI', 'Editorial calendars, creative briefs, and repurposing workflows.', 'https://affiliate.notion.so/everydayaiworkflows'],
    ],
    workflow: 'Plan campaign angles in Notion, draft variations in Jasper, optimize SEO pages with Surfer, then store winning prompts for reuse.',
  },
  {
    role: 'Content Creators',
    outcome: 'Plan, script, repurpose, and distribute without burning out.',
    tools: [
      ['Claude Pro', 'Long-form scripts, outlines, and thoughtful rewrites.', 'https://claude.ai'],
      ['Descript', 'Transcript-based editing, clips, and quick cleanup.', 'https://descript.com'],
      ['Midjourney', 'Thumbnails, concept art, and visual direction.', 'https://midjourney.com'],
    ],
    workflow: 'Draft a content outline in Claude, record once, edit and clip in Descript, then create thumbnails or visual concepts in Midjourney.',
  },
  {
    role: 'Agency Owners',
    outcome: 'Standardize delivery so every client does not require a custom process.',
    tools: [
      ['Make.com', 'Client intake, reporting, publishing, and handoff automations.', 'https://www.make.com/en/register?pc=msarmento42'],
      ['Notion AI', 'Client portals, SOPs, project documentation, and internal knowledge base.', 'https://affiliate.notion.so/everydayaiworkflows'],
      ['ChatGPT Plus', 'Drafts, research, campaign variants, and QA checklists.', 'https://chat.openai.com'],
    ],
    workflow: 'Build one client operating system in Notion, connect repeatable steps with Make, and use ChatGPT to generate first drafts inside that process.',
  },
  {
    role: 'Small Business Owners',
    outcome: 'Save time on admin, marketing, customer support, and local visibility.',
    tools: [
      ['ChatGPT Plus', 'Local service pages, FAQs, policies, hiring docs, and customer replies.', 'https://chat.openai.com'],
      ['Canva', 'Social posts, flyers, menus, lead magnets, and simple brand assets.', 'https://canva.com'],
      ['Make.com', 'Lead capture, form routing, review requests, and simple CRM updates.', 'https://www.make.com/en/register?pc=msarmento42'],
    ],
    workflow: 'Use ChatGPT for customer-facing drafts, Canva for quick assets, and Make to connect website forms to your inbox, CRM, and follow-up reminders.',
  },
];

const quickRoutes = [
  ['Solo operator', 'Freelancers', 'Win clients and deliver faster without hiring.'],
  ['Revenue team', 'Sales Teams', 'Research accounts and personalize follow-up.'],
  ['Content engine', 'Marketing Teams', 'Turn campaign work into reusable systems.'],
  ['Client services', 'Agency Owners', 'Standardize delivery and reporting.'],
];

export default function AIToolsByRolePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <main style={{ maxWidth: '980px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "AI Tools by Role",
      "item": "https://example.com/ai-tools-by-role"
    }
  ]
}`}
        </script>
        <AffiliateDisclosure />
        <p style={{ color: '#00d4ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.78rem', marginBottom: '0.75rem' }}>Role-based buying guide</p>
        <h1 style={{ fontSize: '2.4rem', lineHeight: 1.15, margin: '0 0 1rem' }}>Best AI Tools by Role</h1>
        <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '720px', marginBottom: '2rem' }}>
          The best AI tool is the one that fits your actual workflow. Start with your role, choose the smallest useful stack, then add automation only after the manual workflow is stable.
        </p>

        <section style={{ border: '1px solid rgba(0,212,255,0.22)', background: 'rgba(0,212,255,0.06)', borderRadius: '12px', padding: '1rem', marginBottom: '2rem' }}>
          <p style={{ color: '#67e8f9', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.72rem', fontWeight: 700, margin: '0 0 0.75rem' }}>Fast start</p>
          <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))' }}>
            {quickRoutes.map(([label, role, description]) => (
              <a key={role} href={`#${role.toLowerCase().replace(/[^a-z]+/g, '-')}`} style={{ color: '#fff', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.85rem', background: 'rgba(255,255,255,0.035)' }}>
                <strong style={{ display: 'block', marginBottom: '0.3rem' }}>{label}</strong>
                <span style={{ color: '#cbd5e1', fontSize: '0.86rem', lineHeight: 1.45 }}>{description}</span>
              </a>
            ))}
          </div>
        </section>

        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginBottom: '3rem' }}>
          {roleStacks.map((stack) => (
            <a key={stack.role} href={`#${stack.role.toLowerCase().replace(/[^a-z]+/g, '-')}`} style={{
              color: '#fff',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '10px',
              padding: '1rem',
            }}>
              <strong>{stack.role}</strong>
              <p style={{ color: '#94a3b8', margin: '0.35rem 0 0', fontSize: '0.9rem', lineHeight: 1.5 }}>{stack.outcome}</p>
            </a>
          ))}
        </div>

        {roleStacks.map((stack) => (
          <section key={stack.role} id={stack.role.toLowerCase().replace(/[^a-z]+/g, '-')} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.55rem', marginBottom: '0.4rem' }}>{stack.role}</h2>
            <p style={{ color: '#94a3b8', marginTop: 0, lineHeight: 1.6 }}>{stack.outcome}</p>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', margin: '1.25rem 0' }}>
              {stack.tools.map(([name, description, url]) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer sponsored" style={{
                  color: '#fff',
                  textDecoration: 'none',
                  border: '1px solid rgba(0,212,255,0.2)',
                  background: 'rgba(0,212,255,0.055)',
                  borderRadius: '10px',
                  padding: '1rem',
                }}>
                  <strong style={{ color: '#00d4ff' }}>{name}</strong>
                  <p style={{ color: '#cbd5e1', margin: '0.45rem 0 0', fontSize: '0.9rem', lineHeight: 1.5 }}>{description}</p>
                </a>
              ))}
            </div>
            <div style={{ border: '1px solid rgba(124,58,237,0.3)', background: 'rgba(124,58,237,0.11)', borderRadius: '10px', padding: '1rem' }}>
              <strong>Workflow to copy:</strong>
              <p style={{ color: '#d1d5db', margin: '0.35rem 0 0', lineHeight: 1.6 }}>{stack.workflow}</p>
              <a href="/workflows/automation" style={{ display: 'inline-block', color: '#00d4ff', marginTop: '0.75rem', fontWeight: 700, textDecoration: 'none' }}>Build the automation workflow →</a>
            </div>
          </section>
        ))}

        <section style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.4rem' }}>How to choose without overbuying</h2>
          <ol style={{ color: '#d1d5db', lineHeight: 1.8 }}>
            <li>Pick one core assistant for thinking and drafting.</li>
            <li>Add one workspace where outputs become reusable templates.</li>
            <li>Add automation only for workflows you repeat every week.</li>
            <li>Track time saved, output quality, and paid conversions before adding more tools.</li>
          </ol>
          <p style={{ color: '#94a3b8' }}>For category-by-category recommendations, see the <a href="/ai-tools" style={{ color: '#00d4ff' }}>AI tools guide</a>. For implementation patterns, start with the <a href="/workflows/automation" style={{ color: '#00d4ff' }}>automation workflows hub</a>.</p>
        </section>
      </main>
    </div>
  );
}
