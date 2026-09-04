import configPromise from '@payload-config';
import { getPayload } from 'payload';

async function main() {
  const payload = await getPayload({ config: configPromise });
  const result = await payload.find({
    collection: 'research-items',
    limit: 10,
    sort: '-importanceScore,-capturedAt',
    where: {
      status: { in: ['new', 'reviewed', 'shortlisted'] },
    },
  });

  console.log('# Codesstellar Research Digest\n');
  for (const item of result.docs as any[]) {
    console.log(`## ${item.title}`);
    console.log(`- Source: ${item.sourceName}`);
    console.log(`- URL: ${item.sourceUrl}`);
    console.log(`- Score: ${item.importanceScore || 3}/5`);
    if (item.summary) console.log(`- Summary: ${String(item.summary).slice(0, 500)}`);
    if (item.contentOpportunity) console.log(`- Content angle: ${item.contentOpportunity}`);
    console.log('');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
