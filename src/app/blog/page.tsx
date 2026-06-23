"use client";

import Link from 'next/link';
import { useState } from 'react';

const allPosts = [
{ slug: '10-chatgpt-prompts-sales', title: '10 ChatGPT Prompts for Sales Professionals', excerpt: 'Boost your sales game with these prompts.', date: '2026-03-15', category: 'AI Prompts', readingTime: '5 min' },
{ slug: 'save-10-hours-week-ai', title: 'How I Save 10 Hours Per Week with AI', excerpt: 'Real strategies to reclaim 10 hours.', date: '2026-03-11', category: 'Productivity', readingTime: '6 min' },
{ slug: 'chatgpt-vs-claude-2026', title: 'ChatGPT vs Claude: Which Should You Use?', excerpt: 'An in-depth comparison.', date: '2026-03-12', category: 'AI Tools', readingTime: '8 min' },
{ slug: 'ai-email-triage-system', title: 'Build an AI Email Triage System: Zero Inbox in Under 10 Minutes', excerpt: 'Cut your daily email time to under 10 minutes with AI-powered triage, automated sorting, and draft generation workflows.', date: '2026-05-08', category: 'Automation', readingTime: '8 min' },
{ slug: 'notion-ai-workflow-guide', title: 'The Complete Notion AI Workflow Guide: From Raw Notes to Decisions', excerpt: 'Five practical Notion AI patterns for meeting notes, brain dumps, decision logs, research synthesis, and stakeholder updates.', date: '2026-05-08', category: 'Productivity', readingTime: '8 min' },
{ slug: 'claude-ai-prompts-for-productivity', title: '10 Claude AI Prompts That Will Transform Your Workday', excerpt: 'Ten specific, copy-paste-ready Claude prompts for morning planning, email triage, meeting prep, deep work, and daily wrap-ups.', date: '2026-05-09', category: 'AI Prompts', readingTime: '8 min' },
{ slug: 'chatgpt-vs-claude-comparison', title: 'ChatGPT vs Claude: Which AI Assistant Is Right for You?', excerpt: 'A head-to-head comparison of writing quality, coding, research, and personality with a clear verdict for different use cases.', date: '2026-05-09', category: 'AI Tools', readingTime: '9 min' },
{ slug: 'how-to-automate-tasks-with-make', title: 'How to Automate Repetitive Tasks with Make.com (No Code Required)', excerpt: 'Three real automation workflows you can build in under an hour: email summarization, form routing, and weekly report generation.', date: '2026-05-09', category: 'Automation', readingTime: '10 min' },
{ slug: 'ai-tools-for-content-creators', title: 'The Best AI Tools for Content Creators in 2026', excerpt: 'A complete breakdown of the best AI tools for ideation, writing, visuals, repurposing, and distribution with specific recommendations for each stage.', date: '2026-05-09', category: 'AI Tools', readingTime: '9 min' },
{ slug: 'best-ai-writing-assistants', title: 'Best AI Writing Assistants in 2026: Tested and Ranked', excerpt: 'Six AI writing tools tested across five tasks: Claude, ChatGPT, Jasper, Writesonic, Copy.ai, and Grammarly AI ranked and compared.', date: '2026-05-09', category: 'AI Tools', readingTime: '10 min' },
{ slug: 'ai-prompts-for-social-media', title: '50 AI Prompts for Social Media That Actually Get Engagement', excerpt: '50 specific, copy-paste-ready prompts for LinkedIn, Twitter, Instagram, and content repurposing organized by platform and goal.', date: '2026-05-09', category: 'AI Prompts', readingTime: '11 min' },
{ slug: 'daily-ai-workflow-morning-routine', title: 'The 20-Minute AI Morning Routine That Saves 2 Hours a Day', excerpt: 'A four-step AI-assisted morning routine that front-loads your thinking and frees up your day.', date: '2026-05-09', category: 'Productivity', readingTime: '8 min' },
{ slug: 'ai-prompts-for-job-interviews', title: '15 AI Prompts That Will Get You the Job: Interview Prep from First Round to Offer', excerpt: 'Copy-paste-ready AI prompts covering every stage of interview prep: research, behavioral stories, mock interviews, salary negotiation, and follow-up.', date: '2026-05-13', category: 'AI Prompts', readingTime: '9 min' },
{ slug: 'chatgpt-for-market-research', title: 'ChatGPT for Market Research: A Practical Workflow That Replaces Hours of Manual Work', excerpt: 'A step-by-step AI workflow for competitor analysis, customer personas, market sizing, and qualitative research synthesis compressed from days to hours.', date: '2026-05-13', category: 'Tutorials', readingTime: '9 min' },
{ slug: 'ai-tools-for-freelancers', title: "The Freelancer's AI Stack: 7 Tools That Replace a Full-Time Assistant", excerpt: 'Seven AI tools that give solo freelancers the leverage of a full-time assistant: writing, automation, meetings, and visual delivery.', date: '2026-05-15', category: 'AI Tools', readingTime: '8 min' },
{ slug: 'voice-to-text-ai-workflows', title: 'Voice-to-Text AI Workflows: Capture Ideas Hands-Free and Never Lose a Thought', excerpt: 'Build a voice capture pipeline using Whisper, Otter.ai, Notion AI, and Make.com to automatically transcribe and structure ideas from anywhere.', date: '2026-05-15', category: 'Productivity', readingTime: '7 min' },
{ slug: 'ai-for-project-management', title: 'How to Use AI for Project Management: Workflows That Actually Work', excerpt: 'Five AI-powered workflows that eliminate status-update overhead, auto-generate task breakdowns, and run smarter retrospectives starting today.', date: '2025-05-17', category: 'Productivity', readingTime: '7 min' },
{ slug: 'ai-meeting-summarizer-workflow', title: 'Build an AI Meeting Summarizer Workflow: Save Hours Every Week', excerpt: 'Turn raw meeting transcripts into structured summaries, decision logs, and action items automatically with a fully automated Make.com pipeline.', date: '2025-05-17', category: 'Automation', readingTime: '6 min' },
{ slug: 'ai-for-youtube-script-writing', title: 'How to Use AI to Write YouTube Scripts That Actually Keep Viewers Watching', excerpt: 'A practical AI scripting workflow from hook generation to beat sheets, retention loops, and SEO-aware titles that cuts script time in half.', date: '2025-05-19', category: 'AI Tools', readingTime: '7 min' },
{ slug: 'ai-for-seo-optimization', title: 'How to Use AI for SEO Optimization: A Practical Workflow That Actually Ranks', excerpt: 'A five-step AI workflow for keyword research, SERP-informed outlining, section-by-section writing, on-page auditing, and automated internal linking.', date: '2025-05-20', category: 'SEO', readingTime: '7 min' },
{ slug: 'ai-for-email-marketing', title: 'AI for Email Marketing: Write Better Campaigns in Half the Time', excerpt: 'Prompts and workflows for writing high-converting emails, generating A/B subject line variants, segmenting copy, building drip sequences, and automating the send pipeline.', date: '2025-05-20', category: 'Automation', readingTime: '7 min' },
{ slug: 'ai-tools-for-hr-teams', title: 'AI Tools for HR Teams: Cut Admin Time and Focus on the Work That Matters', excerpt: 'How HR teams are using AI to draft job descriptions, build interview guides, automate onboarding FAQs, and improve performance review quality.', date: '2025-05-19', category: 'Productivity', readingTime: '8 min' },
{ slug: 'ai-tools-for-sales-teams', title: 'AI Tools for Sales Teams: Close More Deals Without Working More Hours', excerpt: 'Practical AI workflows for prospect research, cold outreach, follow-up sequences, call summaries, and proposal customization with copy-paste prompts for each.', date: '2026-05-21', category: 'AI Tools', readingTime: '8 min' },
{ slug: 'building-an-ai-content-calendar', title: 'Building an AI Content Calendar: From Zero to 90 Days of Posts in One Afternoon', excerpt: 'A step-by-step system for generating a 90-day topic bank, scheduling in Notion, creating outlines in advance, and automating the publishing pipeline with Make.com.', date: '2026-05-21', category: 'Automation', readingTime: '8 min' },
{ slug: 'automating-invoices-with-ai', title: 'Automating Invoices with AI: Stop Wasting 5+ Hours a Week on Billing', excerpt: 'How to automate invoice generation, delivery emails, and payment follow-up sequences using Claude, Make.com, and your existing invoicing software.', date: '2026-05-21', category: 'Automation', readingTime: '7 min' },
{ slug: 'ai-for-data-analysis-beginners', title: "AI for Data Analysis: A Beginner's Guide to Turning Spreadsheets into Insights", excerpt: "No Python or SQL required. How to use Claude and ChatGPT to clean data, spot patterns, write analysis narratives, and automate weekly reports.", date: '2026-05-21', category: 'AI Tools', readingTime: '8 min' },
{ slug: 'ai-for-customer-support', title: 'How to Use AI for Customer Support: A Practical Workflow That Actually Scales', excerpt: 'Stop drowning in support tickets. Build an AI triage, draft, and escalation system that cuts manual load by 40-60% with no coding required.', date: '2026-05-22', category: 'AI Tools', readingTime: '8 min' },
{ slug: 'gpt-4o-for-image-analysis', title: 'GPT-4o Image Analysis: Practical Workflows That Save Hours Every Week', excerpt: 'Five concrete image analysis workflows using GPT-4o: invoice parsing, chart-to-data extraction, UX critique, competitor ad teardowns, and product QC with copy-paste prompts for each.', date: '2026-05-23', category: 'AI Tools', readingTime: '7 min' },
{ slug: 'claude-api-for-beginners', title: 'Claude API for Beginners: Build Your First AI-Powered Workflow in 30 Minutes', excerpt: 'A beginner-friendly guide to the Claude API: getting your key, writing your first call, using system prompts for structured output, and building a real batch automation workflow in Python.', date: '2026-05-23', category: 'Tutorials', readingTime: '8 min' },
{ slug: 'ai-writing-for-technical-docs', title: 'AI for Writing Technical Documentation: Cut the Time, Raise the Quality', excerpt: 'A section-by-section workflow for using AI to produce API docs, runbooks, and user guides faster with prompts for structure, clarity, and keeping docs current.', date: '2026-05-22', category: 'Productivity', readingTime: '7 min' },
{ slug: 'ai-social-media-scheduler', title: 'How to Build an AI Social Media Scheduler That Writes and Posts For You', excerpt: 'A step-by-step workflow to automate social media content using AI and Make.com: one input generates platform-specific posts for LinkedIn, Twitter, and Instagram on autopilot.', date: '2026-05-23', category: 'Automation', readingTime: '7 min' },
{ slug: 'using-ai-for-financial-reports', title: 'Using AI to Write Financial Reports: A Practical Workflow for Non-Finance Teams', excerpt: 'Turn verified numbers into polished financial narratives in 20 minutes. Prompts for monthly reports, variance explanations, and audience-specific repackaging.', date: '2026-05-23', category: 'Productivity', readingTime: '8 min' },
{ slug: 'using-ai-for-contract-review', title: 'Using AI for Contract Review: Cut Hours of Reading Down to Minutes', excerpt: 'A practical workflow for using AI to extract key terms, flag risk clauses, and compare redlines in any contract from freelance SOWs to vendor agreements and NDAs.', date: '2026-05-24', category: 'AI Tools', readingTime: '7 min' },
{ slug: 'ai-tools-for-podcasters', title: 'AI Tools for Podcasters: From Episode Idea to Published Show in Half the Time', excerpt: 'How to use AI for guest research, show notes, episode scripting, content repurposing, and calendar planning with a full production workflow and copy-paste prompts.', date: '2026-05-24', category: 'Productivity', readingTime: '8 min' },
{ slug: 'ai-tools-for-designers', title: 'AI Tools for Designers: Automate the Tedious Parts and Focus on Creative Work', excerpt: 'How designers can use AI to generate UX microcopy, turn vague briefs into precise specs, write handoff docs, and prep presentation narratives without changing how they actually design.', date: '2026-05-24', category: 'AI Tools', readingTime: '8 min' },
{ slug: 'chatgpt-for-coding-beginners', title: 'ChatGPT for Coding Beginners: Learn Faster, Debug Smarter, and Actually Ship Things', excerpt: 'How beginners can use ChatGPT as a personalized tutor, debug errors with step-by-step explanations, build real projects from day one, and understand code they did not write.', date: '2026-05-24', category: 'Tutorials', readingTime: '9 min' },
{ slug: 'ai-for-real-estate-listings', title: 'How Real Estate Agents Are Using AI to Write Listings That Actually Sell', excerpt: 'A practical guide to using AI for listing descriptions, social captions, client emails, and objection scripts with copy-paste prompts for every step.', date: '2026-05-26', category: 'AI Tools', readingTime: '7 min' },
{ slug: 'using-claude-for-research', title: 'Using Claude for Research: A Practical Workflow That Actually Saves Hours', excerpt: 'A 5-phase research workflow using Claude to map topics, process sources faster, stress-test conclusions, and convert notes into polished deliverables in half the usual time.', date: '2026-05-26', category: 'Productivity', readingTime: '8 min' },
{ slug: 'building-ai-powered-crm-notes', title: 'Building AI-Powered CRM Notes: Turn Every Sales Call Into Actionable Data', excerpt: 'How to use AI to auto-generate structured CRM notes after every sales call with specific prompts for discovery, renewals, and follow-up emails, plus a Make.com automation workflow.', date: '2026-05-26', category: 'Automation', readingTime: '7 min' },
{ slug: 'ai-tools-for-lawyers', title: 'AI Tools for Lawyers: How Attorneys Are Saving 10+ Hours a Week Without Sacrificing Accuracy', excerpt: 'Practical AI workflows for contract review, case briefing, client communications, and building a firm knowledge base with specific prompts and guardrails for legal work.', date: '2026-05-26', category: 'AI Tools', readingTime: '8 min' },
{ slug: 'ai-for-academic-research', title: 'AI for Academic Research: Cut Literature Review Time in Half', excerpt: 'A practical 7-step AI workflow for academic research from mapping the literature landscape to stress-testing your argument before submission.', date: '2026-06-01', category: 'Productivity', readingTime: '9 min' },
{ slug: 'ai-for-note-taking', title: 'AI for Note-Taking: How to Build a Knowledge System That Actually Works', excerpt: 'Stop losing ideas to scattered notes. Use AI with Notion, Make.com, and smart processing prompts to build a queryable knowledge base that surfaces insights when you need them.', date: '2026-06-18', category: 'Productivity', readingTime: '9 min' },
{ slug: 'ai-productivity-stack-2026', title: 'The 2026 AI Productivity Stack: Tools That Actually Save Time (With Costs)', excerpt: 'A curated breakdown of the best AI productivity tools in 2026 — what each one does, when to use it, and how to stack them into a coherent system without subscription overload.', date: '2026-06-18', category: 'AI Tools', readingTime: '10 min' },
{ slug: 'ai-tools-for-remote-workers', title: 'AI Tools for Remote Workers: The Stack That Closes the Collaboration Gap', excerpt: 'Six AI tools that remote workers use to reduce meeting overhead, improve async communication, automate cross-app workflows, and stay secure on open networks.', date: '2026-06-01', category: 'AI Tools', readingTime: '8 min' },
{ slug: 'vpn-for-ai-researchers', title: 'VPN for AI Researchers: Stay Secure While Accessing AI Tools Globally', excerpt: 'Why AI researchers and remote workers need a VPN — and how to pick one that keeps your prompts, API keys, and research data private.', date: '2026-06-11', category: 'AI Tools', readingTime: '7 min' },
{ slug: 'ai-writing-for-nonfiction-books', title: 'AI Writing for Nonfiction Books: From Rough Idea to Finished Draft in Half the Time', excerpt: 'A practical AI-assisted workflow for nonfiction authors — outline structure, chapter drafting, research synthesis, and editing passes that cut writing time in half without losing your voice.', date: '2026-06-11', category: 'Productivity', readingTime: '9 min' },
{ slug: 'ai-powered-customer-onboarding', title: 'AI-Powered Customer Onboarding: Cut Time-to-Value by 50%', excerpt: 'A practical workflow for using AI to automate onboarding emails, personalize setup guides, answer common questions instantly, and track activation milestones — without a larger team.', date: '2026-06-11', category: 'Automation', readingTime: '8 min' },
{ slug: 'automating-social-media-with-ai', title: 'Automating Social Media with AI: One Input, 30 Days of Posts', excerpt: 'A complete workflow for generating a month of platform-native posts from a single brief, scheduling automatically with Make.com, and maintaining a consistent brand voice across LinkedIn, Twitter, and Instagram.', date: '2026-06-11', category: 'Automation', readingTime: '8 min' },
{ slug: 'claude-for-legal-document-review', title: 'Claude for Legal Document Review: A Practical Workflow for Non-Lawyers', excerpt: 'How to use Claude to extract key terms, flag risky clauses, compare contract versions, and summarize legal documents without a law degree or expensive attorney review for routine work.', date: '2026-06-11', category: 'AI Tools', readingTime: '8 min' },
{ slug: 'staying-secure-while-using-ai-tools', title: 'Staying Secure While Using AI Tools: A Practical Security Guide for 2026', excerpt: 'The AI tools you use every day create real security and privacy risks most people ignore. How to use AI safely without compromising your data, credentials, or client information.', date: '2026-06-11', category: 'AI Tools', readingTime: '7 min' },
{ slug: 'ai-for-small-business', title: 'AI for Small Business: The Practical Toolkit That Replaces Three Hires', excerpt: 'How small business owners are using AI to handle marketing copy, customer support, bookkeeping summaries, and operations — recovering 5-8 hours a week without adding headcount.', date: '2026-06-14', category: 'AI Tools', readingTime: '10 min' },
{ slug: 'ai-tools-for-teachers', title: 'AI Tools for Teachers: Save 5 Hours a Week on Lesson Planning and Grading', excerpt: 'A practical guide for educators using AI to create lesson plans, differentiate instruction, write rubrics, give feedback faster, and handle the administrative load that eats teaching time.', date: '2026-06-14', category: 'Productivity', readingTime: '9 min' },
    { slug: 'ai-for-product-managers', title: 'AI for Product Managers: Workflows That Cut Planning Time in Half', excerpt: 'How PMs are using AI to write PRDs, generate user stories, run competitor analysis, prioritize backlogs, and turn messy meeting notes into actionable roadmaps.', date: '2026-06-15', category: 'Productivity', readingTime: '9 min' },
    { slug: 'ai-tools-for-accounting', title: 'AI Tools for Accounting: Automate the Tedious Work and Focus on Advisory', excerpt: 'How accountants and bookkeepers are using AI to automate transaction categorization, draft financial narratives, catch data entry errors, and spend more time on high-value client work.', date: '2026-06-15', category: 'AI Tools', readingTime: '9 min' },
  { slug: 'ai-tools-for-entrepreneurs', title: 'AI Tools for Entrepreneurs: The Lean Founder\'s Tech Stack for 2026', excerpt: 'The essential AI toolkit for founders and solopreneurs: automate operations, accelerate content, manage customers, and run lean with fewer tools than you think.', date: '2026-06-16', category: 'AI Tools', readingTime: '9 min' },
  { slug: 'ai-content-repurposing-workflow', title: 'AI Content Repurposing: Turn One Post Into 10 Pieces of Content Automatically', excerpt: 'How to build an AI-powered repurposing workflow that turns a single blog post into LinkedIn posts, newsletters, threads, video scripts, and more — with minimal manual effort.', date: '2026-06-16', category: 'Automation', readingTime: '8 min' },

  { slug: 'ai-tools-for-startup-founders', title: 'AI Tools for Startup Founders: Replace Three Hires With the Right Stack', excerpt: 'The practical AI toolkit for startup founders — from writing investor updates to automating customer support, market research, and content marketing with fewer resources.', date: '2026-06-17', category: 'AI Tools', readingTime: '10 min' },
  { slug: 'ai-powered-lead-generation', title: 'AI-Powered Lead Generation: Automate Prospecting Without Losing the Human Touch', excerpt: 'How sales teams use AI to identify prospects, research accounts, personalize outreach at scale, and build pipelines that fill themselves.', date: '2026-06-17', category: 'Automation', readingTime: '9 min' },
  { slug: 'ai-for-financial-planning', title: 'AI for Financial Planning: Build a Budget, Track Goals, and Stop Guessing', excerpt: 'How to use AI tools to build a personal budget, set savings goals, analyze spending patterns, and prepare for financial decisions — without a financial advisor.', date: '2026-06-19', category: 'Productivity', readingTime: '9 min' },
  { slug: 'ai-tools-for-ecommerce', title: 'AI Tools for Ecommerce: Product Listings, Customer Emails, and Inventory Done Faster', excerpt: 'How ecommerce operators use AI to write better product descriptions, automate customer communications, analyze sales data, and free up hours every week.', date: '2026-06-19', category: 'Automation', readingTime: '10 min' },
  { slug: 'ai-for-recruiting', title: 'AI for Recruiting: Cut Time-to-Hire by 40% Without Sacrificing Candidate Quality', excerpt: 'Recruiting teams are using AI to write better job descriptions, screen applications faster, build structured interview guides, and send personalized outreach — without adding headcount.', date: '2026-06-20', category: 'Productivity', readingTime: '9 min' },
  { slug: 'ai-chatbot-for-website', title: 'How to Add an AI Chatbot to Your Website (No Code Required)', excerpt: 'A practical guide to adding an AI chatbot that actually helps visitors — covering tool selection, training on your content, handoff flows, and measuring whether it is working.', date: '2026-06-20', category: 'Tutorials', readingTime: '9 min' },
  { slug: 'ai-for-resume-writing', title: 'AI for Resume Writing: Land More Interviews by Working Smarter, Not Harder', excerpt: 'Use AI to tailor your resume to every job in minutes, write bullet points that pass ATS filters, and build a cover letter that actually gets read.', date: '2026-06-21', category: 'Productivity', readingTime: '9 min' },
  { slug: 'ai-for-event-planning', title: 'AI for Event Planning: Save 20+ Hours on Your Next Event Without Losing Control', excerpt: 'From vendor RFPs to run-of-show schedules to attendee email sequences, AI handles the tedious 80% of event planning with copy-paste prompts for every stage.', date: '2026-06-21', category: 'Productivity', readingTime: '9 min' },
  { slug: 'ai-for-travel-planning', title: 'AI for Travel Planning: Build Your Perfect Trip in 30 Minutes Flat', excerpt: 'AI collapses hours of tab-juggling into a single conversation — destination selection, day-by-day itinerary, neighborhood research, packing lists, and logistics briefing all from targeted prompts.', date: '2026-06-22', category: 'Productivity', readingTime: '9 min' },
  { slug: 'ai-tools-for-journalists', title: 'AI Tools for Journalists: Research Faster, Write Tighter, Verify Smarter', excerpt: 'Reporters are using AI to cut research time, transcribe interviews, surface document insights, and produce cleaner first drafts — without compromising editorial standards.', date: '2026-06-22', category: 'AI Tools', readingTime: '10 min' },
];

