import React from 'react'
import './Products.css'
import { useSelector } from "react-redux";


function ProductsList() {
    const products = useSelector((state) => state.allProducts.products);

  return (
    <div className='container'>
      {
        products.map((product) => (
            <a href={`/product/${product.id}`} className='item' key={product.id}>
                <div>
                    <img className='img-div' src={product.image} alt='img'/>
                    <p>{product.title}</p>
                    <p>{product.price}</p>                  
                </div>
            </a>
        ))
      }
    </div>
  )
}

export default ProductsList
