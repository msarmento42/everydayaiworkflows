import type { Metadata } from "next";
import FunnelEvent from "../components/FunnelEvent";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Method Stack AI Work Systems | Everyday AI Workflows",
  description:
    "Compare practical, tool-neutral systems for clearer workdays, realistic weekly planning, research, and decisions.",
  alternates: { canonical: "https://everydayaiworkflows.com/method-stack" },
};

const products = [
  {
    name: "AI Weekly Planning Kit",
    label: "Focused kit",
    problem: "My week is overloaded",
    outcome: "Design a realistic week before it starts.",
    description:
      "Turn competing priorities, meetings, and limited capacity into a weekly plan you can actually execute.",
    includes: ["Weekly Design workflow", "Daily Reset", "Shutdown Review", "Editable templates"],
    price: "$19",
    featured: false,
  },
  {
    name: "AI Research & Decision Kit",
    label: "Focused kit",
    problem: "The evidence is unclear",
    outcome: "Research enough to make a defensible decision.",
    description:
      "Define the question, test sources and claims, compare trade-offs, and reach a recommendation without false certainty.",
    includes: ["Research Brief", "Decision Brief", "Evidence checks", "Worked example"],
    price: "$19",
    featured: false,
  },
  {
    name: "AI Workday System",
    label: "Flagship system",
    problem: "My whole workday needs structure",
    outcome: "Build a repeatable operating rhythm for real work.",
    description:
      "Use fourteen connected workflows for priorities, projects, meetings, research, reviews, and executable next actions.",
    includes: ["14 connected workflows", "Field guide", "Prompt library", "Worked examples"],
    price: "$49",
    featured: true,
  },
  {
    name: "Method Stack Complete System",
    label: "Complete library",
    problem: "I want the full operating layer",
    outcome: "Handle daily, weekly, and decision work in one system.",
    description:
      "Get all three Method Stack products plus a quick-start map that shows which workflow to use for each kind of problem.",
    includes: ["All three products", "Quick-start map", "Editable source files", "Personal-use license"],
    price: "$69",
    featured: false,
  },
] as const;

const comparisonRows = [
  ["Weekly Planning Kit", "Planning a believable week", "Weekly", "Focused", "$19"],
  ["Research & Decision Kit", "Making an evidence-based choice", "As needed", "Focused", "$19"],
  ["Workday System", "Running daily knowledge work", "Daily", "Broad", "$49"],
  ["Complete System", "Building the full operating layer", "Daily + weekly", "Complete", "$69"],
] as const;

const faqs = [
  {
    question: "Do I need a specific AI tool?",
    answer:
      "No. Method Stack is tool-neutral and works with a capable general-purpose AI assistant. An AI subscription is not included.",
  },
  {
    question: "Is this just a collection of prompts?",
    answer:
      "No. Each workflow defines when to use it, the inputs it needs, the required output, a human review gate, failure recovery, and the next action.",
  },
  {
    question: "Which product should I start with?",
    answer:
      "Choose the smallest product that solves your current problem. Start with a $19 focused kit for weekly planning or research. Choose the Workday System for a broader daily operating rhythm, or the Complete System if you want all three from the start.",
  },
  {
    question: "What format do I receive?",
    answer:
      "Each product includes a designed PDF, editable working files, copy-and-paste prompts, examples, a quick-start guide, and a personal-use license.",
  },
] as const;

export default function MethodStackPage() {
  return (
    <div className={styles.page}>
      <FunnelEvent event="product_view" page="/method-stack" product="method_stack_collection" />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.launchNote}>Private preview · checkout opens after delivery testing</div>
          <span className={styles.eyebrow}>Method Stack</span>
          <h1>Stop collecting prompts. Build a way of working.</h1>
          <p className={styles.heroCopy}>
            Method Stack turns AI into a repeatable operating layer for planning, execution, research,
            and decisions. Clear inputs. Useful formats. Human review gates. A concrete next action.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="/free/ai-workflow-reset">
              Start with the free reset
            </a>
            <a className={styles.secondaryButton} href="#compare">
              Compare the systems
            </a>
          </div>
          <ul className={styles.trustList} aria-label="Method Stack principles">
            <li>Tool-neutral</li>
            <li>Editable files</li>
            <li>Worked examples</li>
            <li>No income promises</li>
          </ul>
        </section>

        <section className={styles.selector} aria-labelledby="selector-heading">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Choose by problem</span>
            <h2 id="selector-heading">Buy the smallest system that solves today&apos;s bottleneck.</h2>
            <p>You can expand later. There is no reason to start with more process than you need.</p>
          </div>

          <div className={styles.grid}>
            {products.map((product) => (
              <article className={`${styles.card} ${product.featured ? styles.featured : ""}`} key={product.name}>
                <div className={styles.cardTopline}>
                  <span>{product.label}</span>
                  {product.featured ? <span className={styles.recommended}>Most versatile</span> : null}
                </div>
                <p className={styles.problem}>{product.problem}</p>
                <h3>{product.name}</h3>
                <p className={styles.outcome}>{product.outcome}</p>
                <p className={styles.description}>{product.description}</p>
                <ul className={styles.includes}>
                  {product.includes.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className={styles.cardFooter}>
                  <div>
                    <span className={styles.price}>{product.price}</span>
                    <span className={styles.oneTime}> one-time</span>
                  </div>
                  <span className={styles.previewButton}>Checkout opens after testing</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.comparison} id="compare" aria-labelledby="comparison-heading">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>At a glance</span>
            <h2 id="comparison-heading">Four entry points. One operating philosophy.</h2>
          </div>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th scope="col">System</th>
                  <th scope="col">Best for</th>
                  <th scope="col">Cadence</th>
                  <th scope="col">Scope</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.philosophy} aria-labelledby="philosophy-heading">
          <div>
            <span className={styles.eyebrow}>What makes it different</span>
            <h2 id="philosophy-heading">The AI does not get the final word.</h2>
          </div>
          <div className={styles.philosophyGrid}>
            <p><strong>Context before prompting.</strong> Every workflow starts by defining the real situation, constraint, and desired decision.</p>
            <p><strong>Review before action.</strong> You check assumptions, capacity, evidence, and trade-offs before accepting the output.</p>
            <p><strong>Action before accumulation.</strong> Every useful session ends with an owner, a next move, or a deliberate stop.</p>
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="faq-heading">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>Questions, answered</span>
            <h2 id="faq-heading">Know exactly what you are buying.</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.free}>
          <div>
            <span className={styles.eyebrow}>Start free</span>
            <h2>Turn a noisy workday into one clear next move—in 10 minutes.</h2>
            <p>Try the operating philosophy on a real day before choosing a paid system.</p>
          </div>
          <a className={styles.primaryButton} href="/free/ai-workflow-reset">
            Download the free workflow
          </a>
        </section>

        <p className={styles.disclosure}>
          Method Stack is the product brand created for Everyday AI Workflows readers. Paid checkout
          remains closed during final delivery testing. AI subscriptions are not included. These systems
          support human judgment; they do not guarantee income, productivity, or error-free AI output.
        </p>
      </main>
    </div>
  );
}
