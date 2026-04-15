"use client";

import { useState } from 'react';


const allPosts = [
  { slug: 'ai-prompts-for-job-interviews', title: 'Land Your Dream Job: 12 AI Prompts to Ace Every Interview Stage', excerpt: 'From researching companies to answering behavioral questions, these 12 AI prompts walk you through every stage of interview prep.', date: '2026-04-15', category: 'AI Prompts', readingTime: '8 min' },
  { slug: 'ai-email-triage-system', title: 'Build an AI Email Triage System That Clears Your Inbox in 30 Minutes', excerpt: 'Stop treating your inbox like a to-do list. Build an AI-powered triage system using simple prompts and free tools.', date: '2026-04-15', category: 'Automation', readingTime: '7 min' },
  { slug: '10-chatgpt-prompts-sales', title: '10 ChatGPT Prompts for Sales Professionals', excerpt: 'Boost your sales game with these prompts.', date: '2026-03-15', category: 'AI Prompts', readingTime: '5 min' },
  { slug: 'save-10-hours-week-ai', title: 'How I Save 10 Hours Per Week with AI', excerpt: 'Real strategies to reclaim 10 hours.', date: '2026-03-11', category: 'Productivity', readingTime: '6 min' },
  { slug: 'chatgpt-vs-claude-2026', title: 'ChatGPT vs Claude: Which Should You Use?', excerpt: 'An in-depth comparison.', date: '2026-03-12', category: 'AI Tools', readingTime: '8 min' },
  { slug: 'add-quiz-component', title: 'Add Quiz Component', excerpt: 'Interactive quiz features.', date: '2026-03-14', category: 'Features', readingTime: '3 min' },
  { slug: 'boost-productivity-with-ai', title: 'Boost Productivity with AI', excerpt: 'AI tips for productivity.', date: '2026-03-14', category: 'Productivity', readingTime: '5 min' },
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
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Home</a>
        </div>
      </div>
    </div>
  );
}
