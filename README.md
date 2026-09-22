# Codesstellar website

A static site. There is no build step, no framework and no server code: every page is a
single self-contained HTML file with its styles, scripts, images and the 3D engine (three.js)
built in. Upload the files as they are and the site works.

## Files

| File | Page |
| --- | --- |
| `index.html` | Home |
| `pqc-security.html` | PQC & Security |
| `applied-ai.html` | Applied AI |
| `enterprise-apps.html` | Enterprise Apps |
| `work.html` | Selected work |
| `about.html` | About |
| `contact.html` | Contact and project brief |
| `404.html` | Shown for any missing address |
| `favicon.svg`, `robots.txt`, `sitemap.xml`, `vercel.json` | Supporting files |

The only external requests are Google Fonts. If they are blocked the site falls back to system fonts.

## Going live on Vercel

The existing `codesstellar/website` repository is a Next.js and Payload CMS project. Dropping
these files into it will not replace the live site, because Vercel builds it as a Next.js app.
Choose one of these instead:

**Option A, a new repository (recommended, nothing existing is touched)**
1. Create a new repository, for example `codesstellar/site`, and upload the contents of this zip to its root.
2. In Vercel: Add New, Project, import the repository.
3. Set Framework Preset to **Other**. Leave Build Command and Output Directory empty.
4. Deploy. Check the preview URL, then move the `codesstellar.com` domain to this project under Settings, Domains.

**Option B, replace the current repository**
Only after you are sure the Next.js site and its CMS are no longer needed: on a new branch, remove the
existing files, add these, change the Vercel project's Framework Preset to Other, and merge once the
branch preview looks right.

`vercel.json` turns on clean URLs, so `/about.html` is also served as `/about`.

## Other hosts

GitHub Pages, Netlify and Cloudflare Pages all work with the files at the root and no build command.

## Contact form

The brief on `contact.html` is delivered by Web3Forms straight to contact@codesstellar.com.
The access key is already set in `contact.html` (`var WEB3FORMS_KEY`). It is a public key and is
safe in page code. Replies go to the visitor, because their address is sent as the reply-to.

- A hidden spam trap field rejects most automated submissions.
- If Web3Forms is ever unreachable, the form falls back to opening a pre-filled email in the visitor's email application, so no enquiry is lost.
- After launch, send one real test brief and confirm it arrives. Check the Web3Forms dashboard for the free plan's monthly limit.
- Web3Forms dashboard: turn on domain restriction to codesstellar.com if it is offered, so the key only works from your site.

Any practice page can link to the form with its area preselected:
`contact.html?area=pqc`, `?area=ai`, `?area=apps` or `?area=multi`.

## Before launch

- Confirm the LinkedIn (`linkedin.com/company/codesstellar`) and GitHub (`github.com/codesstellar`) links in the footer.
- `sitemap.xml` and `robots.txt` assume the domain `https://codesstellar.com`. Change them if it differs.
- There are no Privacy or Terms pages yet. Add a privacy policy before launch, since the contact form collects names and email addresses.
