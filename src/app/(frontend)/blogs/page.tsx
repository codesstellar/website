import type { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedBlogPosts } from '@/src/lib/blog';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Research & Field Notes | Codesstellar',
  description: 'Technical field notes and peer-reviewed research on post-quantum cryptography, crypto-agile blockchain systems, and AI security engineering.',
};

function estimateReadTime(text: string): string {
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export default async function BlogsPage() {
  const posts = await getPublishedBlogPosts();
  const [featuredPost, ...otherPosts] = posts;

  return (
    <div className="pt-28 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-2 w-2 rounded-full bg-accent-primary shadow-[0_0_12px_rgba(198,155,36,0.8)]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">
              Codesstellar Research / Field Notes
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display leading-[1.05] mb-6">
            The systems that will <span className="text-gradient-primary">outlive the hype.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
            Clear thinking on post-quantum cryptography, AI-assisted security operations, and the engineering decisions behind resilient Web3 infrastructure.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <Link
              href={`/blogs/${featuredPost.slug}`}
              className="group rounded-3xl border border-border-subtle bg-surface/50 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-300 hover:border-accent-primary/40 relative overflow-hidden"
            >
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-xs font-mono text-accent-primary border border-accent-primary/30 px-3 py-1 rounded bg-background/60">
                      FEATURED · {featuredPost.tag}
                    </span>
                    <span className="text-xs font-mono text-text-secondary flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {estimateReadTime(featuredPost.bodyMarkdown)}
                    </span>
                    <span className="text-xs font-mono text-text-secondary">
                      {featuredPost.date}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-display mb-4 text-text-primary group-hover:text-accent-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary group-hover:translate-x-1 transition-transform">
                  Read complete analysis <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {featuredPost.image && (
                <div className="lg:col-span-5 relative overflow-hidden rounded-2xl aspect-[16/10] border border-border-subtle">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60" />
                </div>
              )}
            </Link>
          </div>
        )}

        {/* Posts Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-8">
            <h3 className="text-xl font-display text-text-primary flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent-primary" /> All Published Research
            </h3>
            <span className="text-xs font-mono text-text-secondary">{posts.length} field notes</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group rounded-2xl border border-border-subtle bg-surface/40 p-7 flex flex-col justify-between transition-all duration-300 hover:border-accent-primary/50 hover:-translate-y-1 relative overflow-hidden"
              >
                <div>
                  {post.image && (
                    <div className="relative overflow-hidden rounded-xl mb-6 aspect-[16/9] border border-border-subtle">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-accent-primary border border-accent-primary/30 px-2 py-0.5 rounded bg-background/50">
                      {post.tag}
                    </span>
                    <span className="text-xs font-mono text-text-secondary">
                      {post.date}
                    </span>
                  </div>

                  <h4 className="text-xl md:text-2xl font-display mb-3 text-text-primary group-hover:text-accent-primary transition-colors leading-snug">
                    {post.title}
                  </h4>

                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-text-secondary">
                  <span>{estimateReadTime(post.bodyMarkdown)}</span>
                  <span className="text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Read note <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Research Pipeline Banner */}
        <div className="rounded-3xl border border-border-subtle bg-surface/50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-accent-primary uppercase tracking-widest block mb-2">Automated Ingestion</span>
            <h3 className="text-2xl md:text-3xl font-display mb-3">Looking for raw external research?</h3>
            <p className="text-text-secondary text-sm md:text-base">
              Explore our live Research Hub tracking daily developments from NIST, IACR, Trail of Bits, OpenZeppelin, and Ethereum Foundation.
            </p>
          </div>
          <Link
            href="/research"
            className="px-6 py-3.5 rounded-full bg-accent-primary text-background font-medium text-sm whitespace-nowrap hover:bg-opacity-90 transition-all glow-effect"
          >
            Visit Research Hub →
          </Link>
        </div>

      </div>
    </div>
  );
}
