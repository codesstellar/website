'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function UserPathways() {
  const pathways = [
    {
      title: "For Developers",
      desc: "Build quantum-resistant dApps with our comprehensive SDKs and APIs.",
      link: "/build",
      linkText: "Start Building",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: "For Enterprises",
      desc: "Secure your existing infrastructure and transition to post-quantum standards.",
      link: "/build",
      linkText: "Contact Sales",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      title: "For Researchers",
      desc: "Explore our peer-reviewed cryptographic proofs and AI models.",
      link: "/blogs",
      linkText: "Read Papers",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pathways.map((path, i) => (
            <motion.div 
              key={i}
              className="p-8 border border-border-subtle rounded-2xl hover:bg-surface transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent-secondary/10 text-accent-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {path.icon}
              </div>
              <h3 className="text-2xl font-display mb-3">{path.title}</h3>
              <p className="text-text-secondary mb-8 h-12">{path.desc}</p>
              <Link 
                href={path.link}
                className="inline-flex items-center gap-2 text-accent-primary font-medium hover:gap-4 transition-all"
              >
                {path.linkText}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
