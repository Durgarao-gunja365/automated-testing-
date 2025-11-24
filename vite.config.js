import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Netlify does NOT need a base URL
  // GitHub Pages needs it, but you're no longer using it.

  server: {
    port: 5173,
    open: true,
  },

  build: {
    outDir: "dist",
  },

  // Vitest configuration (kept as-is)
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.jsx",
    environmentOptions: {
      jsdom: {
        url: "http://localhost:3000",
      },
    },
  },
});
