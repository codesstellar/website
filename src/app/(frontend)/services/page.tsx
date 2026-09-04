import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Cpu, 
  Terminal, 
  Binary, 
  ArrowUpRight, 
  Layers, 
  Lock, 
  CheckCircle2, 
  RefreshCw,
  SearchCode
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services & Security Engineering | Codesstellar',
  description: 'Specialized engineering in post-quantum cryptography (PQC), crypto-agile smart contract architecture, and AI-assisted security intelligence for Web3 infrastructure.',
};

const services = [
  {
    id: 'pqc',
    number: '01',
    title: 'Post-Quantum Cryptography (PQC) Infrastructure',
    eyebrow: 'NIST Standards & Cryptographic Migration',
    icon: Binary,
    summary:
      'We assess, design, and implement migration pathways from classical discrete logarithm and factoring assumptions (ECDSA, Ed25519, RSA) to NIST-standardized lattice and hash-based primitives.',
    deliverables: [
      'Comprehensive cryptographic dependency mapping across all signing surfaces',
      'FIPS 203 (ML-KEM) key encapsulation integration for secure validator gossip and RPC channels',
      'FIPS 204 (ML-DSA) and FIPS 205 (SLH-DSA) transaction authorization prototyping',
      'Hybrid dual-signature implementation preventing cross-scheme replay and malleability',
      'Block size, gas cost, and verification latency modeling for L1/L2 consensus layers',
    ],
    tech: ['ML-KEM (Kyber)', 'ML-DSA (Dilithium)', 'SLH-DSA (SPHINCS+)', 'Falcon', 'Stateful Hashes (LMS/XMSS)'],
  },
  {
    id: 'ai-security',
    number: '02',
    title: 'AI-Powered Security Intelligence & Audits',
    eyebrow: 'Continuous Anomaly Synthesis',
    icon: SearchCode,
    summary:
      'We combine automated code invariant analysis, multi-agent threat simulations, and real-time on-chain telemetry to provide human security commanders with actionable, explainable triage pipelines.',
    deliverables: [
      'Multi-chain mempool anomaly detection and abnormal withdrawal velocity monitors',
      'AI-augmented invariant synthesis and automated property-based fuzzing',
      'Cross-contract call stack dependency graphs and flash-loan attack surface modeling',
      'Human-verified security reports with mathematically proven mitigation strategies',
      'Continuous security control plane integration with Slack, Telegram, and PagerDuty',
    ],
    tech: ['Invariant Synthesis', 'Static Analysis', 'Formal Verification Assistance', 'Multi-Agent Fuzzing', 'EVM/SVM Tracing'],
  },
  {
    id: 'crypto-agility',
    number: '03',
    title: 'Crypto-Agile Protocol Engineering',
    eyebrow: 'Future-Proof Architecture',
    icon: RefreshCw,
    summary:
      'We design modular protocol boundaries that allow smart contracts, cross-chain bridges, and account abstraction layers to rotate cryptographic primitives without requiring hard forks or contract redeployments.',
    deliverables: [
      'Modular Verifier Registry architecture for EVM and SVM smart contracts',
      'ERC-4337 Account Abstraction post-quantum signature validation modules',
      'Cross-chain bridge cryptographic audit across relayers, signers, and contract gates',
      'Multi-signature and threshold signature (TSS) post-quantum upgrade pathways',
      'Zero-downtime key rotation protocols with granular time-locked emergency rollbacks',
    ],
    tech: ['ERC-4337', 'Modular Verifiers', 'MPC Threshold Schemes', 'Proxy Architecture', 'Cross-Chain Messaging'],
  },
  {
    id: 'fullstack',
    number: '04',
    title: 'Web3 Systems & High-Throughput Node Infrastructure',
    eyebrow: 'Resilient Production Delivery',
    icon: Layers,
    summary:
      'We build high-performance decentralized systems, custom indexing layers, secure validator configurations, and intuitive user experiences designed around cryptographic safety.',
    deliverables: [
      'Hardened RPC proxy and validator communication infrastructure',
      'Custom subgraphs, indexing pipelines, and real-time state telemetry consoles',
      'High-throughput dApp frontends with client-side zero-knowledge proof generation',
      'Hardware signer integration and enterprise key management workflows',
      'Security-first CI/CD automation with pre-deployment cryptographic validation gates',
    ],
    tech: ['Rust', 'Solidity', 'Go', 'TypeScript', 'Next.js', 'PostgreSQL', 'Docker/K8s'],
  },
];

