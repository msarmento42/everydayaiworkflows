import NewsletterCapture from "../components/NewsletterCapture";

export const metadata = {
  title: "10 ChatGPT Prompts for Sales Professionals That Actually Close Deals | Everyday AI Workflows",
  description: "Sales reps who use AI remove the friction that keeps them from selling. These 10 prompts cover prospect research, cold email, objection handling, follow-up sequences, and pipeline analysis.",
  alternates: {
    canonical: "/blog/10-chatgpt-prompts-sales",
  },
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)", color: "#fff", fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "2rem" }}>
        <a href="/blog" style={{ color: "#00d4ff", textDecoration: "none" }}>← Back to Blog</a>
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.75rem", color: "#7c3aed", background: "rgba(124,58,237,0.2)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>AI Prompts</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>⏱️ 8 min read</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>March 15, 2026</span>
        </div>
        <h1 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1.5rem", lineHeight: "1.2" }}>
          10 ChatGPT Prompts for Sales Professionals That Actually Close Deals
        </h1>

        <div style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "#d1d5db" }}>
          <p>Sales reps who use AI are not replacing themselves — they are removing the friction that keeps them from selling. The average rep spends only 28% of their week actually selling. The rest goes to research, writing emails, prepping for calls, and updating CRM notes. These 10 prompts target exactly those time sinks, giving you back the hours and letting you focus on what AI cannot replicate: building genuine trust with prospects.</p>
          <p>Each prompt is copy-paste ready with placeholders you fill in. Save them in <a href="https://notion.so" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Notion</a> as a prompt library and refine them over time as you learn what works for your specific buyer personas.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>1. Prospect Research Brief</h2>
          <p>Before any call or email, you need context fast. This prompt builds a battle-ready research brief in under 60 seconds:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", whiteSpace: "pre-wrap" }}>{`I'm preparing for a sales call with [Name] at [Company].
They are a [Title]. The company does [what the company does].

Give me:
1. 3 likely business pain points for someone in this role
2. 2 questions to open the discovery conversation
3. Any industry trends relevant to their business right now
4. One piece of company news I can reference to build rapport

Keep it to a briefing I can read in 2 minutes.`}</pre>
          <p>Use this the night before or morning of every call. You will walk in sounding more prepared than 95% of reps they talk to. It is the single highest-ROI prompt on this list because good discovery is where deals are won or lost.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>2. Cold Email That Gets Replies</h2>
          <p>Generic cold emails get deleted. This prompt forces specificity and brevity — the two things that actually drive reply rates:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", whiteSpace: "pre-wrap" }}>{`Write a cold email to [Name], [Title] at [Company].
My product: [one-sentence description]
Their likely problem: [specific pain point]
Proof point: [one specific result a similar customer got]
CTA: 15-minute call to see if this is relevant for them

Rules: Under 80 words. No buzzwords. No "I hope this finds you well."
Subject line: something specific, not clever.`}</pre>
          <p>The 80-word limit is non-negotiable. Long cold emails signal that you have not respected their time before the relationship even starts. If you cannot make your value proposition clear in 80 words, you have not clarified it for yourself yet — which is useful information.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>3. Objection Handler Bank</h2>
          <p>Stop winging it when prospects push back. Build a bank of strong, ready responses for the objections you hear every week:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", whiteSpace: "pre-wrap" }}>{`I sell [product] to [buyer persona].
The most common objection I get is: "[exact objection wording]"

Give me 3 different responses:
1. One that acknowledges and reframes
2. One that uses a customer story
3. One that turns it into a discovery question

Keep each response under 3 sentences. Conversational, not scripted.`}</pre>
          <p>Run this for your top 5 objections and you have a complete battlecard. Store them in Notion so you can pull them up on your phone between calls.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>4. Follow-Up Sequence After No Response</h2>
          <p>Most deals close in the follow-up, not the first contact. This prompt builds a 4-touch sequence that adds value rather than just checking in:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", whiteSpace: "pre-wrap" }}>{`Write a 4-email follow-up sequence for a prospect who went silent after showing initial interest.
Context: They responded once, asked a question, I answered, then nothing.
Product: [product]
Last interaction: [brief summary]

Sequence rules:
- Email 1 (Day 3): Add value, don't just check in
- Email 2 (Day 7): Different angle or benefit
- Email 3 (Day 14): Social proof or case study
- Email 4 (Day 21): The breakup email — leave the door open

Each under 60 words. No guilt trips.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>5. Proposal Executive Summary</h2>
          <p>Proposals get forwarded to decision-makers who were not in your demo. Make it easy for your champion to sell internally on your behalf:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", whiteSpace: "pre-wrap" }}>{`Write a one-page executive summary for a proposal I'm sending to [Company].
Their key problem: [problem]
Our solution: [solution]
Expected outcome or ROI: [metrics]
Investment: [price range]
Next step: [specific CTA]

