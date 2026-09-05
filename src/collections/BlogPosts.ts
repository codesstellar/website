import type { CollectionConfig } from 'payload';

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'topicPillar', 'publishedAt'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'excerpt', type: 'textarea', required: true },
    { name: 'bodyMarkdown', type: 'textarea', required: true, label: 'Body Markdown' },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    {
      name: 'heroImageUrl',
      type: 'text',
      label: 'External Hero Image URL',
      admin: {
        description: 'Optional URL for image hosted externally (e.g. Supabase Storage, CDN, Unsplash). Used if heroImage is empty.',
      },
    },
    { name: 'author', type: 'relationship', relationTo: 'authors' },
    {
      name: 'status',
      type: 'select',
      // Payload's own versions.drafts feature adds an internal `_status` field
      // (draft/published) to this same table. Without an explicit enumName,
      // Drizzle's schema push generated a colliding Postgres enum type shared
      // with that internal field, silently dropping "review" and "approved".
      enumName: 'blog_post_editorial_status',
      defaultValue: 'draft',
      options: ['draft', 'review', 'approved', 'published'],
      required: true,
    },
    { name: 'topicPillar', type: 'relationship', relationTo: 'topic-pillars' },
    { name: 'tags', type: 'array', fields: [{ name: 'tag', type: 'text', required: true }] },
    { name: 'seoTitle', type: 'text' },
    { name: 'seoDescription', type: 'textarea' },
    { name: 'canonicalUrl', type: 'text' },
    { name: 'publishedAt', type: 'date' },
    { name: 'sourceResearchItems', type: 'relationship', relationTo: 'research-items', hasMany: true },
    {
      name: 'aiDisclosureInternalNotes',
      type: 'textarea',
      admin: {
        description: 'Internal editorial notes only. Never render this field publicly.',
      },
    },
  ],
};
