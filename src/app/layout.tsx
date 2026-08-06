import type { Metadata } from "next";
import Script from "next/script";
import Analytics from "./components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "Everyday AI Workflows - Daily AI Prompts & Tools",
  description: "Discover daily AI prompts and curated tools to boost your productivity. Learn how to integrate AI into your daily workflow.",
  keywords: "AI, artificial intelligence, productivity, prompts, tools, workflow, automation, ChatGPT, Claude",
  authors: [{ name: "Marcus Sarmento" }],
  openGraph: {
    title: "Everyday AI Workflows - Daily AI Prompts",
    description: "Discover daily AI prompts and tools to boost your productivity.",
    url: "https://everydayaiworkflows.com",
    siteName: "Everyday AI Workflows",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everyday AI Workflows",
    description: "Daily AI prompts and tools to boost your productivity.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://everydayaiworkflows.com",
    types: {
      "application/rss+xml": "https://everydayaiworkflows.com/rss.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f0f23" />
      </head>
      <body>
      <Analytics />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Everyday AI Workflows",
            "url": "https://everydayaiworkflows.com",
            "founder": {
              "@type": "Person",
              "name": "Marcus Sarmento"
            },
            "description": "Practical AI workflows, prompts, and tool guides for everyday work.",
          }),
        }}
      />
      <nav style={{
        background: 'rgba(15,15,35,0.95)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        height: '52px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'sticky' as const,
        top: 0,
        zIndex: 100,
      }}>
        <a href="/" style={{ color: '#00d4ff', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '-0.01em' }}>
          Everyday AI
        </a>
        <div style={{ display: 'flex', gap: '1.25rem', marginLeft: '0.5rem' }}>
          {[
            { href: '/blog', label: 'Blog' },
            { href: '/workflows/automation', label: 'Workflows' },
            { href: '/ai-tools', label: 'AI Tools' },
            { href: '/ai-tools-by-role', label: 'By Role' },
            { href: '/editorial-policy', label: 'Policy' },
          ].map(({ href, label }) => (
            <a key={href} href={href} style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.85rem' }}>
              {label}
            </a>
          ))}
        </div>
      </nav>
      {children}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6175161566333696"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      </body>
    </html>
  );
}
