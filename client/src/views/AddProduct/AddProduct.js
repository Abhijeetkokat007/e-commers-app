import axios from 'axios';
import React, {useState, useEffect} from 'react'
import './AddProduct.css';

function AddProduct() {

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] =useState('');
    const [brand, SetBrand] = useState('');

    const addProduct = async () =>{
       
        const product = {
            image,
            title,
            description,
            price,
            brand
        }

        const response = await axios.post("/product", product);

        alert(response.data.message)

        setImage('')
        setTitle('')
        setDescription('')
        setPrice('')
        SetBrand('')
    }

  return (
   <>
    <div className='div-form'>
     <h1>
     AddProduct
     </h1>
    

    
<form className='div-form'>
    <div className='add-page'>
    <input type='text'
    className='box-input'
    placeholder='enter your product image URL'
    value={image}
    onChange={(e)=>{
        setImage(e.target.value);
    }}/>

    <input type='text'
    className='box-input'
    placeholder='enter your product title'
    value={title}
    onChange={(e)=>{
        setTitle(e.target.value);
    }}/>

<input type='text'
    className='box-input'
    placeholder='enter your product description'
    value={description}
    onChange={(e)=>{
        setDescription(e.target.value);
    }}/>

<input type='text'
    className='box-input'
    placeholder='enter your product price'
    value={price}
    onChange={(e)=>{
        setPrice(e.target.value);
    }}/>

<input type='text'
    className='box-input'
    placeholder='enter your product brand'
    value={brand}
    onChange={(e)=>{
        SetBrand(e.target.value);
    }}/>

<button className='box-input btn-add' type='button' onClick={ addProduct}> Add product </button>
</div>
</form>
</div>

   </>
  )
}

export default AddProduct
