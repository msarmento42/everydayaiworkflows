"use client";

import { useState } from 'react';
import AffiliateDisclosure from "../../components/AffiliateDisclosure";
import NewsletterCapture from "../components/NewsletterCapture";

const postsData: Record<string, { title: string; category: string; date: string; readingTime: string; sections: string[] }> = {
  '10-chatgpt-prompts-sales': { title: '10 ChatGPT Prompts for Sales Professionals', category: 'AI Prompts', date: '2026-03-15', readingTime: '5 min', sections: ['Introduction', 'The Prompts', 'Conclusion'] },
  'save-10-hours-week-ai': { title: 'How I Save 10 Hours Per Week with AI', category: 'Productivity', date: '2026-03-11', readingTime: '6 min', sections: ['My Routine', 'The Results'] },
};

function AffiliateTopCallout() {
  return (
    <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '1rem', margin: '1.5rem 0' }}>
      <p style={{ fontWeight: 600, color: '#1e3a8a', margin: 0 }}>Tools used in this workflow:</p>
      <ul style={{ marginTop: '0.5rem', marginBottom: 0, color: '#1e40af', display: 'grid', gap: '0.25rem' }}>
        <li>✍️ <a href="https://www.jasper.ai/?fpr=everydayai" target="_blank" rel="noopener noreferrer sponsored" style={{ color: 'inherit', textDecoration: 'underline' }}>Jasper AI</a> — AI writing assistant for long-form content</li>
        <li>📋 <a href="https://affiliate.notion.so/everydayaiworkflows" target="_blank" rel="noopener noreferrer sponsored" style={{ color: 'inherit', textDecoration: 'underline' }}>Notion AI</a> — All-in-one workspace with AI writing built in</li>
      </ul>
    </div>
  );
}

function AffiliateBottomCallout() {
  return (
    <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem', margin: '1.5rem 0' }}>
      <p style={{ fontSize: '0.875rem', color: '#4b5563', margin: 0 }}>
        <strong>Want to automate this workflow?</strong> We recommend{' '}
        <a href="https://www.jasper.ai/?fpr=everydayai" target="_blank" rel="noopener noreferrer sponsored" style={{ color: '#2563eb', textDecoration: 'underline' }}>Jasper AI</a>{' '}
        for AI-assisted writing and{' '}
        <a href="https://affiliate.notion.so/everydayaiworkflows" target="_blank" rel="noopener noreferrer sponsored" style={{ color: '#2563eb', textDecoration: 'underline' }}>Notion AI</a>{' '}
        for managing your workflow systems.
      </p>
    </div>
  );
}

function CommentSection() {
  const [comments, setComments] = useState([
    { name: "Alex", text: "Great article! Really helped me with my sales workflow.", date: "2 hours ago" },
    { name: "Jordan", text: "Thanks for sharing these prompts!", date: "5 hours ago" },
  ]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');

  return (
    <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #374151' }}>
      <h3 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.3rem' }}>💬 Comments ({comments.length})</h3>
      <div style={{ marginBottom: '2rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px' }}>
        <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '0.75rem', marginBottom: '0.75rem', borderRadius: '8px', border: '1px solid #374151', background: '#1a1a3e', color: '#fff' }} />
        <textarea placeholder="Write a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} rows={3} style={{ width: '100%', padding: '0.75rem', marginBottom: '0.75rem', borderRadius: '8px', border: '1px solid #374151', background: '#1a1a3e', color: '#fff', resize: 'vertical' }} />
        <button onClick={() => { if(name && newComment) { setComments([{ name, text: newComment, date: "Just now" }, ...comments]); setName(''); setNewComment(''); }}} style={{ padding: '0.75rem 1.5rem', background: '#7c3aed', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: '600', cursor: 'pointer' }}>Post Comment</button>
      </div>
      {comments.map((comment, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: '600', color: '#fff' }}>{comment.name}</span>
            <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{comment.date}</span>
          </div>
          <p style={{ color: '#d1d5db', margin: 0 }}>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const slug = params?.slug || 'sample-post';
  const post = postsData[slug] || { title: slug.replace(/-/g, ' '), category: 'Blog', date: '2026-03-15', readingTime: '5 min', sections: ['Overview'] };
  const showAffiliateCallouts = slug === '10-chatgpt-prompts-sales';
  
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '2rem' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post?.title ?? "Everyday AI Workflows",
              "datePublished": post?.date ?? "",
              "author": { "@type": "Organization", "name": "Everyday AI Workflows" },
              "publisher": {
                "@type": "Organization",
                "name": "Everyday AI Workflows",
                "url": "https://everydayaiworkflows.com"
              },
              "url": `https://everydayaiworkflows.com/blog/${slug}`
            })
          }}
        />
        <a href="/blog" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Blog</a>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#7c3aed', background: 'rgba(124,58,237,0.2)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{post.category}</span>
          <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>⏱️ {post.readingTime}</span>
        </div>
        <h1 style={{ fontSize: '2.2rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{post.title}</h1>
        <div style={{ color: '#9ca3af', marginBottom: '2rem' }}>{post.date}</div>
        <AffiliateDisclosure />
        
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1rem' }}>📋 Table of Contents</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {post.sections.map((section, i) => (
              <li key={i} style={{ marginBottom: '0.5rem' }}>
                <span style={{ color: '#00d4ff', fontSize: '0.9rem' }}>{i + 1}. {section}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button onClick={() => window.print()} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', color: '#fff', cursor: 'pointer', marginBottom: '1rem' }}>
          🖨️ Print / Save as PDF
        </button>
        
        {showAffiliateCallouts && <AffiliateTopCallout />}
        
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#d1d5db' }}>
          {post.sections.map((section, i) => (
            <div key={i} style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #374151' }}>
              <h2 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>{section}</h2>
              <p>Content for {section}...</p>
            </div>
          ))}
        </div>
        
        {showAffiliateCallouts && <AffiliateBottomCallout />}
        
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
          <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Share:</span>
          <span style={{ color: '#1da1f2', fontSize: '0.85rem' }}>Twitter</span>
          <span style={{ color: '#0077b5', fontSize: '0.85rem' }}>LinkedIn</span>
        </div>
        
        <div className="mt-16 border-t pt-10"><NewsletterCapture /></div>

        <CommentSection />
      </div>
    </div>
  );
}
