import React from "react";

import ProductsList from "./ProductsList";
import Navbar from "../dashboard/Nav";
import './Products.css'

const ProductPage = () => {
  return (
    <div className="card">
        <Navbar />
        <ProductsList/>      
    </div>
  );
};

export default ProductPage;