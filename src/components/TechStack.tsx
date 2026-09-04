'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const layers = [
  {
    label: 'Layer 01',
    title: 'Cryptographic foundation',
    description: 'Cryptographic inventory, key-lifecycle design, and standards-aligned choices for key establishment and signatures—planned as a transition, not a disruptive replacement.',
    image: '/assets/editorial/architecture-cryptography.png',
    alt: 'Abstract layered cryptographic verification core',
    accent: 'text-accent-primary',
    glow: 'shadow-[0_32px_80px_rgba(198,155,36,.12)]',
  },
  {
    label: 'Layer 02',
    title: 'Security intelligence',
    description: 'AI-assisted workflows group alerts, map dependencies, and assemble evidence so specialists can focus their attention where it matters most.',
    image: '/assets/editorial/architecture-observability.png',
    alt: 'Abstract security observability telemetry field',
    accent: 'text-accent-tertiary',
    glow: 'shadow-[0_32px_80px_rgba(74,222,128,.10)]',
  },
  {
    label: 'Layer 03',
    title: 'Product and protocol surface',
    description: 'Smart contracts, DApps, APIs, and integrations designed around explicit trust boundaries, clear verification, and practical upgrade paths.',
    image: '/assets/editorial/architecture-application.png',
    alt: 'Abstract modular protocol infrastructure',
    accent: 'text-text-primary',
    glow: 'shadow-[0_32px_80px_rgba(240,244,255,.08)]',
  },
];

export default function TechStack() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.architecture-layer').forEach((layer) => {
        gsap.fromTo(layer, { opacity: 0, y: 36 }, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: layer, start: 'top 82%', once: true },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden border-t border-border-subtle bg-background py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(26,93,66,.13),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(198,155,36,.08),transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <header className="mb-16 max-w-3xl md:mb-24">
          <p className="mb-5 font-mono text-sm uppercase tracking-[.2em] text-accent-primary">Designed for change</p>
          <h2 className="font-display text-5xl leading-[.98] md:text-7xl">The architecture <span className="text-gradient-primary">behind durability.</span></h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-text-secondary">A layered system that gives teams a clearer path from cryptographic decisions to observable operations and resilient product delivery.</p>
        </header>

        <div className="space-y-6">
          {layers.map((layer, index) => (
            <article key={layer.label} className="architecture-layer group grid overflow-hidden rounded-[2rem] border border-border-subtle bg-surface/60 md:grid-cols-[.92fr_1.08fr]">
              <div className="relative flex min-h-[280px] flex-col justify-between p-8 md:min-h-[390px] md:p-11">
                <div>
                  <p className={`font-mono text-xs uppercase tracking-[.2em] ${layer.accent}`}>{layer.label}</p>
                  <div className="mt-8 flex items-start gap-5"><span className={`mt-1 font-display text-3xl ${layer.accent}`}>0{index + 1}</span><h3 className="max-w-sm font-display text-3xl leading-tight md:text-4xl">{layer.title}</h3></div>
                </div>
                <p className="max-w-md text-base leading-relaxed text-text-secondary md:text-lg">{layer.description}</p>
              </div>
              <div className="relative min-h-[300px] overflow-hidden border-t border-border-subtle bg-[#030805] md:min-h-0 md:border-l md:border-t-0">
                <img src={layer.image} alt={layer.alt} className="h-full w-full object-cover opacity-80 transition duration-[1800ms] ease-out group-hover:scale-105 group-hover:opacity-100 motion-reduce:transition-none" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,10,7,.35),transparent_42%),linear-gradient(0deg,rgba(4,10,7,.28),transparent_50%)]" />
                <div className={`absolute inset-x-12 bottom-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50 ${layer.glow}`} />
                <div className="absolute right-7 top-7 h-2.5 w-2.5 rounded-full bg-accent-primary shadow-[0_0_22px_rgba(198,155,36,.9)]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
