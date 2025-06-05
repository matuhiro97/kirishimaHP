# HP
ブログだったりポートフォリオだったりする予定

## Prerequisites

- Node.js 18 以上
- npm (または任意の Node パッケージマネージャー)

## インストール

```bash
npm install
```

## 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開くとアプリを確認できます。

## テストの実行

```bash
npm test
```

Vitest と Testing Library を使用しています。

## 本番ビルド

```bash
npm run build
```

生成されたファイルは `dist/` に出力されます。ビルド内容を確認するには `npm run preview` を使用します。

## デプロイ

Vercel でのデプロイを想定しています。`vercel.json` では `sitemap.xml` に `Content-Type: application/xml` ヘッダーを付与するほか、React Router のために全てのリクエストを `index.html` にリライトする設定を追加しています。特別な環境変数は不要ですが、Node.js 18 以上の環境で動作させてください。
