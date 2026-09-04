'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };
const easing = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative isolate min-h-[780px] overflow-hidden bg-[#030705] md:min-h-screen">
      <div className="absolute inset-0">
        <img src="/assets/editorial/hero-observatory.png" alt="A cryptographic observatory protecting a quantum-ready core" className="h-full w-full object-cover object-[67%_center] md:object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,5,.98)_0%,rgba(3,7,5,.93)_30%,rgba(3,7,5,.48)_57%,rgba(3,7,5,.13)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,7,5,.8)_0%,transparent_30%,rgba(3,7,5,.3)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[780px] max-w-7xl items-center px-6 pb-20 pt-36 md:min-h-screen md:pb-24 md:pt-32">
        <div className="max-w-2xl">
          <motion.div variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.1, ease: easing }} className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent-primary shadow-[0_0_18px_rgba(198,155,36,.85)]" />
            <span className="font-mono text-[11px] uppercase tracking-[.22em] text-accent-primary md:text-xs">Quantum-ready blockchain engineering</span>
          </motion.div>

          <motion.h1 variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.85, delay: 0.2, ease: easing }} className="font-display text-5xl leading-[.94] tracking-[-.045em] md:text-7xl lg:text-[5.7rem]">
            Build trust that <span className="text-gradient-primary">outlives assumptions.</span>
          </motion.h1>

          <motion.p variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.65, delay: 0.36, ease: easing }} className="mt-8 max-w-xl text-lg leading-relaxed text-[#b2bbca] md:text-xl">
            Codesstellar architects crypto-agile blockchain systems, practical post-quantum migration paths, and security intelligence for infrastructure designed to last.
          </motion.p>

          <motion.div variants={reveal} initial="hidden" animate="visible" transition={{ duration: 0.6, delay: 0.48, ease: easing }} className="mt-10 flex flex-wrap gap-4">
            <Link href="/build" className="rounded-full bg-accent-primary px-7 py-3.5 font-medium text-background shadow-[0_12px_34px_rgba(198,155,36,.18)] transition-transform hover:-translate-y-0.5 hover:bg-[#d5ab32]">Start a technical conversation</Link>
            <Link href="/case-studies" className="rounded-full border border-white/20 bg-black/15 px-7 py-3.5 font-medium text-text-primary backdrop-blur-md transition-colors hover:border-accent-primary hover:text-accent-primary">View engagement patterns</Link>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.75 }} className="absolute bottom-7 left-6 right-6 mx-auto flex max-w-7xl items-center justify-between border-t border-white/15 pt-4 font-mono text-[10px] uppercase tracking-[.17em] text-white/50 md:bottom-9">
        <span>Cryptographic observatory</span><span className="hidden sm:block">PQC / AI SECURITY / WEB3</span><span className="text-accent-primary">01 — 03</span>
      </motion.div>
    </section>
  );
}
