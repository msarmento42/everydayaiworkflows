"use client";

import NewsletterCapture from "../../components/NewsletterCapture";

export default function BlogPost() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)", color: "#fff", fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "2rem" }}>
        <a href="/blog" style={{ color: "#00d4ff", textDecoration: "none" }}>← Back to Blog</a>
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.75rem", color: "#7c3aed", background: "rgba(124,58,237,0.2)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>AI Tools</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>⏱️ 8 min read</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>May 21, 2026</span>
        </div>
        <h1 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1.5rem", lineHeight: "1.2" }}>
          AI Tools for Sales Teams: Close More Deals Without Working More Hours
        </h1>

        <div style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "#d1d5db" }}>

          <p>Sales is already a data-heavy, communication-intensive job. AI doesn't replace great salespeople — it removes the parts that aren't selling: drafting follow-up emails at 11pm, manually researching prospects, writing the same proposal three times with minor customizations. Here are the tools and workflows that are actually moving the needle for sales teams right now.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Prospect Research in 3 Minutes Instead of 30</h2>
          <p>Before any outreach, you need context: what does this company actually do, what challenges are they likely facing, what did they announce recently, and why should they care about your product today? Manually gathering this takes 20–40 minutes per prospect. With AI, you can get a usable brief in under 5.</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", padding: "1rem", borderRadius: "8px", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginTop: "0.75rem", marginBottom: "0.75rem" }}>{`Research [Company Name] for a sales call. Tell me:
1. What they do and who their customers are (2 sentences max)
2. Their likely top 2-3 business challenges right now
3. Any recent news, funding rounds, or leadership changes
4. One specific angle for why [your product] solves a real problem for them
Keep it under 200 words — I need a quick brief, not a report.`}</pre>
          <p>Run this in Claude or ChatGPT before each call. Feed in a LinkedIn URL or company URL if you have it. The output isn't perfect research, but it's a solid starting point that takes 30 seconds to scan before you pick up the phone.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>AI-Written Cold Outreach That Doesn't Sound Like AI</h2>
          <p>The biggest failure mode with AI-written outreach is that it reads like AI-written outreach — generic, slightly formal, full of phrases like "I hope this finds you well." The fix is to give the model specificity, not just a template to fill.</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", padding: "1rem", borderRadius: "8px", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginTop: "0.75rem", marginBottom: "0.75rem" }}>{`Write a cold outreach email to [Name], [Title] at [Company].
Context: [one specific thing about them — a post they wrote, a recent hire, a product launch]
My offer: [one sentence on what we do and who it helps]
Goal: Get a 20-minute call to explore fit
Rules: Under 100 words. First sentence must NOT start with "I". 
No "I hope this finds you well." No hollow compliments.`}</pre>
          <p>Tools like <a href="https://jasper.ai" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Jasper AI</a> offer sales-specific templates including cold emails, LinkedIn connection messages, and follow-up sequences — and let you save brand voice settings so every rep's output sounds consistent.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Automated Follow-Up Sequences That Feel Personal</h2>
          <p>The money in sales is in the follow-up. Most reps stop after 2 touches; most deals close after 5–8. The reason reps don't follow up enough isn't laziness — it's that writing a fresh, relevant follow-up every time is genuinely hard. AI solves this.</p>
          <p>Build a follow-up sequence template in your CRM and use <a href="https://www.make.com/en/register?pc=msarmento42" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Make.com</a> to trigger AI-generated personalized follow-ups based on deal stage, days since last contact, and the prospect's industry. The automation pulls CRM data, sends it to an AI API with a structured prompt, and drafts the email into your outbox for one-click review and send. You still approve every email — you just don't write them from scratch.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Meeting Prep and Call Summaries</h2>
          <p>Two places where sales reps lose hours every week: preparing for calls they're not fully briefed on, and writing call summaries afterward. AI compresses both.</p>
          <p>For prep, use the prospect research prompt above plus a call-specific addition: "What are 3 discovery questions I should ask given their industry and likely challenges?" For summaries, record calls with a tool like Otter.ai or Fireflies, then paste the transcript into Claude with this prompt:</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", padding: "1rem", borderRadius: "8px", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginTop: "0.75rem", marginBottom: "0.75rem" }}>{`Summarize this sales call transcript. Give me:
- The prospect's top 3 stated pain points
- Buying signals (positive or negative)
- Objections raised and how they were handled
- Agreed next steps (if any)
- My recommended follow-up action

[paste transcript]`}</pre>
          <p>Paste the summary directly into your CRM notes. Reps using this workflow report spending under 3 minutes on post-call admin versus 15–20 manually.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Proposal and Deck Customization at Scale</h2>
          <p>Sending the same proposal to every prospect — or manually rewriting it for each one — are both losing strategies. AI lets you maintain a master proposal structure and generate customized versions quickly. Feed your template and the prospect's context into the AI with specific instructions:</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", padding: "1rem", borderRadius: "8px", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginTop: "0.75rem", marginBottom: "0.75rem" }}>{`Rewrite the "Why Us" and "Proposed Solution" sections of this proposal 
for a [company size] company in [industry] with [specific challenge].
Reference their business goals: [goals from discovery call].
Keep the structure identical. Replace generic language with specifics.

[paste your template sections]`}</pre>
          <p>This works equally well for adapting case studies, rewriting testimonials to match industry, and tailoring pricing justifications. The result is a proposal that reads like it was written specifically for this client — because it was, with AI doing the heavy lifting on customization.</p>

          <div style={{ background: "rgba(0, 212, 255, 0.05)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "1.25rem", marginTop: "2rem", marginBottom: "2rem" }}>
            <p style={{ margin: 0, color: "#a5f3fc" }}>
              💡 <strong>Using multiple AI tools in your sales stack?</strong> <a href="/tools" style={{ color: "#00d4ff" }}>See all recommended AI tools →</a>
            </p>
          </div>

        </div>

        <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {["sales", "ai-tools", "outreach", "automation", "crm"].map(tag => (
            <span key={tag} style={{ fontSize: "0.75rem", color: "#6b7280", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>#{tag}</span>
          ))}
        </div>

        <NewsletterCapture darkMode={true} />
      </div>
    </div>
  );
}