const categories = ['All', 'AI Prompts', 'AI Tools', 'Productivity', 'Automation', 'Tutorials'];
const POSTS_PER_PAGE = 12;

export default function Blog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || post.category === category;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const totalPages = Math.max(1, Math.ceil(sortedPosts.length / POSTS_PER_PAGE));
  const pagedPosts = sortedPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#00d4ff', marginBottom: '0.5rem' }}>Blog</h1>
        <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>{allPosts.length} articles</p>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <input type="text" placeholder="Search..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #374151', background: 'rgba(255,255,255,0.05)', color: '#fff' }} />
          <select value={category} onChange={(e) => { setCategory(e.target.value); setPage(1); }} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #374151', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {pagedPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ display: 'block', background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '12px', textDecoration: 'none', color: 'inherit' }}>
              <span style={{ fontSize: '0.7rem', color: '#7c3aed', background: 'rgba(124,58,237,0.15)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>{post.category}</span>
              <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0', color: '#fff' }}>{post.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0 }}>{post.excerpt}</p>
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <button type="button" onClick={() => setPage(p => p - 1)} disabled={isFirstPage} style={{ color: '#00d4ff', background: 'rgba(255,255,255,0.05)', border: '1px solid #374151', borderRadius: '8px', padding: '0.65rem 1rem', cursor: 'pointer', ...(isFirstPage ? { opacity: 0.4, pointerEvents: 'none' } : {}) }}>
            ← Previous
          </button>
          <span style={{ color: '#9ca3af', fontSize: '0.95rem' }}>Page {page} of {totalPages}</span>
          <button type="button" onClick={() => setPage(p => p + 1)} disabled={isLastPage} style={{ color: '#00d4ff', background: 'rgba(255,255,255,0.05)', border: '1px solid #374151', borderRadius: '8px', padding: '0.65rem 1rem', cursor: 'pointer', ...(isLastPage ? { opacity: 0.4, pointerEvents: 'none' } : {}) }}>
            Next →
          </button>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <Link href="/" style={{ color: '#00d4ff', textDecoration: 'none' }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
