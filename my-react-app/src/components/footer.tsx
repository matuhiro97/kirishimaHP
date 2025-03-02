import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: "center", padding: "10px", background: "#eee" }}>
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
