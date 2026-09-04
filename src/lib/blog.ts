import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { fallbackBlogPosts, type PublicBlogPost } from './fallback-posts';

type PayloadBlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  bodyMarkdown: string;
  status?: string;
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  heroImage?: unknown;
  heroImageUrl?: string;
  tags?: { tag?: string }[];
};

function formatDate(value?: string): string {
  if (!value) return 'Unscheduled';
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
}

function mediaUrl(heroImage: unknown): string | undefined {
  if (!heroImage || typeof heroImage !== 'object') return undefined;
  const maybe = heroImage as { url?: string };
  return maybe.url;
}

function normalizePost(post: PayloadBlogPost): PublicBlogPost {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    bodyMarkdown: post.bodyMarkdown,
    tag: post.tags?.[0]?.tag?.toUpperCase() || 'RESEARCH',
    date: formatDate(post.publishedAt),
    publishedAt: post.publishedAt || new Date().toISOString(),
    image: post.heroImageUrl || mediaUrl(post.heroImage),
    seoTitle: post.seoTitle,
    seoDescription: post.seoDescription,
  };
}

export async function getPublishedBlogPosts(): Promise<PublicBlogPost[]> {
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: 'blog-posts',
      depth: 1,
      limit: 20,
      sort: '-publishedAt',
      where: {
        status: { equals: 'published' },
      },
    });

    const posts = (result.docs as unknown as PayloadBlogPost[]).map(normalizePost);
    return posts.length > 0 ? posts : fallbackBlogPosts;
  } catch (error) {
    console.warn('Payload blog fetch failed; using fallback posts.', error);
    return fallbackBlogPosts;
  }
}

export async function getPublishedBlogPost(slug: string): Promise<PublicBlogPost | null> {
  const posts = await getPublishedBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}
