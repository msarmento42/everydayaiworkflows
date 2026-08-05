type SourceLink = {
  label: string;
  href: string;
};

type SourceMethodBlockProps = {
  reviewedOn: string;
  sources: SourceLink[];
};

export default function SourceMethodBlock({ reviewedOn, sources }: SourceMethodBlockProps) {
  return (
    <section
      aria-labelledby="method-and-sources"
      style={{
        margin: "0 0 1.5rem",
        padding: "1rem 1.1rem",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "10px",
        background: "rgba(255, 255, 255, 0.04)",
      }}
    >
      <h2 id="method-and-sources" style={{ margin: "0 0 0.5rem", color: "#fff", fontSize: "1rem" }}>
        Method and sources
      </h2>
      <p style={{ margin: "0 0 0.5rem", color: "#cbd5e1", fontSize: "0.86rem", lineHeight: 1.6 }}>
        Reviewed {reviewedOn}. This guide uses the first-party documentation below to anchor the product capabilities it references. Features, pricing, plan limits, and integrations can change, so check the source before implementing.
      </p>
      <p style={{ margin: "0 0 0.5rem", color: "#cbd5e1", fontSize: "0.86rem", lineHeight: 1.6 }}>
        Treat AI output as a draft: keep a human in the loop and make data-handling decisions appropriate to your organization.
      </p>
      <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#cbd5e1", fontSize: "0.86rem", lineHeight: 1.6 }}>
        {sources.map((source) => (
          <li key={source.href}>
            <a href={source.href} target="_blank" rel="noopener noreferrer" style={{ color: "#00d4ff" }}>
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
