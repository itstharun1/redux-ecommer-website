import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.js'
import ProductPage from './components/products/Products';
import DetailProdct from './components/products/DetailProdct.js';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<DetailProdct />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
