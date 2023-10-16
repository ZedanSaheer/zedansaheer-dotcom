import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://zedansaheer.com',
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  }
});