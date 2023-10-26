import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './EditProduct.css';


function EditProduct() {

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] =useState('');
    const [brand, SetBrand] = useState('');

    const {_id} = useParams();
    const loadProduct = async () =>{
        const response = await axios.get(`/product/${_id}`)

        const {image, title, description, price, brand} = response?.data?.data

        setImage(image)
        setTitle(title)
        setDescription(description)
        setPrice(price)
        SetBrand(brand)


    }

    useEffect(()=>{
        loadProduct()
    }, [])

    const editProduct = async () =>{
        const edit = {
            image,
            title,
            description,
            price,
            brand 
        }
  
        const response = await axios.put(`/product/${_id}`, edit);

        

        // alert(response?.data?.message)

        // setImage('')
        // setTitle('')
        // setDescription('')
        // setPrice('')
        // SetBrand('')
    }

  return (
   <>
    <div className='div-form'>
     <h1>
    Update Product
     </h1>
    

    
<form className='div-form'>
    <div  className='add-page'>
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

<button className='box-input btn-add' type='button' onClick={ editProduct()}>  Edit Product </button>
</div>
</form>
</div>
   </>
  )
}

export default EditProduct
