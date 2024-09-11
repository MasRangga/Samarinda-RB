import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/HomePage/Homepage';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Produkk from './pages/Produk/Produkk';
import Umkmm from './pages/UMKM/Umkmm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/produk" element={<Produkk />} />
        <Route path="/UMKM" element={<Umkmm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
