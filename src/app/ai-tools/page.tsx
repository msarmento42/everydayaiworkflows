import AffiliateDisclosure from '../components/AffiliateDisclosure';

export const metadata = {
  title: 'Best AI Tools (2026) — Curated Recommendations | Everyday AI Workflows',
  description: 'The best AI tools for writing, research, automation, image generation, and coding in 2026. Curated recommendations with honest reviews and affiliate links.',
};

const categories = [
  {
    name: "Writing & Content",
    description: "AI writing assistants that save hours per week",
    tools: [
      {
        name: "Jasper AI",
        tagline: "Best for marketing teams and long-form content",
        features: [
          "50+ content templates (blog posts, ads, emails)",
          "Brand voice training — learns your style",
          "Team collaboration with shared workspaces",
        ],
        url: "https://jasper.ai",
        badge: "Top Pick",
        badgeColor: "#00d4ff",
      },
      {
        name: "Writesonic",
        tagline: "Best for SEO-optimized articles at scale",
        features: [
          "Factual, citation-backed articles",
          "Built-in SEO optimizer and keyword research",
          "Article writer, landing pages, and ad copy",
        ],
        url: "https://writesonic.com",
        badge: "SEO Focus",
        badgeColor: "#7c3aed",
      },
    ],
  },
  {
    name: "Research & Analysis",
    description: "AI tools that find and synthesize information fast",
    tools: [
      {
        name: "Perplexity AI",
        tagline: "Best AI-powered search engine — cites sources",
        features: [
          "Real-time web search with cited answers",
          "Follow-up questions in conversational threads",
          "Pro mode unlocks GPT-4 and Claude models",
        ],
        url: "https://perplexity.ai",
        badge: "Most Useful",
        badgeColor: "#00d4ff",
      },
    ],
  },
  {
    name: "Automation & Workflows",
    description: "Connect your apps and automate repetitive tasks",
    tools: [
      {
        name: "Make.com",
        tagline: "Best no-code automation platform for AI workflows",
        features: [
          "1,000+ app integrations including GPT, Claude, Slack",
          "Visual workflow builder — no code required",
          "Free tier handles 1,000 operations/month",
        ],
        url: "https://www.make.com/en/register?pc=msarmento42",
        badge: "Best Free Tier",
        badgeColor: "#00d4ff",
      },
      {
        name: "Notion AI",
        tagline: "Best AI-enhanced workspace for teams",
        features: [
          "AI writing, summarization, and Q&A inside Notion",
          "Databases, docs, and projects in one tool",
          "Auto-fill tables and generate action items from meetings",
        ],
        url: "https://notion.so",
        badge: "All-in-One",
        badgeColor: "#7c3aed",
      },
    ],
  },
  {
    name: "Image Generation",
    description: "Create original images from text descriptions",
    tools: [
      {
        name: "Midjourney",
        tagline: "Best quality AI image generation for creatives",
        features: [
          "Photorealistic and artistic styles",
          "Version 6.1 has dramatically improved text rendering",
          "Active Discord community with prompt inspiration",
        ],
        url: "https://midjourney.com",
        badge: "Best Quality",
        badgeColor: "#00d4ff",
      },
      {
        name: "DALL-E 3",
        tagline: "Best for quick iterations inside ChatGPT",
        features: [
          "Integrated directly into ChatGPT Plus",
          "Follows complex instructions more accurately than v2",
          "No separate subscription if you have ChatGPT Plus",
        ],
        url: "https://openai.com/dall-e-3",
        badge: "Easiest Start",
        badgeColor: "#7c3aed",
      },
    ],
  },
  {
    name: "Coding",
    description: "AI pair programmers that write, explain, and debug code",
    tools: [
      {
        name: "GitHub Copilot",
        tagline: "Best inline code suggestions in your existing IDE",
        features: [
          "Works in VS Code, JetBrains, Neovim, and more",
          "Multi-file context understands your whole codebase",
          "$10/month includes chat + code completion",
        ],
        url: "https://github.com/features/copilot",
        badge: "Industry Standard",
        badgeColor: "#00d4ff",
      },
      {
        name: "Cursor",
        tagline: "Best AI-first editor for building entire features",
        features: [
          "Composer mode writes entire files from a prompt",
          "Codebase-aware — references your existing code",
          "Built on VS Code — zero migration friction",
        ],
        url: "https://cursor.sh",
        badge: "Power Users",
        badgeColor: "#7c3aed",
      },
    ],
  },
  {
    name: "All-in-One Assistants",
    description: "Versatile AI assistants for daily use",
    tools: [
      {
        name: "Claude Pro",
        tagline: "Best for long documents, analysis, and nuanced writing",
        features: [
          "200K token context — analyze entire codebases or books",
          "Artifacts: create functional apps, charts, and documents",
          "Consistently best-in-class reasoning on hard problems",
        ],
        url: "https://claude.ai",
        badge: "Top Tier",
        badgeColor: "#00d4ff",
      },
      {
        name: "ChatGPT Plus",
        tagline: "Best all-around assistant with the widest toolset",
        features: [
          "GPT-4o, DALL-E 3, code interpreter, and web browsing",
          "Custom GPTs for specialized workflows",
          "Voice mode for hands-free use on mobile",
        ],
        url: "https://chat.openai.com",
        badge: "Most Popular",
        badgeColor: "#7c3aed",
      },
    ],
  },
];

