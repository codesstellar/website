# Codesstellar Payload CMS + Blog + Research Pipeline Plan

## Goal

Turn the current Codesstellar marketing website into a CMS-backed authority site for:

- Blockchain infrastructure
- Web3 security
- Post-quantum cryptography / post-quantum encryption
- Crypto-agile security architecture
- AI-assisted threat research

The system should support two separate but connected pipelines:

1. **Blog publishing pipeline** — draft, review, approve, and publish polished website blogs.
2. **Research intelligence pipeline** — collect and summarize external research/news before it becomes a blog.

## Current Site Reality

The repo is currently a **Vite + React + TypeScript static frontend**.

Important files:

- `src/App.tsx` — React Router routes
- `src/pages/Blogs.tsx` — static blog page shell
- `src/components/BlogPreview.tsx` — hardcoded blog cards
- `vercel.json` — Vercel static Vite deployment

Payload CMS cannot be cleanly embedded inside the current Vite app because Payload requires a Node/Next.js server runtime for the admin panel, API routes, auth, and database adapter.

## Recommended Architecture

Use a **Next.js + Payload CMS + Postgres** architecture.

### Production

- **Frontend + CMS admin:** Next.js app deployed on Vercel
- **CMS:** Payload CMS embedded in the Next.js app
- **Database:** Neon Postgres or another managed Postgres
- **Media:** Vercel Blob first; S3 later only if needed
- **Admin path:** `/admin`
- **Public blog:** `/blogs` and `/blogs/[slug]`

### Local Development

- Next.js local server
- Local Postgres via Docker Compose
- Local env file: `.env.local`

### Why migrate from Vite to Next.js

This keeps the stack simple:

- One app
- One deployment target
- One CMS admin
- One database
- Better SEO pages for blog posts
- Cleaner sitemap and metadata generation
- Payload works natively with Next.js App Router

The alternative is a separate Payload backend plus the existing Vite frontend. That keeps Vite, but adds operational complexity: two apps, two deployments, CORS, API auth, and more moving parts.

## Payload Collections

### 1. Blog Posts

Collection slug: `blog-posts`

Fields:

- `title`
- `slug`
- `excerpt`
- `body` — rich text or markdown
- `heroImage`
- `author`
- `status` — draft, review, approved, published
- `topicPillar`
- `tags`
- `seoTitle`
- `seoDescription`
- `canonicalUrl`
- `publishedAt`
- `sourceResearchItems` — relationship to research items
- `aiDisclosureInternalNotes` — admin-only notes, never rendered publicly

Public rendering rules:

- Never show internal SEO/schema/source labels inside article body.
- Render public headings only: `Quick answer`, `Why it matters`, `Technical context`, `Implementation checklist`, `FAQ`, `Practical takeaway`.
- Article page should generate metadata and JSON-LD from CMS fields, not visible body labels.

### 2. Research Items

Collection slug: `research-items`

Purpose: capture external intelligence before it becomes content.

Fields:

- `title`
- `sourceName`
- `sourceUrl`
- `publishedAt`
- `capturedAt`
- `topicPillar`
- `summary`
- `keyClaims`
- `technicalRelevance`
- `businessRelevance`
- `contentOpportunity`
- `status` — new, reviewed, shortlisted, used, archived
- `recommendedAngle`
- `relatedBlogPost`

### 3. Sources

Collection slug: `sources`

Fields:

- `name`
- `url`
- `rssUrl`
- `sourceType` — standards, security research, web3 protocol, cryptography, blockchain infra, regulatory, competitor
- `priority` — high, medium, low
- `active`

Suggested starting sources:

- NIST Computer Security Resource Center
- NIST Post-Quantum Cryptography project
- IACR ePrint Archive
- CISA advisories
- Cloudflare Blog — cryptography/security
- Trail of Bits Blog
- OpenZeppelin Blog
- Ethereum Foundation Blog
- Vitalik.ca
- Chainlink Blog / research
- a16z crypto research
- PQShield resources
- Google Security Blog
- Microsoft Security Blog

### 4. Topic Pillars

Collection slug: `topic-pillars`

Initial pillars:

1. **Post-Quantum Web3 Security**
   - PQC migration
   - Quantum threats to signatures
   - Crypto-agility
   - Wallet and bridge risk

2. **Blockchain Infrastructure**
   - Validator/security architecture
   - Cross-chain infrastructure
   - Data availability and settlement layers
   - Enterprise blockchain security

3. **Web3 Security Engineering**
   - Smart contract security
   - Bridge security
   - Key management
   - Threat modeling

4. **AI + Security Research**
   - AI-assisted vulnerability analysis
   - AI threat modeling
   - Automated monitoring
   - Security intelligence workflows

### 5. Authors

Collection slug: `authors`

Fields:

- `name`
- `role`
- `bio`
- `avatar`
- `socialLinks`

## Blog Pipeline

### Step 1 — Research Selection

Research items are collected from trusted sources and marked as:

- New
- Reviewed
- Shortlisted
- Used
- Archived

Only shortlisted research should move into blog drafting.

### Step 2 — Blog Brief

For each selected topic, generate a structured brief:

