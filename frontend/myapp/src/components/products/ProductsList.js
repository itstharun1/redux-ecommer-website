import React, { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts } from '../redux/productSlice';
import { Link } from 'react-router-dom';
import './Products.css'


function ProductsList() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const [status,setStatus] = useState(true);
    const shopNow=()=>{
        dispatch(fetchProducts())
        setStatus(false)
    }


  return (
    <div>
        {
        status?
            <div className='shopnow'>
                <div>
                    <h1>Welcome back </h1>
                    <img className='img1' src='https://static.vecteezy.com/system/resources/previews/002/459/314/large_2x/shopping-online-store-for-sale-mobile-ecommerce-3d-blue-background-shop-online-on-mobile-app-24-hours-shopping-cart-credit-card-minimal-store-online-device-3d-rendered-free-vector.jpg' alt='img'/>
                </div>
                <button className='btn' onClick={shopNow} >Shop Now</button>
            </div>
            :
            <div>
                {
                    state.product.isLoading===true ? 
                    <div className='loading-img'>
                        <img className='loading' src='https://png.pngtree.com/png-clipart/20220719/original/pngtree-loading-icon-vector-transparent-png-image_8367371.png' alt='img'/>
                    </div>
                    :
                    <div className='container'>
                        {
                            (state.product.data.products).map((each)=>(
                                <Link to={`/product/${each.id}`}  className=' item' key={each.id}>
                                    <h5>{each.title}</h5>
                                    <img className='p-i' src={each.image} alt='img'/>
                                    <p>Price: {each.price}</p>
                                </Link>
                            ))
                        }
                    </div>
                }
            </div>
        }     
    </div>
  )
}

export default ProductsList
