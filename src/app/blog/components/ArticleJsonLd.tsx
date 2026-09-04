type ArticleJsonLdProps = {
  headline: string;
  description: string;
  canonical: string;
  datePublished: string;
  dateModified: string;
};

export default function ArticleJsonLd({
  headline,
  description,
  canonical,
  datePublished,
  dateModified,
}: ArticleJsonLdProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    author: {
      "@type": "Organization",
      name: "Everyday AI Workflows",
      url: "https://everydayaiworkflows.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Everyday AI Workflows",
      url: "https://everydayaiworkflows.com",
    },
    datePublished,
    dateModified,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
