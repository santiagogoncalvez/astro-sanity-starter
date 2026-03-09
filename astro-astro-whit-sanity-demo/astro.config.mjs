import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import path from "node:path";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
   vite: {
      plugins: [tailwindcss()],
   },
   integrations: [
      // 👇 update these lines
      sanity({
         projectId: "qduwu3vy",
         dataset: "production",
         useCdn: false, // for static builds
      }),
   ],

   resolve: {
      alias: {
         "@": path.resolve("./src"),
         "@components": path.resolve("./src/components"),
         "@sections": path.resolve("./src/components/sections"),
         "@shared": path.resolve("./src/components/shared"),
         "@icons": path.resolve("./src/icons"),
         "@assets": path.resolve("./src/assets"),
         "@styles": path.resolve("./src/styles"),
         "@scripts": path.resolve("./src/scripts"),
         "@constants": path.resolve("./src/constants"),
      },
   },
});
