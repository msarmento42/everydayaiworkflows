export const metadata = {
  title: '404 — Page Not Found | Everyday AI Workflows',
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <div style={{ maxWidth: '520px', textAlign: 'center' as const }}>
        <div style={{
          fontSize: '6rem',
          fontWeight: 800,
          color: 'rgba(0,212,255,0.15)',
          lineHeight: 1,
          marginBottom: '0.5rem',
          letterSpacing: '-0.04em',
        }}>
          404
        </div>

        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: '0.75rem',
          color: '#fff',
        }}>
          Page not found
        </h1>

        <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
          The workflow you&apos;re looking for may have moved or no longer exists.
        </p>
        <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
          Looking for something specific? Try browsing our blog.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem', alignItems: 'center' }}>
          <a
            href="/"
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '280px',
              padding: '12px 0',
              borderRadius: '9px',
              background: 'rgba(0,212,255,0.15)',
              border: '1px solid rgba(0,212,255,0.35)',
              color: '#00d4ff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              textAlign: 'center' as const,
            }}
          >
            ← Back to Home
          </a>

          <a
            href="/blog"
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '280px',
              padding: '12px 0',
              borderRadius: '9px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#d1d5db',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              textAlign: 'center' as const,
            }}
          >
            Browse the Blog
          </a>

          <a
            href="/ai-tools"
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '280px',
              padding: '12px 0',
              borderRadius: '9px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#d1d5db',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              textAlign: 'center' as const,
            }}
          >
            Explore AI Tools
          </a>
        </div>
      </div>
    </div>
  );
}
