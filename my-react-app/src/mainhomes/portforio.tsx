import React, { useEffect, useState } from "react";
import { PortfolioCard } from "../components/PortfolioCard";

type PortfolioData = {
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
    <div style={{ padding: "2rem", marginTop: "100px" }}>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center", // ← ここで中央寄せ
        }}
      >
        {data.map((item, i) => (
          <PortfolioCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
