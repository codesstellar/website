'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

const profiles = [
  { name: 'EVM protocol', score: 42, findings: ['ECDSA wallet signatures', 'Upgradeable verification path', 'Bridge signer inventory'], next: 'Map signer and verifier dependencies before selecting a migration path.' },
  { name: 'Enterprise chain', score: 58, findings: ['PKI and node identity', 'HSM compatibility review', 'API traffic encryption'], next: 'Prioritize hybrid key establishment at external trust boundaries.' },
  { name: 'Custody / wallet', score: 35, findings: ['Key lifecycle design', 'Recovery and rotation flow', 'Signing UX constraints'], next: 'Prototype signature abstraction and an account migration experience.' },
];

export default function ReadinessConsole() {
  const [active, setActive] = useState(0);
  const profile = profiles[active];

  return (
    <section className="py-24 md:py-32 bg-surface border-y border-border-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(74,222,128,0.09),transparent_34%),radial-gradient(circle_at_0%_75%,rgba(198,155,36,0.1),transparent_30%)]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[.88fr_1.12fr] gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-mono text-accent-primary tracking-[0.18em] uppercase mb-5">AI-assisted discovery</p>
            <h2 className="text-4xl md:text-6xl font-display leading-[1.05] mb-6">See the migration surface before it becomes an emergency.</h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">Our AI-assisted discovery workflow helps teams organize cryptographic dependencies, identify high-value migration decisions, and turn a sprawling system into an actionable roadmap. Experts remain in control of every recommendation.</p>
            <div className="mt-8 flex items-center gap-3 text-sm text-text-secondary"><Bot className="w-5 h-5 text-accent-tertiary" /> Built for evidence, review, and repeatable security decisions.</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-background/70 shadow-2xl shadow-black/30 p-5 md:p-7 backdrop-blur-sm">
            <div className="flex items-center justify-between pb-5 border-b border-border-subtle">
              <div className="flex items-center gap-3"><div className="w-9 h-9 grid place-items-center rounded-xl bg-accent-primary/10 border border-accent-primary/25"><ShieldCheck className="w-5 h-5 text-accent-primary" /></div><div><p className="font-mono text-xs text-text-secondary">CODESTELLAR / SIGNAL</p><p className="text-sm font-medium">PQC readiness preview</p></div></div>
              <span className="text-[11px] font-mono rounded-full px-2.5 py-1 bg-accent-tertiary/10 text-accent-tertiary">DEMO MODE</span>
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-2">
              {profiles.map((item, index) => <button key={item.name} onClick={() => setActive(index)} className={`text-left px-3 py-3 rounded-xl border text-sm transition-all ${active === index ? 'border-accent-primary/70 bg-accent-primary/10 text-text-primary' : 'border-border-subtle text-text-secondary hover:border-white/20'}`}>{item.name}</button>)}
            </div>
            <motion.div key={profile.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6 grid md:grid-cols-[150px_1fr] gap-6">
              <div className="rounded-2xl bg-surface border border-border-subtle p-5 text-center"><p className="text-xs font-mono text-text-secondary uppercase">Readiness</p><p className="mt-3 text-5xl font-display text-accent-primary">{profile.score}</p><p className="text-xs text-text-secondary mt-1">of 100</p><div className="h-1.5 bg-white/10 rounded-full mt-5 overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${profile.score}%` }} className="h-full bg-accent-primary" /></div></div>
              <div><p className="text-xs font-mono text-accent-tertiary uppercase tracking-wider mb-3">Review areas</p><ul className="space-y-3">{profile.findings.map((finding) => <li key={finding} className="flex gap-3 text-sm text-text-secondary"><CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-accent-tertiary" />{finding}</li>)}</ul><div className="mt-5 rounded-xl bg-accent-primary/5 border border-accent-primary/15 px-4 py-3 text-sm text-text-secondary"><span className="text-text-primary font-medium">Suggested next step: </span>{profile.next}</div></div>
            </motion.div>
            <a href="/build" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-text-primary transition-colors">Request a tailored assessment <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
