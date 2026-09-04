export type ResearchSourceSeed = {
  name: string;
  url: string;
  rssUrl?: string;
  sourceType: 'standards' | 'security-research' | 'web3-protocol' | 'cryptography' | 'blockchain-infrastructure' | 'regulatory' | 'competitor';
  priority: 'high' | 'medium' | 'low';
};

export const researchSourceSeeds: ResearchSourceSeed[] = [
  {
    name: 'NIST Computer Security Resource Center',
    url: 'https://csrc.nist.gov/',
    rssUrl: 'https://csrc.nist.gov/news/rss',
    sourceType: 'standards',
    priority: 'high',
  },
  {
    name: 'IACR ePrint Archive',
    url: 'https://eprint.iacr.org/',
    rssUrl: 'https://eprint.iacr.org/rss/rss.xml',
    sourceType: 'cryptography',
    priority: 'high',
  },
  {
    name: 'Cloudflare Blog - Security',
    url: 'https://blog.cloudflare.com/tag/security/',
    rssUrl: 'https://blog.cloudflare.com/tag/security/rss/',
    sourceType: 'security-research',
    priority: 'medium',
  },
  {
    name: 'Trail of Bits Blog',
    url: 'https://blog.trailofbits.com/',
    rssUrl: 'https://blog.trailofbits.com/feed/',
    sourceType: 'security-research',
    priority: 'high',
  },
  {
    name: 'OpenZeppelin Blog',
    url: 'https://blog.openzeppelin.com/',
    rssUrl: 'https://blog.openzeppelin.com/rss.xml',
    sourceType: 'web3-protocol',
    priority: 'high',
  },
  {
    name: 'Ethereum Foundation Blog',
    url: 'https://blog.ethereum.org/',
    rssUrl: 'https://blog.ethereum.org/feed.xml',
    sourceType: 'web3-protocol',
    priority: 'high',
  },
  {
    name: 'Vitalik Buterin',
    url: 'https://vitalik.eth.limo/',
    rssUrl: 'https://vitalik.eth.limo/feed.xml',
    sourceType: 'web3-protocol',
    priority: 'medium',
  },
  {
    name: 'Google Security Blog',
    url: 'https://security.googleblog.com/',
    rssUrl: 'https://security.googleblog.com/feeds/posts/default',
    sourceType: 'security-research',
    priority: 'medium',
  },
];
