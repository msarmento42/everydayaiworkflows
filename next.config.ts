import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tools",
        destination: "/ai-tools",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