export default function AITools() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '3rem 2rem 1rem' }}>
        <AffiliateDisclosure />
        <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem', color: '#00d4ff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Curated 2026
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
          Best AI Tools
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          Tested and curated recommendations across writing, research, automation, images, and code.
          Every tool listed has been evaluated for real-world usefulness — not just hype.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '3rem' }}>
          {categories.map(c => (
            <a
              key={c.name}
              href={`#${c.name.toLowerCase().replace(/[^a-z]+/g, '-')}`}
              style={{
                padding: '5px 14px',
                borderRadius: '99px',
                border: '1px solid rgba(0,212,255,0.3)',
                color: '#00d4ff',
                fontSize: '0.8rem',
                textDecoration: 'none',
                background: 'rgba(0,212,255,0.06)',
              }}
            >
              {c.name}
            </a>
          ))}
        </div>

        {categories.map(cat => (
          <div
            key={cat.name}
            id={cat.name.toLowerCase().replace(/[^a-z]+/g, '-')}
            style={{ marginBottom: '3.5rem' }}
          >
            <div style={{ marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.25rem' }}>{cat.name}</h2>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>{cat.description}</p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1rem',
            }}>
              {cat.tools.map(tool => (
                <div
                  key={tool.name}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column' as const,
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, marginBottom: '0.2rem' }}>{tool.name}</h3>
                      <p style={{ fontSize: '0.82rem', color: '#9ca3af', margin: 0 }}>{tool.tagline}</p>
                    </div>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      padding: '3px 8px',
                      borderRadius: '99px',
                      background: `${tool.badgeColor}22`,
                      color: tool.badgeColor,
                      whiteSpace: 'nowrap' as const,
                      flexShrink: 0,
                    }}>
                      {tool.badge}
                    </span>
                  </div>

                  <ul style={{ margin: 0, paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column' as const, gap: '0.35rem' }}>
                    {tool.features.map(f => (
                      <li key={f} style={{ fontSize: '0.82rem', color: '#d1d5db', lineHeight: 1.5 }}>{f}</li>
                    ))}
                  </ul>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener sponsored"
                    style={{
                      marginTop: 'auto',
                      display: 'block',
                      textAlign: 'center' as const,
                      padding: '8px 0',
                      borderRadius: '7px',
                      background: 'rgba(0,212,255,0.12)',
                      border: '1px solid rgba(0,212,255,0.25)',
                      color: '#00d4ff',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    Try {tool.name} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{
          background: 'rgba(0,212,255,0.06)',
          border: '1px solid rgba(0,212,255,0.2)',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          marginBottom: '3rem',
        }}>
          <p style={{ margin: 0, color: '#a5f3fc', fontSize: '0.9rem' }}>
            {'💡 '}
            <strong>Building an AI workflow?</strong>
            {' Check out our '}
            <a href="/blog" style={{ color: '#00d4ff' }}>step-by-step guides</a>
            {' — real workflows using these tools, ready to copy.'}
          </p>
        </div>

        <div style={{ borderTop: '1px solid #1f2937', paddingTop: '1.5rem', marginBottom: '2rem' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
