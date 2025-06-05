import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
          background: "#111",
          color: "white",
          boxSizing: "border-box",
          zIndex: 1000,
        }}
      >
        {/* ロゴ */}
        <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            霧島 Website
          </Link>
        </h1>

        {/* ハンバーガーメニュー（モバイル用） */}
        <IconButton
          onClick={() => setMenuOpen(true)}
          sx={{ color: "white", display: { xs: "block", md: "none" } }}
        >
          <MenuIcon sx={{ fontSize: 30 }} />
        </IconButton>

        {/* ナビゲーションメニュー（PC用） */}
        <nav style={{ display: "flex", alignItems: "center" }}>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "20px",
              padding: 0,
              margin: 0,
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            <li>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
            </li>
            <li>
              <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
            </li>
            <li>
              <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>Blog</Link>
            </li>
            <li>
              <Link to="/portfolio" style={{ color: "white", textDecoration: "none" }}>Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* モバイル用メニュー（スライドイン） */}
      {menuOpen && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1100,
            transition: "all 0.3s ease-in-out",
          }}
        >
          <IconButton
            onClick={() => setMenuOpen(false)}
            sx={{ position: "absolute", top: 20, right: 20, color: "white" }}
          >
            <CloseIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <ul
            style={{
              listStyle: "none",
              textAlign: "center",
              padding: 0,
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            <li style={{ margin: "20px 0" }}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
            </li>
            <li style={{ margin: "20px 0" }}>
              <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
            </li>
            <li style={{ margin: "20px 0" }}>
              <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>Blog</Link>
            </li>
            <li style={{ margin: "20px 0" }}>
              <Link to="/portfolio" style={{ color: "white", textDecoration: "none" }}>Portfolio</Link>
            </li>
            <li style={{ margin: "20px 0" }}>
              <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
            </li>
          </ul>
        </Box>
      )}

      {/* スタイル修正 */}
      <style>
        {`
          @media (max-width: 768px) {
            nav { display: none; }
            .MuiIconButton-root { display: block; }
          }
        `}
      </style>
    </>
  );
};

export default Header;
