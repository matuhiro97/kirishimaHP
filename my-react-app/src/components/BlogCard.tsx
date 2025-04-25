import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type BlogCardProps = {
  slug: string;
  title: string;
  date: string;
  cover: string;
};

const cardVariants = {
  hover: {
    scale: 1.03,
    // イエロー系のほんのり強いシャドウ
    boxShadow: "0 10px 20px rgba(234, 179, 8, 0.3)",
  },
};

export const BlogCard: React.FC<BlogCardProps> = ({ slug, title, date, cover }) => (
  <motion.li
    variants={cardVariants}
    initial="rest"
    whileHover="hover"
    className="overflow-hidden rounded-2xl bg-yellow-50 border-2 border-yellow-200 shadow-sm transition-all duration-300"
  >
    <Link to={`/blog/${slug}`} className="group block">
      <img
        src={cover}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-yellow-800 group-hover:text-yellow-600 transition-colors">
          {title}
        </h2>
        <time className="block mt-1 text-sm text-yellow-700">{date}</time>
      </div>
    </Link>
  </motion.li>
);
