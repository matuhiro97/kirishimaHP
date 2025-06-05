import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header";  // 追加
import Footer from "./components/footer";  // 追加
import Home from "./mainhomes/home";
import Blog from "./mainhomes/blog";
import Contact from "./mainhomes/contact";
import Portfolio from "./mainhomes/portfolio";
import About from "./mainhomes/about";
import BlogPost from "./blog/BlogPost";
import NotFound from "./mainhomes/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
