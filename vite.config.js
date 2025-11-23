import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    // Add these lines to handle Three.js issues
    server: {
      deps: {
        inline: ['@react-three/fiber', '@react-three/drei', 'three']
      }
    }
  }
})