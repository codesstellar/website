'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-background relative pt-20 pb-12 border-t border-border-subtle mt-auto">
      {/* Top Border Gradient Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Col 1 - Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center">
              <img src="/assets/logo-full.png" alt="Codesstellar Logo" className="h-9 w-auto object-contain" />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              Post-Quantum Cryptography (PQC)<br/>
              Blockchain + AI Security Infrastructure
            </p>
            <div className="text-xs font-mono text-text-secondary mt-1">
              Engineering for systems that outlive assumptions.
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://twitter.com/codesstellar" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">
                X (Twitter)
              </a>
              <a href="https://linkedin.com/company/codesstellar" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">
                LinkedIn
              </a>
              <a href="https://github.com/codesstellar" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">
                GitHub
              </a>
            </div>
          </div>

          {/* Col 2 - Solutions */}
          <div>
            <h4 className="font-mono text-xs text-text-primary mb-6 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/services#pqc" className="text-text-secondary hover:text-accent-primary transition-colors">
                  PQC Infrastructure (NIST)
                </Link>
              </li>
              <li>
                <Link href="/services#ai-security" className="text-text-secondary hover:text-accent-primary transition-colors">
                  AI Security Observability
                </Link>
              </li>
              <li>
                <Link href="/services#crypto-agility" className="text-text-secondary hover:text-accent-primary transition-colors">
                  Crypto-Agile Architecture
                </Link>
              </li>
              <li>
                <Link href="/services#fullstack" className="text-text-secondary hover:text-accent-primary transition-colors">
                  High-Throughput Node Systems
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-accent-secondary hover:underline transition-colors flex items-center gap-1">
                  Research Intelligence Feed →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 - Company */}
          <div>
            <h4 className="font-mono text-xs text-text-primary mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link href="/about" className="text-text-secondary hover:text-accent-primary transition-colors">About Codesstellar</Link></li>
              <li><Link href="/case-studies" className="text-text-secondary hover:text-accent-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/blogs" className="text-text-secondary hover:text-accent-primary transition-colors">Field Notes</Link></li>
              <li><Link href="/build" className="text-text-secondary hover:text-accent-primary transition-colors">Build With Us</Link></li>
              <li><Link href="/admin" className="text-xs font-mono text-text-secondary/70 hover:text-accent-primary transition-colors">CMS Admin Access</Link></li>
            </ul>
          </div>

          {/* Col 4 - Newsletter */}
          <div>
            <h4 className="font-mono text-xs text-text-primary mb-6 uppercase tracking-wider">Research Digest</h4>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              Subscribe to our bi-weekly cryptographic brief on NIST standards and protocol vulnerability intelligence.
            </p>
            
            {subscribed ? (
              <div className="p-3.5 rounded-lg bg-surface border border-accent-primary/40 flex items-center gap-2.5 text-xs text-accent-primary font-mono">
                <Check className="w-4 h-4 shrink-0" />
                <span>Subscribed to research feed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@protocol.org" 
                  required
                  className="flex-1 bg-surface border border-border-subtle rounded-lg px-3.5 py-2.5 text-xs md:text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-accent-primary transition-colors"
                />
                <button 
                  type="submit"
                  className="px-4 py-2.5 bg-accent-primary text-background text-xs md:text-sm font-medium rounded-lg hover:bg-opacity-90 transition-all glow-effect flex items-center gap-1 shrink-0"
                >
                  Join
                </button>
              </form>
            )}
            <span className="text-[11px] font-mono text-text-secondary/60 block mt-2">Zero marketing noise. Peer-reviewed research only.</span>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
          <div>
            © {new Date().getFullYear()} Codesstellar · Post-Quantum Security & Cryptographic Systems
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-accent-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent-primary transition-colors">Terms of Service</Link>
            <span>Delhi, IN · contact@codesstellar.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
