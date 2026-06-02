import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: '/',
  plugins: [
    svelte()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('src/lib/data/projects') ||
            id.includes('src/lib/components/Section') ||
            id.includes('src/lib/components/Card') ||
            id.includes('src/lib/components/CardLightbox') ||
            id.includes('src/lib/components/Contact')
          ) {
            return 'works';
          }
        }
      }
    }
  }
})
