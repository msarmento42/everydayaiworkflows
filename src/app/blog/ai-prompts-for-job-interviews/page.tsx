import postData from '../../../posts/ai-prompts-for-job-interviews.json';

export const metadata = {
  title: postData.title,
  description: postData.excerpt,
};

export default function BlogPost() {
  const htmlContent = postData.content
    .replace(/<h2>/g, '<h2 style="font-size:1.4rem;color:#fff;margin-top:2.5rem;margin-bottom:0.75rem;">')
    .replace(/<pre><code>/g, '<pre style="background:rgba(0,0,0,0.4);border:1px solid #374151;border-radius:8px;padding:1.25rem;overflow-x:auto;margin:1.25rem 0;"><code style="font-size:0.85rem;color:#e5e7eb;font-family:monospace;white-space:pre-wrap;">')
    .replace(/<\/code><\/pre>/g, '</code></pre>')
    .replace(/<p>/g, '<p style="margin-bottom:1rem;">')
    .replace(/<strong>/g, '<strong style="color:#fff;">');

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: '#7c3aed', background: 'rgba(124,58,237,0.2)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{postData.category}</span>
          <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>⏱️ {postData.readingTime}</span>
          <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{postData.date}</span>
        </div>
        <h1 style={{ fontSize: '2.2rem', marginTop: '0.75rem', marginBottom: '1rem', lineHeight: 1.3 }}>{postData.title}</h1>
        <p style={{ color: '#9ca3af', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.7 }}>{postData.excerpt}</p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {postData.tags.map((tag) => (
            <span key={tag} style={{ fontSize: '0.7rem', color: '#00d4ff', background: 'rgba(0,212,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '20px', border: '1px solid rgba(0,212,255,0.2)' }}>{tag}</span>
          ))}
        </div>
        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '1rem', margin: '1.5rem 0' }}>
          <p style={{ fontWeight: 600, color: '#1e3a8a', margin: 0 }}>Tools used in this workflow:</p>
          <ul style={{ marginTop: '0.5rem', marginBottom: 0, color: '#1e40af', display: 'grid', gap: '0.25rem' }}>
            <li>✍️ <a href="https://www.jasper.ai/?fpr=everydayai" target="_blank" rel="noopener noreferrer sponsored" style={{ color: 'inherit', textDecoration: 'underline' }}>Jasper AI</a> — AI writing assistant for long-form content</li>
            <li>📋 <a href="https://affiliate.notion.so/everydayaiworkflows" target="_blank" rel="noopener noreferrer sponsored" style={{ color: 'inherit', textDecoration: 'underline' }}>Notion AI</a> — All-in-one workspace with AI writing built in</li>
          </ul>
        </div>
        <div style={{ lineHeight: '1.85', fontSize: '1.05rem', color: '#d1d5db' }} dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem', margin: '1.5rem 0' }}>
          <p style={{ fontSize: '0.875rem', color: '#4b5563', margin: 0 }}>
            <strong>Want to automate this workflow?</strong> We recommend{' '}
            <a href="https://www.jasper.ai/?fpr=everydayai" target="_blank" rel="noopener noreferrer sponsored" style={{ color: '#2563eb', textDecoration: 'underline' }}>Jasper AI</a>{' '}
            for AI-assisted writing and{' '}
            <a href="https://affiliate.notion.so/everydayaiworkflows" target="_blank" rel="noopener noreferrer sponsored" style={{ color: '#2563eb', textDecoration: 'underline' }}>Notion AI</a>{' '}
            for managing your workflow systems.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #374151' }}>
          <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Share:</span>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(postData.title)}&url=https://everydayaiworkflows.com/blog/ai-prompts-for-job-interviews`} target="_blank" rel="noopener noreferrer" style={{ color: '#1da1f2', fontSize: '0.85rem', textDecoration: 'none' }}>Twitter</a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://everydayaiworkflows.com/blog/ai-prompts-for-job-interviews`} target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', fontSize: '0.85rem', textDecoration: 'none' }}>LinkedIn</a>
        </div>
        <div style={{ marginTop: '2.5rem', padding: '2rem', background: 'rgba(124,58,237,0.1)', borderRadius: '12px', border: '1px solid rgba(124,58,237,0.3)' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.5rem', marginTop: 0 }}>📧 Get AI workflow tips weekly</h3>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1rem' }}>Practical prompts and automation ideas — no fluff.</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="email" placeholder="Your email" style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #374151', background: '#1a1a3e', color: '#fff' }} />
            <button style={{ padding: '0.75rem 1.5rem', background: '#7c3aed', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: '600', cursor: 'pointer' }}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
