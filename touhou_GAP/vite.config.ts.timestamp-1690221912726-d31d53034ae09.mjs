// vite.config.ts
import { defineConfig } from "file:///E:/react/touhou_GAP/node_modules/.pnpm/registry.npmmirror.com+vite@4.4.5_@types+node@20.4.2_less@4.1.3_terser@5.19.2/node_modules/vite/dist/node/index.js";
import react from "file:///E:/react/touhou_GAP/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-react@4.0.3_vite@4.4.5/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { visualizer } from "file:///E:/react/touhou_GAP/node_modules/.pnpm/registry.npmmirror.com+rollup-plugin-visualizer@5.9.2_rollup@3.26.3/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import viteCompression from "file:///E:/react/touhou_GAP/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-compression@0.5.1_vite@4.4.5/node_modules/vite-plugin-compression/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\react\\touhou_GAP";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    minify: "terser",
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        }
      },
      plugins: [
        viteCompression({
          verbose: true,
          disable: false,
          threshold: 10240,
          algorithm: "gzip",
          ext: ".gz",
          deleteOriginFile: false
        })
      ]
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxyZWFjdFxcXFx0b3Vob3VfR0FQXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxyZWFjdFxcXFx0b3Vob3VfR0FQXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9yZWFjdC90b3Vob3VfR0FQL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiO1xuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb25cIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHZpc3VhbGl6ZXIoeyBvcGVuOiB0cnVlIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbWluaWZ5OiBcInRlcnNlclwiLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJqcy9bbmFtZV0tW2hhc2hdLmpzXCIsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImpzL1tuYW1lXS1baGFzaF0uanNcIixcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiW2V4dF0vW25hbWVdLVtoYXNoXS5bZXh0XVwiLFxuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXNcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBpZFxuICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAuc3BsaXQoXCJub2RlX21vZHVsZXMvXCIpWzFdXG4gICAgICAgICAgICAgIC5zcGxpdChcIi9cIilbMF1cbiAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHBsdWdpbnM6W1xuICAgICAgICB2aXRlQ29tcHJlc3Npb24oe1xuICAgICAgICAgIHZlcmJvc2U6IHRydWUsXG4gICAgICAgICAgZGlzYWJsZTogZmFsc2UsXG4gICAgICAgICAgdGhyZXNob2xkOiAxMDI0MCxcbiAgICAgICAgICBhbGdvcml0aG06IFwiZ3ppcFwiLFxuICAgICAgICAgIGV4dDogXCIuZ3pcIixcbiAgICAgICAgICBkZWxldGVPcmlnaW5GaWxlOiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9LFxuICAgIHRlcnNlck9wdGlvbnM6IHtcbiAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUCxTQUFTLG9CQUFvQjtBQUM5USxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8scUJBQXFCO0FBSjVCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFdBQVcsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUFBLEVBQzNCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixhQUFhLElBQUk7QUFDZixjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IsbUJBQU8sR0FDSixTQUFTLEVBQ1QsTUFBTSxlQUFlLEVBQUUsQ0FBQyxFQUN4QixNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQ1osU0FBUztBQUFBLFVBQ2Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsVUFDZCxTQUFTO0FBQUEsVUFDVCxTQUFTO0FBQUEsVUFDVCxXQUFXO0FBQUEsVUFDWCxXQUFXO0FBQUEsVUFDWCxLQUFLO0FBQUEsVUFDTCxrQkFBa0I7QUFBQSxRQUNwQixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
