'use client';

import { useEffect, useState } from 'react';
import Footer from './Footer';
import Loader from './Loader';
import Navigation from './Navigation';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <div className="bg-background min-h-screen text-text-primary flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
}
