import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@dashboard',
        replacement: resolve(__dirname, 'src/modules/Dashboard')
      },
      {
        find: '@assets',
        replacement: resolve(__dirname, 'src/assets')
      }
    ]
  }
})
