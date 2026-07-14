import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh for development
      refresh: true,
    }),
    tailwindcss(),
  ],
  build: {
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Reduce bundle size with minification (esbuild ships with Vite, no extra dep needed)
    minify: "esbuild",
    cssMinify: true,
    // Enable rollup options for better optimization
    rollupOptions: {
      output: {
        // Manual chunking for better caching
        manualChunks: {
          // Vendor chunk for react and dependencies
          vendor: ["react", "react-dom"],
          // Three.js and Drei
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          // GSAP animations
          gsap: ["gsap"],
        },
      },
    },
    // Reduce sourcemaps in production
    sourcemap: false,
  },
  // Optimize dependencies for faster SSR
  optimizeDeps: {
    include: ["three", "@react-three/fiber", "@react-three/drei", "gsap"],
  },
  // Define global constants
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
    __PROD__: JSON.stringify(process.env.NODE_ENV === "production"),
  },
  // Server optimizations
  server: {
    // HMR optimizations
    hmr: {
      overlay: false,
    },
    // Reduce memory usage
    fs: {
      allow: [".."],
    },
  },
});
