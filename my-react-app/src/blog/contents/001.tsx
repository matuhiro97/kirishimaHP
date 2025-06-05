// blog/contents/001.tsx
export const meta = {
  title: "はじめての投稿",
  date: "2025-04-24",
};

export default function Post001() {
  return (
    <article>
      <h1>{meta.title}</h1>
      <p>本文ここから…</p>
    </article>
  );
}
