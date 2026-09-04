import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Cpu, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Codesstellar',
  description: 'Learn about Codesstellar—our mission to engineer quantum-ready blockchain architectures, crypto-agile systems, and AI-assisted security workflows.',
};

const principles = [
  {
    number: '01',
    title: 'Crypto-Agility Over Premature Lock-In',
    description:
      'We do not bet an entire protocol’s future on a single cryptographic scheme. We design modular verification layers that allow protocols to observe, rotate, and upgrade primitives with zero disruption to state or users.',
  },
  {
    number: '02',
    title: 'Verifiable Proofs Over Marketing Claims',
    description:
      'In high-stakes distributed infrastructure, assumptions are liabilities. We require mathematical proofs, reproducible invariant tests, and transparent failure boundaries before approving any cryptographic migration.',
  },
  {
    number: '03',
    title: 'AI Amplifies Context; Humans Own Risk',
    description:
      'We treat AI as the security control plane’s fastest researcher—ingesting telemetry, finding anomalies, and organizing signals. But we never surrender irreversible protocol or custody decisions to black-box models.',
  },
  {
    number: '04',
    title: 'Durable Systems Outlive the Market Cycle',
    description:
      'Hype cycles rise and fall, but cryptographic standards and sovereign ledgers must endure for decades. We engineer for the 10-to-30-year horizon, ensuring systems remain resilient against quantum adversaries.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-accent-primary shadow-[0_0_12px_rgba(198,155,36,0.8)]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">
              About Codesstellar
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display leading-[1.05] mb-8">
            The systems that will <span className="text-gradient-primary">outlive the hype.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
            Codesstellar is an engineering and security collective dedicated to building quantum-ready blockchain infrastructure, crypto-agile architectures, and intelligent threat observability.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-display mb-6">
              Why we exist.
            </h2>
            <div className="space-y-4 text-text-secondary text-base leading-relaxed">
              <p>
                The cryptographic foundation of the modern internet and public blockchains was designed around assumptions that will not hold indefinitely. Shor’s algorithm and quantum computing developments mean elliptic curve cryptography will eventually face existential risk.
              </p>
              <p>
                Yet most blockchain architectures today hardcode fixed 65-byte signatures directly into their consensus, state verification, and wallet contracts. Migrating these systems under emergency pressure will be catastrophic.
              </p>
              <p>
                Codesstellar was established to solve this transition deliberately. We provide protocol teams with the mathematical rigor, software architecture, and AI-enabled tooling necessary to make security upgrades smooth and inevitable.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-surface/50 border border-border-subtle rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-accent-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-primary">The Cryptographic Observatory</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display mb-6">
              Tracking the frontier of post-quantum standards.
            </h3>
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              Through our automated research pipeline and Payload CMS intelligence platform, we monitor the global evolution of post-quantum algorithms across NIST (FIPS 203/204/205), the IACR, CISA mandates, and academic cryptanalysis.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
              <div className="p-4 rounded-xl bg-background/70 border border-border-subtle">
                <span className="text-accent-primary block mb-1">01 / ML-KEM (Kyber)</span>
                <span className="text-text-secondary text-xs">P2P validator gossip encryption & ephemeral key exchange</span>
              </div>
              <div className="p-4 rounded-xl bg-background/70 border border-border-subtle">
                <span className="text-accent-secondary block mb-1">02 / ML-DSA (Dilithium)</span>
                <span className="text-text-secondary text-xs">Primary lattice-based transaction authorization signatures</span>
              </div>
              <div className="p-4 rounded-xl bg-background/70 border border-border-subtle">
                <span className="text-accent-tertiary block mb-1">03 / SLH-DSA (SPHINCS+)</span>
                <span className="text-text-secondary text-xs">Stateless hash-based signatures for high-value custody</span>
              </div>
              <div className="p-4 rounded-xl bg-background/70 border border-border-subtle">
                <span className="text-text-primary block mb-1">04 / Hybrid Dual-Signing</span>
                <span className="text-text-secondary text-xs">Classical + PQ binding to prevent cross-scheme malleability</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-accent-primary tracking-widest uppercase block mb-3">Our Core Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-display">Engineering principles we hold sacred.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p) => (
              <div key={p.number} className="rounded-3xl border border-border-subtle bg-surface/40 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-3xl font-bold text-accent-primary/50 block mb-4">{p.number}</span>
                  <h3 className="text-2xl font-display mb-4 text-text-primary">{p.title}</h3>
                  <p className="text-text-secondary text-base leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Presence & Contact */}
        <div className="rounded-3xl border border-border-subtle bg-gradient-to-b from-surface/80 to-surface/30 p-8 md:p-16 text-center max-w-4xl mx-auto">
          <Globe className="w-12 h-12 text-accent-primary mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-display mb-4">Let's build systems that endure.</h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Headquartered in Delhi, IN with distributed cryptographic research partners worldwide. We collaborate with protocols at every stage of their post-quantum roadmap.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/build"
              className="px-8 py-4 rounded-full bg-accent-primary text-background font-medium hover:bg-opacity-90 transition-all glow-effect"
            >
              Start a Technical Conversation
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border border-border-subtle bg-surface text-text-primary font-medium hover:border-accent-primary transition-all"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
