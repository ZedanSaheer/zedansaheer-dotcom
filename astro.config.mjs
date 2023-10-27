import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "/src/scripts/js/remark-reading-time";

export default defineConfig({
  site: 'https://zedansaheer.com',
  integrations: [tailwind(), sitemap(), mdx()],
  markdown: {
    image: {
      remotePatterns: [{ protocol: "https" }],
      domains: ["unsplash.com"],
    },
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  }
});