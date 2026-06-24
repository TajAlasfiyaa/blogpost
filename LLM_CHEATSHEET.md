# TajAlasfiyaa Blogpost Project Cheatsheet for LLMs

This document is a technical cheatsheet designed to help LLMs and AI coding assistants instantly understand the architecture, data flow, conventions, and idiosyncrasies of this codebase.

---

## Tech Stack Quick Reference

* **Framework**: Next.js 14.0.0 (using **App Router**).
* **Styling**: Tailwind CSS v3.3.5 & PostCSS. Global styles in [styles.css](file:///C:/Users/Ahmed Farah/.gemini/antigravity/worktrees/blogpost/explore-project-structure/app/styles.css).
* **CMS/Content Management**: Keystatic CMS (v0.2.6). Stores content locally as Markdown documents (`.mdoc`) under `/content`. In production/Vercel environments, Keystatic is configured to read/write via the GitHub API.
* **Component Library**: Primitive components built using [Radix UI](https://www.radix-ui.com/) and styled with Tailwind.
* **Type Validation**: [Zod](https://zod.dev/) for data schemas.

---

## Directory Architecture

```
.
├── app/                  # Next.js App Router folders
│   ├── (default)/        # Route group for standard pages (About, Articles, Links, Projects)
│   │   ├── layout.tsx    # Renders sticky bottom Navbar
│   │   └── page.tsx      # Homepage (renders title, description, & home singleton)
│   ├── (feed)/           # Dynamic RSS, Atom, and JSON feeds
│   ├── (txt)/            # Text routes (PGP keys, security.txt)
│   ├── api/              # API routes (Keystatic Admin API and OpenGraph generator)
│   ├── keystatic/        # Catch-all routes for the Keystatic Admin panel
│   └── preview/          # Handles preview modes for content drafts
├── components/           # Reusable UI elements (custom primitives & Radix wrappers)
├── constants/            # Global constants (e.g., social/site links in links.ts)
├── content/              # Content source files (.mdoc Markdown documents)
├── schema/               # Keystatic schemas (defines structure of collections & singletons)
├── server/               # Server-side reader helpers for fetching content
├── site.config.js        # Global site metadata, URLs, and social profile links
└── utils/                # Helper utilities (CN class merger, Date formatter, etc.)
```

---

## Data Flow & Keystatic Integration

All site content is dynamic but static-backed by `.mdoc` files.

1. **Schema Definition**: Models are declared in `/schema` (e.g., [articles.ts](file:///C:/Users/Ahmed Farah/.gemini/antigravity/worktrees/blogpost/explore-project-structure/schema/articles.ts)).
2. **CMS Configuration**: Collections and singletons map to these schemas in [keystatic.config.ts](file:///C:/Users/Ahmed Farah/.gemini/antigravity/worktrees/blogpost/explore-project-structure/keystatic.config.ts).
3. **Storage**: Content is stored as frontmatter-based Markdown files under `/content` (e.g., `content/articles/offline.mdoc`).
4. **Data Fetching**: The file [keystatic.ts](file:///C:/Users/Ahmed Farah/.gemini/antigravity/worktrees/blogpost/explore-project-structure/server/keystatic.ts) manages readers:
   * **Local Reader** (`createReader`): Reads directly from the local file system during development.
   * **GitHub Reader** (`createGitHubReader`): Reads directly from the GitHub repository branch when draft mode is enabled in production.
5. **Rendering**: Content fetched from Keystatic is represented as a structured object and rendered in pages using Keystatic's `<DocumentRenderer>` component.

---

## Key Routings & Components

* **Navigation**: The [Navbar](file:///C:/Users/Ahmed Farah/.gemini/antigravity/worktrees/blogpost/explore-project-structure/components/navbar/index.tsx) is sticky at the **bottom** of the page rather than the top, imported in [app/(default)/layout.tsx](file:///C:/Users/Ahmed Farah/.gemini/antigravity/worktrees/blogpost/explore-project-structure/app/(default)/layout.tsx).
* **Feed Routes**: The routes under `app/(feed)` generate programmatic XML/JSON feeds on-the-fly.
* **OpenGraph Image Generation**: `app/api/opengraph` dynamically generates social preview cards.

---

## Legacy Files & Common Gotchas

* **Typo in Articles Page**: The heading inside [articles/page.tsx](file:///C:/Users/Ahmed Farah/.gemini/antigravity/worktrees/blogpost/explore-project-structure/app/(default)/articles/page.tsx#L22) contains a typo: `Psosts` instead of `Posts` or `Articles`.
* **Projects Placeholder**: The page [projects/page.tsx](file:///C:/Users/Ahmed Farah/.gemini/antigravity/worktrees/blogpost/explore-project-structure/app/(default)/projects/page.tsx) is just a basic placeholder returning `<div>page</div>`.
* **Orphan Content**: The folder `content/posts/` exists but is **not** referenced by any collection or singleton inside `keystatic.config.ts`. The only active collection is `articles`.
* **Local Development**: Run `npm run dev` to start the local server. The admin dashboard is available at `/keystatic`.
