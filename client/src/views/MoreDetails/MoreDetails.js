import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import  "./MoreDetails.css";

function MoreDetails() {

    const [product, setProduct] = useState({});
  
    const {_id} = useParams()
    const loadData = async () => {
        // const product = {
        //     image,
        //     title,
        //     description,
        //     price,
        //     brand
        // }
        
        const response = await axios.get(`/product/${_id}`);
        setProduct(response?.data?.data)

    }

    useEffect( () => {
    loadData()
    }, [])

    

  return (
    <>
    <div className='text-center'>
      <h1>more details</h1>
      <p>Product Dtails: {_id} </p>
      </div>
      <div className='moredetails-card'>
      <img className='img-mored' src={product?.image} />
      <p> {product?.title} </p>
      <p> {product?.description} </p>
      <p>RS ₹{product?.price} </p>
      <p> {product?.brand} </p>
    </div>
    </>
  )
}

export default MoreDetails