- Working title
- Target keyword
- Search intent
- Audience
- Why this matters now
- Source links
- Key facts to include
- Claims that need verification
- Suggested outline
- CTA angle

### Step 3 — Draft

Create a public-ready draft with:

- Clear H1/title
- Short quick answer
- H2/H3 structure
- Technical explanation in plain English
- Web3/business relevance
- Implementation checklist
- FAQ section
- Natural Codesstellar CTA

### Step 4 — Quality Gate

Before publishing, check:

- No fake claims
- No unsupported metrics
- Source links included
- No internal labels visible
- No raw JSON-LD in body
- No duplicate H1 inside body
- Meta title and description present
- Slug clean and readable
- Hero image exists or placeholder selected

### Step 5 — Approval

Status changes:

- `draft` → `review` → `approved` → `published`

Only approved posts should be published.

### Step 6 — Publish

Publishing should update:

- `/blogs`
- `/blogs/[slug]`
- sitemap
- homepage latest insights section
- RSS feed if added later

## Separate Research Pipeline

This should run independently from blog publishing.

### Daily / Weekly Research Collection

Inputs:

- RSS feeds
- Standards bodies
- Security blogs
- Web3 protocol blogs
- Cryptography research feeds
- Manually added URLs

Output:

- New `research-items` in Payload
- Short summaries
- Importance score
- Suggested content angle

### Research Scoring

Score each research item from 1–5:

- **Technical relevance:** Does it matter for PQC/Web3 security?
- **Business relevance:** Would enterprise/blockchain decision-makers care?
- **Urgency:** Is this time-sensitive?
- **Originality:** Can Codesstellar add a unique angle?
- **Content potential:** Can it become a strong blog, guide, or LinkedIn post?

### Weekly Research Digest

The digest should include:

- Top 5 research items
- Why each matters
- Recommended blog ideas
- Suggested priority
- Source links

## Website Routes After Implementation

Recommended route structure:

- `/` — homepage
- `/blogs` — blog index
- `/blogs/[slug]` — blog article
- `/research` — optional public research hub later
- `/case-studies` — existing case studies
- `/build` — lead/contact CTA
- `/admin` — Payload CMS admin

## Implementation Phases

### Phase 1 — Foundation

- Convert Vite React app to Next.js App Router while preserving current design/components.
- Add Payload CMS.
- Add local Postgres via Docker Compose.
- Add `.env.example` for Payload, Postgres, and site URL.
- Confirm local `/admin` works.

### Phase 2 — CMS Content Model

- Add Payload collections:
  - Blog Posts
  - Research Items
  - Sources
  - Topic Pillars
  - Authors
  - Media
- Add admin roles:
  - Admin
  - Editor
  - Researcher

### Phase 3 — Public Blog Pages

- Replace hardcoded `BlogPreview.tsx` content with CMS-powered posts.
- Build `/blogs` listing page.
- Build `/blogs/[slug]` detail page.
- Add SEO metadata and JSON-LD.
- Add empty/fallback state.

### Phase 4 — Research Pipeline

- Add research ingestion script.
- Add seed sources.
- Store research summaries as `research-items`.
- Add a weekly digest command.
- Allow blog posts to link back to research items.

### Phase 5 — Blog Writing Pipeline

- Add blog brief generation from research items.
- Add draft creation workflow.
- Add quality gate checklist.
- Add publish status workflow.

### Phase 6 — Deployment

- Set Vercel framework to Next.js.
- Configure Neon Postgres.
- Add production env vars.
- Deploy preview first.
- Verify `/`, `/blogs`, one article page, `/admin`, and sitemap.

## Required Environment Variables

```bash
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/codesstellar_dev
DATABASE_URL_UNPOOLED=postgresql://postgres:postgres@localhost:5432/codesstellar_dev
PAYLOAD_SECRET=replace-with-long-random-secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Optional later:

```bash
BLOB_READ_WRITE_TOKEN=
RESEARCH_INGESTION_SECRET=
OPENAI_API_KEY=
GEMINI_API_KEY=
```

## First Blog Topics to Seed

1. `What Post-Quantum Cryptography Means for Blockchain Security`
2. `Why Web3 Teams Need Crypto-Agile Architecture Before Quantum Threats Arrive`
3. `How NIST PQC Standards Change Wallet, Bridge, and Validator Security`
4. `Post-Quantum Signatures for Blockchain: Dilithium, Falcon, SPHINCS+, and Tradeoffs`
5. `The Quantum Risk to Cross-Chain Bridges and How to Prepare`
6. `AI-Driven Threat Modeling for Web3 Infrastructure`
7. `A Practical PQC Migration Checklist for Blockchain Protocols`
8. `Why Enterprise Blockchain Security Needs Post-Quantum Readiness`

## Definition of Done

The implementation is complete when:

- Payload admin works at `/admin`.
- Admin can create/edit/publish blog posts.
- `/blogs` shows CMS posts.
- `/blogs/[slug]` renders full articles with SEO metadata.
- Research sources can be stored and reviewed separately from blogs.
- Research items can be linked to blog posts.
- Build passes locally.
- Preview deployment works on Vercel.
- Production deployment is verified on the live domain.
