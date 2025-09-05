import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ProductPage from '../Pages/ProductPage';
import Cart from '../Pages/Cart';

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Productpage" element={<ProductPage />} />
      <Route path="/Cart" element={<Cart/>} />
    </Routes>
  )
}

