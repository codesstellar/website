'use client';

import { motion } from 'framer-motion';

export default function NetworkStats() {
  const stats = [
    {
      label: "Security posture",
      value: 'Crypto-agile',
      color: "text-accent-primary"
    },
    {
      label: "PQC standards",
      value: 'FIPS 203–205',
      color: "text-text-primary"
    },
    {
      label: "AI workflow",
      value: 'Human-in-loop',
      color: "text-text-primary"
    },
    {
      label: "Delivery model",
      value: 'Assess → build',
      color: "text-accent-secondary"
    }
  ];

  return (
    <section className="border-y border-border-subtle bg-surface/50 backdrop-blur-md relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border-subtle border-x border-border-subtle">
          {stats.map((stat, i) => (
            <div key={i} className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                {i === 0 && <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse"></span>}
                <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">{stat.label}</span>
              </div>
              <motion.div 
                key={stat.value}
                initial={{ opacity: 0.5, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-2xl md:text-4xl font-display font-bold ${stat.color}`}
              >
                {stat.value}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
