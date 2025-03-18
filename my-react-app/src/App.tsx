import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header";  // 追加
import Footer from "./components/footer";  // 追加
import Home from "./mainhomes/home";
import Blog from "./mainhomes/blog";
import Contact from "./mainhomes/contact";
import Portfolio from "./mainhomes/portforio";
import About from "./mainhomes/about";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
