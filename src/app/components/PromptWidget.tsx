"use client";

import { useState, useEffect } from "react";
import NewsletterCapture from "../blog/components/NewsletterCapture";

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
  "Draft a resignation email that\'s professional but not burn bridges.",
  "Generate 10 startup name ideas for an AI tutoring app.",
  "Write a peer review feedback for a colleague\'s presentation.",
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

export default function PromptWidget() {
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
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, height: '3px', background: 'linear-gradient(90deg, #00d4ff, #7c3aed)', width: readingProgress + '%', zIndex: 1000 }} />

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{ position: 'fixed', top: '1rem', right: '1rem', padding: '0.5rem 1rem', background: darkMode ? 'rgba(255,255,255,0.1)' : '#e5e7eb', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.2rem', zIndex: 100 }}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      <div style={{ background: darkMode ? 'rgba(255, 255, 255, 0.05)' : '#fff', borderRadius: '20px', padding: '2.5rem', border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e5e7eb', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span style={{ background: 'linear-gradient(90deg, #00d4ff, #7c3aed)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', color: '#fff' }}>
            Prompt of the Day
          </span>
          <span style={{ color: darkMode ? '#6b7280' : '#9ca3af', fontSize: '0.9rem' }}>
            #{promptIndex + 1} of {prompts.length} &bull; {Math.floor(prompts[promptIndex]?.split(' ').length / 200) + 1} min read
          </span>
        </div>

        <p style={{ fontSize: '1.4rem', lineHeight: '1.6', marginBottom: '2rem', minHeight: '100px', display: 'flex', alignItems: 'center', color: darkMode ? '#fff' : '#1a1a3e' }}>
          {prompt}
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={copyToClipboard} style={{ background: copied ? '#10b981' : 'linear-gradient(90deg, #00d4ff, #7c3aed)', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '10px', color: '#fff', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}>
            {copied ? '✓ Copied!' : 'Copy Prompt'}
          </button>
          <button onClick={getNewPrompt} style={{ background: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#e5e7eb', border: darkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid #d1d5db', padding: '0.8rem 1.5rem', borderRadius: '10px', color: darkMode ? '#fff' : '#1a1a3e', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}>
            🎲 Random Prompt
          </button>
        </div>
      </div>

      <NewsletterCapture darkMode={darkMode} source="homepage" title="Get AI tips weekly" description="Get weekly AI tips in your inbox." />
    </>
  );
}
