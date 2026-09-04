import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Codesstellar',
  description: 'Privacy policy and data protection principles for Codesstellar.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="text-xs font-mono text-accent-primary hover:text-text-primary transition-colors mb-8 inline-block">
          ← Back to Home
        </Link>
        <div className="mb-12">
          <p className="text-xs font-mono text-accent-primary uppercase tracking-widest mb-3">Legal & Transparency</p>
          <h1 className="text-4xl md:text-5xl font-display mb-4">Privacy Policy</h1>
          <p className="text-sm font-mono text-text-secondary">Last updated: August 2026 · Codesstellar Security Collective</p>
        </div>

        <div className="space-y-8 text-text-secondary leading-relaxed border-t border-border-subtle pt-8">
          <section>
            <h2 className="text-xl font-display text-text-primary mb-3">1. Overview and Core Philosophy</h2>
            <p>
              Codesstellar ("we", "our", "us") values your privacy. We believe in cryptographic minimization: collecting only the minimum data strictly required to deliver our security assessments, research feeds, and engineering consultations. We do not monetize, rent, or sell personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display text-text-primary mb-3">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-text-primary">Contact & Inquiry Data:</strong> When you submit a project inquiry via our Build page or subscribe to our research newsletter, we collect your name, email address, organization name, and message details.
              </li>
              <li>
                <strong className="text-text-primary">Technical Telemetry:</strong> Anonymized server logs including browser user agent, IP address (truncated for anonymity), referring pages, and timestamp to ensure site availability, performance, and DDOS mitigation.
              </li>
              <li>
                <strong className="text-text-primary">Cryptographic Verification Artifacts:</strong> Any smart contract code, ABI signatures, or public keys shared during technical reviews are handled with strict confidentiality under non-disclosure terms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display text-text-primary mb-3">3. How We Use Information</h2>
            <p>
              We process data solely to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li>Respond to technical engagement requests and schedule consultations.</li>
              <li>Deliver our weekly Research Digest and security advisories.</li>
              <li>Maintain the security, uptime, and integrity of our Payload CMS infrastructure.</li>
              <li>Comply with applicable legal, regulatory, and audit obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display text-text-primary mb-3">4. Cookies & Analytics</h2>
            <p>
              We do not use invasive third-party cross-site tracking cookies. Any analytical measurement used is privacy-respecting and aggregated without fingerprinting individual visitors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display text-text-primary mb-3">5. Data Retention & Security</h2>
            <p>
              Inquiry submissions and research subscription data are stored securely within Supabase PostgreSQL databases with SSL encryption in transit and at rest. You may request full deletion of your contact data at any time by emailing <span className="text-accent-primary font-mono">contact@codesstellar.com</span>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display text-text-primary mb-3">6. Contact Us</h2>
            <p>
              For privacy queries or data rights requests:
              <br />
              <strong className="text-text-primary">Codesstellar</strong>
              <br />
              Email: <span className="text-accent-primary font-mono">contact@codesstellar.com</span>
              <br />
              Location: Delhi, IN
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
