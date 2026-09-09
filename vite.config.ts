import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * The base path differs by host, so it is decided at build time.
 *
 * Vercel serves this at the root of a domain. GitHub Pages serves it under
 * /liteconnect-web/, because that is the repository name — and every absolute
 * asset path silently 404s there unless the bundle is told. The workflow sets
 * PAGES_BASE; anywhere else, root.
 */
export default defineConfig({
  plugins: [react()],
  base: process.env.PAGES_BASE ?? '/',
})
