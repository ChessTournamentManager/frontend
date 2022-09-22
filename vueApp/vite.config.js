import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config';
//import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  test: {
    globals: true,
    reporters: 'vitest-sonar-reporter',
    outputFile: 'sonar-report.xml',
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
