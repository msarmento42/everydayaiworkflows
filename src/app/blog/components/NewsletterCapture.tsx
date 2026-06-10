"use client";

import { useState } from "react";

interface NewsletterCaptureProps {
  darkMode?: boolean;
}

export default function NewsletterCapture({ darkMode = true }: NewsletterCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div style={{ marginTop: "2.5rem", padding: "2rem", background: "rgba(124,58,237,0.1)", borderRadius: "12px", border: "1px solid rgba(124,58,237,0.3)", textAlign: "center" }}>
        <p style={{ color: "#a5f3fc", margin: 0, fontWeight: 600 }}>Thanks! You\'re on the list.</p>
        <p style={{ color: "#9ca3af", fontSize: "0.9rem", margin: "0.5rem 0 0" }}>Practical AI workflow tips every week — no fluff.</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "2.5rem", padding: "2rem", background: "rgba(124,58,237,0.1)", borderRadius: "12px", border: "1px solid rgba(124,58,237,0.3)" }}>
      <h3 style={{ color: "#fff", marginBottom: "0.5rem", marginTop: 0 }}>📧 Get AI workflow tips weekly</h3>
      <p style={{ color: "#9ca3af", fontSize: "0.9rem", marginBottom: "1rem" }}>Practical prompts and automation ideas — no fluff.</p>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem" }}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ flex: 1, padding: "0.75rem", borderRadius: "8px", border: "1px solid #374151", background: "#1a1a3e", color: "#fff", outline: "none" }}
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
