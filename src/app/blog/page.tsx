"
  { slug: 'vpn-for-ai-researchers', title: 'VPN for AI Researchers: Stay Secure While Accessing AI Tools Globally', excerpt: 'Why AI researchers and remote workers need a VPN — and how to pick one that keeps your prompts, API keys, and research data private.', date: '2026-06-11', category: 'AI Tools', readingTime: '7 min' },
  { slug: 'ai-writing-for-nonfiction-books', title: 'AI Writing for Nonfiction Books: From Rough Idea to Finished Draft in Half the Time', excerpt: 'A practical AI-assisted workflow for nonfiction authors — outline structure, chapter drafting, research synthesis, and editing passes that cut writing time in half without losing your voice.', date: '2026-06-11', category: 'Productivity', readingTime: '9 min' },
];

const categories = ['All', 'AI Prompts', 'AI Tools', 'Productivity', 'Automation', 'Tutorials'];

export default function Blog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#00d4ff', marginBottom: '0.5rem' }}>Blog</h1>
        <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>{allPosts.length} articles</p>
        
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #374151', background: 'rgba(255,255,255,0.05)', color: '#fff' }} />
          <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #374151', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          {filteredPosts.map(post => (
            <a key={post.slug} href={`/blog/${post.slug}`} style={{ display: 'block', background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '12px', textDecoration: 'none', color: 'inherit' }}>
              <span style={{ fontSize: '0.7rem', color: '#7c3aed', background: 'rgba(124,58,237,0.15)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>{post.category}</span>
              <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0', color: '#fff' }}>{post.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0 }}>{post.excerpt}</p>
            </a>
          ))}
        </div>
        
        <div style={{ marginTop: '3rem' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>Ã¢ÂÂ Back to Home</a>
        </div>
      </div>
    </div>
  );
}
