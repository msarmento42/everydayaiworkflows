import { methodStackLinks } from '../lib/revenue-links';

export default function MethodStackCTA() {
  return (
    <section
      id="workflow-reset"
      aria-labelledby="method-stack-cta-heading"
      style={{
        display: 'grid',
        gap: '1.25rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        margin: '2.5rem 0',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.14))',
        border: '1px solid rgba(0,212,255,0.25)',
        borderRadius: '14px',
      }}
    >
      <div>
        <p style={{ color: '#67e8f9', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.72rem', fontWeight: 700, margin: '0 0 0.45rem' }}>
          Free starting point
        </p>
        <h2 id="method-stack-cta-heading" style={{ color: '#fff', fontSize: '1.35rem', lineHeight: 1.25, margin: '0 0 0.65rem' }}>
          Turn one messy workday into a repeatable system
        </h2>
        <p style={{ color: '#cbd5e1', lineHeight: 1.65, margin: '0 0 1rem' }}>
          The free AI Workflow Reset helps you choose one bottleneck, define the handoff, and leave with a practical next step. It is the shortest path from reading about AI to using it.
        </p>
        <a
          href={methodStackLinks.freeReset}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-placement="method-stack-free-reset"
          data-analytics-intent="commercial"
          style={{ display: 'inline-block', background: '#00d4ff', color: '#0f172a', fontWeight: 800, textDecoration: 'none', borderRadius: '8px', padding: '0.7rem 1rem' }}
        >
          Get the free reset →
        </a>
      </div>

      <div style={{ background: 'rgba(15,23,42,0.35)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '1rem' }}>
        <p style={{ color: '#fff', fontWeight: 700, margin: '0 0 0.55rem' }}>When you want the complete playbook</p>
        <p style={{ color: '#cbd5e1', lineHeight: 1.55, fontSize: '0.92rem', margin: '0 0 0.9rem' }}>
          Move from one reset to a reusable library with the Workday System or the complete Method Stack collection.
        </p>
        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
          <a
            href={methodStackLinks.workdaySystem}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-placement="method-stack-workday-system"
            data-analytics-intent="commercial"
            style={{ color: '#a5f3fc', fontWeight: 700, textDecoration: 'none' }}
          >
            Workday System →
          </a>
          <a
            href={methodStackLinks.completeSystem}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-placement="method-stack-complete-system"
            data-analytics-intent="commercial"
            style={{ color: '#c4b5fd', fontWeight: 700, textDecoration: 'none' }}
          >
            Complete collection →
          </a>
        </div>
      </div>

      <p style={{ gridColumn: '1 / -1', color: '#94a3b8', fontSize: '0.78rem', lineHeight: 1.5, margin: 0 }}>
        Method Stack is a separate product line from Everyday AI Workflows, managed by the same publisher. Product links are provided for readers who want implementation assets; editorial recommendations are not conditioned on a purchase.
      </p>
    </section>
  );
}
