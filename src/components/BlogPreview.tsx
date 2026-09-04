import Link from 'next/link';
import { getPublishedBlogPosts } from '@/src/lib/blog';

export default async function BlogPreview() {
  const posts = await getPublishedBlogPosts();
  const [featured, ...smallerPosts] = posts;

  if (!featured) return null;

  return (
    <section className="py-32 bg-surface border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm font-mono text-accent-primary tracking-[0.2em] uppercase mb-4">Research Pipeline</p>
            <h2 className="text-4xl md:text-5xl font-display">Insights from the quantum frontier</h2>
          </div>
          <Link href="/blogs" className="text-sm font-medium text-accent-primary hover:text-text-primary transition-colors">
            View all research →
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <Link href={`/blogs/${featured.slug}`} className="w-full lg:w-[60%] group cursor-pointer" data-hover="READ">
            {featured.image && (
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/9]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
              </div>
            )}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-mono text-accent-primary border border-accent-primary/30 px-2 py-1 rounded">{featured.tag}</span>
              <span className="text-sm text-text-secondary">{featured.date}</span>
            </div>
            <h3 className="text-3xl font-display mb-4 group-hover:text-accent-primary transition-colors">{featured.title}</h3>
            <p className="text-text-secondary text-lg leading-relaxed">{featured.excerpt}</p>
          </Link>

          <div className="w-full lg:w-[40%] flex flex-col gap-8">
            {smallerPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blogs/${post.slug}`} className="group cursor-pointer flex-1 flex flex-col justify-center border-l-2 border-border-subtle hover:border-accent-primary pl-8 transition-colors" data-hover="READ">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono text-accent-secondary border border-accent-secondary/30 px-2 py-1 rounded">{post.tag}</span>
                  <span className="text-sm text-text-secondary">{post.date}</span>
                </div>
                <h3 className="text-2xl font-display group-hover:text-accent-secondary transition-colors">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
