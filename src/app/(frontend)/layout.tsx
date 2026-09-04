import type { Metadata } from 'next';
import SiteShell from '@/src/components/SiteShell';
import '@/src/index.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://codesstellar.com'),
  title: {
    default: 'Codesstellar | Quantum-Ready Blockchain & Security Systems',
    template: '%s | Codesstellar',
  },
  description:
    'Crypto-agile blockchain engineering, NIST post-quantum migration architecture, and AI-assisted security workflows for resilient digital infrastructure.',
  keywords: [
    'post-quantum cryptography',
    'PQC blockchain',
    'crypto-agility',
    'blockchain security',
    'AI security',
    'Web3 engineering',
    'ML-KEM',
    'ML-DSA',
    'SLH-DSA',
    'smart contract audit',
    'Codesstellar',
  ],
  authors: [{ name: 'Codesstellar Security Research Team' }],
  creator: 'Codesstellar',
  publisher: 'Codesstellar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Codesstellar',
    title: 'Codesstellar | Quantum-Ready Blockchain & Security Systems',
    description:
      'Crypto-agile blockchain engineering, post-quantum readiness, and AI-assisted security workflows for long-lived digital infrastructure.',
    url: 'https://codesstellar.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codesstellar | Quantum-Ready Blockchain Systems',
    description:
      'Crypto-agile blockchain engineering, post-quantum readiness, and AI-assisted security intelligence.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-text-primary antialiased selection:bg-accent-primary selection:text-background font-sans min-h-screen flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
