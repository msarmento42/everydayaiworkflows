"use client";
import NewsletterCapture from "../../components/NewsletterCapture";

export const metadata = {
  title: "15 AI Prompts That Will Get You the Job: Interview Prep from First Round to Offer | Everyday AI Workflows",
  description: "Copy-paste-ready AI prompts covering every stage of interview prep — research, behavioral stories, mock interviews, salary negotiation, and follow-up.",
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)", color: "#fff", fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "2rem" }}>
        <a href="/blog" style={{ color: "#00d4ff", textDecoration: "none" }}>← Back to Blog</a>
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.75rem", color: "#7c3aed", background: "rgba(124,58,237,0.2)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>AI Prompts</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>⏱️ 9 min read</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>May 13, 2026</span>
        </div>
        <h1 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1.5rem", lineHeight: "1.2" }}>
          15 AI Prompts That Will Get You the Job: Interview Prep from First Round to Offer
        </h1>
        <div style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "#d1d5db" }}>
          <p>Most people walk into job interviews underprepared — not because they lack experience, but because they spend their prep time rereading their own resume instead of actually practicing. AI changes this equation completely. You can now simulate entire interview conversations, get instant feedback on your answers, craft compelling behavioral stories, and negotiate salary with data — all before you set foot in a room.</p>
          <p>These 15 prompts cover every stage of the interview process, from company research through final-round negotiation. Each one is designed to be copy-paste-ready; just fill in the bracketed parts with your specifics.</p>
          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Phase 1: Company and Role Research (Prompts 1–3)</h2>
          <p>Walking in without deep company knowledge is one of the most common ways candidates lose strong positions. These prompts help you build a rich picture of the company, the team, and the role before you ever talk to a recruiter.</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 1 — Company Intelligence Brief
I am interviewing at [Company Name] for [Role Title].
Help me build a pre-interview brief. Include:
- Core business model and how they make money
- Recent news, product launches, or strategy shifts
- Likely pain points for someone in [Role Title]
- 3 smart questions I should ask to show I have done my research`}</pre>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 2 — Job Description Decoder
Here is the job description: [paste JD]

Extract:
1. The 3 most important skills they are actually hiring for
2. The specific problems this person will solve in the first 90 days
3. Red flags or unclear expectations I should ask about
4. Keywords I should weave into my answers`}</pre>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 3 — Competitive Landscape Scan
I am applying for [Role] at [Company].
Their main competitors are [list 2-3 if you know them].
Summarize how [Company] differentiates itself and what industry
challenges they are navigating right now. Help me sound informed
without sounding like I memorized a Wikipedia article.`}</pre>
          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Phase 2: Behavioral Story Prep (Prompts 4–7)</h2>
          <p>Behavioral questions — "tell me about a time when..." — trip up most candidates because they improvise vague answers. The STAR format (Situation, Task, Action, Result) fixes this, but building strong STAR stories takes time. These prompts compress that work from hours to minutes.</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 4 — STAR Story Builder
Here is a rough experience I want to use as an interview story:
[Describe the situation in 2-4 sentences, as messy as needed]

Turn this into a polished STAR story (90 seconds when spoken aloud).
Emphasize my specific actions and quantify the result if possible.
Make it compelling but honest — no fabrication.`}</pre>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 5 — Story Bank Generator
Here is my work experience summary: [paste resume or bullet points]
Here is the role I am interviewing for: [Role Title at Company]

