import React from 'react';
import { Route, Routes } from "react-router-dom";
import Landingpage from './Components/Landingpage';
import About from './Components/About';
import Navbar from './Components/Navbar';
import CourseAdding from './Components/CourseAdding';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/courseadd" element={<CourseAdding />} />
      </Routes>
    </>
  );
}
