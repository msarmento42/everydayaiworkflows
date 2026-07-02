"use client";

import { useState } from "react";

interface NewsletterCaptureProps {
  darkMode?: boolean;
}

export default function NewsletterCapture({ darkMode = true }: NewsletterCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const panelStyles = darkMode
    ? {
        background: "rgba(124,58,237,0.1)",
        border: "1px solid rgba(124,58,237,0.3)",
        heading: "#fff",
        body: "#9ca3af",
        inputBackground: "#1a1a3e",
        inputColor: "#fff",
      }
    : {
        background: "#f5f3ff",
        border: "1px solid #ddd6fe",
        heading: "#1f2937",
        body: "#4b5563",
        inputBackground: "#fff",
        inputColor: "#111827",
      };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div style={{ marginTop: "2.5rem", padding: "2rem", background: panelStyles.background, borderRadius: "12px", border: panelStyles.border, textAlign: "center" }}>
        <p style={{ color: "#a5f3fc", margin: 0, fontWeight: 600 }}>Thanks! You\'re on the list.</p>
        <p style={{ color: panelStyles.body, fontSize: "0.9rem", margin: "0.5rem 0 0" }}>Practical AI workflow tips every week — no fluff.</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "2.5rem", padding: "2rem", background: panelStyles.background, borderRadius: "12px", border: panelStyles.border }}>
      <h3 style={{ color: panelStyles.heading, marginBottom: "0.5rem", marginTop: 0 }}>📧 Get AI workflow tips weekly</h3>
      <p style={{ color: panelStyles.body, fontSize: "0.9rem", marginBottom: "1rem" }}>Practical prompts and automation ideas — no fluff.</p>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem" }}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ flex: 1, padding: "0.75rem", borderRadius: "8px", border: "1px solid #374151", background: panelStyles.inputBackground, color: panelStyles.inputColor, outline: "none" }}
        />
        <button
          type="submit"
          style={{ padding: "0.75rem 1.5rem", background: "#7c3aed", border: "none", borderRadius: "8px", color: "#fff", fontWeight: "600", cursor: "pointer" }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
