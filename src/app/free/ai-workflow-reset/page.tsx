import type { Metadata } from "next";
import FunnelEvent from "../../components/FunnelEvent";
import TrackedLink from "../../components/TrackedLink";
import styles from "../../method-stack/page.module.css";

export const metadata: Metadata = {
  title: "Free 10-Minute AI Workflow Reset | Everyday AI Workflows",
  description: "A free, tool-neutral AI workflow for choosing what matters, reducing overload, and starting with confidence.",
  alternates: { canonical: "https://everydayaiworkflows.com/free/ai-workflow-reset" },
};

export default function WorkflowResetPage() {
  return (
    <div className={styles.page}>
      <FunnelEvent event="lead_view" page="/free/ai-workflow-reset" template="workflow_reset" />
      <main className={styles.main}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>Free workflow</span>
          <h1>Turn a noisy workday into one clear next move—in 10 minutes.</h1>
          <p>
            Use this short reset to choose what matters, plan against real capacity, remove work that
            does not fit, and define the first executable action. No special AI tool or subscription is
            required.
          </p>
          <TrackedLink
            className={styles.button}
            download="The-10-Minute-AI-Workflow-Reset.pdf"
            event="template_download"
            href="/downloads/The-10-Minute-AI-Workflow-Reset.pdf"
            page="/free/ai-workflow-reset"
            template="workflow_reset"
          >
            Download the free PDF
          </TrackedLink>
          <p className={styles.status}>Direct download. No email address required.</p>
        </section>

        <section className={styles.free}>
          <h2>What the reset helps you decide</h2>
          <p>
            What must happen today, what can wait, what should be removed, and what you can do in the
            next focused block. The review step keeps the AI&apos;s suggestion from becoming an
            unexamined plan.
          </p>
          <a href="/method-stack">See the complete Method Stack approach →</a>
        </section>
      </main>
    </div>
  );
}
