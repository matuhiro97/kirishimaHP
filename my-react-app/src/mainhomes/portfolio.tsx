import React, { useEffect, useState } from "react";
import { PortfolioCard } from "../components/PortfolioCard";
import { Box, Container, Grid, Typography } from "@mui/material";

type PortfolioData = {
  slug: string;
  img: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
};

const Portfolio: React.FC = () => {
  const [data, setData] = useState<PortfolioData[]>([]);

  useEffect(() => {
    fetch("/portfoliocover/cover.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("JSON読み込み失敗", err));
  }, []);

  return (
    <Box sx={{ bgcolor: "grey.50", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Portfolio
        </Typography>
        <Grid container spacing={4} component="ul" sx={{ p: 0, listStyle: "none" }}>
          {data.map((item) => (
            <Grid item key={item.slug} xs={12} sm={6} md={4} component="li" sx={{ listStyle: "none" }}>
              <PortfolioCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
