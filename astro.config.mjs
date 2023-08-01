import { defineConfig, sharpImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  experimental: {
    assets: true,
  },
  site: "https://twrfitness.net",
  image: {
    service: sharpImageService(),
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
  ],
});
