import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPublishedBlogPost, getPublishedBlogPosts } from '@/src/lib/blog';
import MarkdownArticle from '@/src/lib/markdown';
import { Clock, ArrowLeft, ArrowRight, Shield, Share2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ slug: string }>;
};

function estimateReadTime(text: string): string {
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogPost(slug);
  if (!post) return { title: 'Field Note | Codesstellar' };

  return {
    title: post.seoTitle || `${post.title} | Codesstellar`,
    description: post.seoDescription || post.excerpt,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPublishedBlogPost(slug);
  if (!post) notFound();

  const allPosts = await getPublishedBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Codesstellar Security Research Collective',
      url: 'https://codesstellar.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Codesstellar',
      url: 'https://codesstellar.com',
    },
  };

  return (
    <article className="pt-28 pb-24 bg-background min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-text-secondary mb-8">
          <Link href="/" className="hover:text-accent-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blogs" className="hover:text-accent-primary transition-colors">Research</Link>
          <span>/</span>
          <span className="text-accent-primary truncate max-w-[240px] md:max-w-md">{post.title}</span>
        </div>

        {/* Post Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-xs font-mono text-accent-primary border border-accent-primary/30 px-2.5 py-1 rounded bg-background/60">
              {post.tag}
            </span>
            <span className="text-xs font-mono text-text-secondary flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {estimateReadTime(post.bodyMarkdown)}
            </span>
            <span className="text-xs font-mono text-text-secondary">
              {post.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display leading-[1.08] mb-6 text-text-primary">
            {post.title}
          </h1>

          <p className="text-xl text-text-secondary leading-relaxed border-l-2 border-accent-primary/50 pl-4 py-1">
            {post.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="relative overflow-hidden rounded-3xl mb-12 aspect-[16/9] border border-border-subtle bg-surface shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-40" />
          </div>
        )}

        {/* Post Content */}
        <div className="rounded-3xl border border-border-subtle bg-surface/50 p-8 md:p-14 shadow-sm mb-16">
          <MarkdownArticle markdown={post.bodyMarkdown} />
        </div>

        {/* Author / Editorial Box */}
        <div className="p-8 rounded-2xl border border-border-subtle bg-surface/30 mb-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center shrink-0">
            <Shield className="w-7 h-7 text-accent-primary" />
          </div>
          <div>
            <span className="text-xs font-mono text-accent-primary uppercase tracking-wider block mb-1">Author & Verification</span>
            <h4 className="text-lg font-display text-text-primary">Codesstellar Security Research Collective</h4>
            <p className="text-xs md:text-sm text-text-secondary mt-1 leading-relaxed">
              Peer-reviewed technical research authored by our cryptography, smart contract audit, and distributed consensus engineering teams.
            </p>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-border-subtle pt-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-display text-text-primary">Related Field Notes</h3>
              <Link href="/blogs" className="text-xs font-mono text-accent-primary hover:text-text-primary transition-colors flex items-center gap-1">
                View all research <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blogs/${r.slug}`}
                  className="group rounded-2xl border border-border-subtle bg-surface/30 p-6 flex flex-col justify-between hover:border-accent-primary/50 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-accent-primary border border-accent-primary/20 px-2 py-0.5 rounded">
                        {r.tag}
                      </span>
                      <span className="text-xs font-mono text-text-secondary">{r.date}</span>
                    </div>
                    <h4 className="text-lg font-display text-text-primary group-hover:text-accent-primary transition-colors mb-2 leading-snug">
                      {r.title}
                    </h4>
                    <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                      {r.excerpt}
                    </p>
                  </div>
                  <span className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-accent-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read analysis <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
