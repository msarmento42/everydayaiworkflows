import type { MetadataRoute } from 'next';
import { canonicalArticles } from './lib/content-strategy';

const BASE_URL = 'https://everydayaiworkflows.com';
const SITE_REVIEWED_ON = '2026-09-04';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: SITE_REVIEWED_ON, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/blog`, lastModified: SITE_REVIEWED_ON, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/start-here`, lastModified: SITE_REVIEWED_ON, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/ai-tools`, lastModified: SITE_REVIEWED_ON, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/ai-tools-by-role`, lastModified: SITE_REVIEWED_ON, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/workflows/automation`, lastModified: SITE_REVIEWED_ON, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${BASE_URL}/workflows/meetings`, lastModified: SITE_REVIEWED_ON, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${BASE_URL}/workflows/research`, lastModified: SITE_REVIEWED_ON, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${BASE_URL}/workflows/writing`, lastModified: SITE_REVIEWED_ON, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${BASE_URL}/about`, lastModified: SITE_REVIEWED_ON, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: SITE_REVIEWED_ON, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/editorial-policy`, lastModified: SITE_REVIEWED_ON, changeFrequency: 'monthly', priority: 0.45 },
    { url: `${BASE_URL}/privacy`, lastModified: SITE_REVIEWED_ON, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: SITE_REVIEWED_ON, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const slugRoutes: MetadataRoute.Sitemap = canonicalArticles.map(({ slug, updatedOn }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: updatedOn,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...slugRoutes];
}
