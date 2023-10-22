

import React from 'react'
import ProductForm from '../ProductFrom'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editProductFromDatabase } from '../../../manager/actions/productAction'

const EditProduct = () => {
    const {id} = useParams();
    const prState = useSelector((state) => state.pr);
    const selectproduct = prState.find(i=>i.id.toString() === id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  return (
    <Container>
        <h1 className='text-center my-3 text-light'>Edit Product</h1>
        <ProductForm editproduct={selectproduct} sendData={(i)=>{
            dispatch(editProductFromDatabase(selectproduct.id,i))   
            navigate('/admin')

        }}/>
    </Container>
  )
}

export default EditProduct