import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cpSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-api',
      closeBundle() {
        const apiDir = resolve(__dirname, 'api')
        const distApiDir = resolve(__dirname, 'dist/api')
        if (existsSync(apiDir)) {
          cpSync(apiDir, distApiDir, { recursive: true })
        }
      },
    },
  ],
  build: {
    outDir: 'dist',
  },
})
