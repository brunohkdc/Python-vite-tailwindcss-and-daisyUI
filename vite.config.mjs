import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: "/static/",
  resolve: {
    alias: {
      '@': resolve('./static'),
    },
  },
  build: {
    manifest: "manifest.json",
    outDir: resolve("./assets"),
    assetsDir: "django-assets",
    rollupOptions: {
      input: {
        app: resolve("./static/js/main.js")
      }
    }
  },
  plugins: [
    tailwindcss()
  ]
})