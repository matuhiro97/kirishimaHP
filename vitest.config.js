import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './my-react-app',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
