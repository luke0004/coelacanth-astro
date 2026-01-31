# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

This is an Astro static site for a sailing blog about the yacht "Coelacanth". It uses the MDX integration for content.

### Content Collections

Content is managed via Astro Content Collections defined in `src/content/config.ts`:

- **blog**: Blog posts with `title` (string), `date` (date), and optional `description`. Files in `src/content/blog/` with naming convention `YYYY-MM-DD-slug.md`.
- **pages**: Static pages with `title` only. Currently just `src/content/pages/home.md`.

### Routing

- `/` - Home page, renders `src/content/pages/home.md`
- `/blog/` - Blog index listing all posts sorted by date descending
- `/blog/[slug]/` - Individual blog post pages (dynamic routes via `getStaticPaths`)

### Layout

Single layout `src/layouts/BaseLayout.astro` wraps all pages with header nav, main content slot, and footer.

### Assets

Images are stored in `src/assets/` with naming convention `YYYYMMDD_img_NNNN.{jpg,png,gif}`. Reference in markdown using relative paths like `../../assets/filename.jpg`.
