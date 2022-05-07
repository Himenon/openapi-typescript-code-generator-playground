import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as Meta from "@himenon/openapi-typescript-code-generator/meta";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/v${Meta.Version}/`,
  resolve: {
    alias: {
      path: "path-browserify",
      os: "os-browserify",
      "@app": path.join(__dirname, "src"),
    },
  },
});
