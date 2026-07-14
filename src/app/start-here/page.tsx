import Link from 'next/link';

export const metadata = {
  title: 'Start Here - Everyday AI Workflows',
  description: 'A practical guide to using Everyday AI Workflows: choose a role, pick one repeatable AI workflow, and build a simple weekly automation habit.',
  alternates: {
    canonical: 'https://everydayaiworkflows.com/start-here',
  },
};

const paths = [
  {
    title: 'If you write or publish content',
    href: '/workflows/writing',
    body: 'Start with one reusable writing workflow: outline, draft, edit, repurpose, and publish. The goal is not more AI output; it is a repeatable editorial process.',
  },
  {
    title: 'If meetings consume your week',
    href: '/workflows/meetings',
    body: 'Build a meeting capture system that turns transcripts into decisions, follow-ups, CRM notes, and next-step summaries.',
  },
  {
    title: 'If research takes too long',
    href: '/workflows/research',
    body: 'Use AI to map a topic, compare sources, extract claims, and turn messy notes into a clear brief without skipping verification.',
  },
  {
    title: 'If repetitive admin work is the bottleneck',
    href: '/workflows/automation',
    body: 'Connect your inbox, forms, docs, spreadsheets, and task tools with simple no-code automation patterns.',
  },
];

const weeklySystem = [
  'Pick one workflow you repeat at least twice a week.',
  'Write down the current manual steps before adding AI.',
  'Replace only the slowest step first: drafting, summarizing, formatting, routing, or follow-up.',
  'Keep a human review step for anything public, legal, financial, or customer-facing.',
  'Measure the result after five uses: time saved, quality, and whether the workflow was easier to repeat.',
];

export default function StartHerePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '2rem' }}>
      <main style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '2rem' }}>
        <p style={{ color: '#67e8f9', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.78rem', fontWeight: 700 }}>Reader guide</p>
        <h1 style={{ fontSize: '2.6rem', lineHeight: 1.15, margin: '0.6rem 0 1rem' }}>Start with one useful AI workflow</h1>
        <p style={{ color: '#cbd5e1', fontSize: '1.08rem', lineHeight: 1.75, maxWidth: '760px' }}>
          Everyday AI Workflows is organized around practical systems, not one-off prompts. The fastest way to get value is to choose one repeated task, make the current process visible, and use AI to improve a specific handoff.
        </p>

        <section style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', margin: '2rem 0' }}>
          {paths.map((path) => (
            <Link key={path.href} href={path.href} style={{ display: 'block', textDecoration: 'none', color: 'inherit', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1.15rem' }}>
              <h2 style={{ color: '#fff', fontSize: '1.08rem', margin: '0 0 0.55rem' }}>{path.title}</h2>
              <p style={{ color: '#cbd5e1', lineHeight: 1.65, margin: 0, fontSize: '0.95rem' }}>{path.body}</p>
            </Link>
          ))}
        </section>

        <section style={{ background: 'rgba(0,212,255,0.07)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '14px', padding: '1.4rem', marginBottom: '2rem' }}>
          <h2 style={{ margin: '0 0 0.85rem', color: '#fff' }}>A simple weekly implementation system</h2>
          <ol style={{ color: '#d1d5db', lineHeight: 1.8, paddingLeft: '1.4rem', margin: 0 }}>
            {weeklySystem.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.5rem' }}>Best first read</h2>
            <p style={{ color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>Start with <Link href="/blog/ai-email-triage-system" style={{ color: '#00d4ff' }}>AI email triage</Link> if you want a concrete workflow with obvious time savings.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.5rem' }}>Best tool page</h2>
            <p style={{ color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>Use <Link href="/ai-tools-by-role" style={{ color: '#00d4ff' }}>AI tools by role</Link> before buying another subscription.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.5rem' }}>How we review</h2>
            <p style={{ color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>Read the <Link href="/editorial-policy" style={{ color: '#00d4ff' }}>editorial policy</Link> for sourcing, updates, and affiliate disclosure.</p>
          </div>
        </section>

        <nav style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.5rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
          <Link href="/" style={{ color: '#00d4ff' }}>Home</Link>
          <Link href="/blog" style={{ color: '#00d4ff' }}>Blog</Link>
          <Link href="/ai-tools" style={{ color: '#00d4ff' }}>AI Tools</Link>
          <Link href="/contact" style={{ color: '#00d4ff' }}>Contact</Link>
        </nav>
      </main>
    </div>
  );
}
