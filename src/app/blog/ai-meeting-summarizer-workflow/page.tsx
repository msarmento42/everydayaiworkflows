export const metadata = {
  title: "Build an AI Meeting Summarizer Workflow: Save Hours Every Week",
  description: "The average knowledge worker sits in 10+ hours of meetings per week and leaves most of them with vague notes and no clear action items. An AI meeting...",
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)", color: "#fff", fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "2rem" }}>
        <a href="/blog" style={{ color: "#00d4ff", textDecoration: "none" }}>← Back to Blog</a>
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.75rem", color: "#7c3aed", background: "rgba(124,58,237,0.2)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>Automation</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>⏱️ 6 min read</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>May 17, 2025</span>
        </div>
        <h1 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1.5rem", lineHeight: "1.2" }}>
          Build an AI Meeting Summarizer Workflow: Save Hours Every Week
        </h1>

        <div style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "#d1d5db" }}>

          <p>The average knowledge worker sits in 10+ hours of meetings per week and leaves most of them with vague notes and no clear action items. An AI meeting summarizer workflow changes that — automatically converting raw transcripts or rough notes into structured summaries, decision logs, and follow-up tasks within minutes of a call ending.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 1: Get Your Transcript</h2>
          <p>You need a raw transcript to work with. There are three common ways to get one:</p>
          <p><strong>Option A — Fireflies.ai or Otter.ai:</strong> These tools auto-join your Zoom, Google Meet, or Teams calls and produce a timestamped transcript. Free tiers cover most individual use cases. Export the transcript as plain text.</p>
          <p><strong>Option B — Zoom built-in transcription:</strong> Zoom Pro and above includes AI-generated transcripts. Go to the recording page, download the VTT file, and strip the timestamps using a simple script or find-and-replace.</p>
          <p><strong>Option C — Manual notes:</strong> If you do not record calls, even rough bullet-point notes work. The AI will still produce something far more useful than what you wrote in the moment.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 2: The Core Summarizer Prompt</h2>
          <p>Once you have a transcript, paste it into Claude or ChatGPT with this prompt:</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginTop: "1rem", marginBottom: "1rem" }}>{`You are an expert at extracting signal from meeting transcripts.
Read the transcript below and produce:

1. **TL;DR** (2–3 sentences): What was this meeting about and what was decided?
2. **Key Decisions** (bullet list): Only include firm decisions, not discussion points.
3. **Action Items** (table): | Owner | Task | Due Date |
4. **Open Questions** (bullet list): Unresolved issues that need follow-up.
5. **Next Meeting** (1 line): Recommended agenda for the follow-up, if applicable.

Be specific. Use the names from the transcript for owners.
Do not include filler or restate the discussion — only outcomes.

Transcript:
[paste transcript here]`}</pre>
          <p>This prompt reliably produces a summary you can send directly to attendees without editing. The key is the instruction "do not restate the discussion" — without it, AI models tend to narrate what was said rather than extract what matters.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 3: Automate the Routing with Make.com</h2>
          <p>Running the prompt manually works, but the real leverage comes from automating the whole pipeline. With <a href="https://www.make.com/en/register?pc=msarmento42" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Make.com</a>, you can build a workflow that runs end-to-end without you touching anything:</p>
          <p>Here is the flow:</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginTop: "1rem", marginBottom: "1rem" }}>{`Trigger: New recording in Google Drive folder (or Fireflies webhook)
  ↓
Step 1: Download transcript file
  ↓
Step 2: HTTP module → OpenAI or Claude API with the summarizer prompt
  ↓
Step 3: Parse the structured output (TL;DR, decisions, action items)
  ↓
Step 4a: Send summary email to meeting attendees via Gmail
Step 4b: Create tasks in your project tracker (Notion, Asana, ClickUp)
Step 4c: Log the summary to a Notion database (meeting archive)`}</pre>
          <p>Setting this up in Make.com takes about 45 minutes the first time. Once it is running, every recorded meeting automatically produces a summary email and tasks — no manual work required. Make.com has pre-built modules for Google Drive, Gmail, Notion, Asana, OpenAI, and dozens of other tools, so most of this is drag-and-drop.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 4: Specialized Prompts for Different Meeting Types</h2>
          <p>The generic summarizer works well, but you can get better results by tailoring the prompt to the meeting type:</p>
          <p><strong>For client calls:</strong> Add "Extract any commitments made by our team and flag any scope changes or new requests from the client." This keeps your CRM notes accurate and surfaces scope creep early.</p>
          <p><strong>For 1:1s:</strong> Add "Identify any blockers the person mentioned, career development topics raised, and any feedback given or received." This makes 1:1 notes actually useful for performance reviews.</p>
          <p><strong>For brainstorming sessions:</strong> Add "List all distinct ideas mentioned, grouped by theme, regardless of whether they were endorsed or rejected." Brainstorms lose 60% of their ideas by the end of the day without this.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 5: Build a Searchable Meeting Archive</h2>
          <p>The compounding value of this workflow comes over time. If every meeting summary lands in a structured Notion database, you can search across months of meetings to answer questions like "what did we decide about the pricing model in Q1?" or "who owns the API integration task from the March kickoff?"</p>
          <p>Set up your Notion database with these fields: Meeting Name, Date, Attendees (multi-select), Decisions (text), Action Items (linked to your tasks database), and Status (Open / Archived). Use the Make.com automation to populate these fields automatically from the AI output. Within a month, you will have a meeting archive that actually earns its keep.</p>

          <div style={{ background: "rgba(0, 212, 255, 0.05)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "1.25rem", marginTop: "2rem", marginBottom: "2rem" }}>
            <p style={{ margin: 0, color: "#a5f3fc" }}>
              💡 <strong>Want to automate this entire pipeline?</strong> Make.com connects your transcript source, AI model, email, and task manager into a single no-code workflow — no engineering required. <a href="/tools" style={{ color: "#00d4ff" }}>See all recommended AI tools →</a>
            </p>
          </div>

        </div>

        <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {["meetings", "automation", "ai-tools", "make-com", "productivity", "workflows"].map(tag => (
            <span key={tag} style={{ fontSize: "0.75rem", color: "#6b7280", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>#{tag}</span>
          ))}
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
