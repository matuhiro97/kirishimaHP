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
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
  },
};

export const BlogCard: React.FC<BlogCardProps> = ({ slug, title, date, cover }) => (
  <motion.li
    variants={cardVariants}
    initial="rest"
    whileHover="hover"
    className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300"
  >
    <Link to={`/blog/${slug}`} className="group block">
      <img
        src={cover}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
          {title}
        </h2>
        <time className="block mt-1 text-sm text-gray-500">{date}</time>
      </div>
    </Link>
  </motion.li>
);
