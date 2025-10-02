import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';

function App() {
 
  return (
    <>
  
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/products" element={<Products />} />
      
<Route path="/product-details/:id" element={<ProductDetails />} />

        <Route path="/about" element={<About />} />
      </Routes>
     
       
    </>
    
  )
}

export default App
