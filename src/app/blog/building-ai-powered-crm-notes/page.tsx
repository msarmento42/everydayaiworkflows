"use client";

import NewsletterCapture from "../../components/NewsletterCapture";

export default function BlogPost() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)", color: "#fff", fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "2rem" }}>
        <a href="/blog" style={{ color: "#00d4ff", textDecoration: "none" }}>← Back to Blog</a>
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.75rem", color: "#7c3aed", background: "rgba(124,58,237,0.2)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>Automation</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>⏱️ 7 min read</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>May 26, 2026</span>
        </div>
        <h1 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1.5rem", lineHeight: "1.2" }}>
          Building AI-Powered CRM Notes: Turn Every Sales Call Into Actionable Data
        </h1>

        <div style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "#d1d5db" }}>

          <p>Sales reps spend an average of 21% of their day writing CRM notes — time that should go toward selling. AI can write those notes for you, automatically, in the format your CRM expects. Here is exactly how to build that workflow.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Why CRM Note Quality Matters More Than You Think</h2>
          <p>Bad CRM notes create silent revenue leaks. When a deal changes hands, when you come back to a prospect six months later, or when your manager reviews a pipeline, the notes are the only record of what actually happened. Vague entries like "had a call, following up" give future-you nothing to work with. AI-generated notes, properly prompted, capture pain points, next steps, objections, and buying signals in a consistent structure every single time.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>The Core Prompt: Post-Call Note Generator</h2>
          <p>Start with this prompt after every sales call. Paste your rough transcript or bullet-point notes into the input:</p>

          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginTop: "1rem", marginBottom: "1rem" }}>{`You are a CRM note writer for a B2B sales team. Based on the call notes below, produce a structured CRM entry with these exact sections:

**Contact:** [Name, Title, Company]
**Call Date:** [Date]
**Summary:** 2–3 sentences on what was discussed
**Pain Points:** Bullet list of problems the prospect mentioned
**Objections:** Any concerns or blockers raised
**Next Steps:** Specific follow-up actions with owners and deadlines
**Deal Stage:** [Discovery / Qualification / Proposal / Negotiation / Closed]
**Sentiment:** [Hot / Warm / Cold] — with one sentence of reasoning

Call notes:
[PASTE YOUR NOTES HERE]`}</pre>

          <p>This structure works in HubSpot, Salesforce, Pipedrive, or any CRM that accepts free-text notes. The consistent formatting means you can later search or filter by sentiment, stage, or pain point across your entire pipeline.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Automating It End-to-End with Make.com</h2>
          <p>Manual copy-paste is still work. The real win is wiring this into an automated pipeline. With <a href="https://www.make.com/en/register?pc=msarmento42" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Make.com</a>, you can build a flow that triggers on a completed call, sends the transcript to an AI model, and writes the formatted note directly to your CRM — zero human steps required.</p>

          <p>Here is the basic scenario structure in Make.com:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginTop: "1rem", marginBottom: "1rem" }}>{`Trigger: Calendly / Google Meet / Zoom "call ended" webhook
  ↓
Step 1: Fetch transcript (Fireflies.ai or Otter.ai API)
  ↓
Step 2: OpenAI / Claude — run the CRM note prompt with transcript as input
  ↓
Step 3: Parse AI response into structured fields
  ↓
Step 4: HubSpot / Salesforce — create or update deal note
  ↓
Step 5: Slack — post summary to #sales-updates channel`}</pre>

          <p>Setup time is roughly 2–3 hours the first time. After that, every call gets a CRM note within 90 seconds of hanging up.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Prompts for Specific CRM Use Cases</h2>
          <p>Different scenarios need different prompts. Here are three variations worth keeping in your toolkit:</p>

          <p><strong>For discovery calls</strong> — focus on MEDDIC qualification:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginTop: "1rem", marginBottom: "1rem" }}>{`Extract MEDDIC criteria from these call notes. For each field, 
write "Unknown" if it wasn't discussed. Be concise.

Metrics: [quantifiable impact prospect mentioned]
Economic Buyer: [who controls budget]
Decision Criteria: [how they'll evaluate vendors]
Decision Process: [internal steps to buy]
Identify Pain: [core business problem]
Champion: [internal advocate, if identified]

Notes: [PASTE]`}</pre>

          <p><strong>For follow-up emails</strong> — generate the email alongside the CRM note:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginTop: "1rem", marginBottom: "1rem" }}>{`Based on these call notes, write:
1. A 3-bullet CRM note (plain text, under 100 words)
2. A follow-up email (subject line + body, under 150 words, 
   referencing the specific pain points mentioned)

Tone: Professional but conversational. No fluff.

Notes: [PASTE]`}</pre>

          <p><strong>For renewal or upsell calls</strong> — track expansion signals:</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginTop: "1rem", marginBottom: "1rem" }}>{`Analyze these renewal call notes. Output:
- Renewal risk: [High / Medium / Low] + one-sentence reason
- Expansion signals: [Any mentions of new teams, use cases, or budget]
- Action required: [Immediate / Within 1 week / Routine follow-up]
- Suggested next offer: [Based on pain points mentioned]

Notes: [PASTE]`}</pre>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Getting Your Team to Actually Use It</h2>
          <p>The biggest failure mode with AI sales tools is adoption. Reps revert to old habits the moment friction appears. Three things that drive consistent usage: (1) build the AI step into existing tools rather than asking reps to use a new interface, (2) show the output quality in a team demo before rolling out, and (3) give reps permission to edit the AI notes rather than treating them as sacred. The AI writes a draft — the rep refines it in 30 seconds. That framing makes adoption feel safe rather than threatening.</p>

          <p>If your team uses <a href="https://notion.so" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Notion</a> as a secondary knowledge base alongside your CRM, you can use the same Make.com flow to write AI notes to a Notion database simultaneously — giving you a searchable archive of every conversation outside your CRM.</p>

          <div style={{ background: "rgba(0, 212, 255, 0.05)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "1.25rem", marginTop: "2rem", marginBottom: "2rem" }}>
            <p style={{ margin: 0, color: "#a5f3fc" }}>
              💡 <strong>Want to automate the full CRM note workflow?</strong> <a href="/tools" style={{ color: "#00d4ff" }}>See all recommended AI tools →</a>
            </p>
          </div>

        </div>

        <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {["crm", "sales", "automation", "make", "ai-prompts"].map(tag => (
            <span key={tag} style={{ fontSize: "0.75rem", color: "#6b7280", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>#{tag}</span>
          ))}
        </div>

        <NewsletterCapture darkMode={true} />
      </div>
    </div>
  );
}
