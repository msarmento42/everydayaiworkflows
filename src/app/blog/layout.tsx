import type { Metadata } from "next";

/**
 * Article folders are opt-in: canonical flagships explicitly override this
 * default, while the long tail remains crawlable for readers but is not
 * presented as an indexable catalogue until it passes the editorial bar.
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
