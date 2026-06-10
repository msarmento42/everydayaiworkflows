"use client";

import { useState, useEffect } from "react";

const prompts = [
  "Analyze this data and identify the top 3 trends. Explain each trend in one sentence.",
  "Write a cold outreach email to a potential client. Keep it under 150 words.",
  "Summarize this article in exactly 3 bullet points.",
  "Create a weekly meal plan for a vegetarian. Include breakfast, lunch, and dinner.",
  "Explain quantum computing to a 5-year-old.",
  "Write a product description for an eco-friendly water bottle.",
  "Generate 5 interview questions for a software engineer position.",
  "Turn these notes into a polished LinkedIn post.",
  "Create a 30-day fitness challenge for beginners.",
  "Write a thank you note after a job interview.",
  "Explain the pros and cons of remote work in a table format.",
  "Generate a social media content calendar for one week.",
  "Write a persuasive argument for why companies should adopt a 4-day workweek.",
  "Create a book summary of the last non-fiction book you read.",
  "Draft a resignation email that's professional but not burn bridges.",
  "Generate 10 startup name ideas for an AI tutoring app.",
  "Write a peer review feedback for a colleague's presentation.",
  "Create a step-by-step guide to setting up a home office.",
  "Explain the difference between AI, ML, and deep learning.",
  "Write a compelling bio for your personal website.",
];

