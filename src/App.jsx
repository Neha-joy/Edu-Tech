import React from 'react';
import { Route, Routes } from "react-router-dom";
import Landingpage from './Components/Landingpage';
import About from './Components/About';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
