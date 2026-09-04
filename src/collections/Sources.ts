import type { CollectionConfig } from 'payload';

export const Sources: CollectionConfig = {
  slug: 'sources',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'url', type: 'text', required: true },
    { name: 'rssUrl', type: 'text', label: 'RSS/Atom URL' },
    {
      name: 'sourceType',
      type: 'select',
      defaultValue: 'security-research',
      options: [
        'standards',
        'security-research',
        'web3-protocol',
        'cryptography',
        'blockchain-infrastructure',
        'regulatory',
        'competitor',
      ],
    },
    {
      name: 'priority',
      type: 'select',
      defaultValue: 'medium',
      options: ['high', 'medium', 'low'],
    },
    { name: 'active', type: 'checkbox', defaultValue: true },
  ],
};
