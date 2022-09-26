import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { dependencies } from "./package.json";

const specificVendor = {
  "react-base": ["react", "react-router-dom", "react-dom"],
  "react-syntax-highlighter": ["react-syntax-highlighter"],
};

const existSpecificVendor = (vendor: string): boolean => {
  const libs = Object.values(specificVendor);
  for (const lib of libs) {
    if (lib.includes(vendor)) {
      return true;
    }
  }
  return false;
};

/**
 * merge ${pageSize} lib to one js file when build
 */
function renderChunks(deps: Record<string, string>) {
  const chunks = {};
  const listLibs = Object.keys(deps);
  const total = listLibs.length;
  const pageSize = 5;
  const pages = Math.ceil(total / pageSize);

  for (let pageIndex = 0; pageIndex < pages; pageIndex++) {
    const from = pageIndex * pageSize;
    const to = (pageIndex + 1) * pageSize;
    const libs = listLibs
      .slice(from, to)
      .filter((key) => !existSpecificVendor(key));
    chunks[libs.join("--")] = libs;
  }
  return chunks;
}

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "node_modules"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 500,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          ...specificVendor,
          ...renderChunks(dependencies),
        },
        chunkFileNames: 'chunk-[hash].js',
      },
    },
  },
});
