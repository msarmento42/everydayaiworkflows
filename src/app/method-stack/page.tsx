import type { Metadata } from "next";
import FunnelEvent from "../components/FunnelEvent";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Method Stack AI Work Systems | Everyday AI Workflows",
  description: "Practical, tool-neutral systems for clearer workdays, realistic weekly planning, research, and decisions.",
  alternates: { canonical: "https://everydayaiworkflows.com/method-stack" },
};

const products = [
  {
    name: "AI Weekly Planning Kit",
    description: "Build a realistic week with prioritization, capacity checks, and editable planning workflows.",
    price: "$19",
  },
  {
    name: "AI Research & Decision Kit",
    description: "Compare options with evidence checks, explicit criteria, and decision-ready outputs.",
    price: "$19",
  },
  {
    name: "AI Workday System",
    description: "Fourteen workflows for priorities, meetings, projects, research, and executable next actions.",
    price: "$49",
  },
  {
    name: "Method Stack Complete System",
    description: "All three systems for daily execution, weekly planning, research, and better decisions. Save $18 versus buying separately.",
    price: "$69",
  },
] as const;

export default function MethodStackPage() {
  return (
    <div className={styles.page}>
      <FunnelEvent event="product_view" page="/method-stack" product="method_stack_collection" />
      <main className={styles.main}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>Method Stack</span>
          <h1>Better prompts are not enough. Build a work system.</h1>
          <p>
            Method Stack turns AI into a repeatable operating layer: clear inputs, useful output formats,
            review gates, failure recovery, and a next action. It works with the capable AI assistant you
            already use.
          </p>
        </section>

        <section className={styles.grid} aria-label="Method Stack products">
          {products.map((product) => (
            <article className={styles.card} key={product.name}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className={styles.price}>{product.price}</div>
              <div className={styles.status}>Private preview — checkout opens after final delivery testing.</div>
            </article>
          ))}
        </section>

        <section className={styles.free}>
          <span className={styles.eyebrow}>Start free</span>
          <h2>Turn a noisy workday into one clear next move—in 10 minutes.</h2>
          <p>Try the free, tool-neutral reset on a real day before choosing a full system.</p>
          <a className={styles.button} href="/free/ai-workflow-reset">Get the free reset</a>
        </section>

        <p className={styles.disclosure}>
          Method Stack is the product brand created for Everyday AI Workflows readers. Paid links will be
          clearly identified when checkout opens. AI subscriptions are not included.
        </p>
      </main>
    </div>
  );
}
