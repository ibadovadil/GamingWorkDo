import React from 'react'
import ProductForm from '../ProductFrom'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addProductToDatabase } from '../../../manager/actions/productAction'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <Container>
        <h1 className='text-center my-3 text-light'>Add Product</h1>
        <ProductForm sendData={(i)=>{
                dispatch(addProductToDatabase(i));
                navigate('/admin')
        }}/>
    </Container>
  )
}

export default AddProduct