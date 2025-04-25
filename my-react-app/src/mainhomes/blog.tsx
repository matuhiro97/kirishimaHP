// ファイル: src/mainhomes/blog.tsx

import React from "react";
import covers from "../blog/cover/cover.json";
import { BlogCard } from "../components/BlogCard";

const BlogIndex: React.FC = () => (
  <div className="bg-yellow-50 min-h-screen">
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-yellow-900 mb-8">Blog</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {covers.map(({ slug, title, date, cover }) => (
          <BlogCard
            key={slug}
            slug={slug}
            title={title}
            date={date}
            cover={cover}
          />
        ))}
      </ul>
    </div>
  </div>
);

export default BlogIndex;
