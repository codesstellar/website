'use client';

import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { CheckCircle2, Calendar, Mail, ArrowRight, Shield } from 'lucide-react';

function BackgroundShapes() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.04;
      groupRef.current.rotation.x = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            (Math.sin(i) * 5), 
            (Math.cos(i) * 4), 
            ((i - 2.5) * 3)
          ]}
          rotation={[Math.PI / (i + 1), Math.PI / (i + 2), 0]}
        >
          <octahedronGeometry args={[1.2 + (i * 0.3), 0]} />
          <meshBasicMaterial color="#1A5D42" wireframe transparent opacity={0.12} />
        </mesh>
      ))}
    </group>
  );
}

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Post-Quantum Migration (NIST)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate brief network submission then show confirmed state with mailto option
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background py-24">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,93,66,0.25),transparent_60%)] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(198,155,36,0.15),transparent_50%)] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
      </div>

      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }} frameloop="demand">
          <BackgroundShapes />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-accent-primary tracking-[0.2em] mb-4 uppercase">
            Initiate Engagement · Codesstellar Architecture
          </div>
          <h2 className="text-4xl md:text-7xl font-display mb-6">
            Quantum-safe systems <span className="text-gradient-primary">don't build themselves.</span>
          </h2>
          <p className="text-text-secondary text-base md:text-xl max-w-2xl mx-auto">
            Whether you are preparing a multi-chain bridge for post-quantum transition or architecting crypto-agile verification, let’s scope your requirements.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
          {/* Path A - Form */}
          <div className="flex-1 rounded-3xl border border-border-subtle bg-surface/60 p-8 md:p-10 shadow-2xl backdrop-blur-md">
            <h3 className="text-2xl font-display mb-2 text-text-primary">Commission an Assessment</h3>
            <p className="text-xs font-mono text-text-secondary mb-6">Confidential scoping · Response within 24 hours</p>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-accent-primary mx-auto mb-4" />
                <h4 className="text-2xl font-display mb-2 text-text-primary">Inquiry Received</h4>
                <p className="text-text-secondary text-sm leading-relaxed max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-text-primary">{formData.name || 'partner'}</strong>. Our cryptographic engineering team has logged your inquiry and will reach out to <strong className="text-text-primary">{formData.email}</strong> shortly.
                </p>
                <div className="p-4 rounded-xl bg-background/60 border border-border-subtle text-xs font-mono text-text-secondary text-left space-y-1 max-w-sm mx-auto mb-6">
                  <div>Scope: {formData.projectType}</div>
                  <div>Company: {formData.company || 'Confidential'}</div>
                </div>
                <a
                  href={`mailto:contact@codesstellar.com?subject=Inquiry from ${encodeURIComponent(formData.name || 'Website')}&body=${encodeURIComponent(formData.message)}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-accent-primary hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" /> Direct email: contact@codesstellar.com
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-text-secondary block mb-1.5">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Satoshi Nakamoto" 
                      className="w-full bg-background/80 border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-text-secondary block mb-1.5">Work Email *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="satoshi@foundation.org" 
                      className="w-full bg-background/80 border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-text-secondary block mb-1.5">Organization / Protocol</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Protocol Foundation or Enterprise" 
                    className="w-full bg-background/80 border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-text-secondary block mb-1.5">Primary Focus Area</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-background/80 border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
                  >
                    <option value="Post-Quantum Migration (NIST)">Post-Quantum Migration (NIST FIPS 203/204/205)</option>
                    <option value="AI Security Audit & Invariants">AI-Assisted Security Audit & Invariant Fuzzing</option>
                    <option value="Crypto-Agile Architecture">Crypto-Agile Smart Contract Architecture</option>
                    <option value="Full-Stack Node Infrastructure">High-Throughput Node & RPC Infrastructure</option>
                    <option value="General Cryptographic Inquiry">General Cryptographic Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-text-secondary block mb-1.5">Project Scope & Timeline</label>
                  <textarea 
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Brief overview of current cryptographic dependencies, target chain, or audit timeline..." 
                    className="w-full bg-background/80 border border-border-subtle rounded-xl px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-accent-primary text-background font-medium rounded-xl hover:bg-opacity-90 transition-all glow-effect mt-2 flex items-center justify-center gap-2 text-sm shadow-lg disabled:opacity-70"
                >
                  {submitting ? 'Submitting Scope...' : 'Start Technical Conversation'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Path B - Direct Call */}
          <div className="w-full lg:w-[380px] flex flex-col justify-between rounded-3xl border border-border-subtle bg-surface/30 p-8 md:p-10 border-dashed backdrop-blur-md">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-accent-secondary/10 border border-accent-secondary/30 flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-accent-secondary" />
              </div>
              
              <span className="text-xs font-mono uppercase tracking-wider text-accent-secondary block mb-2">Direct Channel</span>
              <h4 className="text-2xl font-display mb-4 text-text-primary">30-Min Architecture Session</h4>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Speak directly with lead cryptographers to map your migration sequence, validator assumptions, and compliance timeline.
              </p>

              <div className="space-y-2.5 text-xs font-mono text-text-secondary border-t border-border-subtle pt-4 mb-6">
                <div className="flex items-center gap-2 text-text-primary">
                  <Shield className="w-3.5 h-3.5 text-accent-primary" /> Strict confidentiality (NDA available)
                </div>
                <div>Format: Google Meet / Signal / Wire</div>
                <div>Location: Delhi, IN / Global UTC-12 to +12</div>
              </div>
            </div>

            <div className="space-y-3">
              <a 
                href="mailto:contact@codesstellar.com?subject=Schedule 30-Min Architecture Call"
                className="w-full py-3 border border-accent-secondary text-text-primary font-medium text-xs md:text-sm rounded-xl hover:bg-accent-secondary hover:text-background transition-all flex items-center justify-center gap-2 block text-center"
              >
                <Mail className="w-4 h-4" /> Request Direct Invite
              </a>
              <div className="text-[11px] font-mono text-center text-text-secondary/60">
                PGP Key Fingerprint available upon request.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
