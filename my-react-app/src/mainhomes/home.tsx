import React from "react";

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>霧島 aka hima</h1>
        <p style={styles.subtitle}>学士(工学) / エンジニアになりたい人</p>
        <div style={styles.buttonGroup}>
          <a
            href="https://github.com/matuhiro97"
            style={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/msuhro.6?igsh=MmZoNW9xdTRrbW"
            style={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://x.com/akahima24424?s=21"
            style={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "#009688",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
    margin: 0,
    padding: 0,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.2rem",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },
  button: {
    backgroundColor: "transparent",
    border: "2px solid white",
    borderRadius: "20px",
    padding: "0.5rem 1rem",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "background 0.3s",
  },
};

export default Home;
