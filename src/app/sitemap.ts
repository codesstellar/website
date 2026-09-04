import type { MetadataRoute } from 'next';
import { getPublishedBlogPosts } from '@/src/lib/blog';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codesstellar.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1.0 },
    { path: '/services', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/research', changeFrequency: 'daily' as const, priority: 0.9 },
    { path: '/case-studies', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/blogs', changeFrequency: 'daily' as const, priority: 0.85 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.75 },
    { path: '/build', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const mainPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  try {
    const posts = await getPublishedBlogPosts();
    const blogPages = posts.map((post) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(post.publishedAt || Date.now()),
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    }));

    return [...mainPages, ...blogPages];
  } catch (error) {
    console.warn('Failed to fetch blog posts for sitemap, returning static routes only.', error);
    return mainPages;
  }
}
