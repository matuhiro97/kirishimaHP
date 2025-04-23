// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),

    Sitemap({
      // 必須：あなたのサイトのルート URL（末尾スラッシュなし）
      hostname: 'https://kirishima-hp.vercel.app',

      // SPA なので手動で全ルートを列挙（dynamicRoutes は string[] 型）
      dynamicRoutes: [
        '/',
        '/about',
        '/blog',
        '/portfolio',
        '/contact',
      ],

      // （任意）除外したいパスがあれば指定
      // exclude: ['/secret-page']
    })
  ]
})