Generate 5 behavioral story prompts tailored to this role
and map my experience to each one with a suggested story.
Cover: leadership, conflict, failure, innovation, and cross-team collaboration.`}</pre>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 6 — Weakness Reframe
I tend to struggle with: [honest weakness]
Help me reframe this as a genuine, non-cliche interview answer.
Show self-awareness, a specific example, and what I have done to address it.
Keep it under 90 seconds when spoken.`}</pre>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 7 — Failure Story Polish
Here is a time I failed or made a mistake: [describe it honestly]
Turn this into a mature, self-aware interview answer that shows
what I learned and how I changed my approach as a result.
Avoid sounding defensive or like I am blaming others.`}</pre>
          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Phase 3: Mock Interview Practice (Prompts 8–10)</h2>
          <p>Reading your answers is not the same as saying them. These prompts turn Claude into an interactive interview coach who can push back, ask follow-ups, and give you specific feedback. Use <a href="https://jasper.ai" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Jasper AI</a> if you want voice-mode roleplay that adds an extra layer of spoken-language refinement.</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 8 — First Round Mock Interview
You are a recruiter at [Company]. I am interviewing for [Role].
Ask me 5 first-round screening questions one at a time.
After each answer I give, rate it 1-10 on clarity and relevance,
tell me what was strong, and give me one specific improvement.
Start with the first question.`}</pre>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 9 — Technical Deep Dive
You are a senior [engineering/product/data] interviewer.
Ask me 3 technical questions appropriate for [Role Title].
After each answer, identify any gaps in my explanation
and ask one realistic follow-up question before moving on.`}</pre>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 10 — Full Debrief
Here are all the interview answers I practiced today:
[paste your responses]

Give me: (1) my 3 strongest moments, (2) the 2 answers that
need the most work and why, (3) a single sentence I should
memorize as my closing statement in the final interview.`}</pre>
          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Phase 4: Logistics and Follow-Up (Prompts 11–13)</h2>
          <p>The details around the interview — what to ask, how to follow up — often differentiate a forgettable candidate from one who gets an offer. AI makes it easy to craft highly personalized follow-up messages that reference specific things you discussed.</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 11 — Smart Questions Generator
I am in a final-round interview for [Role] at [Company].
I have spoken with [interviewer names and roles].
The topics we covered: [brief list]

Generate 5 thoughtful questions I can ask that show strategic
thinking about the role, the team, and the company future.
Make them highly specific — avoid generic questions.`}</pre>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 12 — Thank You Note
I just finished an interview with [Name, Title] at [Company].
We talked about: [2-3 key topics from the conversation]

Write a thank-you email that: (1) references something specific
from our conversation, (2) reinforces my fit for the role,
(3) closes with a clear next-step question.
Keep it under 200 words and professional but warm.`}</pre>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 13 — Follow-Up After Silence
I interviewed at [Company] on [date]. It has been [X days]
and I have not heard back. The recruiter is [Name].

Write a brief, non-pushy follow-up email: express continued
interest, ask for a status update, keep me top of mind.
Under 100 words.`}</pre>
          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Phase 5: Offer Negotiation (Prompts 14–15)</h2>
          <p>Most people leave money on the table because they do not know what to say. AI can help you find the right words without sounding scripted. Pair this with <a href="https://notion.so" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Notion AI</a> to track your offer details and comparison criteria across multiple companies.</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 14 — Salary Counter Script
I received an offer of [base salary + bonus + equity].
Market data I have found: [paste any comp data].
My target is [your number].

Write a short, confident counter-offer script I can say on a
call. Acknowledge the offer warmly, state my counter with a
specific rationale, and leave room for dialogue without ultimatums.`}</pre>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginBottom: "1rem" }}>{`PROMPT 15 — Multi-Offer Comparison Framework
I have these offers: [paste each offer with comp + role details].
My priorities are: [compensation / growth / WFH / mission / stability]

Build a comparison table with a weighted score for each offer
and a recommendation with reasoning. Flag anything I should
negotiate further before deciding.`}</pre>
          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Make It a Repeatable System</h2>
          <p>Save these 15 prompts in a document you can reuse for every application. Each one takes less than two minutes to fill in and run. For ongoing job-search productivity, our <a href="/blog/claude-ai-prompts-for-productivity" style={{ color: "#00d4ff" }}>Claude AI prompts for productivity</a> guide gives you more frameworks for structuring daily decision-making. And if you are doing deep company research, the <a href="/blog/using-claude-for-research" style={{ color: "#00d4ff" }}>using Claude for research guide</a> walks through a full 5-phase research workflow that applies directly to company analysis.</p>
          <div style={{ background: "rgba(0, 212, 255, 0.05)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "1.25rem", marginTop: "2rem", marginBottom: "2rem" }}>
            <p style={{ margin: 0, color: "#a5f3fc" }}>💡 <strong>Want more AI tools to accelerate your job search?</strong> <a href="/tools" style={{ color: "#00d4ff" }}>Browse the full toolkit →</a></p>
          </div>
        </div>
        <NewsletterCapture darkMode={true} />
      </div>
    </div>
  );
}