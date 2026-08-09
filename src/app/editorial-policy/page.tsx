export const metadata = {
  title: 'Editorial Policy - Everyday AI Workflows',
  description: 'How Everyday AI Workflows researches guides, reviews AI tools, uses affiliate links, and updates recommendations.',
  alternates: {
    canonical: 'https://everydayaiworkflows.com/editorial-policy',
  },
  openGraph: {
    title: 'Editorial Policy - Everyday AI Workflows',
    description: 'How Everyday AI Workflows researches guides, reviews AI tools, uses affiliate links, and updates recommendations.',
    url: 'https://everydayaiworkflows.com/editorial-policy',
    siteName: 'Everyday AI Workflows',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Editorial Policy - Everyday AI Workflows',
    description: 'How Everyday AI Workflows researches guides, reviews AI tools, uses affiliate links, and updates recommendations.',
  },
};

export default function EditorialPolicy() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem',
    }}>
      <div style={{ maxWidth: '840px', margin: '0 auto', paddingTop: '2rem' }}>
        <p style={{ color: '#67e8f9', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          Trust and transparency
        </p>
        <h1 style={{ fontSize: '2.4rem', marginBottom: '1rem', color: '#fff' }}>Editorial Policy</h1>
        <p style={{ color: '#cbd5e1', lineHeight: 1.75, marginBottom: '2rem' }}>
          Everyday AI Workflows publishes practical AI workflow guides, tool comparisons, and prompt libraries for working professionals. The goal is to help readers build useful systems with AI tools, not to chase novelty or publish shallow listicles.
        </p>

        <section id="how-we-evaluate" style={{
          marginBottom: '1.5rem',
          padding: '1.25rem',
          borderRadius: '14px',
          border: '1px solid rgba(0,212,255,0.25)',
          background: 'rgba(0,212,255,0.06)',
        }}>
          <h2 style={{ fontSize: '1.35rem', margin: '0 0 0.75rem', color: '#fff' }}>How we evaluate workflow guides</h2>
          <p style={{ color: '#cbd5e1', lineHeight: 1.7, margin: '0 0 0.9rem' }}>
            Every useful guide should help a reader make a decision, not just repeat a tool&apos;s feature list. Our review process is deliberately explicit so readers can tell what is documented, what is an editorial judgment, and what still needs to be checked for their own situation.
          </p>
          <ol style={{ margin: 0, paddingLeft: '1.35rem', color: '#d1d5db', lineHeight: 1.75 }}>
            <li><strong>Define the decision.</strong> We start with the reader&apos;s role, goal, constraints, budget, and the failure that the workflow is meant to prevent.</li>
            <li><strong>Start with primary documentation.</strong> Product documentation, current pricing pages, security notes, and official help articles are the baseline for capability and plan claims.</li>
            <li><strong>Separate evidence from interpretation.</strong> A documented feature is labeled as documented; a practical recommendation explains the fit and trade-off instead of presenting a universal winner.</li>
            <li><strong>Record the workflow check.</strong> For a repeatable workflow we describe the inputs, expected output, likely failure mode, and the point where a person should review before anything is sent or published.</li>
            <li><strong>Show the limits.</strong> We call out stale or time-sensitive facts, privacy considerations, missing integrations, and cases where a simpler or free option is a better fit.</li>
            <li><strong>Date and correct the page.</strong> Reviews carry a date, and readers can report an outdated claim or broken link through the contact page so the page can be refreshed deliberately.</li>
          </ol>
          <p style={{ color: '#cbd5e1', lineHeight: 1.7, margin: '0.9rem 0 0' }}>
            Some guides are documentation-based explainers rather than hands-on product tests. When we have not performed a hands-on check, we say so; we do not invent test results, customer outcomes, or credentials.
          </p>
        </section>

        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {[
            {
              title: 'How we research',
              body: 'Articles are based on hands-on use, vendor documentation, public pricing and feature information, and the operational reality of how a tool fits into an everyday workflow.',
            },
            {
              title: 'How we recommend tools',
              body: 'Recommendations are based on fit, usability, reliability, pricing, and the specific workflow the reader is trying to improve. A tool can be good in general and still be the wrong recommendation for a specific role or use case.',
            },
            {
              title: 'How affiliate links work',
              body: 'Some outbound links are affiliate links. If you sign up or purchase through those links, we may earn a commission at no extra cost to you. Affiliate relationships do not determine whether a product is included or how it is described.',
            },
            {
              title: 'What we avoid',
              body: 'We avoid fake urgency, generic “best tools” lists with no workflow context, and recommendations made only because a company has an affiliate program. If a free or simpler option is the better fit, we would rather say that directly.',
            },
            {
              title: 'How we update content',
              body: 'Commercial pages and buying guides are reviewed more often than evergreen explainers, especially when pricing, plan limits, or product positioning changes. Reader corrections help us decide what to refresh first.',
            },
            {
              title: 'Corrections and contact',
              body: 'If you spot an outdated claim, broken link, or recommendation that no longer fits the market, use the contact page. We review factual corrections and update pages when needed.',
            },
          ].map((section) => (
            <section
              key={section.title}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px',
                padding: '1.25rem',
              }}
            >
              <h2 style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0', color: '#fff' }}>{section.title}</h2>
              <p style={{ margin: 0, color: '#d1d5db', lineHeight: 1.7 }}>{section.body}</p>
            </section>
          ))}
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(0,212,255,0.2)', background: 'rgba(0,212,255,0.06)' }}>
          <p style={{ margin: 0, color: '#cbd5e1' }}>
            Need to flag an issue? Use the <a href="/contact" style={{ color: '#00d4ff' }}>contact page</a> for corrections, partnership questions, or feedback on a guide.
          </p>
        </div>
      </div>
    </div>
  );
}
