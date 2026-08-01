import React from "react";

type Tool = {
  name: string;
  features: string;
  pricing: string;
  link: string;
};

const tools: Tool[] = [
  {
    name: "Jasper",
    features: "Brand Voice, Templates",
    pricing: "$49/mo",
    link: "https://jasper.ai",
  },
  {
    name: "Writesonic",
    features: "Chatsonic, SEO Mode",
    pricing: "$15/mo",
    link: "https://writesonic.com",
  },
];

export default function AiToolComparisonTable() {
  const headerStyle: React.CSSProperties = {
    borderBottom: "2px solid #374151",
    padding: "0.75rem",
    textAlign: "left",
    color: "#00d4ff",
  };
  const cellStyle: React.CSSProperties = {
    borderBottom: "1px solid #374151",
    padding: "0.75rem",
    color: "#d1d5db",
  };

  return (
    <div style={{ overflowX: "auto", marginTop: "2rem", marginBottom: "2rem" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", color: "#fff" }}>
        <thead>
          <tr>
            <th style={headerStyle}>Tool</th>
            <th style={headerStyle}>Key Features</th>
            <th style={headerStyle}>Pricing</th>
            <th style={headerStyle}>Visit</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((t) => (
            <tr key={t.name}>
              <td style={cellStyle}>{t.name}</td>
              <td style={cellStyle}>{t.features}</td>
              <td style={cellStyle}>{t.pricing}</td>
              <td style={cellStyle}>
                <a href={t.link} rel="noopener noreferrer" style={{ color: "#00d4ff" }}>
                  Visit {t.name}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
