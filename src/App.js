import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
