"use client";

import { useId, useState } from "react";
import type { FormEvent } from "react";
import type { NewsletterSource } from "../../lib/newsletter";
import { methodStackLinks } from "../../lib/revenue-links";

interface NewsletterCaptureProps {
  darkMode?: boolean;
  source?: NewsletterSource;
  title?: string;
  description?: string;
  ctaText?: string;
}

type FormStatus = "idle" | "loading" | "success" | "duplicate" | "error" | "unavailable";

const statusMessages: Record<Exclude<FormStatus, "idle" | "loading">, string> = {
  success: "Thanks — your signup was accepted. Please check your inbox for the next step.",
  duplicate: "That address is already subscribed. No further action is needed.",
  error: "We couldn't complete the signup. Please try again in a moment.",
  unavailable: "Email signup is temporarily unavailable. Your address was not submitted or saved.",
};

export default function NewsletterCapture({
  darkMode = true,
  source = "blog",
  title = "Get AI workflow tips weekly",
  description = "Practical prompts and automation ideas — no fluff.",
  ctaText = "Subscribe",
}: NewsletterCaptureProps) {
  const emailId = useId();
  const consentId = useId();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const panelStyles = darkMode
    ? { background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)", heading: "#fff", body: "#cbd5e1", inputBackground: "#1a1a3e", inputColor: "#fff" }
    : { background: "#f5f3ff", border: "1px solid #ddd6fe", heading: "#1f2937", body: "#4b5563", inputBackground: "#fff", inputColor: "#111827" };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, consent, honeypot, source }),
      });
      const result = await response.json().catch(() => ({ status: "error" }));
      const nextStatus = ["success", "duplicate", "unavailable"].includes(result.status)
        ? result.status as FormStatus
        : "error";
      setStatus(nextStatus);
      if (nextStatus === "success" || nextStatus === "duplicate") setEmail("");
    } catch {
      setStatus("error");
    }
  }

  const finished = status === "success" || status === "duplicate";

  return (
    <section style={{ marginTop: "2.5rem", padding: "2rem", background: panelStyles.background, borderRadius: "12px", border: panelStyles.border }} aria-labelledby={`${emailId}-heading`}>
      <h3 id={`${emailId}-heading`} style={{ color: panelStyles.heading, marginBottom: "0.5rem", marginTop: 0 }}>📧 {title}</h3>
      <p style={{ color: panelStyles.body, fontSize: "0.9rem", marginBottom: "1rem" }}>{description}</p>

      {!finished ? (
        <form onSubmit={handleSubmit}>
          <div style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", overflow: "hidden" }} aria-hidden="true">
            <label htmlFor={`${emailId}-website`}>Leave this field empty</label>
            <input id={`${emailId}-website`} name="website" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} tabIndex={-1} autoComplete="off" />
          </div>
          <label htmlFor={emailId} style={{ display: "block", color: panelStyles.heading, fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.4rem" }}>Email address</label>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <input id={emailId} name="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required disabled={status === "loading"} style={{ flex: "1 1 220px", padding: "0.75rem", borderRadius: "8px", border: "1px solid #6b7280", background: panelStyles.inputBackground, color: panelStyles.inputColor, outline: "none" }} />
            <button type="submit" disabled={status === "loading"} style={{ padding: "0.75rem 1.5rem", background: "#7c3aed", border: "none", borderRadius: "8px", color: "#fff", fontWeight: 600, cursor: status === "loading" ? "wait" : "pointer", opacity: status === "loading" ? 0.7 : 1 }}>
              {status === "loading" ? "Submitting…" : ctaText}
            </button>
          </div>
          <label htmlFor={consentId} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: panelStyles.body, fontSize: "0.82rem", lineHeight: 1.5, marginTop: "0.75rem" }}>
            <input id={consentId} type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required disabled={status === "loading"} style={{ marginTop: "0.2rem" }} />
            <span>I agree to receive the Everyday AI Workflows newsletter. I can unsubscribe from any email.</span>
          </label>
        </form>
      ) : null}

      {status !== "idle" && status !== "loading" ? (
        <p role="status" aria-live="polite" style={{ color: status === "error" || status === "unavailable" ? "#fca5a5" : "#a5f3fc", fontSize: "0.9rem", margin: "0.85rem 0 0", fontWeight: 600 }}>
          {statusMessages[status]}
          {status === "unavailable" ? (
            <>
              {' '}
              The instant-download option below is still available.
            </>
          ) : null}
        </p>
      ) : null}

      <div style={{ marginTop: "1rem", paddingTop: "0.9rem", borderTop: darkMode ? "1px solid rgba(255,255,255,0.12)" : "1px solid #ddd6fe" }}>
        <p style={{ color: panelStyles.body, fontSize: "0.85rem", margin: "0 0 0.45rem" }}>
          Prefer an instant download instead of joining the newsletter?
        </p>
        <a
          href={methodStackLinks.freeReset}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-placement="newsletter-fallback"
          data-analytics-intent="commercial"
          style={{ color: darkMode ? "#a5f3fc" : "#4338ca", fontWeight: 700, textDecoration: "underline" }}
        >
          Get the free AI Workflow Reset →
        </a>
      </div>
    </section>
  );
}
