'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled 
            ? 'bg-background/90 backdrop-blur-md border-b border-border-subtle shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center" data-hover="HOME">
            <img src="/assets/logo-full.png" alt="Codesstellar Logo" className="h-8 md:h-10 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {/* Services Dropdown */}
            <div className="relative group" data-hover="SERVICES">
              <Link 
                href="/services" 
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors py-6 flex items-center gap-1"
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              {/* Mega Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[620px] bg-surface border border-border-subtle rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-2xl">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-mono text-accent-primary mb-4 uppercase tracking-wider">Cryptographic Security</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/services#pqc" className="text-sm text-text-secondary hover:text-text-primary transition-colors block">
                          <span className="text-text-primary block font-medium">PQC Infrastructure</span>
                          <span className="text-xs text-text-secondary">NIST ML-KEM & ML-DSA implementation</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#ai-security" className="text-sm text-text-secondary hover:text-text-primary transition-colors block">
                          <span className="text-text-primary block font-medium">AI Security Observability</span>
                          <span className="text-xs text-text-secondary">Continuous anomaly & invariant synthesis</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services#crypto-agility" className="text-sm text-text-secondary hover:text-text-primary transition-colors block">
                          <span className="text-text-primary block font-medium">Crypto-Agile Architecture</span>
                          <span className="text-xs text-text-secondary">Modular verification & key rotation</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-mono text-accent-secondary mb-4 uppercase tracking-wider">Engineering</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/services#fullstack" className="text-sm text-text-secondary hover:text-text-primary transition-colors block">
                          <span className="text-text-primary block font-medium">Full-Stack Protocol Systems</span>
                          <span className="text-xs text-text-secondary">High-throughput nodes, RPC & UX</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-studies" className="text-sm text-text-secondary hover:text-text-primary transition-colors block">
                          <span className="text-text-primary block font-medium">Engagement Patterns</span>
                          <span className="text-xs text-text-secondary">Explore real client delivery models</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/build" className="text-sm text-accent-primary hover:text-text-primary transition-colors block">
                          <span className="block font-medium flex items-center gap-1">Custom Architecture <ArrowUpRight className="w-3 h-3" /></span>
                          <span className="text-xs text-text-secondary">Commission a scoped assessment</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
                  <span className="text-xs font-mono text-text-secondary">Standards Compliance: NIST FIPS 203 · 204 · 205</span>
                  <Link href="/services" className="text-xs text-accent-primary hover:underline">
                    View full offerings →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/research" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors" data-hover="RESEARCH">
              Research Hub
            </Link>
            <Link href="/case-studies" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors" data-hover="WORK">
              Case Studies
            </Link>
            <Link href="/blogs" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors" data-hover="READ">
              Field Notes
            </Link>
            <Link href="/about" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors" data-hover="ABOUT">
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/build"
              className="px-5 py-2.5 rounded-full border border-accent-primary text-sm font-medium text-accent-primary hover:bg-accent-primary/10 transition-all duration-300 glow-effect inline-block"
              data-hover="BUILD"
            >
              Build With Us
            </Link>
          </div>

          <button 
            className="md:hidden text-text-primary p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-xl flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="p-6 flex justify-between items-center border-b border-border-subtle">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img src="/assets/logo-full.png" alt="Codesstellar Logo" className="h-8 w-auto object-contain" />
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="text-text-primary p-2" aria-label="Close Menu">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-6 overflow-y-auto py-8">
              <Link
                href="/"
                className="text-3xl font-display font-semibold text-text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-3xl font-display font-semibold text-text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/research"
                className="text-3xl font-display font-semibold text-text-primary flex items-center justify-between"
                onClick={() => setMobileMenuOpen(false)}
              >
                Research Hub
                <span className="text-xs font-mono text-accent-primary border border-accent-primary/30 px-2 py-0.5 rounded">LIVE</span>
              </Link>
              <Link
                href="/case-studies"
                className="text-3xl font-display font-semibold text-text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/blogs"
                className="text-3xl font-display font-semibold text-text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Field Notes
              </Link>
              <Link
                href="/about"
                className="text-3xl font-display font-semibold text-text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="pt-6 border-t border-border-subtle">
                <Link 
                  href="/build"
                  className="block w-full py-4 rounded-full bg-accent-primary text-background font-medium text-center text-lg shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Build With Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
