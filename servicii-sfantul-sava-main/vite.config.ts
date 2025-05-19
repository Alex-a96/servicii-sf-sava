import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const isDevelopment = process.env.NODE_ENV === "development";
let componentTagger: any;

// Încercăm să încărcăm lovable-tagger doar în dev
if (isDevelopment) {
  try {
    componentTagger = require("lovable-tagger").componentTagger;
  } catch {
    console.warn("⚠️ 'lovable-tagger' nu este instalat. Ignorăm în development.");
  }
}

export default defineConfig({
  base: '/', // 🔥 IMPORTANT: corect pentru deployment nginx/docker
  plugins: [
    react(),
    isDevelopment && componentTagger?.(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
        },
      },
    },
  },
});
