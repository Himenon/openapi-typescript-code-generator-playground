import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  define: {
    "process.env.GENERATOR_VERSION": JSON.stringify("dummy"),
  },
  resolve: {
    alias: {
      path: "path-browserify",
      os: "os-browserify",
      "@app": path.join(__dirname, "src"),
    },
  },
});
