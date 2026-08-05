export default function AffiliateDisclosure() {
  return (
    <aside
      aria-label="Affiliate disclosure"
      style={{
        margin: "0 0 1.5rem",
        padding: "0.75rem 1rem",
        border: "1px solid rgba(0, 212, 255, 0.2)",
        borderRadius: "10px",
        background: "rgba(0, 212, 255, 0.06)",
      }}
    >
      <p style={{ margin: 0, color: "#cbd5e1", fontSize: "0.86rem", lineHeight: 1.6 }}>
        <strong style={{ color: "#fff" }}>Disclosure:</strong> Some outbound links are affiliate links. If you sign up or purchase through those links, we may earn a commission at no extra cost to you. Affiliate relationships do not determine whether a product is included or how it is described. Read our{" "}
        <a href="/editorial-policy" style={{ color: "#00d4ff" }}>
          editorial policy
        </a>.
      </p>
    </aside>
  );
}
