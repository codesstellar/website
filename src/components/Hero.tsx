'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };
const easing = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-background pt-40 pb-24 md:min-h-screen md:pt-44 md:pb-28">
      <div className="orb pointer-events-none absolute -right-24 -top-24 h-[560px] w-[560px] bg-[rgba(19,77,55,.07)]" style={{ animationDuration: '18s' }} />
      <div className="orb pointer-events-none absolute -left-20 bottom-0 h-[380px] w-[380px] bg-[rgba(174,128,0,.06)]" style={{ animationDuration: '22s', animationDelay: '-8s' }} />
      <div className="orb pointer-events-none absolute right-1/4 top-1/2 hidden h-72 w-72 bg-[rgba(19,77,55,.04)] md:block" style={{ animationDuration: '14s', animationDelay: '-4s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <motion.div variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.1, ease: easing }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-tertiary shadow-[0_0_8px_var(--spring)]" />
            <span className="font-mono text-[11px] uppercase tracking-[.22em] text-text-secondary md:text-xs">Quantum-ready blockchain engineering</span>
          </motion.div>

          <motion.h1 variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.85, delay: 0.2, ease: easing }} className="text-5xl font-extrabold leading-[.94] tracking-[-.04em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Build trust that <span className="text-accent-secondary">outlives</span> assumptions.
          </motion.h1>

          <motion.p variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.65, delay: 0.36, ease: easing }} className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Codesstellar architects crypto-agile blockchain systems, practical post-quantum migration paths, and security intelligence for infrastructure designed to last.
          </motion.p>

          <motion.div variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.48, ease: easing }} className="mt-10 flex flex-wrap gap-3">
            <Link href="/build" className="inline-flex items-center gap-2 rounded-full bg-text-primary px-7 py-3.5 font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent-secondary hover:shadow-[0_12px_32px_rgba(19,77,55,.28)]">
              Start a technical conversation <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link href="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-border-2 px-7 py-3.5 font-medium text-text-secondary transition-all hover:-translate-y-0.5 hover:border-accent-secondary hover:text-accent-secondary">
              View engagement patterns ↗
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.75 }} className="relative z-10 mx-auto mt-20 flex max-w-7xl items-center justify-between border-t border-border-subtle px-6 pt-5 font-mono text-[10px] uppercase tracking-[.17em] text-text-secondary/70 md:mt-24">
        <span>Cryptographic observatory</span><span className="hidden sm:block">PQC / AI SECURITY / WEB3</span><span className="text-accent-primary">01 — 03</span>
      </motion.div>
    </section>
  );
}
