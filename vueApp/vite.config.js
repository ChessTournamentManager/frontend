import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
  root: ".", //Define the root,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});