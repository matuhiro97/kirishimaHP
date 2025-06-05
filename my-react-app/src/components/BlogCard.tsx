import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

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

export const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  date,
  cover,
}) => (
  <motion.div
    variants={cardVariants}
    initial="rest"
    whileHover="hover"
    style={{ listStyle: "none" }}
  >
    <Link to={`/blog/${slug}`} style={{ textDecoration: "none" }}>
      <Card sx={{ height: "100%", borderRadius: 2, boxShadow: 3 }}>
        <CardMedia component="img" height="160" image={cover} alt={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color="text.primary"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  </motion.div>
);
