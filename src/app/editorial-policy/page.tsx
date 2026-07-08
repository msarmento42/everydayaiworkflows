export const metadata = {
  title: 'Editorial Policy - Everyday AI Workflows',
  description: 'How Everyday AI Workflows researches guides, reviews AI tools, uses affiliate links, and updates recommendations.',
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
