import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        width: "100%", // 横幅いっぱい
        textAlign: "center",
        padding: "10px",
        background: "#eee",
        marginTop: "auto", // コンテンツの下に配置
      }}
    >
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
