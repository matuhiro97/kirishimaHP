import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>ページが見つかりません</h1>
    <Link to="/" style={styles.link}>
      ホームへ戻る
    </Link>
  </div>
);

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
    textAlign: "center",
    gap: "1rem",
  },
  title: {
    fontSize: "2rem",
  },
  link: {
    color: "#1976d2",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default NotFound;
