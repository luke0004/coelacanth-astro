import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://coelacanth.ch',   // WICHTIG für korrekte URLs
  integrations: [sitemap()],
  output: 'static'
});
