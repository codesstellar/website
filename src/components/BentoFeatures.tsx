'use client';

export default function BentoFeatures() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rv mb-16 max-w-2xl">
          <div className="eyebrow mb-5">Capabilities</div>
          <h2 className="text-4xl font-extrabold leading-[.98] tracking-tight md:text-6xl">
            Security that can <span className="text-accent-secondary">change with the threat.</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary md:text-xl">
            A practical stack for crypto-agile blockchains: post-quantum migration design, observable systems, and AI-assisted security analysis.
          </p>
        </div>

        <div className="bento rv">
          {/* Large Feature - PQC */}
          <div className="bcard span-2">
            <div className="bc-icon gr">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
            </div>
            <h3>PQC-ready by design</h3>
            <p className="max-w-md">Design migration paths around NIST&apos;s standardized ML-KEM, ML-DSA, and SLH-DSA families&mdash;without locking the protocol into a single future.</p>
            <div className="relative mt-6 flex h-28 items-center justify-center overflow-hidden rounded-2xl border border-border-subtle bg-off">
              <div className="absolute h-[220%] w-[220%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--off)_0%,var(--green)_50%,var(--off)_100%)] opacity-25" />
              <div className="absolute inset-1 flex items-center justify-center rounded-xl bg-white">
                <span className="font-mono text-sm text-accent-secondary">f(x) = A&middot;s + e mod q</span>
              </div>
            </div>
          </div>

          {/* Small Feature - AI */}
          <div className="bcard">
            <div className="bc-icon sp">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18M7 14l4-4 4 4 5-5" /></svg>
            </div>
            <h3>AI security co-pilot</h3>
            <p>Turn on-chain signals, code changes, and incident data into explainable review queues for security teams.</p>
            <div className="mt-6 flex h-16 items-end gap-2">
              {[40, 70, 45, 90, 65, 100].map((h, i) => (
                <div key={i} className="w-full rounded-t-sm bg-accent-tertiary/60" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          {/* Small Feature - ZK */}
          <div className="bcard gold">
            <div className="bc-icon go">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1 3-6z" /></svg>
            </div>
            <h3>Zero-Knowledge</h3>
            <p>Privacy and verification architecture assessed against performance, trust, and long-term cryptographic assumptions.</p>
            <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-accent-primary/60">
              <div className="h-3.5 w-3.5 rounded-full bg-accent-primary" />
            </div>
          </div>

          {/* Medium Feature - Terminal */}
          <div className="bcard span-2 font-mono text-sm" style={{ background: 'var(--off)' }}>
            <div className="mb-4 flex items-center gap-2 border-b border-border-subtle pb-4">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#FF5F57' }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#28C840' }} />
              <span className="ml-2 text-text-secondary">deploy.ts</span>
            </div>
            <div className="text-text-secondary">
              <p><span className="text-accent-secondary">import</span> {'{'} CryptoInventory {'}'} <span className="text-accent-secondary">from</span> &apos;@codesstellar/assess&apos;;</p>
              <br />
              <p><span className="text-accent-secondary">const</span> inventory = <span className="text-accent-secondary">new</span> CryptoInventory({'{'}</p>
              <p className="pl-4">scope: <span className="text-accent-tertiary">&apos;wallets, nodes, bridges&apos;</span>,</p>
              <p className="pl-4">reviewMode: <span className="text-accent-secondary">&apos;human-in-the-loop&apos;</span></p>
              <p>{'}'});</p>
              <br />
              <p className="text-ink-3">// Map dependencies. Prioritize. Plan the migration.</p>
              <p><span className="text-accent-secondary">await</span> inventory.review();</p>
            </div>
          </div>

          {/* Product engineering */}
          <div className="bcard">
            <div className="bc-icon gr">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M16 21h3a2 2 0 0 0 2-2v-3M8 21H5a2 2 0 0 1-2-2v-3M9 9h6v6H9z" /></svg>
            </div>
            <h3>Product engineering</h3>
            <p>Full-stack web and mobile&mdash;TypeScript, React, Next, React Native. Clean architecture, defensible code.</p>
          </div>

          {/* Track record - filled */}
          <div className="bcard" style={{ background: 'var(--green)', borderColor: 'var(--green)' }}>
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[.12em]" style={{ color: 'rgba(255,255,255,.6)' }}>Delivery model</div>
            <div className="text-4xl font-extrabold leading-tight tracking-tight" style={{ color: '#fff' }}>Assess <span style={{ color: 'rgba(255,255,255,.45)' }}>&rarr;</span> build</div>
            <div className="mt-2 text-[15px] font-medium" style={{ color: 'rgba(255,255,255,.75)' }}>human-reviewed at every gate</div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ background: 'rgba(255,255,255,.14)', color: '#fff' }}>No juniors</span>
              <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ background: 'rgba(255,255,255,.14)', color: '#fff' }}>Human-in-loop</span>
            </div>
          </div>

          {/* Web3 & PQC */}
          <div className="bcard gold">
            <div className="bc-icon go">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg>
            </div>
            <h3>Web3 &amp; PQC</h3>
            <p>Smart contracts, wallets, ML-KEM, ML-DSA post-quantum cryptography. Infrastructure that plans in decades.</p>
            <div className="bc-tags"><span className="bc-tag" style={{ background: 'var(--gold-gl)', color: 'var(--gold)' }}>ML-KEM</span><span className="bc-tag">ML-DSA</span><span className="bc-tag">Solidity</span></div>
          </div>

          {/* Standards */}
          <div className="bcard">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[.12em] text-ink-4">Standards coverage</div>
            <div className="bc-big"><span className="g">3</span>/3</div>
            <div className="mt-1 text-sm font-medium text-text-secondary">FIPS 203, 204 &amp; 205<br />mapped to migration paths</div>
          </div>
        </div>
      </div>
    </section>
  );
}
