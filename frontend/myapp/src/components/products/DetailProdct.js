import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Nav from '../dashboard/Nav'

function DetailProdct() {
  const [prdt,setPrdt]=useState()
  const { id } = useParams()
  const fetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
      setPrdt(response.data)

  };
  useEffect(() => {
      fetchProducts();
    }, []);
 

  return (
    <div>
      <Nav />
      <div>
          <img className='img-div' src={prdt.image} alt='img'/>
          <p>{prdt.title}</p>
          <p>{prdt.price}</p>                  
      </div>
    </div>
  )
}

export default DetailProdct
