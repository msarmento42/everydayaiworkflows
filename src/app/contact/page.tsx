export const metadata = {
  title: 'Contact - Everyday AI Workflows',
  description: 'Get in touch with Everyday AI Workflows. We would love to hear from you!',
};

export default function Contact() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#00d4ff' }}>Contact Us</h1>
        
        <p style={{ color: '#d1d5db', marginBottom: '2rem', lineHeight: '1.6' }}>
          Have questions, suggestions, corrections, or partnership inquiries? We review messages manually and use reader feedback to improve guides.
        </p>
        
        <div style={{ 
          background: 'rgba(255,255,255,0.05)', 
          padding: '2rem', 
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <p style={{ marginBottom: '1rem', color: '#9ca3af' }}>Email:</p>
          <a href="mailto:everydayaiworkflows@gmail.com" 
             style={{ 
               color: '#00d4ff', 
               fontSize: '1.2rem',
               textDecoration: 'none'
             }}>
            everydayaiworkflows@gmail.com
          </a>
        </div>

        <div style={{ marginTop: '1.5rem', display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 style={{ fontSize: '1rem', margin: '0 0 0.45rem 0', color: '#fff' }}>Best reasons to contact us</h2>
            <ul style={{ margin: 0, paddingLeft: '1rem', color: '#d1d5db', lineHeight: 1.7, fontSize: '0.92rem' }}>
              <li>Outdated product claims or broken links</li>
              <li>Suggestions for new workflow guides</li>
              <li>Partnership and affiliate questions</li>
              <li>Corrections to pricing or feature details</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 style={{ fontSize: '1rem', margin: '0 0 0.45rem 0', color: '#fff' }}>Before you email</h2>
            <p style={{ margin: 0, color: '#d1d5db', lineHeight: 1.7, fontSize: '0.92rem' }}>
              For account, billing, or subscription support with a specific AI tool, contact that provider directly first. We review tools and workflows but do not provide product support on their behalf.
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
