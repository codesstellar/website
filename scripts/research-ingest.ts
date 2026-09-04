import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { researchSourceSeeds } from '../src/lib/research-sources';

const KEYWORDS = [
  'post-quantum',
  'post quantum',
  'quantum',
  'cryptography',
  'signature',
  'encryption',
  'blockchain',
  'web3',
  'ethereum',
  'bridge',
  'smart contract',
  'validator',
  'security',
];

function textBetween(value: string, tag: string): string | undefined {
  const match = value.match(new RegExp(`<${tag}[^>]*>([\s\S]*?)<\/${tag}>`, 'i'));
  return match?.[1]
    ?.replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

function score(title: string, summary: string): number {
  const haystack = `${title} ${summary}`.toLowerCase();
  const hits = KEYWORDS.filter((keyword) => haystack.includes(keyword)).length;
  return Math.max(1, Math.min(5, hits));
}

async function main() {
  const payload = await getPayload({ config: configPromise });
  let created = 0;

  for (const source of researchSourceSeeds) {
    if (!source.rssUrl) continue;

    const existingSource = await payload.find({
      collection: 'sources',
      limit: 1,
      where: { url: { equals: source.url } },
    });

    if (existingSource.docs.length === 0) {
      await payload.create({
        collection: 'sources',
        data: source,
      });
    }

    const response = await fetch(source.rssUrl);
    if (!response.ok) {
      console.warn(`Skipping ${source.name}: ${response.status}`);
      continue;
    }

    const xml = await response.text();
    const items = xml.match(/<item[\s\S]*?<\/item>|<entry[\s\S]*?<\/entry>/gi) || [];

    for (const item of items.slice(0, 10)) {
      const title = textBetween(item, 'title');
      const link = textBetween(item, 'link') || item.match(/<link[^>]*href="([^"]+)"/i)?.[1];
      const summary = textBetween(item, 'description') || textBetween(item, 'summary') || '';
      const publishedAt = textBetween(item, 'pubDate') || textBetween(item, 'published') || textBetween(item, 'updated');

      if (!title || !link) continue;
      const importanceScore = score(title, summary);
      if (importanceScore < 2) continue;

      const existing = await payload.find({
        collection: 'research-items',
        limit: 1,
        where: { sourceUrl: { equals: link } },
      });
      if (existing.docs.length > 0) continue;

      await payload.create({
        collection: 'research-items',
        data: {
          title,
          sourceName: source.name,
          sourceUrl: link,
          publishedAt: publishedAt ? new Date(publishedAt).toISOString() : undefined,
          summary: summary.slice(0, 1200),
          status: 'new',
          importanceScore,
          contentOpportunity: `Potential Codesstellar angle: connect this update to blockchain infrastructure, Web3 security, post-quantum readiness, or crypto-agile architecture.`,
        },
      });
      created += 1;
    }
  }

  console.log(`Research ingest complete. Created ${created} research item(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
