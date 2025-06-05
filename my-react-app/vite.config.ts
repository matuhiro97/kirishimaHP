// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),

    Sitemap({
      // サイトのルート URL（末尾スラッシュなし）
      hostname: 'https://kirishima-hp.vercel.app',

      // SPA の手動ルート一覧（ホームは自動生成されるので除外）
      dynamicRoutes: [
        '/about',
        '/blog',
        '/portfolio',
        '/contact',
      ],

      // （任意）生成から除外したいパス
      // exclude: ['/secret-page']
    })
  ],
  test: {
    environment: 'jsdom'
  }
})
