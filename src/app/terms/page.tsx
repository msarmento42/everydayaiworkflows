export const metadata = {
  title: 'Terms of Use - Everyday AI Workflows',
  description: 'Terms of use for Everyday AI Workflows, including content use, external links, affiliate disclosures, and limitations of liability.',
  alternates: {
    canonical: 'https://everydayaiworkflows.com/terms',
  },
  openGraph: {
    title: 'Terms of Use - Everyday AI Workflows',
    description: 'Terms of use for Everyday AI Workflows, including content use, external links, affiliate disclosures, and limitations of liability.',
    url: 'https://everydayaiworkflows.com/terms',
    siteName: 'Everyday AI Workflows',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)',
        color: '#fff',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto', paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1.25rem', color: '#00d4ff' }}>Terms of Use</h1>

        <div style={{ lineHeight: '1.8', color: '#d1d5db' }}>
          <p style={{ marginBottom: '1rem' }}>Last updated: August 2026</p>

          <h2 style={{ fontSize: '1.25rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Use of this site</h2>
          <p style={{ marginBottom: '1rem' }}>
            Everyday AI Workflows is provided for informational and educational purposes. By using this site,
            you agree to use the content lawfully and in a way that does not interfere with the site, its
            infrastructure, or other users.
          </p>

          <h2 style={{ fontSize: '1.25rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>No professional advice</h2>
          <p style={{ marginBottom: '1rem' }}>
            The material on this site is not legal, financial, tax, compliance, employment, or cybersecurity
            advice. AI tools change quickly, and your specific situation may require professional review before
            you rely on an output, workflow, or vendor recommendation.
          </p>

          <h2 style={{ fontSize: '1.25rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Content ownership</h2>
          <p style={{ marginBottom: '1rem' }}>
            Unless otherwise noted, the written content on this site is owned by Everyday AI Workflows. You
            may reference or quote short excerpts with attribution and a link back to the original page. Do
            not republish full articles, prompt libraries, or commercial pages without permission.
          </p>

          <h2 style={{ fontSize: '1.25rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>External links and affiliate relationships</h2>
          <p style={{ marginBottom: '1rem' }}>
            This site links to third-party tools, services, and documentation. Some of those links may be
            affiliate links, which means we may earn a commission if you sign up or make a purchase at no
            extra cost to you. External sites operate under their own terms and privacy policies.
          </p>

          <h2 style={{ fontSize: '1.25rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Accuracy and updates</h2>
          <p style={{ marginBottom: '1rem' }}>
            We try to keep pricing, feature summaries, and workflow guidance current, but we do not guarantee
            that every page is complete, current, or error-free at all times. Vendors change plans, models,
            and limits frequently. Use the contact page if you spot something outdated.
          </p>

          <h2 style={{ fontSize: '1.25rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Limitation of liability</h2>
          <p style={{ marginBottom: '1rem' }}>
            Everyday AI Workflows is provided on an &quot;as is&quot; basis without warranties of any kind.
            We are not liable for losses, damages, or business impacts that result from using the site,
            relying on a workflow, or purchasing a third-party tool discussed here.
          </p>

          <h2 style={{ fontSize: '1.25rem', color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>Contact</h2>
          <p style={{ marginBottom: '1rem' }}>
            Questions about these terms can be sent to{' '}
            <a href="mailto:everydayaiworkflows@gmail.com" style={{ color: '#00d4ff' }}>
              everydayaiworkflows@gmail.com
            </a>
            .
          </p>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
