import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tools",
        destination: "/ai-tools",
        permanent: true,
      },
      {
        source: "/blog/chatgpt-vs-claude-comparison",
        destination: "/blog/chatgpt-vs-claude-2026",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
