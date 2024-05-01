import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercelStatic from '@astrojs/vercel/static';
import pagefind from "astro-pagefind";

import simpleStackForm from "simple-stack-form";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://dustinbturner.com",
  build: {
    format: "file",
  },
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark-dimmed",
      },
      gfm: true,
    }),
    icon(),
    sitemap(),
    react(),
    tailwind({ applyBaseStyles: false }),
    simpleStackForm(),
    robotsTxt(),
    pagefind(),
  ],
  output: 'static',
  adapter: vercelStatic(),

});
