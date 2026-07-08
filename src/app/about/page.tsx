export const metadata = {
  title: 'About - Everyday AI Workflows',
  description: 'Everyday AI Workflows is written by Marcus Sarmento, a product and operations professional helping teams integrate AI into their daily work.',
};

export default function About() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#00d4ff' }}>About Everyday AI Workflows</h1>

        <div style={{ lineHeight: '1.8', color: '#d1d5db', fontSize: '1.1rem' }}>

          {/* Author bio */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #00d4ff, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>
              M
            </div>
            <div>
              <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '0 0 0.25rem 0' }}>Marcus Sarmento</h2>
              <p style={{ color: '#00d4ff', fontSize: '0.9rem', margin: '0 0 0.75rem 0' }}>Founder · Product &amp; Operations</p>
              <p style={{ margin: 0, fontSize: '1rem', color: '#d1d5db' }}>
                I{"'"}ve spent the last several years in product and operations roles, and I started seriously using AI tools in my daily workflow in 2023. What began as personal experimentation with ChatGPT and Claude turned into a habit of systematically testing and documenting every workflow I could automate or improve. This site is where I share what actually works.
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Why I Built This</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Most AI content online is either too abstract ("AI will change everything!") or too shallow (listicles of 50 tools with no real guidance). I wanted a resource that shows the actual workflow — what prompt to use, which tool handles which task best, and how to build habits that stick.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Every guide on this site comes from real use. I{"'"}ve personally used the tools I write about — ChatGPT, Claude, Gemini, Make.com, Zapier, Midjourney, and dozens of others — across writing, data analysis, email management, customer support, content creation, and operations work.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>What You{"'"}ll Find Here</h2>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#fff' }}>Prompt templates</strong> — tested prompts for writing, analysis, coding, and communication tasks</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#fff' }}>Tool comparisons</strong> — honest breakdowns of which AI tools are worth paying for and which aren{"'"}t</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#fff' }}>Workflow guides</strong> — step-by-step tutorials for automating specific tasks with AI</li>
            <li style={{ marginBottom: '0.75rem' }}><strong style={{ color: '#fff' }}>AI tools directory</strong> — a curated, categorized list of tools for every use case</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Transparency</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Some links on this site are affiliate links. If you sign up for a tool through one of my links, I may earn a commission at no extra cost to you. I only recommend tools I{"'"}ve personally used and found genuinely useful. My editorial opinions are not influenced by affiliate relationships.
          </p>

          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: '2rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#fff', fontSize: '1rem' }}>Who this is for</h3>
              <p style={{ margin: 0, color: '#d1d5db', fontSize: '0.95rem', lineHeight: 1.6 }}>Professionals, freelancers, operators, creators, and small teams who want practical AI systems, not abstract thought pieces.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#fff', fontSize: '1rem' }}>How we choose tools</h3>
              <p style={{ margin: 0, color: '#d1d5db', fontSize: '0.95rem', lineHeight: 1.6 }}>Fit, usability, pricing, and workflow leverage matter more than hype. Read the <a href="/editorial-policy" style={{ color: '#00d4ff' }}>editorial policy</a>.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#fff', fontSize: '1rem' }}>What this site is not</h3>
              <p style={{ margin: 0, color: '#d1d5db', fontSize: '0.95rem', lineHeight: 1.6 }}>We do not provide legal, tax, or compliance advice. The site is educational and workflow-focused.</p>
            </div>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'rgba(0,212,255,0.08)', borderRadius: '12px', border: '1px solid rgba(0,212,255,0.2)' }}>
            <p style={{ margin: 0, fontSize: '1rem' }}>
              Questions or feedback? Reach out via the <a href="/contact" style={{ color: '#00d4ff' }}>contact page</a>.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