function getDailyPrompt() {
  const today = new Date();
  const start = new Date(2026, 0, 1);
  const diff = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return { index: diff % prompts.length, prompt: prompts[diff % prompts.length] };
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const { index, prompt: p } = getDailyPrompt();
    setPrompt(p);
    setPromptIndex(index);
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress((scrollTop / docHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getNewPrompt = () => {
    const newIndex = Math.floor(Math.random() * prompts.length);
    setPrompt(prompts[newIndex]);
    setPromptIndex(newIndex);
    setCopied(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: darkMode ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)' : '#f8f9fa', color: darkMode ? '#fff' : '#1a1a3e', fontFamily: 'system-ui, -apple-system, sans-serif', transition: 'background 0.3s, color 0.3s' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, height: '3px', background: 'linear-gradient(90deg, #00d4ff, #7c3aed)', width: readingProgress + '%', zIndex: 1000 }} />
      
      <button onClick={() => setDarkMode(!darkMode)} style={{ position: 'fixed', top: '1rem', right: '1rem', padding: '0.5rem 1rem', background: darkMode ? 'rgba(255,255,255,0.1)' : '#e5e7eb', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.2rem', zIndex: 100 }}>
        {darkMode ? '☀️' : '🌙'}
      </button>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
        <header style={{ textAlign: "center", marginBottom: "3rem", paddingTop: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "700", background: "linear-gradient(90deg, #00d4ff, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem" }}>
            Everyday AI Workflows
          </h1>
          <p style={{ color: darkMode ? "#9ca3af" : "#6b7280", fontSize: "1.1rem" }}>
            Daily AI prompts to boost your productivity
          </p>
        </header>

        {/* Static intro — rendered server-side for SEO */}
        <section style={{ marginBottom: "2.5rem" }}>
          <p style={{ color: darkMode ? "#d1d5db" : "#374151", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1rem" }}>
            Everyday AI Workflows is a practical resource for professionals, freelancers, and teams who want to work smarter with AI. Whether you{"'"}re just getting started with ChatGPT, Claude, or Gemini, or you{"'"}re looking to build more advanced automation pipelines, you{"'"}ll find step-by-step guides, prompt templates, and honest tool recommendations here.
          </p>
          <p style={{ color: darkMode ? "#d1d5db" : "#374151", fontSize: "1.05rem", lineHeight: "1.8", marginBottom: "1rem" }}>
            The site covers writing and editing with AI, automating repetitive tasks with tools like Make.com and Zapier, using AI for data analysis, customer support, content creation, and more. Every guide is written for working professionals — focused on practical application, not theory.
          </p>
          <p style={{ color: darkMode ? "#9ca3af" : "#6b7280", fontSize: "0.95rem", lineHeight: "1.7" }}>
            Browse the <a href="/blog" style={{ color: "#00d4ff" }}>blog</a> for in-depth tutorials, explore the <a href="/ai-tools" style={{ color: "#00d4ff" }}>AI tools directory</a> for curated recommendations, or use the daily prompt below as a starting point for today{"'"}s work.
          </p>
        </section>

        <div style={{ background: darkMode ? "rgba(255, 255, 255, 0.05)" : "#fff", borderRadius: "20px", padding: "2.5rem", border: darkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid #e5e7eb", marginBottom: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <span style={{ background: "linear-gradient(90deg, #00d4ff, #7c3aed)", padding: "0.4rem 1rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "600", color: "#fff" }}>
              Prompt of the Day
            </span>
            <span style={{ color: darkMode ? "#6b7280" : "#9ca3af", fontSize: "0.9rem" }}>
              #{promptIndex + 1} of {prompts.length} • {Math.floor(prompts[promptIndex].split(' ').length / 200) + 1} min read
            </span>
          </div>

          <p style={{ fontSize: "1.4rem", lineHeight: "1.6", marginBottom: "2rem", minHeight: "100px", display: "flex", alignItems: "center" }}>
            {prompt}
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button onClick={copyToClipboard} style={{ background: copied ? "#10b981" : "linear-gradient(90deg, #00d4ff, #7c3aed)", border: "none", padding: "0.8rem 1.5rem", borderRadius: "10px", color: "#fff", fontWeight: "600", cursor: "pointer", fontSize: "1rem" }}>
              {copied ? "✓ Copied!" : "📋 Copy Prompt"}
            </button>
            
            <button onClick={getNewPrompt} style={{ background: darkMode ? "rgba(255, 255, 255, 0.1)" : "#e5e7eb", border: darkMode ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid #d1d5db", padding: "0.8rem 1.5rem", borderRadius: "10px", color: darkMode ? "#fff" : "#1a1a3e", fontWeight: "600", cursor: "pointer", fontSize: "1rem" }}>
              🎲 Random Prompt
            </button>
          </div>
        </div>

        <div style={{ background: "rgba(124, 58, 237, 0.1)", borderRadius: "16px", padding: "2rem", marginBottom: "2rem", border: "1px solid rgba(124, 58, 237, 0.3)", textAlign: "center" }}>
          <h3 style={{ color: "#fff", marginBottom: "0.5rem", fontSize: "1.3rem" }}>📧 Get AI tips weekly</h3>
          <p style={{ color: darkMode ? "#9ca3af" : "#6b7280", marginBottom: "1rem" }}>Get weekly AI tips in your inbox</p>
          <div style={{ display: "flex", gap: "0.5rem", maxWidth: "400px", margin: "0 auto" }}>
            <input type="email" placeholder="Your email" style={{ flex: 1, padding: "0.75rem", borderRadius: "8px", border: "1px solid #374151", background: darkMode ? "#1a1a3e" : "#fff", color: darkMode ? "#fff" : "#1a1a3e" }} />
            <button style={{ padding: "0.75rem 1.5rem", background: "#7c3aed", border: "none", borderRadius: "8px", color: "#fff", fontWeight: "600", cursor: "pointer" }}>Subscribe</button>
          </div>
        </div>

        <nav style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "3rem", flexWrap: "wrap" }}>
          <a href="/tools" style={{ color: darkMode ? "#9ca3af" : "#6b7280", textDecoration: "none" }}>Tools</a>
          <a href="/blog" style={{ color: darkMode ? "#9ca3af" : "#6b7280", textDecoration: "none" }}>Blog</a>
          <a href="/about" style={{ color: darkMode ? "#9ca3af" : "#6b7280", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ color: darkMode ? "#9ca3af" : "#6b7280", textDecoration: "none" }}>Contact</a>
          <a href="/privacy" style={{ color: darkMode ? "#9ca3af" : "#6b7280", textDecoration: "none" }}>Privacy</a>
        </nav>

        <footer style={{ textAlign: "center", marginTop: "4rem", color: darkMode ? "#4b5563" : "#9ca3af", fontSize: "0.9rem" }}>
          <p>Built to help you integrate AI into your daily workflow</p>
        </footer>
      </div>
    </div>
  );
}
