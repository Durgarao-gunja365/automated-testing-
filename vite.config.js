import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.jsx', // Updated to .jsx
    environmentOptions: {
      jsdom: {
        url: 'http://localhost:3000'
      }
    }
  }
})