import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash:8].js',
        entryFileNames: 'js/[name]-[hash:8].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `img/[name]-[hash:8].[ext]`;
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `css/[name]-[hash:8].[ext]`;
          }
          return `assets/[name]-[hash:8].[ext]`;
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    target: 'es2020',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    cssMinify: 'esbuild',
  },
  css: {
    postcss: './postcss.config.js',
    devSourcemap: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
