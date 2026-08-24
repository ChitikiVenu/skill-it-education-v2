import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const routes = ['', '/about', '/insights', '/courses/cyber-security', '/courses/ai-engineering', '/courses/data-science', '/insights/cyber-security-roadmap-2026', '/insights/ai-engineer-roadmap', '/insights/data-analyst-vs-data-scientist'];
  return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: route === '/insights' ? 'weekly' : 'monthly', priority: route === '' ? 1 : route.startsWith('/courses') ? 0.9 : 0.7 }));
}
