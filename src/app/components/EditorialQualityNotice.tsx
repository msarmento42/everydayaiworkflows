type EditorialQualityNoticeProps = {
  reviewedOn: string;
  focus: string;
};

export default function EditorialQualityNotice({ reviewedOn, focus }: EditorialQualityNoticeProps) {
  return (
    <aside
      aria-labelledby="editorial-quality-note"
      style={{
        margin: "0 0 1.5rem",
        padding: "1rem 1.1rem",
        border: "1px solid rgba(103, 232, 249, 0.28)",
        borderRadius: "10px",
        background: "rgba(103, 232, 249, 0.06)",
      }}
    >
      <h2 id="editorial-quality-note" style={{ margin: "0 0 0.5rem", color: "#fff", fontSize: "1rem" }}>
        Editorial quality note
      </h2>
      <p style={{ margin: "0 0 0.65rem", color: "#cbd5e1", fontSize: "0.86rem", lineHeight: 1.6 }}>
        This guide is part of a smaller curated set focused on {focus}. The editorial pass recorded on {reviewedOn} checks for a clear reader decision, traceable sources, explicit limitations, and a review point before anything consequential is sent or published.
      </p>
      <ul style={{ margin: "0 0 0.65rem", paddingLeft: "1.2rem", color: "#cbd5e1", fontSize: "0.86rem", lineHeight: 1.6 }}>
        <li>Documented product capabilities are kept separate from editorial judgment.</li>
        <li>Tool pricing, limits, and integrations can change; verify current details with the linked first-party source.</li>
        <li>AI output is a draft. Keep a human responsible for accuracy, privacy, and the final decision.</li>
      </ul>
      <p style={{ margin: 0, color: "#cbd5e1", fontSize: "0.86rem", lineHeight: 1.6 }}>
        This note does not claim an independent hands-on test or a guaranteed result. Some outbound links may be affiliate links; the separate disclosure explains how that relationship works. Read our{" "}
        <a href="/editorial-policy#how-we-evaluate" style={{ color: "#67e8f9" }}>
          editorial method
        </a>.
      </p>
    </aside>
  );
}
