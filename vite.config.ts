import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as Meta from "@himenon/openapi-typescript-code-generator/dist/meta";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/v${Meta.Version}/`,
  resolve: {
    alias: {
      path: path.resolve("node_modules/path-browserify/index.js"),
      os: path.resolve("node_modules/os-browserify/browser.js"),
      "@app": path.join(__dirname, "src"),
    },
  },
});
