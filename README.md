# Coelacanth

A minimalist sailing blog built with Astro, deployed on Cloudflare Pages.

**Live site:** [coelacanth.ch](https://coelacanth.ch)

---

## The Story

This site was migrated from WordPress to Astro in under 24 hours using [Claude Code](https://claude.ai/code) as an AI pair programming assistant. What started as a simple migration turned into a complete theme rebuild with features like dark mode, image galleries, and SEO optimization—all through natural conversation.

This project serves as a case study for **Agentic Development**: collaborating with AI to build production-ready software, not just generating code snippets.

---

## Features

- **Content** — MDX support, image galleries with lightbox, YouTube embeds
- **Navigation** — Tag archives, pagination, prev/next post links
- **SEO** — Open Graph, Twitter Cards, sitemap, RSS feed, robots.txt
- **Design** — Dark mode (auto-detect), View Transitions, mobile responsive
- **Accessibility** — Skip-to-content link, semantic HTML
- **DX** — Fully configurable via single `config.ts` file

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Astro](https://astro.build/) 5.x |
| Content | MDX, Content Collections |
| Styling | Vanilla CSS with custom properties |
| Fonts | Google Fonts (Courier Prime, EB Garamond) |
| Deployment | [Cloudflare Pages](https://pages.cloudflare.com/) |

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/luke0004/coelacanth-astro.git
cd coelacanth-astro

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Configuration

All site settings in one file:

```typescript
// src/config.ts
export const SITE = {
  name: "Coelacanth",
  description: "...",
  lang: "en",
  locale: "en-GB",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Logbook", href: "/logbook/" },
  // ...
];
```

---

## Project Structure

```
src/
├── assets/          # Images (processed by Astro)
├── components/      # Astro components (Gallery, Lightbox, YouTube)
├── content/
│   ├── logbook/     # Blog posts (MDX)
│   └── pages/       # Static pages
├── layouts/         # Base layout
├── pages/           # Routes
├── styles/          # Global CSS
└── config.ts        # Site configuration
```

---

## Built With Claude Code

This entire site—from initial WordPress migration to the final polished theme—was built in collaboration with [Claude Code](https://claude.ai/code), Anthropic's AI coding assistant.

The development process included:
- Migrating content from WordPress
- Building components (Gallery, Lightbox, YouTube embeds)
- Implementing dark mode and View Transitions
- SEO optimization and accessibility improvements
- Image optimization (reduced assets from 50MB to 31MB)
- Refactoring for reusability (centralized config)

All commits are co-authored to reflect this collaboration.

---

## License

Content © Luke. Theme available for personal use.
