import { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { getBaseUrl } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const currentDate = new Date().toISOString().split('T')[0];

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}/`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: p.featured ? 0.9 : 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}
