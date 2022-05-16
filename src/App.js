import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Layout from "./pages/Layout/Layout";
import NoPage from "./pages/NoPage/NoPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
