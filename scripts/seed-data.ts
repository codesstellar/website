import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { researchSourceSeeds } from '../src/lib/research-sources';
import { fallbackResearchItems } from '../src/lib/research';
import { fallbackBlogPosts } from '../src/lib/fallback-posts';

async function seed() {
  console.log('🚀 Connecting to Payload CMS database...');
  const payload = await getPayload({ config: configPromise });

  // 1. Seed Topic Pillars
  console.log('🌱 Seeding Topic Pillars...');
  const pillars = [
    { name: 'Post-Quantum Web3 Security', slug: 'post-quantum-web3-security', priority: 'high' as const, description: 'PQC migration, lattice cryptography, quantum risk models.' },
    { name: 'Blockchain Infrastructure', slug: 'blockchain-infrastructure', priority: 'high' as const, description: 'Validator architecture, consensus changes, L1/L2 upgrades.' },
    { name: 'Web3 Security Engineering', slug: 'web3-security-engineering', priority: 'high' as const, description: 'Smart contract security, bridge hardening, account abstraction.' },
    { name: 'AI + Security Research', slug: 'ai-security-research', priority: 'medium' as const, description: 'Invariant synthesis, automated fuzzing, anomaly detection.' },
  ];

  const pillarMap = new Map<string, string>();
  for (const pillar of pillars) {
    const existing = await payload.find({
      collection: 'topic-pillars',
      where: { slug: { equals: pillar.slug } },
      limit: 1,
    });
    if (existing.docs.length > 0) {
      pillarMap.set(pillar.name, String(existing.docs[0].id));
    } else {
      const created = await payload.create({
        collection: 'topic-pillars',
        data: pillar,
      });
      pillarMap.set(pillar.name, String(created.id));
      console.log(`  ✓ Created Pillar: ${pillar.name}`);
    }
  }

  // 2. Seed Sources
  console.log('🌱 Seeding Intelligence Sources...');
  for (const source of researchSourceSeeds) {
    const existing = await payload.find({
      collection: 'sources',
      where: { url: { equals: source.url } },
      limit: 1,
    });
    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'sources',
        data: {
          name: source.name,
          url: source.url,
          rssUrl: source.rssUrl,
          sourceType: source.sourceType,
          priority: source.priority,
          active: true,
        },
      });
      console.log(`  ✓ Created Source: ${source.name}`);
    }
  }

  // 3. Seed Author
  console.log('🌱 Seeding Default Author...');
  let authorId: string | undefined;
  const existingAuthor = await payload.find({
    collection: 'authors',
    limit: 1,
  });
  if (existingAuthor.docs.length > 0) {
    authorId = String(existingAuthor.docs[0].id);
  } else {
    const createdAuthor = await payload.create({
      collection: 'authors',
      data: {
        name: 'Codesstellar Security Research Collective',
        role: 'Lead Cryptographic Research & Protocol Engineering Team',
        bio: 'Engineers and cryptographers building quantum-resilient Web3 architectures, crypto-agile contracts, and AI-assisted security workflows.',
        xUrl: 'https://twitter.com/codesstellar',
        linkedinUrl: 'https://linkedin.com/company/codesstellar',
      },
    });
    authorId = String(createdAuthor.id);
    console.log('  ✓ Created Default Author');
  }

  // 4. Seed Research Items
  console.log('🌱 Seeding Research Items...');
  const researchItemMap = new Map<string, string>();
  for (const item of fallbackResearchItems) {
    const existing = await payload.find({
      collection: 'research-items',
      where: { sourceUrl: { equals: item.sourceUrl } },
      limit: 1,
    });
    if (existing.docs.length > 0) {
      researchItemMap.set(item.id, String(existing.docs[0].id));
    } else {
      const topicPillarId = pillarMap.get(item.topicPillar);
      const created = await payload.create({
        collection: 'research-items',
        data: {
          title: item.title,
          sourceName: item.sourceName,
          sourceUrl: item.sourceUrl,
          publishedAt: item.publishedAt,
          capturedAt: item.capturedAt,
          topicPillar: topicPillarId ? Number(topicPillarId) : undefined,
          summary: item.summary,
          keyClaims: item.keyClaims,
          technicalRelevance: item.technicalRelevance,
          businessRelevance: item.businessRelevance,
          contentOpportunity: item.contentOpportunity,
          status: item.status,
          importanceScore: item.importanceScore,
          recommendedAngle: item.recommendedAngle,
        },
      });
      researchItemMap.set(item.id, String(created.id));
      console.log(`  ✓ Created Research Item: ${item.title.slice(0, 45)}...`);
    }
  }

  // 5. Seed Blog Posts
  console.log('🌱 Seeding Blog Posts...');
  for (const post of fallbackBlogPosts) {
    const existing = await payload.find({
      collection: 'blog-posts',
      where: { slug: { equals: post.slug } },
      limit: 1,
    });
    if (existing.docs.length === 0) {
      // map pillar
      const pillarKey = post.tag === 'SECURITY' ? 'Web3 Security Engineering' 
        : post.tag === 'AI SECURITY' ? 'AI + Security Research'
        : post.tag === 'ENGINEERING' ? 'Blockchain Infrastructure'
        : 'Post-Quantum Web3 Security';

      const topicPillarId = pillarMap.get(pillarKey);

      await payload.create({
        collection: 'blog-posts',
        data: {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          bodyMarkdown: post.bodyMarkdown,
          heroImageUrl: post.image,
          author: authorId ? Number(authorId) : undefined,
          status: 'published',
          topicPillar: topicPillarId ? Number(topicPillarId) : undefined,
          tags: [{ tag: post.tag }],
          seoTitle: post.seoTitle,
          seoDescription: post.seoDescription,
          publishedAt: post.publishedAt,
        },
      });
      console.log(`  ✓ Published Blog Post: ${post.title.slice(0, 45)}...`);
    }
  }

  console.log('\n🎉 Pipeline Seeding Complete! Supabase / Postgres is populated.');
  process.exit(0);
}

seed().catch((err) => {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
});