Format it for someone who has 2 minutes and needs to decide
whether to move this forward. Plain language, no jargon.
Bullet points where appropriate.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>6. Competitive Battlecard</h2>
          <p>When a prospect mentions a competitor, you need crisp, confident responses ready without having to think on your feet:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", whiteSpace: "pre-wrap" }}>{`Create a competitive battlecard: [My Product] vs [Competitor].
My strengths: [list 3]
Their strengths: [list 2-3 honest ones]
Where we win: [specific scenarios or buyer types]
Where they might win: [be honest about this]
3 questions I can ask to steer the conversation toward our strengths

Format as a quick-reference card I can scan in 30 seconds on a call.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>7. Post-Call CRM Summary</h2>
          <p>Stop losing momentum after great calls. This prompt turns your scattered notes into a clean CRM entry and a follow-up email that arrives while the conversation is still fresh:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", whiteSpace: "pre-wrap" }}>{`Here are my rough notes from a sales call today:
[paste your messy notes]

From these, create:
1. A clean CRM summary (3-4 bullet points: pain, timeline, budget, decision process)
2. A follow-up email recapping what we discussed and confirming next steps
3. 2 things I should research or prepare before our next call

Email tone: professional but warm. Under 150 words.`}</pre>
          <p>You can automate this further — see our guide on <a href="/blog/building-ai-powered-crm-notes" style={{ color: "#00d4ff" }}>building AI-powered CRM notes</a> for a Make.com workflow that takes a voice memo and delivers structured CRM data automatically.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>8. LinkedIn Outreach Message</h2>
          <p>LinkedIn connection requests with generic messages get ignored. This prompt writes something worth accepting:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", whiteSpace: "pre-wrap" }}>{`Write a LinkedIn connection request message to [Name] at [Company].
Something specific about them: [recent post, shared connection, company news, etc.]
Why I'm reaching out: [genuine reason, not a pitch]

Limit: 280 characters. No sales pitch. Make them want to connect.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>9. Stuck Deal Diagnosis</h2>
          <p>Every rep has deals sitting in evaluation for months. Use this prompt to get outside perspective on what is actually happening and what to do about it:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", whiteSpace: "pre-wrap" }}>{`I have a deal that's been stuck for [X weeks]. Here's the situation:
- Company: [company]
- Contact: [name, title]
- Where we are: [stage]
- Last interaction: [what happened]
- Stated blocker: [what they told me]

What are 3 likely real reasons this is stuck, beyond what they told me?
What are 2 specific actions I can take this week
to move it forward or kill it cleanly?`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>10. End-of-Quarter Pipeline Audit</h2>
          <p>Use AI to get an honest, prioritized read on your pipeline rather than the optimistic version you might tell your manager:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #374151", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", whiteSpace: "pre-wrap" }}>{`Here's my current pipeline:
[paste a table or list: company, stage, value, close date, last activity]

Analyze this and tell me:
1. Which 3 deals have the highest probability of closing this quarter?
2. Which deals should I deprioritize or cut from my forecast?
3. Where are the biggest risks to my number?
4. What should I do in the next 5 business days to protect my target?

Be direct. I need a prioritized action list, not generic strategy.`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Automating These Prompts at Scale</h2>
          <p>These prompts are powerful used manually, but the biggest ROI comes from automating the highest-frequency ones. The post-call CRM summary (prompt 7) and prospect research brief (prompt 1) are used multiple times a day — exactly the candidates for automation with <a href="https://www.make.com/en/register?pc=msarmento42" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Make.com</a>. A workflow that takes a voice memo from your phone, transcribes it, runs it through the CRM summary prompt, and pushes the output to your CRM takes about two hours to build and saves 20–30 minutes every day indefinitely.</p>
          <p>For a complete look at how sales teams are using AI beyond individual prompts — including pipeline automation, outreach workflows, and AI-assisted forecasting — see our guide on <a href="/blog/ai-tools-for-sales-teams" style={{ color: "#00d4ff" }}>AI tools for sales teams</a>.</p>
          <p>The reps who get the most from AI are the ones who build it into their daily rhythm rather than using it occasionally. Start with prompts 1 and 7 — every single day for one week. Those two alone will save 30–45 minutes daily and make your CRM data dramatically cleaner. Once those are habits, layer in the rest.</p>

          <div style={{ background: "rgba(0, 212, 255, 0.05)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "1.25rem", marginTop: "2rem", marginBottom: "2rem" }}>
            <p style={{ margin: 0, color: "#a5f3fc" }}>
              {"💡 "}<strong>{"Want the full AI sales stack? CRM tools, automation workflows, and outreach software — all reviewed. "}</strong><a href="/tools" style={{ color: "#00d4ff" }}>{"Browse the toolkit →"}</a>
            </p>
          </div>

        </div>

        <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {["sales", "ai-prompts", "chatgpt", "crm", "automation"].map(tag => (
            <span key={tag} style={{ fontSize: "0.75rem", color: "#6b7280", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>#{tag}</span>
          ))}
        </div>

        <NewsletterCapture darkMode={true} />
      </div>
    </div>
  );
}
