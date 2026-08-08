import NewsletterCapture from "../components/NewsletterCapture";
import AffiliateDisclosure from "../components/AffiliateDisclosure";
import SourceMethodBlock from "../components/SourceMethodBlock";

export const metadata = {
  title: "Build an AI Meeting Summarizer Workflow: Turn Transcripts into Decisions | Everyday AI Workflows",
  description: "Use transcripts and structured prompts to create meeting summaries, decision logs, and action items with a Make.com workflow.",
  alternates: {
    canonical: "/blog/ai-meeting-summarizer-workflow",
  },
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
          Build an AI Meeting Summarizer Workflow: Turn Transcripts into Decisions
        </h1>
        <AffiliateDisclosure />
        <SourceMethodBlock
          reviewedOn="August 5, 2026"
          sources={[
            { label: "Make Help Center: Create your first scenario", href: "https://help.make.com/create-your-first-scenario" },
            { label: "Notion AI FAQs", href: "https://www.notion.com/help/notion-ai-faqs" },
          ]}
        />

        <div style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "#d1d5db" }}>

          <p>Meetings often leave teams with vague notes and no clear action items. An AI meeting summarizer workflow can convert raw transcripts or rough notes into structured summaries, decision logs, and follow-up tasks after a call. This guide walks through the prompts and automation setup so you can review the output against the original conversation.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 1: Get Your Transcript</h2>
          <p>You need a raw transcript to work with. There are three common ways to get one:</p>
          <p><strong>Option A — Fireflies.ai or Otter.ai:</strong> These tools auto-join your Zoom, Google Meet, or Teams calls and produce a timestamped transcript. Free tiers cover most individual use cases. Export the transcript as plain text.</p>
          <p><strong>Option B — Zoom built-in transcription:</strong> Zoom Pro and above includes AI-generated transcripts. Go to the recording page, download the VTT file, and strip the timestamps with a simple find-and-replace.</p>
          <p><strong>Option C — Manual notes:</strong> If you do not record calls, rough bullet-point notes can still be a useful input. Give the model the context you have, then review the result because unstructured notes can leave important details ambiguous.</p>

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
[paste transcript here]`}</pre>
          <p>This prompt is designed to produce a structured draft for review. The key instruction is "do not restate the discussion" — without it, AI models tend to narrate what was said rather than extract what matters. The table format for action items also makes missing owners or due dates visible instead of burying that ambiguity in prose.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 3: Automate the Routing with Make.com</h2>
          <p>Running the prompt manually works, but you can also connect the steps into a single pipeline. With <a href="https://www.make.com/en/register?pc=msarmento42" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Make.com</a>, transcript intake, summarization, and task creation can move through one workflow with fewer manual handoffs. For more on building Make.com automations from scratch, see our guide on <a href="/blog/how-to-automate-tasks-with-make" style={{ color: "#00d4ff" }}>how to automate tasks with Make</a>.</p>
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
Step 4c: Log the summary to a Notion meeting archive database`}</pre>
          <p>Setting this up in <a href="https://www.make.com/en/register?pc=msarmento42" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Make.com</a> involves connecting the transcript source, AI step, and destination apps. Make provides pre-built modules for services such as Google Drive, Gmail, Notion, Asana, and OpenAI, so the configuration can be assembled without writing the whole integration from scratch. Test each step with a sample transcript before enabling the workflow for recorded meetings.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 4: Specialized Prompts by Meeting Type</h2>
          <p>The generic summarizer is a starting point; tailoring the prompt to the meeting type gives the output a clearer review target:</p>
          <p><strong>For client calls:</strong> Add "Extract any commitments made by our team and flag any scope changes or new requests from the client." This gives you a focused place to check CRM notes and scope changes before saving them.</p>
          <p><strong>For 1:1s:</strong> Add "Identify any blockers the person mentioned, career development topics raised, and any feedback given or received." This gives 1:1 notes a structure that can be revisited during quarterly reviews instead of leaving them as a log of what you talked about.</p>
          <p><strong>For brainstorming sessions:</strong> Add "List all distinct ideas mentioned, grouped by theme, regardless of whether they were endorsed or rejected." This helps preserve ideas that felt minor in the moment but may deserve a later review.</p>
          <p><strong>For board or exec reviews:</strong> Add "Focus on strategic decisions, deferred items, and any metrics or targets mentioned. Omit operational detail." The output can be shorter than a regular meeting summary when the audience only needs decisions and risks.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 5: Build a Searchable Meeting Archive</h2>
          <p>The value of this workflow can grow over time. If meeting summaries land in a structured Notion database, you can search across the archive for questions like "what did we decide about the pricing model in Q1?" or "who owns the API integration task from the March kickoff?" before opening the original calendar event.</p>
          <p>Set up your <a href="https://notion.so" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Notion</a> database with these fields: Meeting Name, Date, Attendees (multi-select), Decisions (text), Action Items (linked to your tasks database), and Status (Open / Archived). Use the Make.com automation to populate these fields from the AI output, then spot-check the fields before they become part of your archive. As the archive grows, it becomes easier to search for decisions and ownership. Pair this with the <a href="/blog/notion-ai-workflow-guide" style={{ color: "#00d4ff" }}>Notion AI workflow patterns</a> for more ways to query the same database.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 6: Quality-Check Your AI Summaries</h2>
          <p>AI meeting summarizers are excellent but not infallible. Three failure modes to watch for:</p>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: "2" }}>
            <li><strong>Attribution errors:</strong> The AI assigns a task to the wrong person, especially when multiple people are speaking about the same topic. Review the Owner column before sending the summary.</li>
            <li><strong>Missing nuance:</strong> A decision that was made tentatively may appear in the summary as firm. Add "Flag any decisions that seemed tentative or conditional" to your prompt if this is a problem.</li>
            <li><strong>Hallucinated due dates:</strong> If a specific date was not mentioned, the AI sometimes invents a reasonable-sounding one. Instruct it to write "TBD" rather than guessing.</li>
          </ul>
          <p>Review the action-items table before sending the email. That quick check can catch attribution, nuance, and due-date errors before they reach the team.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Recommended Tools for This Workflow</h2>
          <p>Here are tools that fit together for a meeting summarizer pipeline:</p>
          <ul style={{ paddingLeft: "1.5rem", lineHeight: "2" }}>
            <li><a href="https://www.make.com/en/register?pc=msarmento42" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Make.com</a> — no-code automation to connect your transcript source, AI model, and task manager</li>
            <li><a href="https://notion.so" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Notion</a> — meeting archive database and task tracking</li>
            <li>Claude or ChatGPT — the AI core of the summarizer; both work equally well with the prompts above</li>
            <li>Fireflies.ai or Otter.ai — automatic transcript generation for all your calls</li>
          </ul>
          <p>For a broader look at how to tie these tools together across your whole workflow, check out our guide to <a href="/blog/automating-social-media-with-ai" style={{ color: "#00d4ff" }}>automating content workflows with AI</a> — many of the same Make.com patterns apply.</p>

          <div style={{ background: "rgba(0, 212, 255, 0.05)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "1.25rem", marginTop: "2rem", marginBottom: "2rem" }}>
            <p style={{ margin: 0, color: "#a5f3fc" }}>
              {"💡 "}<strong>Want to connect this pipeline without writing a custom integration?</strong>{" Make.com can connect your transcript source, AI model, email, and task manager into a single workflow. "}<a href="/tools" style={{ color: "#00d4ff" }}>{"Browse the full AI toolkit →"}</a>
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
