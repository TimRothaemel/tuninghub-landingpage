import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        registrieren: resolve(__dirname, "src/pages/registrieren/registrieren.html"),
        impressum: resolve(__dirname, "src/pages/impressum.html"),
        datenschutz: resolve(__dirname, "src/pages/datenschutz.html"),
      },
    },
  },
});
