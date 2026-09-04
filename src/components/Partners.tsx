'use client';

export default function Partners() {
  const partners = [
    { name: "CoinMarketCap", desc: "Global crypto data standard" },
    { name: "Solana", desc: "High-throughput L1 blockchain" },
    { name: "CoinGecko", desc: "Market data infrastructure" },
    { name: "HEWE", desc: "Partner protocol" },
    { name: "AMC", desc: "Partner" },
    { name: "Autonio", desc: "AI-powered DeFi" },
  ];

  return (
    <section className="py-24 bg-surface border-b border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-xl font-display text-text-secondary">Trusted by protocols that move markets.</h2>
      </div>
      
      <div className="w-full group">
        <div className="flex w-max animate-[ticker_30s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 px-8">
              {partners.map((partner, j) => (
                <div key={j} className="flex flex-col gap-2 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer" style={{ filter: 'drop-shadow(0 0 0px transparent)' }} onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(0,200,255,0.3))'} onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px transparent)'}>
                  <div className="text-2xl font-display font-bold text-text-primary">{partner.name}</div>
                  <div className="text-sm font-mono text-text-secondary">{partner.desc}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
