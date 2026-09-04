import type { CollectionConfig } from 'payload';

export const TopicPillars: CollectionConfig = {
  slug: 'topic-pillars',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'description', type: 'textarea' },
    {
      name: 'priority',
      type: 'select',
      defaultValue: 'medium',
      options: ['high', 'medium', 'low'],
    },
  ],
};
