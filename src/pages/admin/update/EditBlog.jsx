import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editBlogFromDatabase } from '../../../manager/actions/blogAction'
import BlogForm from '../BlogForm'

const EditBlog = () => {
    const {id} = useParams();
    const brState = useSelector((state) => state.br);
    const selectblog = brState.find(i=>i.id.toString() === id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  return (
    <Container>
        <h1 className='text-center my-3 text-light'>Edit Product</h1>
        <BlogForm editblog={selectblog} sendData={(i)=>{
            dispatch(editBlogFromDatabase(selectblog.id,i))   
            navigate('/blogadmin')

        }}/>
    </Container>
  )
}

export default EditBlog
