import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ 
      width: "100vw", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "10px 20px", 
      background: "#333", 
      color: "white",
      boxSizing: "border-box"
    }}>
      {/* ロゴ */}
      <h1 style={{ margin: 0 }}>My Website</h1>

      {/* ハンバーガーメニュー（スマホ用） */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        style={{ 
          display: "none", 
          background: "none", 
          border: "none", 
          color: "white", 
          fontSize: "24px", 
          cursor: "pointer"
        }}
      >
        ☰
      </button>

      {/* ナビゲーションメニュー */}
      <nav style={{ display: "flex" }}>
        <ul style={{ 
          listStyle: "none", 
          display: "flex", 
          gap: "15px", 
          padding: 0, 
          margin: 0 
        }}>
          <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
          <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
          <li><Link to="/blog" style={{ color: "white", textDecoration: "none" }}>Blog</Link></li>
          <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
          <li><Link to="/portfolio" style={{ color: "white", textDecoration: "none" }}>Portfolio</Link></li>
        </ul>
      </nav>

      {/* モバイル用メニュー (開いたとき) */}
      {menuOpen && (
        <div style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100vw", height: "100vh",
          background: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <button 
            onClick={() => setMenuOpen(false)} 
            style={{ 
              position: "absolute", 
              top: "20px", right: "20px", 
              fontSize: "24px", 
              background: "none", 
              border: "none", 
              color: "white", 
              cursor: "pointer"
            }}
          >
            ✖
          </button>
          <ul style={{ 
            listStyle: "none", 
            textAlign: "center", 
            padding: 0 
          }}>
            <li style={{ margin: "20px 0" }}><Link to="/" style={{ color: "white", fontSize: "24px", textDecoration: "none" }}>Home</Link></li>
            <li style={{ margin: "20px 0" }}><Link to="/about" style={{ color: "white", fontSize: "24px", textDecoration: "none" }}>About</Link></li>
            <li style={{ margin: "20px 0" }}><Link to="/blog" style={{ color: "white", fontSize: "24px", textDecoration: "none" }}>Blog</Link></li>
            <li style={{ margin: "20px 0" }}><Link to="/contact" style={{ color: "white", fontSize: "24px", textDecoration: "none" }}>Contact</Link></li>
            <li style={{ margin: "20px 0" }}><Link to="/portfolio" style={{ color: "white", fontSize: "24px", textDecoration: "none" }}>Portfolio</Link></li>
          </ul>
        </div>
      )}

      {/* スマホ用のスタイル */}
      <style>
        {`
          @media (max-width: 768px) {
            nav { display: none; }
            button { display: block; }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
