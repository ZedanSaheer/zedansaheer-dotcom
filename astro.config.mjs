import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "/src/scripts/js/remark_reading_time";

export default defineConfig({
  site: 'https://zedansaheer.com',
  integrations: [tailwind(), sitemap({
    filter: (page) => page !== 'https://zedansaheer.com/vault/sweet-purple/'
  }), mdx()],
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