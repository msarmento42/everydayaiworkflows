export const metadata = {
  title: "10 ChatGPT Prompts for Sales Professionals That Actually Close Deals",
  description: "Sales reps who use AI are not replacing themselves — they\'re removing the friction that keeps them from selling. The average rep spends only 28% of their...",
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)", color: "#fff", fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "2rem" }}>
        <a href="/blog" style={{ color: "#00d4ff", textDecoration: "none" }}>← Back to Blog</a>
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.75rem", color: "#7c3aed", background: "rgba(124,58,237,0.2)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>AI Prompts</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>⏱️ 7 min read</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>March 15, 2026</span>
        </div>
        <h1 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1.5rem", lineHeight: "1.2" }}>
          10 ChatGPT Prompts for Sales Professionals That Actually Close Deals
        </h1>

        <div style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "#d1d5db" }}>

          <p>Sales reps who use AI are not replacing themselves — they're removing the friction that keeps them from selling. The average rep spends only 28% of their week actually selling. The rest goes to research, writing emails, prepping for calls, and updating CRM notes. These 10 prompts target exactly those time sinks.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>1. Prospect Research Brief</h2>
          <p>Before any call or email, you need context fast. This prompt builds a battle-ready research brief in under 60 seconds:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc" }}>{`I'm preparing for a sales call with [Name] at [Company].
They are a [Title]. The company does [what the company does].

Give me:
1. 3 likely business pain points for someone in this role
2. 2 questions to open the discovery conversation
3. Any industry trends relevant to their business right now
4. One piece of company news I can reference to build rapport

Keep it to a briefing I can read in 2 minutes.`}</pre>
          <p>Use this the night before or morning of every call. You'll walk in sounding more prepared than 95% of reps they talk to.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>2. Cold Email That Gets Replies</h2>
          <p>Generic cold emails get deleted. This prompt forces specificity:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc" }}>{`Write a cold email to [Name], [Title] at [Company].
My product: [one-sentence description]
Their likely problem: [specific pain point]
Proof point: [one specific result a similar customer got]
CTA: 15-minute call to see if this is relevant for them

Rules: Under 80 words. No buzzwords. No "I hope this finds you well."
Subject line: something specific, not clever.`}</pre>
          <p>The 80-word limit is non-negotiable. Long cold emails signal that you haven't respected their time before the relationship even starts.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>3. Objection Handler</h2>
          <p>Stop winging it when prospects push back. Build a bank of strong responses:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc" }}>{`I sell [product] to [buyer persona].
The most common objection I get is: "[exact objection wording]"

Give me 3 different responses:
1. One that acknowledges and reframes
2. One that uses a customer story
3. One that turns it into a discovery question

Keep each response under 3 sentences. Conversational, not scripted.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>4. Follow-Up Sequence After No Response</h2>
          <p>Most deals are closed in the follow-up, not the first contact. Here's a prompt that builds a 4-touch sequence:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc" }}>{`Write a 4-email follow-up sequence for a prospect who went silent after showing initial interest.
Context: They responded once, asked a question, I answered, then nothing.
Product: [product]
Last interaction: [brief summary]

Sequence rules:
- Email 1 (Day 3): Add value, don't just check in
- Email 2 (Day 7): Different angle/benefit
- Email 3 (Day 14): Social proof
- Email 4 (Day 21): The breakup email — leave the door open

Each under 60 words. No guilt trips.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>5. Proposal Summary One-Pager</h2>
          <p>Proposals get forwarded to people who didn't attend your demo. Make it easy for your champion to sell internally:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc" }}>{`Write a one-page executive summary for a proposal I'm sending to [Company].
Their key problem: [problem]
Our solution: [solution]
Expected outcome/ROI: [metrics]
Investment: [price range]
Next step: [specific CTA]

Format it for someone who has 2 minutes and needs to decide whether to move this forward.
Use plain language, no jargon. Bullet points where appropriate.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>6. Competitive Battlecard</h2>
          <p>When a prospect mentions a competitor, you need crisp responses ready:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc" }}>{`Create a competitive battlecard comparing [My Product] vs [Competitor].
