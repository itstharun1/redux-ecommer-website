import React from 'react'
import { useSelector , useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import {addToCart} from '../redux/productSlice'
import Nav from '../dashboard/Nav'

import './Detail.css'

function DetailProdct() {
  const dispatch=useDispatch()
    const {id}= useParams()
    const state = useSelector((state) => state.product.data.products);
  
    const product = state.find((product) => product.id === parseInt(id));
    const addCart=()=>{
      dispatch(addToCart(product))

    }
  return (
    <div className='new-card'>
        <Nav />
        <div className='div-card'>
        <div>
        <h4>{product.title}</h4>
        <img className='img-card' src={product.image} alt='img' />
        <div className='div2'>
        <p>Price:{product.price}</p>
        <button onClick={addCart}>Add To cart</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default DetailProdct
