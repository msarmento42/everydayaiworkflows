export type WorkflowLabSource = {
  label: string;
  href: string;
  accessedOn: string;
};

export type WorkflowLabAlternative = {
  option: string;
  tradeoff: string;
};

export type WorkflowLabProps = {
  id: string;
  title: string;
  decision: string;
  setup: string[];
  inputExample: string;
  outputExample: string;
  observationStatus: string;
  safetyNotes: string[];
  alternatives: WorkflowLabAlternative[];
  sources: WorkflowLabSource[];
  updateLog: string[];
};

/**
 * A transparent evidence record for workflow guides. The component is
 * deliberately explicit about synthetic inputs and pending observations so
 * an editorial example cannot be mistaken for a firsthand product test.
 */
export default function WorkflowLab({
  id,
  title,
  decision,
  setup,
  inputExample,
  outputExample,
  observationStatus,
  safetyNotes,
  alternatives,
  sources,
  updateLog,
}: WorkflowLabProps) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      data-evidence-status={observationStatus.toLowerCase().replaceAll(" ", "-")}
      style={{
        margin: "0 0 1.75rem",
        padding: "1.2rem 1.25rem",
        border: "1px solid rgba(251, 191, 36, 0.35)",
        borderRadius: "12px",
        background: "rgba(251, 191, 36, 0.06)",
      }}
    >
      <p style={{ margin: "0 0 0.35rem", color: "#fbbf24", fontSize: "0.76rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Workflow Lab · evidence record
      </p>
      <h2 id={`${id}-heading`} style={{ margin: "0 0 0.65rem", color: "#fff", fontSize: "1.15rem" }}>
        {title}
      </h2>
      <p style={{ margin: "0 0 0.9rem", color: "#fef3c7", fontSize: "0.9rem", lineHeight: 1.65 }}>
        <strong>Decision this workflow supports:</strong> {decision}
      </p>

      <div style={{ display: "grid", gap: "0.9rem" }}>
        <div>
          <h3 style={{ margin: "0 0 0.35rem", color: "#fff", fontSize: "0.98rem" }}>Reproducible setup</h3>
          <ol style={{ margin: "0 0 0.65rem", paddingLeft: "1.25rem", color: "#fde68a", fontSize: "0.86rem", lineHeight: 1.6 }}>
            {setup.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <p style={{ margin: "0 0 0.35rem", color: "#fef3c7", fontSize: "0.82rem", fontWeight: 700 }}>Synthetic/public input fixture</p>
          <pre style={{ margin: 0, padding: "0.8rem", overflowX: "auto", borderRadius: "8px", background: "rgba(0,0,0,0.28)", color: "#fef3c7", fontSize: "0.78rem", lineHeight: 1.5, whiteSpace: "pre-wrap" }}>{inputExample}</pre>
        </div>

        <div>
          <h3 style={{ margin: "0 0 0.35rem", color: "#fff", fontSize: "0.98rem" }}>Expected output to inspect</h3>
          <pre style={{ margin: "0 0 0.55rem", padding: "0.8rem", overflowX: "auto", borderRadius: "8px", background: "rgba(0,0,0,0.28)", color: "#fef3c7", fontSize: "0.78rem", lineHeight: 1.5, whiteSpace: "pre-wrap" }}>{outputExample}</pre>
          <p style={{ margin: 0, color: "#fff7ed", fontSize: "0.86rem", lineHeight: 1.6 }}>
            <strong>Observation status:</strong> {observationStatus}. This record is a reproducible editorial fixture, not a claim that the site owner ran the vendor workflow.
          </p>
        </div>

        <div>
          <h3 style={{ margin: "0 0 0.35rem", color: "#fff", fontSize: "0.98rem" }}>Failure and safety checks</h3>
          <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#fde68a", fontSize: "0.86rem", lineHeight: 1.6 }}>
            {safetyNotes.map((note) => <li key={note}>{note}</li>)}
          </ul>
        </div>

        <div>
          <h3 style={{ margin: "0 0 0.35rem", color: "#fff", fontSize: "0.98rem" }}>Alternatives and trade-offs</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", color: "#fde68a", fontSize: "0.82rem", lineHeight: 1.5 }}>
              <thead>
                <tr>
                  <th scope="col" style={{ padding: "0.45rem", textAlign: "left", borderBottom: "1px solid rgba(251,191,36,0.3)", color: "#fff" }}>Option</th>
                  <th scope="col" style={{ padding: "0.45rem", textAlign: "left", borderBottom: "1px solid rgba(251,191,36,0.3)", color: "#fff" }}>Trade-off</th>
                </tr>
              </thead>
              <tbody>
                {alternatives.map(({ option, tradeoff }) => (
                  <tr key={option}>
                    <td style={{ padding: "0.45rem", verticalAlign: "top", borderBottom: "1px solid rgba(251,191,36,0.16)" }}>{option}</td>
                    <td style={{ padding: "0.45rem", verticalAlign: "top", borderBottom: "1px solid rgba(251,191,36,0.16)" }}>{tradeoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 style={{ margin: "0 0 0.35rem", color: "#fff", fontSize: "0.98rem" }}>Evidence ledger</h3>
          <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#fde68a", fontSize: "0.82rem", lineHeight: 1.6 }}>
            {sources.map(({ label, href, accessedOn }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#67e8f9" }}>{label}</a> — accessed {accessedOn}; used to check the documented capability or workflow constraint.
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={{ margin: "0 0 0.35rem", color: "#fff", fontSize: "0.98rem" }}>Correction and update log</h3>
          <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#fde68a", fontSize: "0.82rem", lineHeight: 1.6 }}>
            {updateLog.map((entry) => <li key={entry}>{entry}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