const methodologySteps = [
  {
    step: '01',
    title: 'Cryptographic Inventory',
    description:
      'We map every public key, signature check, hash function, relayer gate, and external protocol dependency across your codebase and operations.',
  },
  {
    step: '02',
    title: 'Threat Modeling & Simulation',
    description:
      'We evaluate exposure to quantum Shor/Grover threats, algorithmic breaks, validation reentrancy, and economic griefing vectors under extreme conditions.',
  },
  {
    step: '03',
    title: 'Crypto-Agile Architecture',
    description:
      'We author modular interfaces and hybrid verification blueprints that let your system transition smoothly without disrupting existing user accounts.',
  },
  {
    step: '04',
    title: 'Implementation & Verification',
    description:
      'We deliver production-ready code, rigorous property-based tests, benchmarks, and formal mathematical proofs alongside your core engineering team.',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-accent-primary shadow-[0_0_12px_rgba(198,155,36,0.8)]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-primary">
              Codesstellar Engineering Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display leading-tight mb-8">
            Engineering for the <span className="text-gradient-primary">post-quantum horizon.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl">
            We partner with protocols, enterprise foundations, and security teams to build crypto-agile architectures, navigate NIST standard migrations, and protect high-value on-chain assets.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12 mb-32">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <section
                key={service.id}
                id={service.id}
                className="group rounded-3xl border border-border-subtle bg-surface/40 p-8 md:p-12 transition-all duration-300 hover:border-accent-primary/40 scroll-mt-28 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(198,155,36,0.06),transparent_70%)] pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-2xl md:text-3xl text-accent-primary font-bold">{service.number}</span>
                      <span className="text-xs font-mono uppercase tracking-wider text-text-secondary px-2.5 py-1 rounded border border-border-subtle bg-background/50">
                        {service.eyebrow}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display mb-4 text-text-primary group-hover:text-accent-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary text-base leading-relaxed mb-6">
                      {service.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.tech.map((t) => (
                        <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-background border border-border-subtle text-accent-secondary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-8 bg-background/60 border border-border-subtle rounded-2xl p-6 md:p-8">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-accent-primary mb-6 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" /> Core Deliverables & Capabilities
                    </h3>
                    <ul className="space-y-4">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-text-secondary text-sm md:text-base leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-border-subtle flex items-center justify-between">
                      <span className="text-xs font-mono text-text-secondary">Custom engagement models available</span>
                      <Link
                        href={`/build?service=${service.id}`}
                        className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-accent-primary hover:text-text-primary transition-colors"
                      >
                        Request engagement specs <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Methodology Section */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-mono text-accent-primary tracking-[0.2em] uppercase mb-4">Our Engineering Methodology</p>
            <h2 className="text-3xl md:text-5xl font-display">How we execute complex transitions.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((m) => (
              <div key={m.step} className="rounded-2xl border border-border-subtle bg-surface/50 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-display text-accent-primary/60 mb-4 block font-mono">{m.step}</span>
                  <h3 className="text-xl font-display mb-3 text-text-primary">{m.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{m.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border-subtle">
                  <span className="text-[11px] font-mono text-accent-secondary uppercase">Milestone Driven</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl border border-accent-primary/30 bg-gradient-to-r from-surface via-surface/80 to-surface p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-4xl font-display mb-3 text-text-primary">
              Prepare your protocol before quantum pressure arrives.
            </h3>
            <p className="text-text-secondary text-base">
              Speak directly with our cryptographic architects to conduct a preliminary dependency assessment.
            </p>
          </div>
          <Link
            href="/build"
            className="px-8 py-4 rounded-full bg-accent-primary text-background font-medium text-sm md:text-base hover:bg-opacity-90 transition-all glow-effect whitespace-nowrap"
          >
            Start Technical Consultation
          </Link>
        </div>

      </div>
    </div>
  );
}
