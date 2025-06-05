import React, { useEffect, useState } from "react";
import { BlogCard } from "../components/BlogCard";
import { Box, Container, Grid, Typography } from "@mui/material";

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
    <Box sx={{ bgcolor: "grey.50", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Blog
        </Typography>
        <Grid container spacing={4} component="ul" sx={{ p: 0, listStyle: "none" }}>
          {covers.map((item) => (
            <Grid item key={item.slug} xs={12} sm={6} md={4} component="li" sx={{ listStyle: "none" }}>
              <BlogCard slug={item.slug} title={item.title} date={item.date} cover={item.cover} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogIndex;
