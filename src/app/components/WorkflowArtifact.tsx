export type WorkflowArtifactField = {
  label: string;
  placeholder: string;
};

export type WorkflowArtifactProps = {
  id: string;
  title: string;
  intro: string;
  fields: WorkflowArtifactField[];
  checks: string[];
};

/**
 * A local-only worksheet rendered as ordinary HTML controls. It gives each
 * flagship lab a useful artifact without collecting, submitting, or storing
 * the visitor's work in the site.
 */
export default function WorkflowArtifact({ id, title, intro, fields, checks }: WorkflowArtifactProps) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      data-artifact-kind="local-worksheet"
      style={{
        margin: "0 0 1.75rem",
        padding: "1.2rem 1.25rem",
        border: "1px solid rgba(103, 232, 249, 0.3)",
        borderRadius: "12px",
        background: "rgba(103, 232, 249, 0.05)",
      }}
    >
      <p style={{ margin: "0 0 0.35rem", color: "#67e8f9", fontSize: "0.76rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Interactive worksheet · local-only
      </p>
      <h2 id={`${id}-heading`} style={{ margin: "0 0 0.55rem", color: "#fff", fontSize: "1.15rem" }}>{title}</h2>
      <p style={{ margin: "0 0 0.9rem", color: "#cbd5e1", fontSize: "0.88rem", lineHeight: 1.6 }}>{intro}</p>

      <fieldset style={{ margin: "0 0 1rem", padding: "0.85rem", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "8px" }}>
        <legend style={{ padding: "0 0.35rem", color: "#fff", fontSize: "0.9rem", fontWeight: 700 }}>Record the input and decision</legend>
        <div style={{ display: "grid", gap: "0.8rem" }}>
          {fields.map(({ label, placeholder }, index) => {
            const fieldId = `${id}-field-${index + 1}`;
            return (
              <label key={label} htmlFor={fieldId} style={{ display: "grid", gap: "0.35rem", color: "#e2e8f0", fontSize: "0.84rem", fontWeight: 600 }}>
                {label}
                <textarea id={fieldId} rows={3} placeholder={placeholder} style={{ width: "100%", boxSizing: "border-box", padding: "0.65rem", borderRadius: "7px", border: "1px solid #475569", background: "rgba(15,23,42,0.6)", color: "#fff", font: "inherit", lineHeight: 1.5 }} />
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset style={{ margin: "0 0 0.75rem", padding: "0.85rem", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "8px" }}>
        <legend style={{ padding: "0 0.35rem", color: "#fff", fontSize: "0.9rem", fontWeight: 700 }}>Quality gate before applying it to real work</legend>
        <div style={{ display: "grid", gap: "0.55rem" }}>
          {checks.map((check) => (
            <label key={check} style={{ display: "flex", gap: "0.55rem", alignItems: "flex-start", color: "#cbd5e1", fontSize: "0.84rem", lineHeight: 1.5 }}>
              <input type="checkbox" style={{ marginTop: "0.2rem", accentColor: "#67e8f9" }} />
              <span>{check}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.76rem", lineHeight: 1.5 }}>
        This worksheet has no submit action. Save or copy your notes only through your own browser or approved workspace; the site does not receive these fields.
      </p>
    </section>
  );
}
