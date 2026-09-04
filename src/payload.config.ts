import path from 'path';
import { fileURLToPath } from 'url';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import { Authors } from './collections/Authors';
import { BlogPosts } from './collections/BlogPosts';
import { Media } from './collections/Media';
import { ResearchItems } from './collections/ResearchItems';
import { Sources } from './collections/Sources';
import { TopicPillars } from './collections/TopicPillars';
import { Users } from './collections/Users';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Support all Vercel + Supabase connection strings:
// 1. POSTGRES_URL_NON_POOLING (Supabase direct on port 5432 - ideal for migrations and Drizzle)
// 2. DATABASE_URL (Standard Supabase or custom connection string)
// 3. POSTGRES_URL / SUPABASE_DATABASE_URL / POSTGRES_PRISMA_URL
const connectionString =
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.SUPABASE_DATABASE_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  'postgresql://postgres:postgres@localhost:5432/codesstellar_dev';

const isLocal =
  connectionString.includes('localhost') ||
  connectionString.includes('127.0.0.1');

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor(),
  collections: [Users, Media, Authors, TopicPillars, Sources, ResearchItems, BlogPosts],
  db: postgresAdapter({
    pool: {
      connectionString,
      ssl: isLocal ? undefined : { rejectUnauthorized: false },
    },
    push: true,
    disableCreateDatabase: true,
  }),
  secret: process.env.PAYLOAD_SECRET || 'dev-only-change-me-codesstellar-payload-secret',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
