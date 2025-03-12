import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landingpage from './Components/Landingpage';
import About from './Components/About';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </div>
  );
}
