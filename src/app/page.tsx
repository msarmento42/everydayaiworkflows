import PromptWidget from "./components/PromptWidget";

export const metadata = {
  title: "Everyday AI Workflows — Daily AI Prompts & Tools",
  description: "Practical AI workflow guides, daily prompts, and tool recommendations for professionals who want to work smarter.",
};

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <header style={{ textAlign: "center", marginBottom: "3rem", paddingTop: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "700", background: "linear-gradient(90deg, #00d4ff, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem" }}>
            Everyday AI Workflows
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem" }}>
            Daily AI prompts to boost your productivity
          </p>
        </header>

        {/* Static intro — rendered server-side for SEO */}
        <section style={{ marginBottom: "2.5rem" }}>
          <p style={{ color: "#d1d5db", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1rem" }}>
            Everyday AI Workflows is a practical resource for professionals, freelancers, and teams who want to work smarter with AI. Whether you{"\'"}re just getting started with ChatGPT, Claude, or Gemini, or you{"\'"}re looking to build more advanced automation pipelines, you{"\'"}ll find step-by-step guides, prompt templates, and honest tool recommendations here.
          </p>
          <p style={{ color: "#d1d5db", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1rem" }}>
            The site covers writing and editing with AI, automating repetitive tasks with tools like Make.com and Zapier, using AI for data analysis, customer support, content creation, and more. Every guide is written for working professionals — focused on practical application, not theory.
          </p>
          <p style={{ color: "#9ca3af", fontSize: "0.95rem", lineHeight: "1.7" }}>
            Browse the <a href="/blog" style={{ color: "#00d4ff" }}>blog</a> for in-depth tutorials, explore the <a href="/ai-tools" style={{ color: "#00d4ff" }}>AI tools directory</a> for curated recommendations, or use the daily prompt below as a starting point for today{"\'"}s work.
          </p>
        </section>

        <section style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginBottom: '2.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem' }}>
            <strong style={{ color: '#fff', display: 'block', marginBottom: '0.35rem' }}>What you&apos;ll find here</strong>
            <p style={{ color: '#9ca3af', margin: 0, lineHeight: 1.6, fontSize: '0.92rem' }}>Role-based tool stacks, implementation guides, prompt libraries, and real workflow examples for day-to-day work.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem' }}>
            <strong style={{ color: '#fff', display: 'block', marginBottom: '0.35rem' }}>How tools are chosen</strong>
            <p style={{ color: '#9ca3af', margin: 0, lineHeight: 1.6, fontSize: '0.92rem' }}>Recommendations are based on workflow fit and practical use. Read the <a href="/editorial-policy" style={{ color: '#00d4ff' }}>editorial policy</a>.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1rem' }}>
            <strong style={{ color: '#fff', display: 'block', marginBottom: '0.35rem' }}>Need to reach us?</strong>
            <p style={{ color: '#9ca3af', margin: 0, lineHeight: 1.6, fontSize: '0.92rem' }}>Use the <a href="/contact" style={{ color: '#00d4ff' }}>contact page</a> for corrections, ideas, and partnership questions.</p>
          </div>
        </section>

        <PromptWidget />

        <nav style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "3rem", flexWrap: "wrap" }}>
          <a href="/tools" style={{ color: "#9ca3af", textDecoration: "none" }}>Tools</a>
          <a href="/blog" style={{ color: "#9ca3af", textDecoration: "none" }}>Blog</a>
          <a href="/about" style={{ color: "#9ca3af", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ color: "#9ca3af", textDecoration: "none" }}>Contact</a>
          <a href="/privacy" style={{ color: "#9ca3af", textDecoration: "none" }}>Privacy</a>
          <a href="/editorial-policy" style={{ color: "#9ca3af", textDecoration: "none" }}>Editorial Policy</a>
        </nav>

        <footer style={{ textAlign: "center", marginTop: "4rem", color: "#4b5563", fontSize: "0.9rem" }}>
          <p>Built to help you integrate AI into your daily workflow</p>
        </footer>
      </div>
    </div>
  );
}
