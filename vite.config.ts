import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración ULTRA-optimizada para velocidad máxima y carga instantánea
export default defineConfig({
  plugins: [react()],
  // Optimizaciones críticas de desarrollo
  server: {
    hmr: {
      overlay: false,
    },
    // Preload de recursos críticos
    middlewareMode: false,
  },
  build: {
    // Optimizaciones críticas de build para máxima velocidad
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separar vendors automáticamente
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react';
            }
            if (id.includes('react-router')) {
              return 'router';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            return 'vendor';
          }
        },
        // Nombres de archivos optimizados para caching
        chunkFileNames: 'js/[name]-[hash:8].js',
        entryFileNames: 'js/[name]-[hash:8].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `img/[name]-[hash:8].[ext]`;
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `css/[name]-[hash:8].[ext]`;
          }
          return `assets/[name]-[hash:8].[ext]`;
        },
      },
      // Optimizaciones de tree-shaking
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
    },
    // Compresión y optimización máxima
    cssCodeSplit: true,
    sourcemap: false,
    target: 'es2020',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500,
    // Optimizaciones adicionales
    assetsInlineLimit: 4096,
    cssMinify: 'esbuild',
  },
  css: {
    postcss: './postcss.config.js',
    // Optimizaciones CSS
    devSourcemap: false,
  },
  optimizeDeps: {
    // Pre-bundling optimizado
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    exclude: [],
    // Forzar re-optimización en desarrollo
    force: false,
  },
  esbuild: {
    // Optimizaciones ESBuild para máxima velocidad
    legalComments: 'none',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    treeShaking: true,
    // Optimizaciones específicas
    target: 'es2020',
    platform: 'browser',
    format: 'esm',
  },
  // Configuraciones de performance críticas
  define: {
    // Eliminar código de desarrollo en producción
    __DEV__: false,
  },
});