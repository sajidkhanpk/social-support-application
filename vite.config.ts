import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@lib": path.resolve(__dirname, "./src/lib"),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          libphonenumber: ["google-libphonenumber"],
          react: ["react", "react-dom"],
          vendor: ["axios", "zod"],
        },
      },
    },
  },
});
