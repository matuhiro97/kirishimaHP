// src/components/PortfolioCard.tsx
import React from "react";

type PortfolioProps = {
  img: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
};

export const PortfolioCard: React.FC<PortfolioProps> = ({
  img,
  title,
  description,
  tags,
  date,
}) => {
  return (
    <div style={{ border: "1px solid #333", width: 300 }}>
      <div style={{ height: 150, backgroundColor: "#17647c" }}>
        <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ backgroundColor: "#eee", padding: "10px" }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div style={{ margin: "10px 0" }}>
          {tags.map((tag, i) => (
            <span key={i} style={{ marginRight: 8 }}>{tag}</span>
          ))}
        </div>
        <small>{date}</small>
      </div>
    </div>
  );
};
