"use client";

import NewsletterCapture from "../../components/NewsletterCapture";

export default function BlogPost() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0d1b2a 100%)", color: "#fff", fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", paddingTop: "2rem" }}>
        <a href="/blog" style={{ color: "#00d4ff", textDecoration: "none" }}>← Back to Blog</a>
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.75rem", color: "#7c3aed", background: "rgba(124,58,237,0.2)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>AI Tools</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>⏱️ 7 min read</span>
          <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>May 19, 2025</span>
        </div>
        <h1 style={{ fontSize: "2.2rem", marginTop: "0.5rem", marginBottom: "1.5rem", lineHeight: "1.2" }}>
          How to Use AI to Write YouTube Scripts That Actually Keep Viewers Watching
        </h1>

        <div style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "#d1d5db" }}>

          <p>Most YouTube scripts fail in the first 30 seconds — not because the creator lacks ideas, but because the structure is wrong. AI won&apos;t make you a better storyteller overnight, but it will help you stop writing cold-open scripts that lose viewers before the hook lands. Here&apos;s the exact workflow cutting script time in half for serious creators.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 1: Nail Your Hook Before Writing Anything Else</h2>
          <p>The first 15 seconds determine whether your audience retention curve slopes up or immediately craters. Before opening a doc, use Claude or ChatGPT to generate 10 hook variations for your topic. Give it real context: your channel niche, the specific video angle, and a description of your target viewer.</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc" }}>{`Prompt:
"My YouTube channel teaches personal finance to people in their 30s
who feel behind on saving. I'm making a video titled 'You're Not
Actually Behind — Here's What the Numbers Show'. Write 10 different
15-second cold opens using a surprising stat, a counterintuitive
claim, or a relatable scenario. No fluff, no 'hey guys'. Each should
make the viewer feel they HAVE to keep watching."`}</pre>
          <p>Run this, pick the two strongest hooks, then paste them back and ask: &quot;Which of these two hooks is more likely to retain a viewer who almost scrolled past? Explain why in two sentences.&quot; You get a quick gut-check before you commit to a direction.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 2: Build a Beat Sheet, Not a Full Script</h2>
          <p>The biggest AI script mistake is asking it to write the whole video in one shot. You get generic, padded output that sounds nothing like you. Instead, use AI to build a beat sheet — a skeleton of 6–10 moments the video must hit — then write the actual lines yourself (or with targeted AI help per section).</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc" }}>{`Prompt:
"Create a beat sheet for an 8-minute YouTube video titled '[YOUR TITLE]'.
Follow this arc: Hook → Problem agitation → Reframe/insight →
Step-by-step breakdown (3 steps) → Common mistake to avoid →
Call to action. For each beat give me: the beat name, what emotion
or thought it should trigger, and one sentence describing what it covers.
My audience is [describe audience]."`}</pre>
          <p>This gives you a production-ready outline in under a minute. Fill in each beat with your own voice — or prompt AI section by section, giving it full context about that specific beat only.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 3: Punch Up Transitions and Retention Loops</h2>
          <p>Retention loops — small cliffhangers that push the viewer into the next section — are what separate 40% average view duration from 65%. Most creators either skip them or write the same clunky transition every time. AI is excellent at generating variety here.</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc" }}>{`Prompt:
"I just finished explaining [Section 2 topic]. The next section covers
[Section 3 topic]. Write 5 different one-sentence transitions that
create a retention loop — hint at what's coming without giving it away,
making a viewer feel they'd miss something if they left. Conversational
tone, not clickbait-y."`}</pre>
          <p>Pick one, test it against your mental model of your viewer hitting that moment. If it feels forced, run the prompt again with &quot;less dramatic, more conversational.&quot;</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 4: Generate SEO-Aware Titles and Descriptions</h2>
          <p>Once the script is done, use <a href="https://jasper.ai" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Jasper AI</a> or Claude to draft title variants and a YouTube description optimized for search. Paste your beat sheet and ask for 8 title variations — mix curiosity gaps, number-based titles, and how-to formats — then run the top candidates through your keyword tool.</p>
          <pre style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "1rem", overflowX: "auto", fontSize: "0.9rem", color: "#a5f3fc" }}>{`Prompt:
"Based on this beat sheet: [paste beat sheet], write:
1. 8 YouTube title variations (mix curiosity gap, number-based, how-to)
2. A 150-word YouTube description optimized for the keyword
   '[target keyword]' — include the keyword in the first sentence,
   use short paragraphs, end with a soft CTA to subscribe."`}</pre>
          <p>The description draft saves 10–15 minutes per video and usually only needs a sentence or two of edits to match your channel voice.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Step 5: Automate the Repetitive Parts with a Workflow</h2>
          <p>If you publish consistently — say, two videos a week — you can set up a repeatable AI scripting pipeline using <a href="https://www.make.com/en/register?pc=msarmento42" rel="noopener sponsored" style={{ color: "#00d4ff" }}>Make.com</a> to connect your idea backlog (a Notion database or Airtable sheet) with your AI prompts. When you add a video idea with a topic and target keyword, an automated scenario can trigger Claude via API to generate the beat sheet and hook options, then push the output to a Google Doc ready for your review.</p>
          <p>This isn&apos;t a one-click script factory — you still write and record. But it compresses the &quot;blank page to outline&quot; phase from 30–45 minutes to under 5. Over a year of consistent uploads, that&apos;s 40+ hours back in your schedule.</p>

          <h2 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", borderBottom: "1px solid #374151", paddingBottom: "0.5rem" }}>Where AI Still Can&apos;t Help You</h2>
          <p>AI can&apos;t generate your personal stories, your on-camera energy, or the specific credibility that comes from lived experience. The creators who use AI best treat it as a structural tool — it builds the scaffold, they pour the concrete. Feed it your raw ideas, your research, your opinions, and let it organize and sharpen. The output sounds like you, not a robot, because you never handed it the wheel.</p>
          <p>Stop using AI to write your videos. Start using it to think faster, structure tighter, and ship more consistently.</p>

          <div style={{ background: "rgba(0, 212, 255, 0.05)", border: "1px solid rgba(0, 212, 255, 0.2)", borderRadius: "12px", padding: "1.25rem", marginTop: "2rem", marginBottom: "2rem" }}>
            <p style={{ margin: 0, color: "#a5f3fc" }}>
              💡 <strong>Want the right AI writing tools for your content workflow?</strong> <a href="/tools" style={{ color: "#00d4ff" }}>See all recommended AI tools →</a>
            </p>
          </div>

        </div>

        <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {["youtube", "ai-writing", "content-creation", "video-scripts", "productivity"].map(tag => (
            <span key={tag} style={{ fontSize: "0.75rem", color: "#6b7280", background: "rgba(255,255,255,0.05)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>#{tag}</span>
          ))}
        </div>

        <NewsletterCapture darkMode={true} />
      </div>
    </div>
  );
}
