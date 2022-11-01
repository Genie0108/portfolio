import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Layout from "./pages/Layout/Layout";
import Skills from "./pages/skills/Skills";
import Work from "./pages/Work/Work";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* layout page wrapping other components */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />
          <Route path="works" element={<Work />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
