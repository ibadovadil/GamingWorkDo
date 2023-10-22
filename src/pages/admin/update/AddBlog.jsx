import React from 'react'
import BlogForm from '../BlogForm'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addBlogToDatabase} from '../../../manager/actions/blogAction'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <Container>
        <h1 className='text-center my-3 text-light '>Add Blog</h1>
        <BlogForm sendData={(i)=>{
                dispatch(addBlogToDatabase(i));
                navigate('/blogadmin')
        }}/>
    </Container>
  )
}

export default AddBlog