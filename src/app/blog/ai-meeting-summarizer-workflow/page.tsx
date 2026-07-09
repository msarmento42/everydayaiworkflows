import NewsletterCapture from "../components/NewsletterCapture";

export const metadata = {
  title: "Build an AI Meeting Summarizer Workflow: Save Hours Every Week | Everyday AI Workflows",
  description: "Turn raw meeting transcripts into structured summaries, decision logs, and action items automatically. Step-by-step guide to building a fully automated Make.com pipeline.",
};

export default function BlogPost() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)", color: "#fff", fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "2rem" }}>
        <a href="/blog" style={{ color: "#00d4ff", textDecoration: "none" }}>{"← Back to Blog"}</a>
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.75rem", color: "#7c3aed", background: "rgba(124,58,237,0.2)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>Automation</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>{"⏱️ 9 min read"}</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>June 17, 2026</span>
        </div>
        <h1 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1.5rem", lineHeight: "1.2" }}>
          Build an AI Meeting Summarizer Workflow: Save Hours Every Week
        </h1>

        <div style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "#d1d5db" }}>

          <p>The average knowledge worker spends 10+ hours per week in meetings and leaves most of them with vague notes and no clear action items. An AI meeting summarizer workflow fixes that — automatically converting raw transcripts or rough notes into structured summaries, decision logs, and follow-up tasks within minutes of a call ending. This guide walks through the exact prompts and automation setup to make it happen.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 1: Get Your Transcript</h2>
          <p>You need a raw transcript to work with. There are three common ways to get one:</p>
          <p><strong>Option A — Fireflies.ai or Otter.ai:</strong> These tools auto-join your Zoom, Google Meet, or Teams calls and produce a timestamped transcript. Free tiers cover most individual use cases. Export the transcript as plain text.</p>
          <p><strong>Option B — Zoom built-in transcription:</strong> Zoom Pro and above includes AI-generated transcripts. Go to the recording page, download the VTT file, and strip the timestamps with a simple find-and-replace.</p>
          <p><strong>Option C — Manual notes:</strong> If you do not record calls, even rough bullet-point notes work. The AI will still produce something far more useful than what you wrote in the moment. Give it the messiest notes you have — it handles unstructured input well.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 2: The Core Summarizer Prompt</h2>
          <p>Once you have a transcript, paste it into Claude or ChatGPT with this prompt:</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginTop: "1rem", marginBottom: "1rem", whiteSpace: "pre-wrap" }}>{`You are an expert at extracting signal from meeting transcripts.
Read the transcript below and produce:

1. TL;DR (2–3 sentences): What was this meeting about and what was decided?
2. Key Decisions (bullet list): Only firm decisions, not discussion points.
3. Action Items (table): | Owner | Task | Due Date |
4. Open Questions (bullet list): Unresolved issues needing follow-up.
5. Next Meeting (1 line): Recommended agenda for the follow-up, if applicable.

Be specific. Use names from the transcript for owners.
Do not include filler or restate the discussion — only outcomes.

Transcript:
[paste transcript here]`}</pre>          <div style={{ textAlign: "center", margin: "2rem 0" }}>
            <img src="/images/workflows/ai-meeting-summarizer/ai-prompt-example.png" alt="Screenshot of an AI chat interface showing the meeting summarizer prompt and its structured output." style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", border: "1px solid #374151" }} />
            <p style={{ fontSize: "0.9rem", color: "#9ca3af", marginTop: "0.5rem" }}>Example of the AI summarizer prompt in action, generating structured output.</p>
          </div>
          <p>This prompt reliably produces a summary you can send directly to attendees without editing. The key instruction is "do not restate the discussion" — without it, AI models tend to narrate what was said rather than extract what matters. The table format for action items also forces clarity: if an owner or due date is missing, that ambiguity becomes visible in the output rather than buried in prose.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 3: Automate the Routing with Make.com</h2>
          <p>Running the prompt manually works, but the real leverage comes from automating the entire pipeline. With <a href="https://www.make.com/en/register?pc=msarmento42" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Make.com</a>, you can build a workflow that runs end-to-end — transcript comes in, summary goes out, tasks get created — without touching anything yourself. For more on building Make.com automations from scratch, see our guide on <a href="/blog/how-to-automate-tasks-with-make" style={{ color: "#00d4ff" }}>how to automate tasks with Make</a>.</p>
          <p>Here is the full workflow architecture:</p>
          <pre style={{ background: "rgba(0,0,0,0.4)", border: "1px solid #374151", borderRadius: "8px", padding: "1.25rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc", marginTop: "1rem", marginBottom: "1rem", whiteSpace: "pre-wrap" }}>{`Trigger: New recording in Google Drive folder (or Fireflies webhook)
  ↓
Step 1: Download transcript file
  ↓
Step 2: HTTP module → Claude or OpenAI API with summarizer prompt
  ↓
Step 3: Parse structured output (TL;DR, decisions, action items)
  ↓
Step 4a: Send summary email to attendees via Gmail
Step 4b: Create tasks in Notion / Asana / ClickUp
Step 4c: Log the summary to a Notion meeting archive database`}</pre>          <div style={{ textAlign: "center", margin: "2rem 0" }}>
            <img src="/images/workflows/ai-meeting-summarizer/make-com-workflow.png" alt="Screenshot of a Make.com scenario illustrating the automated meeting summarizer workflow." style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", border: "1px solid #374151" }} />
            <p style={{ fontSize: "0.9rem", color: "#9ca3af", marginTop: "0.5rem" }}>A visual representation of the Make.com automation flow for meeting summarization.</p>
          </div>
          <p>Setting this up in <a href="https://www.make.com/en/register?pc=msarmento42" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Make.com</a> takes about 45 minutes the first time. Make has pre-built modules for Google Drive, Gmail, Notion, Asana, OpenAI, and dozens of other tools, so most of this is drag-and-drop configuration rather than code. Once it is running, every recorded meeting automatically produces a summary email and action items with no manual work.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 4: Specialized Prompts by Meeting Type</h2>
          <p>The generic summarizer works well, but you get better results by tailoring the prompt to the meeting type:</p>
          <p><strong>For client calls:</strong> Add "Extract any commitments made by our team and flag any scope changes or new requests from the client." This keeps your CRM notes accurate and surfaces scope creep early — two things that would otherwise require reviewing the full transcript.</p>
          <p><strong>For 1:1s:</strong> Add "Identify any blockers the person mentioned, career development topics raised, and any feedback given or received." This makes 1:1 notes genuinely useful for quarterly reviews rather than just a log of what you talked about.</p>
          <p><strong>For brainstorming sessions:</strong> Add "List all distinct ideas mentioned, grouped by theme, regardless of whether they were endorsed or rejected." Brainstorms lose 60% of their ideas within a day without this — the AI captures the ones that felt minor in the moment but turn out to matter later.</p>
          <p><strong>For board or exec reviews:</strong> Add "Focus on strategic decisions, deferred items, and any metrics or targets mentioned. Omit operational detail." Executive summaries should be a third the length of regular meeting summaries.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 5: Build a Searchable Meeting Archive</h2>
          <p>The compounding value of this workflow comes over time. If every meeting summary lands in a structured Notion database, you can search across months of meetings to answer questions like "what did we decide about the pricing model in Q1?" or "who owns the API integration task from the March kickoff?" without reviewing a single calendar event.</p>
          <p>Set up your <a href="https://notion.so" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Notion</a> database with these fields: Meeting Name, Date, Attendees (multi-select), Decisions (text), Action Items (linked to your tasks database), and Status (Open / Archived). Use the Make.com automation to populate these fields automatically from the AI output. Within a month, you will have a searchable institutional memory that earns its keep daily. Pair this with the <a href="/blog/notion-ai-workflow-guide" style={{ color: "#00d4ff" }}>Notion AI workflow patterns</a> for even more leverage from the same database.          <div style={{ textAlign: "center", margin: "2rem 0" }}>
            <img src="/images/workflows/ai-meeting-summarizer/notion-archive.png" alt="Screenshot of a Notion database structured for archiving meeting summaries and action items." style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", border: "1px solid #374151" }} />
            <p style={{ fontSize: "0.9rem", color: "#9ca3af", marginTop: "0.5rem" }}>A Notion database template for organizing and searching meeting summaries.</p>
          </div></p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 6: Quality-Check Your AI Summaries</h2>
          <p>AI meeting summarizers are excellent but not infallible. Three failure modes to watch for:</p>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: "2" }}>
            <li><strong>Attribution errors:</strong> The AI assigns a task to the wrong person, especially when multiple people are speaking about the same topic. Review the Owner column before sending the summary.</li>
            <li><strong>Missing nuance:</strong> A decision that was made tentatively may appear in the summary as firm. Add "Flag any decisions that seemed tentative or conditional" to your prompt if this is a problem.</li>
            <li><strong>Hallucinated due dates:</strong> If a specific date was not mentioned, the AI sometimes invents a reasonable-sounding one. Instruct it to write "TBD" rather than guessing.</li>
          </ul>
          <p>A 30-second scan of the action items table before sending the email catches 95% of these issues. The remaining time investment is still a fraction of writing the summary manually.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Recommended Tools for This Workflow</h2>
          <p>Here are the tools that work best together for a complete meeting summarizer pipeline:</p>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: "2" }}>
            <li><a href="https://www.make.com/en/register?pc=msarmento42" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Make.com</a> — no-code automation to connect your transcript source, AI model, and task manager</li>
            <li><a href="https://notion.so" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Notion</a> — meeting archive database and task tracking</li>
            <li>Claude or ChatGPT — the AI core of the summarizer; both work equally well with the prompts above</li>
            <li>Fireflies.ai or Otter.ai — automatic transcript generation for all your calls</li>
          </ul>
          <p>For a broader look at how to tie these tools together across your whole workflow, check out our guide to <a href="/blog/automating-social-media-with-ai" style={{ color: "#00d4ff" }}>automating content workflows with AI</a> — many of the same Make.com patterns apply.</p>

          <div style={{ background: "rgba(0, 212, 255, 0.05)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "1.25rem", marginTop: "2rem", marginBottom: "2rem" }}>
            <p style={{ margin: 0, color: "#a5f3fc" }}>
              {"💡 "}<strong>Want to automate this entire pipeline without writing a single line of code?</strong>{" Make.com connects your transcript source, AI model, email, and task manager into a single workflow in under an hour. "}<a href="/tools" style={{ color: "#00d4ff" }}>{"Browse the full AI toolkit →"}</a>
            </p>
          </div>

        </div>

        <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {["meetings", "automation", "ai-tools", "make-com", "productivity", "workflows"].map(tag => (
            <span key={tag} style={{ fontSize: "0.75rem", color: "#6b7280", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>#{tag}</span>
          ))}
        </div>

        <NewsletterCapture darkMode={true} />
      </div>
    </div>
  );
}
