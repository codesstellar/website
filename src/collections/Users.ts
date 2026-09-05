import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    // Lets a non-interactive process (e.g. a locally-run blog-writing agent)
    // authenticate with a long-lived API key instead of a login session.
    // Generate one from this user's admin panel page: Users > [user] > API Key.
    useAPIKey: true,
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      defaultValue: 'editor',
      options: ['admin', 'editor', 'researcher', 'agent'],
      required: true,
    },
  ],
};
