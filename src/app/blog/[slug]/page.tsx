"use client";

import { useEffect, useState } from "react";

function FontSizeControls() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const stored = localStorage.getItem("article-font-scale");
    if (stored) {
      const value = parseFloat(stored);
      if (!isNaN(value)) {
        setScale(value);
        document.documentElement.style.setProperty(
          "--article-font-scale",
          value.toString()
        );
      }
    }
  }, []);

  const updateScale = (newScale: number) => {
    const clamped = Math.min(1.4, Math.max(0.8, newScale));
    setScale(clamped);
    document.documentElement.style.setProperty(
      "--article-font-scale",
      clamped.toString()
    );
    localStorage.setItem("article-font-scale", clamped.toString());
  };

  const increase = () => updateScale(scale + 0.1);
  const decrease = () => updateScale(scale - 0.1);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <button
        aria-label="Decrease text size"
        onClick={decrease}
        style={{ marginRight: "0.5rem" }}
      >
        A-
      </button>
      <button aria-label="Increase text size" onClick={increase}>
        A+
      </button>
    </div>
  );
}

export default function BlogSlugPage() {
  return (
    <div className="article-content">
      <FontSizeControls />
      {/* Blog content would go here */}
      <p>
        This is placeholder blog content. Replace with actual article rendering.
      </p>
    </div>
  );
}
