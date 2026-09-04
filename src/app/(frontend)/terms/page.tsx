import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Codesstellar',
  description: 'Terms of service and engagement guidelines for Codesstellar.',
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="text-xs font-mono text-accent-primary hover:text-text-primary transition-colors mb-8 inline-block">
          ← Back to Home
        </Link>
        <div className="mb-12">
          <p className="text-xs font-mono text-accent-primary uppercase tracking-widest mb-3">Legal & Transparency</p>
          <h1 className="text-4xl md:text-5xl font-display mb-4">Terms of Service</h1>
          <p className="text-sm font-mono text-text-secondary">Effective date: August 2026 · Codesstellar Security Collective</p>
        </div>

        <div className="space-y-8 text-text-secondary leading-relaxed border-t border-border-subtle pt-8">
          <section>
            <h2 className="text-xl font-display text-text-primary mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing Codesstellar.com or utilizing our open research briefs, APIs, and consultative channels, you agree to comply with and be bound by these Terms of Service. If you do not agree, please discontinue use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display text-text-primary mb-3">2. Nature of Research & Informational Disclaimers</h2>
            <p>
              The research materials, post-quantum algorithm benchmarks, security analyses, and field notes published on this website are provided for educational, research, and informational purposes only. They do not constitute formal legal, financial, or certified audit representations unless delivered under an executed Master Services Agreement (MSA) or Statement of Work (SOW).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display text-text-primary mb-3">3. Intellectual Property & Open Collaboration</h2>
            <p>
              Unless otherwise stated, all proprietary research, visual brand assets, diagrams, and written editorial content are the property of Codesstellar. Open-source code examples, contracts, and interfaces provided in our research are distributed under permissive open licenses (MIT / Apache 2.0).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display text-text-primary mb-3">4. Security Vulnerability Reporting</h2>
            <p>
              If you discover a potential vulnerability in Codesstellar infrastructure or within any contracts we maintain, we strongly encourage responsible disclosure. Please notify our engineering team immediately at <span className="text-accent-primary font-mono">contact@codesstellar.com</span> with encrypted details. We commit to prompt verification and remediation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display text-text-primary mb-3">5. Limitation of Liability</h2>
            <p>
              In no event shall Codesstellar or its contributors be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the research, code snippets, or systems presented on this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display text-text-primary mb-3">6. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
