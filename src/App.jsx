import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from './Components/Landingpage';
import About from './Components/About';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
