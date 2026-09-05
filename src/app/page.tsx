import PromptWidget from "./components/PromptWidget";
import MethodStackCTA from "./components/MethodStackCTA";
import EditorialQualityNotice from "./components/EditorialQualityNotice";

const workflowPaths = [
  {
    title: "Inbox triage and follow-up",
    href: "/blog/ai-email-triage-system",
    body: "Turn a noisy inbox into a review queue with clear priorities, draft boundaries, and a human send step.",
  },
  {
    title: "Meeting notes into decisions",
    href: "/blog/ai-meeting-summarizer-workflow",
    body: "Extract decisions and action items from a transcript while preserving uncertainty around owners and dates.",
  },
  {
    title: "Competitor and research monitoring",
    href: "/blog/ai-for-competitor-analysis",
    body: "Compare public sources, separate documented signals from hypotheses, and keep a traceable research brief.",
  },
  {
    title: "Content repurposing",
    href: "/blog/ai-content-repurposing-workflow",
    body: "Adapt one source into channel-specific drafts while checking claims, permissions, and editorial fit before publishing.",
  },
];

export const metadata = {
  title: "Everyday AI Workflows — Evidence-led AI workflows for everyday work",
  description: "Practical, source-aware AI workflow guides and tool recommendations for professionals who want to work smarter without over-automating judgment.",
};

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <main id="main-content" aria-label="Everyday AI Workflows content">
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <header style={{ textAlign: "center", marginBottom: "3rem", paddingTop: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "700", background: "linear-gradient(90deg, #00d4ff, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem" }}>
            Everyday AI Workflows
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "1.1rem" }}>
            Evidence-led AI workflows for everyday work
          </p>
        </header>

        {/* Static intro — rendered server-side for SEO */}
        <section style={{ marginBottom: "2.5rem" }}>
          <p style={{ color: "#d1d5db", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1rem" }}>
            Everyday AI Workflows is a practical resource for professionals, freelancers, and teams who want to improve one repeated job at a time. Choose a bottleneck, use the matching workflow lab, and keep a human review step wherever the output affects people, money, or public work.
          </p>
          <p style={{ color: "#d1d5db", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1rem" }}>
            The guides use source-linked explanations, reproducible fixtures, and explicit limitations instead of promising that automation can replace judgment. Start with the job that is costing you the most attention, then decide whether a reusable implementation asset is worth buying.
          </p>
          <p style={{ color: "#9ca3af", fontSize: "0.95rem", lineHeight: "1.7" }}>
            New here? Use the <a href="/start-here" style={{ color: "#00d4ff" }}>start-here path</a> to choose a workflow, browse the <a href="/blog" style={{ color: "#00d4ff" }}>blog</a> for deeper guides, or explore the <a href="/ai-tools" style={{ color: "#00d4ff" }}>AI tools directory</a> after you know which job you are solving.
          </p>
        </section>

        <section id="choose-a-workflow" aria-labelledby="choose-a-workflow-heading" style={{ marginBottom: "2.5rem" }}>
          <p style={{ color: "#67e8f9", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.78rem", fontWeight: 700, margin: "0 0 0.45rem" }}>Choose one bottleneck</p>
          <h2 id="choose-a-workflow-heading" style={{ color: "#fff", fontSize: "1.6rem", margin: "0 0 0.65rem" }}>Start with the job, not the tool</h2>
          <p style={{ color: "#cbd5e1", lineHeight: 1.7, margin: "0 0 1rem" }}>
            Each path below opens a focused guide with a testable fixture, a matching review checklist, and the next practical step. The examples are labeled when they are synthetic or still awaiting an owner-run observation.
          </p>
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {workflowPaths.map((path) => (
              <a key={path.href} href={path.href} style={{ display: 'block', textDecoration: 'none', color: 'inherit', background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.18)', borderRadius: '12px', padding: '1rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.02rem', margin: '0 0 0.45rem' }}>{path.title}</h3>
                <p style={{ color: '#cbd5e1', lineHeight: 1.6, margin: '0 0 0.65rem', fontSize: '0.92rem' }}>{path.body}</p>
                <span style={{ color: '#67e8f9', fontSize: '0.88rem', fontWeight: 700 }}>Open the workflow lab →</span>
              </a>
            ))}
          </div>
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

        <EditorialQualityNotice
          reviewedOn="September 4, 2026"
          focus="practical workflows, source-aware tool guidance, and human review"
        />

        <MethodStackCTA />

        <PromptWidget />

        <nav style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "3rem", flexWrap: "wrap" }}>
          <a href="/tools" style={{ color: "#9ca3af", textDecoration: "none" }}>Tools</a>
          <a href="/start-here" style={{ color: "#9ca3af", textDecoration: "none" }}>Start Here</a>
          <a href="/blog" style={{ color: "#9ca3af", textDecoration: "none" }}>Blog</a>
          <a href="/about" style={{ color: "#9ca3af", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ color: "#9ca3af", textDecoration: "none" }}>Contact</a>
          <a href="/privacy" style={{ color: "#9ca3af", textDecoration: "none" }}>Privacy</a>
          <a href="/editorial-policy" style={{ color: "#9ca3af", textDecoration: "none" }}>Editorial Policy</a>
          <a href="/terms" style={{ color: "#9ca3af", textDecoration: "none" }}>Terms</a>
        </nav>

        <footer style={{ textAlign: "center", marginTop: "4rem", color: "#cbd5e1", fontSize: "0.9rem" }}>
          <p>Built to help you integrate AI into your daily workflow</p>
        </footer>
        </div>
      </main>
    </div>
  );
}
