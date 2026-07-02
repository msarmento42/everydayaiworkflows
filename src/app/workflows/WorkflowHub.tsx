import Link from 'next/link';

type HubPost = {
  slug: string;
  title: string;
  summary: string;
};

type WorkflowHubProps = {
  eyebrow: string;
  title: string;
  description: string;
  posts: HubPost[];
  primaryTool: string;
};

export default function WorkflowHub({ eyebrow, title, description, posts, primaryTool }: WorkflowHubProps) {
  const urlSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": title,
            "description": description,
            "url": `https://everydayaiworkflows.com/workflows/${urlSlug}`,
            "mainEntity": posts.map((post) => ({
              "@type": "Article",
              "headline": post.title,
              "url": `https://everydayaiworkflows.com/blog/${post.slug}`,
            })),
          }),
        }}
      />
      <main style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>Back to Blog</Link>
        <p style={{ color: '#7dd3fc', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem', fontWeight: 700, marginTop: '2rem' }}>{eyebrow}</p>
        <h1 style={{ fontSize: '2.6rem', margin: '0.5rem 0 1rem', color: '#fff' }}>{title}</h1>
        <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '760px' }}>{description}</p>

        <section style={{ margin: '2rem 0', padding: '1.25rem', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '1.1rem', margin: '0 0 0.5rem', color: '#fff' }}>Best starting point</h2>
          <p style={{ margin: 0, color: '#a5f3fc' }}>Use {primaryTool} for this cluster, then save the repeatable prompts into your weekly operating system.</p>
        </section>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: 'block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.25rem', color: 'inherit', textDecoration: 'none' }}>
              <h2 style={{ fontSize: '1.15rem', margin: '0 0 0.4rem', color: '#fff' }}>{post.title}</h2>
              <p style={{ margin: 0, color: '#9ca3af', lineHeight: 1.6 }}>{post.summary}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
