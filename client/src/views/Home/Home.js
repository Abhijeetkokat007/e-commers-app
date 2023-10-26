import React, { useState, useEffect } from 'react';
// import {useParams} from 'react-router-dom';
import axios from 'axios';
import EditProduct from './../EditProduct/EditProduct';

import './Home.css';

function Home() {

  const [data, setData] = useState([])

  const loadData = async () => {
    const response = await axios.get("/products")

    setData(response?.data?.data);

  }

  const DeleteProduct = async (_id) => {
    const response = await axios.delete(`/product/${_id}`)
    alert(response?.data?.message)
    loadData()
  }


  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <div>
        <h1 className='text-center'>Home</h1>
      </div>
      <div className='d-flex'>
        {

          data?.map((student, i) => {
            const { _id, image, title, description, price, brand } = student;

            return (
              <div key={i} className='card-data'>
                <img src={image} className='img-data' />
                <h2>{title}</h2>
                <p className='des-card'>  {description} </p>

                <button className='delet-card' onClick={() => {
                  DeleteProduct(_id)
                }}>❌</button>


                <button className=' update-card' onClick={() => {
                  window.open(`/EditProduct/${_id}`, `_blank`)
                }} > 🖋️</button>


                <p className='price'>RS ₹{price}  </p>

                <span className='brand-card'> {brand}</span>


                <button className='btn-more' onClick={() => {
                  window.open(`/MoreDetails/${_id}`, `_blank`)
                }}> More Details ➡️</button>

                
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Home
