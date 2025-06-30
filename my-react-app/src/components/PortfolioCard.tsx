// src/components/PortfolioCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

type PortfolioProps = {
  slug: string;
  img: string;
  title: string;
  date: string;
};

const cardVariants = {
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
  },
};

export const PortfolioCard: React.FC<PortfolioProps> = ({
  slug,
  img,
  title,
  date,
}) => {
  return (
    <motion.div variants={cardVariants} initial="rest" whileHover="hover" style={{ listStyle: "none" }}>
      <Link to={`/portfolio/${slug}`} style={{ textDecoration: "none", color: "inherit" }}>
        <Card sx={{ height: "100%", borderRadius: 2, boxShadow: 3 }}>
          <CardMedia component="img" height="160" image={img} alt={title} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" color="text.primary">
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
};
