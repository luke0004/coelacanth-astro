import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://coelacanth.ch',   // WICHTIG für korrekte URLs
  integrations: [sitemap(), mdx()],
  output: 'static'
});
