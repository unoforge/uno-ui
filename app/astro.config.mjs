// @ts-check
import { defineConfig, envField } from "astro/config";
import dynamicImport from "astro-dynamic-import";
import { transformerNotationDiff } from "@shikijs/transformers";

import unoCSS from "unocss/astro";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";



import vercel from "@astrojs/vercel";



// https://astro.build/config
export default defineConfig({
  integrations: [
    unoCSS({
      injectReset: true,
    }),
    dynamicImport(),
    mdx(),
    vue(),
  ],

  env: {
    schema: {
      PREVIEW_BASE_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
        default: "https://unoui-preview.netlify.app/",
      }),
    },
  },

  redirects: {
    "/docs/": {
      status: 302,
      destination: "/docs/introduction",
    },
    "/preset": {
      status: 302,
      destination: "/preset/introduction",
    },
    "/components": {
      status: 302,
      destination: "/components/accordion",
    },
    "/blocks": {
      status: 302,
      destination: "/blocks/hero-sections",
    },
  },

  markdown: {
    shikiConfig: {
      theme: "aurora-x",
      transformers: [transformerNotationDiff()],
    },
  },

  output: "static",
  adapter: vercel(),
});