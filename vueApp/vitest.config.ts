/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        Vue(),
    ],
    test: {
        coverage: {
            reporter: ['text', 'lcov']
        },
        deps: {
          inline: []
        },
        globals: true,
        environment: 'jsdom'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
})