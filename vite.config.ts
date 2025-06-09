import { defineConfig } from 'vite'
import baseConfig from './my-react-app/vite.config'

export default defineConfig({
  ...baseConfig,
  root: './my-react-app'
})
