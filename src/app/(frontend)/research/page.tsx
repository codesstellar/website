import type { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedResearchItems } from '@/src/lib/research';
import { 
  Radio, 
  ExternalLink, 
  Bookmark, 
  Sparkles, 
  Database, 
  ArrowRight,
  Filter,
  CheckCircle,
  FileText
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Research Intelligence Hub | Codesstellar',
  description: 'Real-time research intelligence monitoring post-quantum cryptography, NIST standards, Web3 vulnerabilities, and AI security workflows.',
};

export default async function ResearchHubPage() {
  const items = await getPublishedResearchItems();

  const pillars = [
    'All Topics',
    'Post-Quantum Web3 Security',
    'Blockchain Infrastructure',
    'Web3 Security Engineering',
    'AI + Security Research',
  ];

  return (
    <div className="pt-28 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-primary"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">
              Live Intelligence Pipeline · Payload CMS Powered
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display leading-tight mb-6">
            Cryptographic telemetry & <span className="text-gradient-primary">threat intelligence.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
            We continuously ingest, synthesize, and evaluate research from NIST, IACR, security audits, and protocol standards before converting high-signal findings into engineering blueprints.
          </p>
        </div>

        {/* Pipeline Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-border-subtle bg-surface/50 mb-16 font-mono text-sm">
          <div>
            <span className="text-text-secondary text-xs uppercase block mb-1">Tracked Sources</span>
            <span className="text-xl text-text-primary font-display font-semibold">18+ Feeds</span>
          </div>
          <div>
            <span className="text-text-secondary text-xs uppercase block mb-1">Monitored Standards</span>
            <span className="text-xl text-accent-primary font-display font-semibold">FIPS 203/204/205</span>
          </div>
          <div>
            <span className="text-text-secondary text-xs uppercase block mb-1">Ingestion Engine</span>
            <span className="text-xl text-accent-secondary font-display font-semibold">Automated Daily</span>
          </div>
          <div>
            <span className="text-text-secondary text-xs uppercase block mb-1">Human Review Gate</span>
            <span className="text-xl text-text-primary font-display font-semibold">100% Expert Signoff</span>
          </div>
        </div>

        {/* Research Feed */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
            <h2 className="text-2xl font-display text-text-primary flex items-center gap-2">
              <Database className="w-5 h-5 text-accent-primary" /> Active Research Intelligence ({items.length})
            </h2>
            <span className="text-xs font-mono text-text-secondary">Sorted by Relevance Score</span>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {items.map((item) => (
              <article
                key={item.id}
                className="group rounded-2xl border border-border-subtle bg-surface/40 p-7 md:p-9 transition-all duration-300 hover:border-accent-primary/40 relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono text-accent-primary border border-accent-primary/30 px-2.5 py-1 rounded bg-background/60">
                      {item.topicPillar}
                    </span>
                    <span className="text-xs font-mono text-text-secondary">
                      Source: <strong className="text-text-primary">{item.sourceName}</strong>
                    </span>
                    <span className="text-xs text-text-secondary">
                      • {new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-text-secondary">Importance:</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`w-2 h-2 rounded-full ${
                            star <= item.importanceScore ? 'bg-accent-primary' : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-mono text-accent-primary ml-1">{item.importanceScore}/5</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-display mb-4 text-text-primary group-hover:text-accent-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-text-secondary text-base leading-relaxed mb-6">
                  {item.summary}
                </p>

                {item.keyClaims && (
                  <div className="mb-6 p-4 rounded-xl bg-background/60 border border-border-subtle">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-accent-secondary mb-2 flex items-center gap-1.5">
                      <Bookmark className="w-3.5 h-3.5" /> Key Cryptographic Claims
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed font-mono">
                      {item.keyClaims}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="p-4 rounded-xl bg-background/40 border border-border-subtle">
                    <span className="text-xs font-mono uppercase tracking-wider text-text-secondary block mb-1">
                      Technical Impact on Web3
                    </span>
                    <p className="text-text-secondary leading-relaxed">
                      {item.technicalRelevance}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/40 border border-border-subtle">
                    <span className="text-xs font-mono uppercase tracking-wider text-text-secondary block mb-1">
                      Business & Custody Relevance
                    </span>
                    <p className="text-text-secondary leading-relaxed">
                      {item.businessRelevance}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent-primary transition-colors"
                  >
                    View Original Source Bulletin <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {item.relatedBlogSlug ? (
                    <Link
                      href={`/blogs/${item.relatedBlogSlug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-text-primary transition-colors"
                    >
                      Read Codesstellar Deep Dive <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="text-xs font-mono text-accent-secondary flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Editorial brief queued for publication
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Ingestion Pipeline Explanation Card */}
        <div className="mt-20 rounded-3xl border border-border-subtle bg-surface/30 p-8 md:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-accent-primary uppercase tracking-widest block mb-3">
              Research Pipeline Architecture
            </span>
            <h3 className="text-2xl md:text-3xl font-display mb-4">
              How Codesstellar Research Pipeline Works
            </h3>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              Our automated research pipeline queries vetted cryptography repositories (IACR, NIST, IEEE), smart contract security advisories, and protocol research forums. Items scoring 4 or 5 on our multi-factor rubric are shortlisted, enriched with architectural risk models, and synthesized into public engineering notes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/blogs"
                className="px-6 py-3 rounded-full bg-accent-primary text-background font-medium text-sm hover:bg-opacity-90 transition-all"
              >
                Browse Published Field Notes
              </Link>
              <Link
                href="/build"
                className="px-6 py-3 rounded-full border border-border-subtle bg-surface text-text-primary font-medium text-sm hover:border-accent-primary transition-all"
              >
                Suggest a Research Source
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
