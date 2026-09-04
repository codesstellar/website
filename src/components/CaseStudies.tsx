'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight, Check, ChevronDown, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const studies = [
  {
    number: '01', eyebrow: 'PQC migration blueprint', title: 'A protocol’s path from cryptographic inventory to crypto-agility.',
    summary: 'For teams whose wallets, validators, bridges, and governance controls must remain trustworthy through a standards transition.',
    focus: ['Cryptographic dependency map', 'Hybrid migration strategy', 'Key rotation and rollback design'],
    outcome: 'A sequenced, decision-ready roadmap that shows what can change now, what needs a protocol upgrade, and where risk is concentrated.',
    accent: 'gold',
  },
  {
    number: '02', eyebrow: 'AI-assisted security operations', title: 'Make the security signal legible across code, chain activity, and research.',
    summary: 'For security teams working across a growing stack of contracts, data sources, alerts, and external intelligence.',
    focus: ['Alert triage workflows', 'Dependency and change analysis', 'Human-reviewed threat research'],
    outcome: 'An evidence-led operating model that gives experts faster context—not a black box that makes security decisions for them.',
    accent: 'green',
  },
  {
    number: '03', eyebrow: 'Secure product engineering', title: 'Build the product surface and the trust boundary together.',
    summary: 'For Web3 products that need a durable architecture across signing, privacy, integrations, and user experience.',
    focus: ['Wallet and signing UX', 'Verification boundaries', 'Production-ready delivery systems'],
    outcome: 'A clear path from architecture to implementation, designed around the product’s users, economics, and security model.',
    accent: 'gold',
  },
];

export default function CaseStudies() {
  const container = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.case-reveal').forEach((item) => {
        gsap.fromTo(item, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 82%' } });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="pt-28 pb-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="case-reveal max-w-4xl mb-20 md:mb-28">
          <p className="text-sm font-mono text-accent-primary tracking-[.2em] uppercase mb-5">Selected engagement patterns</p>
          <h1 className="text-5xl md:text-7xl font-display leading-[1.02]">Work designed to make critical systems <span className="text-gradient-primary">more durable.</span></h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed">We partner with ambitious teams at the intersection of protocol engineering, cryptography, and AI-enabled security. Client-specific details are kept confidential; these are the problems and outcomes we are built to deliver.</p>
        </div>

        <div className="space-y-8">
          {studies.map((study) => {
            const gold = study.accent === 'gold';
            const accentText = gold ? 'text-accent-primary' : 'text-accent-tertiary';
            const accentBorder = gold ? 'border-accent-primary/25' : 'border-accent-tertiary/25';
            return <article key={study.number} className="case-reveal group relative grid lg:grid-cols-[100px_1.1fr_.9fr] gap-7 lg:gap-12 rounded-[2rem] border border-border-subtle bg-surface/50 p-7 md:p-10 overflow-hidden transition-colors hover:border-white/20">
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${gold ? 'bg-[radial-gradient(circle_at_90%_10%,rgba(198,155,36,.13),transparent_30%)]' : 'bg-[radial-gradient(circle_at_90%_10%,rgba(74,222,128,.12),transparent_30%)]'}`} />
              <div className={`relative text-5xl md:text-6xl font-display ${accentText} opacity-80`}>{study.number}</div>
              <div className="relative"><p className={`text-xs font-mono tracking-[.17em] uppercase ${accentText} mb-5`}>{study.eyebrow}</p><h2 className="text-3xl md:text-4xl font-display leading-tight">{study.title}</h2><p className="mt-5 text-text-secondary leading-relaxed">{study.summary}</p><div className="mt-7 flex flex-wrap gap-2">{study.focus.map((item) => <span key={item} className={`px-3 py-1.5 rounded-full border ${accentBorder} text-xs text-text-secondary`}>{item}</span>)}</div></div>
              <div className="relative flex flex-col justify-between rounded-2xl bg-background/55 border border-border-subtle p-6"><div><div className="flex items-center gap-2 text-xs font-mono text-text-secondary uppercase tracking-wider"><ShieldCheck className={`w-4 h-4 ${accentText}`} /> Intended outcome</div><p className="mt-4 text-sm leading-relaxed text-text-secondary">{study.outcome}</p></div><Link href="/build" className={`mt-8 inline-flex items-center gap-2 text-sm font-medium ${accentText} hover:text-text-primary transition-colors`}>Discuss this engagement <ArrowUpRight className="w-4 h-4" /></Link></div>
            </article>;
          })}
        </div>

        <div className="case-reveal mt-20 grid md:grid-cols-[1fr_auto] gap-8 items-center border-t border-border-subtle pt-12"><div><p className="text-sm font-mono text-accent-tertiary uppercase tracking-[.17em]">Engagement principle</p><h2 className="mt-3 text-3xl md:text-4xl font-display">The best architecture holds up under scrutiny.</h2></div><Link href="/build" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-accent-primary/60 text-accent-primary hover:bg-accent-primary hover:text-background transition-colors">Start a technical conversation <ChevronDown className="w-4 h-4 -rotate-90" /></Link></div>
      </div>
    </section>
  );
}
