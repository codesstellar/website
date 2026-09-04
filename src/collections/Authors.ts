import type { CollectionConfig } from 'payload';

export const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text', defaultValue: 'Codesstellar Research Team' },
    { name: 'bio', type: 'textarea' },
    { name: 'avatar', type: 'upload', relationTo: 'media' },
    { name: 'xUrl', type: 'text', label: 'X/Twitter URL' },
    { name: 'linkedinUrl', type: 'text', label: 'LinkedIn URL' },
  ],
};
