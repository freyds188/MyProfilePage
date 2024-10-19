import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";
import SubmissionSuccess from "./Component/SubmissionSuccess";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/submissionsuccess" element={<SubmissionSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
