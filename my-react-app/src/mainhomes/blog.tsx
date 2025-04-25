import React, { useEffect, useState } from "react";
import { BlogCard } from "../components/BlogCard";

type Cover = {
  slug: string;
  title: string;
  date: string;
  cover: string;
};

const BlogIndex: React.FC = () => {
  const [covers, setCovers] = useState<Cover[]>([]);

  useEffect(() => {
    fetch("/blogcover/cover.json")
      .then((res) => {
        if (!res.ok) throw new Error("cover.json の取得に失敗");
        return res.json();
      })
      .then((data: Cover[]) => setCovers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-yellow-50 min-h-screen">      {/* ページ全体を淡い黄色に */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-yellow-900 mb-8">Blog</h1>
        <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {covers.map((item) => (
            <BlogCard
              key={item.slug}
              slug={item.slug}
              title={item.title}
              date={item.date}
              cover={item.cover}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogIndex;
