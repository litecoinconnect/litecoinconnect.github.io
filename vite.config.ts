import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * Both hosts serve this from the root of a domain, so the base is "/".
 *
 * The override stays because it was needed once and could be again: Pages
 * serves any repository other than <account>.github.io from a subdirectory,
 * where every absolute asset path silently 404s. Setting PAGES_BASE at build
 * time is all it takes to move back.
 */
export default defineConfig({
  plugins: [react()],
  base: process.env.PAGES_BASE ?? '/',
})
