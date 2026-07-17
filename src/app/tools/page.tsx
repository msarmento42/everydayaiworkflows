export const metadata = {
  title: 'AI Tools Directory - Everyday AI Workflows',
  description: 'Discover the best free AI tools to boost your productivity. Curated list of AI tools for writing, coding, productivity, and more.',
  alternates: { canonical: 'https://everydayaiworkflows.com/tools' },
  openGraph: {
    title: 'AI Tools Directory - Everyday AI Workflows',
    description: 'Discover the best free AI tools to boost your productivity. Curated list of AI tools for writing, coding, productivity, and more.',
    url: 'https://everydayaiworkflows.com/tools',
    siteName: 'Everyday AI Workflows',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Directory - Everyday AI Workflows',
    description: 'Discover the best free AI tools to boost your productivity. Curated list of AI tools for writing, coding, productivity, and more.',
  },
};

const tools = [
  { name: 'ChatGPT', category: 'Writing', url: 'https://chat.openai.com', description: 'General purpose AI chatbot' },
  { name: 'Claude', category: 'Writing', url: 'https://claude.ai', description: 'AI assistant focused on clarity' },
  { name: 'Gemini', category: 'Writing', url: 'https://gemini.google.com', description: 'Google AI chatbot' },
  { name: 'Perplexity', category: 'Research', url: 'https://perplexity.ai', description: 'AI-powered search engine' },
  { name: 'GitHub Copilot', category: 'Coding', url: 'https://github.com/features/copilot', description: 'AI pair programmer' },
  { name: 'Cursor', category: 'Coding', url: 'https://cursor.sh', description: 'AI-first code editor' },
  { name: 'Midjourney', category: 'Image', url: 'https://midjourney.com', description: 'AI image generation' },
  { name: 'DALL-E', category: 'Image', url: 'https://openai.com/dall-e-3', description: 'OpenAI image generator' },
  { name: 'ElevenLabs', category: 'Audio', url: 'https://elevenlabs.io', description: 'AI voice cloning' },
  { name: 'Murf AI', category: 'Audio', url: 'https://murf.ai', description: 'AI voice generator' },
  { name: 'Notion AI', category: 'Productivity', url: 'https://notion.so', description: 'AI-powered workspace' },
  { name: 'Otter.ai', category: 'Productivity', url: 'https://otter.ai', description: 'Meeting transcription' },
];

const categories = [...new Set(tools.map(t => t.category))];

export default function Tools() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '2rem',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#00d4ff' }}>AI Tools Directory</h1>
        <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>Curated list of the best free AI tools</p>
        
        {categories.map(category => (
          <div key={category} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.3rem', color: '#7c3aed', marginBottom: '1rem' }}>{category}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
              {tools.filter(t => t.category === category).map(tool => (
                <a 
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    textDecoration: 'none',
                    color: '#fff',
                    transition: 'transform 0.2s',
                  }}
                >
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.3rem' }}>{tool.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0 }}>{tool.description}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
        
        <div style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
