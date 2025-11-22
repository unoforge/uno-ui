// uno.config.ts
import { defineConfig, presetIcons, presetWind3 } from "unocss";
import { flexillaPreset } from "@unifydev/flexilla";
import { presetUI } from "@unifydev/preset-ui";

export default defineConfig({
  content: {
    pipeline: {
      include: ["./html-components/**/*.html", "index.html", "js/**/*.js","./js/script-swiper.js"],
    },
  },
  presets: [
    presetWind3({ dark: "class" }),
    presetIcons({
      collections: {
        carbon: () =>
          import("@iconify-json/carbon/icons.json").then((i) => i.default),
        ph: () => import("@iconify-json/ph").then((i) => i.default),
      },
    }),
    presetUI({}),
    flexillaPreset(),
  ],
});
