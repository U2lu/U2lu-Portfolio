import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// No custom domain yet — Cloudflare Pages subdomain. One line to change later.
export default defineConfig({
  site: 'https://u2lu.pages.dev',
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
});