My strengths: [list 3]
Their strengths: [list 2-3 honest ones]
Where we win: [specific scenarios]
Where they might win: [be honest]
3 questions I can ask to steer toward our strengths

Format as a quick-reference card I can scan in 30 seconds on a call.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>7. Post-Call Summary and Next Steps</h2>
          <p>Stop losing momentum after great calls. This prompt turns your scattered notes into a clean CRM entry and follow-up email:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc" }}>{`Here are my rough notes from a sales call today:
[paste your messy notes]

From these, create:
1. A clean CRM summary (3-4 bullet points: pain, timeline, budget, decision process)
2. A follow-up email recapping what we discussed and confirming next steps
3. 2 things I should research before our next call

Email tone: professional but warm. Under 150 words.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>8. LinkedIn Connection Message</h2>
          <p>LinkedIn connection requests with generic "I'd like to add you to my network" messages get ignored. This does better:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc" }}>{`Write a LinkedIn connection request message to [Name] at [Company].
Something specific about them: [recent post, shared connection, company news, etc.]
Why I'm reaching out: [genuine reason, not a sales pitch]

Limit: 280 characters. No pitch. Make them want to connect.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>9. Deal Stuck in Pipeline Analysis</h2>
          <p>Every rep has deals that sit in "evaluation" for months. Use this to diagnose and strategize:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc" }}>{`I have a deal that's been stuck for [X weeks]. Here's the situation:
- Company: [company]
- Contact: [name, title]
- Where we are: [stage]
- Last interaction: [what happened]
- Stated blocker: [what they said]

What are 3 likely real reasons this is stuck (beyond what they told me)?
What are 2 specific actions I can take this week to move it forward or kill it cleanly?`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>10. End-of-Quarter Pipeline Review</h2>
          <p>Use AI to get an honest forecast and a prioritized action list:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc" }}>{`Here's my current pipeline:
[paste a table or list of deals: company, stage, value, close date, last activity]

Analyze this and tell me:
1. Which 3 deals have the highest probability of closing this quarter?
2. Which deals should I deprioritize?
3. Where are the biggest risks to my forecast?
4. What should I do in the next 5 business days to protect my number?

Be direct. I need a prioritized action list, not a generic strategy.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Building These Into Your Workflow</h2>
          <p>The reps who get the most from AI aren't the ones who use it occasionally — they're the ones who build it into their daily rhythm. Save your most-used prompts in a doc or tool like Notion. Refine them over time based on what actually gets responses and moves deals.</p>
          <p>A practical starting point: pick prompts 1 (research brief) and 7 (post-call summary) and use them every single day for one week. Those two alone will save you 30–45 minutes daily and make your CRM data dramatically cleaner. Once those are habits, layer in the others.</p>
          <p>The goal isn't to let AI do your job. It's to let AI remove the overhead so you can spend more time doing the one thing AI can't replicate: building genuine trust with prospects who have real problems you can solve.</p>

          <div style={{ background: "rgba(0, 212, 255, 0.05)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "1.25rem", marginTop: "2rem", marginBottom: "2rem" }}>
            <p style={{ margin: 0, color: "#a5f3fc" }}>
              💡 <strong>Want more sales AI workflows?</strong> <a href="/tools" style={{ color: "#00d4ff" }}>See the full toolkit we recommend →</a>
            </p>
          </div>

        </div>
                <div style={{ marginTop: "2.5rem", padding: "2rem", background: "rgba(124,58,237,0.1)", borderRadius: "12px", border: "1px solid rgba(124,58,237,0.3)", textAlign: "center" }}>
          <p style={{ color: "#9ca3af", margin: 0 }}>
            📧 <a href="mailto:everydayaiworkflows@gmail.com" style={{ color: "#00d4ff" }}>Subscribe for weekly AI tips</a>
          </p>
        </div>
</div>
    </div>
  );
}
