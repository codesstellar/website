import type { CollectionConfig } from 'payload';

export const ResearchItems: CollectionConfig = {
  slug: 'research-items',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'sourceName', 'topicPillar', 'status', 'publishedAt'],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'sourceName', type: 'text', required: true },
    { name: 'sourceUrl', type: 'text', required: true, unique: true },
    { name: 'publishedAt', type: 'date' },
    { name: 'capturedAt', type: 'date', defaultValue: () => new Date().toISOString() },
    { name: 'topicPillar', type: 'relationship', relationTo: 'topic-pillars' },
    { name: 'summary', type: 'textarea' },
    { name: 'keyClaims', type: 'textarea' },
    { name: 'technicalRelevance', type: 'textarea' },
    { name: 'businessRelevance', type: 'textarea' },
    { name: 'contentOpportunity', type: 'textarea' },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: ['new', 'reviewed', 'shortlisted', 'used', 'archived'],
      required: true,
    },
    {
      name: 'importanceScore',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 3,
    },
    { name: 'recommendedAngle', type: 'textarea' },
    { name: 'relatedBlogPost', type: 'relationship', relationTo: 'blog-posts' },
  ],
};
