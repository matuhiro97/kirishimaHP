// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteSitemap } from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    // React プラグイン
    react(),

    // ────────────────────────────────────────
    // サイトマップ自動生成プラグイン設定
    ViteSitemap({
      // 必須：あなたのサイトのルート URL（末尾スラッシュなし）
      hostname: 'https://kirishima-hp.vercel.app',

      // SPA なので手動で全ルートを列挙します
      routes: [
        '/',           // ホーム
        '/about',      // About ページ
        '/blog',       // Blog 一覧
        '/portfolio',  // Portfolio
        '/contact'     // Contact
      ],

      // （任意）全 URL に共通で付与するヒント属性
      defaults: {
        changefreq: 'weekly',            // 更新頻度のヒント
        priority:    0.8,                // 優先度のヒント (0.0〜1.0)
        lastmod:     new Date().toISOString(), // 最終更新日時
      },

      // （不要なら省略）生成から除外したいパスがあれば
      // exclude: ['/secret-page']
    })
    // ────────────────────────────────────────
  ]
})
