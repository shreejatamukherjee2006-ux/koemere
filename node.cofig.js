import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), 'site')

export default defineConfig({
  // Treat site/ as the web root — dev server serves it, index.html is the entry
  root,

  // Static files copied as-is (favicons, robots.txt, etc.) live here
  publicDir: resolve(root, 'public'),

  server: {
    port: 5173,
    open: '/index.html',
  },

  build: {
    // Emit the built site to <projectRoot>/dist, not site/dist
    outDir: resolve(root, '../dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index:      resolve(root, 'index.html'),
        archive:    resolve(root, 'archive.html'),
        manualWave: resolve(root, 'manual-wave.html'),
        philosophy: resolve(root, 'philosophy.html'),
        spaces:     resolve(root, 'spaces.html'),
      },
    },
  },
})
