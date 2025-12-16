// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  // Optimizaciones críticas de desarrollo
  server: {
    hmr: {
      overlay: false
    },
    // Preload de recursos críticos
    middlewareMode: false
  },
  build: {
    // Optimizaciones críticas de build para máxima velocidad
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true
      },
      mangle: {
        safari10: true,
        toplevel: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react";
            }
            if (id.includes("react-router")) {
              return "router";
            }
            if (id.includes("lucide-react")) {
              return "icons";
            }
            return "vendor";
          }
        },
        // Nombres de archivos optimizados para caching
        chunkFileNames: "js/[name]-[hash:8].js",
        entryFileNames: "js/[name]-[hash:8].js",
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `img/[name]-[hash:8].[ext]`;
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `css/[name]-[hash:8].[ext]`;
          }
          return `assets/[name]-[hash:8].[ext]`;
        }
      },
      // Optimizaciones de tree-shaking
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false
      }
    },
    // Compresión y optimización máxima
    cssCodeSplit: true,
    sourcemap: false,
    target: "es2020",
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500,
    // Optimizaciones adicionales
    assetsInlineLimit: 4096,
    cssMinify: "esbuild"
  },
  css: {
    postcss: "./postcss.config.js",
    // Optimizaciones CSS
    devSourcemap: false
  },
  optimizeDeps: {
    // Pre-bundling optimizado
    include: ["react", "react-dom", "react-router-dom", "lucide-react"],
    exclude: [],
    // Forzar re-optimización en desarrollo
    force: false
  },
  esbuild: {
    // Optimizaciones ESBuild para máxima velocidad
    legalComments: "none",
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    treeShaking: true,
    // Optimizaciones específicas
    target: "es2020",
    platform: "browser",
    format: "esm"
  },
  // Configuraciones de performance críticas
  define: {
    // Eliminar código de desarrollo en producción
    __DEV__: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIENvbmZpZ3VyYWNpXHUwMEYzbiBVTFRSQS1vcHRpbWl6YWRhIHBhcmEgdmVsb2NpZGFkIG1cdTAwRTF4aW1hIHkgY2FyZ2EgaW5zdGFudFx1MDBFMW5lYVxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICAvLyBPcHRpbWl6YWNpb25lcyBjclx1MDBFRHRpY2FzIGRlIGRlc2Fycm9sbG9cbiAgc2VydmVyOiB7XG4gICAgaG1yOiB7XG4gICAgICBvdmVybGF5OiBmYWxzZSxcbiAgICB9LFxuICAgIC8vIFByZWxvYWQgZGUgcmVjdXJzb3MgY3JcdTAwRUR0aWNvc1xuICAgIG1pZGRsZXdhcmVNb2RlOiBmYWxzZSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBPcHRpbWl6YWNpb25lcyBjclx1MDBFRHRpY2FzIGRlIGJ1aWxkIHBhcmEgbVx1MDBFMXhpbWEgdmVsb2NpZGFkXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBjb21wcmVzczoge1xuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWUsXG4gICAgICAgIHB1cmVfZnVuY3M6IFsnY29uc29sZS5sb2cnXSxcbiAgICAgICAgcGFzc2VzOiAzLFxuICAgICAgICB1bnNhZmU6IHRydWUsXG4gICAgICAgIHVuc2FmZV9jb21wczogdHJ1ZSxcbiAgICAgICAgdW5zYWZlX21hdGg6IHRydWUsXG4gICAgICB9LFxuICAgICAgbWFuZ2xlOiB7XG4gICAgICAgIHNhZmFyaTEwOiB0cnVlLFxuICAgICAgICB0b3BsZXZlbDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBmb3JtYXQ6IHtcbiAgICAgICAgY29tbWVudHM6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICAvLyBTZXBhcmFyIHZlbmRvcnMgYXV0b21cdTAwRTF0aWNhbWVudGVcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3JlYWN0JykgfHwgaWQuaW5jbHVkZXMoJ3JlYWN0LWRvbScpKSB7XG4gICAgICAgICAgICAgIHJldHVybiAncmVhY3QnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdyZWFjdC1yb3V0ZXInKSkge1xuICAgICAgICAgICAgICByZXR1cm4gJ3JvdXRlcic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ2x1Y2lkZS1yZWFjdCcpKSB7XG4gICAgICAgICAgICAgIHJldHVybiAnaWNvbnMnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gTm9tYnJlcyBkZSBhcmNoaXZvcyBvcHRpbWl6YWRvcyBwYXJhIGNhY2hpbmdcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdqcy9bbmFtZV0tW2hhc2g6OF0uanMnLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2pzL1tuYW1lXS1baGFzaDo4XS5qcycsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5mbyA9IGFzc2V0SW5mby5uYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgY29uc3QgZXh0ID0gaW5mb1tpbmZvLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmICgvXFwuKHBuZ3xqcGU/Z3xzdmd8Z2lmfHRpZmZ8Ym1wfGljbykkL2kudGVzdChhc3NldEluZm8ubmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBgaW1nL1tuYW1lXS1baGFzaDo4XS5bZXh0XWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgvXFwuKGNzcykkL2kudGVzdChhc3NldEluZm8ubmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBgY3NzL1tuYW1lXS1baGFzaDo4XS5bZXh0XWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgYXNzZXRzL1tuYW1lXS1baGFzaDo4XS5bZXh0XWA7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgLy8gT3B0aW1pemFjaW9uZXMgZGUgdHJlZS1zaGFraW5nXG4gICAgICB0cmVlc2hha2U6IHtcbiAgICAgICAgbW9kdWxlU2lkZUVmZmVjdHM6IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0eVJlYWRTaWRlRWZmZWN0czogZmFsc2UsXG4gICAgICAgIHRyeUNhdGNoRGVvcHRpbWl6YXRpb246IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vIENvbXByZXNpXHUwMEYzbiB5IG9wdGltaXphY2lcdTAwRjNuIG1cdTAwRTF4aW1hXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgdGFyZ2V0OiAnZXMyMDIwJyxcbiAgICByZXBvcnRDb21wcmVzc2VkU2l6ZTogZmFsc2UsXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiA1MDAsXG4gICAgLy8gT3B0aW1pemFjaW9uZXMgYWRpY2lvbmFsZXNcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogNDA5NixcbiAgICBjc3NNaW5pZnk6ICdlc2J1aWxkJyxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczogJy4vcG9zdGNzcy5jb25maWcuanMnLFxuICAgIC8vIE9wdGltaXphY2lvbmVzIENTU1xuICAgIGRldlNvdXJjZW1hcDogZmFsc2UsXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIC8vIFByZS1idW5kbGluZyBvcHRpbWl6YWRvXG4gICAgaW5jbHVkZTogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3Qtcm91dGVyLWRvbScsICdsdWNpZGUtcmVhY3QnXSxcbiAgICBleGNsdWRlOiBbXSxcbiAgICAvLyBGb3J6YXIgcmUtb3B0aW1pemFjaVx1MDBGM24gZW4gZGVzYXJyb2xsb1xuICAgIGZvcmNlOiBmYWxzZSxcbiAgfSxcbiAgZXNidWlsZDoge1xuICAgIC8vIE9wdGltaXphY2lvbmVzIEVTQnVpbGQgcGFyYSBtXHUwMEUxeGltYSB2ZWxvY2lkYWRcbiAgICBsZWdhbENvbW1lbnRzOiAnbm9uZScsXG4gICAgbWluaWZ5SWRlbnRpZmllcnM6IHRydWUsXG4gICAgbWluaWZ5U3ludGF4OiB0cnVlLFxuICAgIG1pbmlmeVdoaXRlc3BhY2U6IHRydWUsXG4gICAgdHJlZVNoYWtpbmc6IHRydWUsXG4gICAgLy8gT3B0aW1pemFjaW9uZXMgZXNwZWNcdTAwRURmaWNhc1xuICAgIHRhcmdldDogJ2VzMjAyMCcsXG4gICAgcGxhdGZvcm06ICdicm93c2VyJyxcbiAgICBmb3JtYXQ6ICdlc20nLFxuICB9LFxuICAvLyBDb25maWd1cmFjaW9uZXMgZGUgcGVyZm9ybWFuY2UgY3JcdTAwRUR0aWNhc1xuICBkZWZpbmU6IHtcbiAgICAvLyBFbGltaW5hciBjXHUwMEYzZGlnbyBkZSBkZXNhcnJvbGxvIGVuIHByb2R1Y2NpXHUw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
