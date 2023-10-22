
import database from '../../firebase/firebaseConfig';

export const addBlog = (blog)=>({
    type: "ADD_BLOG",
    blog
  });

export const addBlogToDatabase = (blogData={})=>{
  return (dispatch) => {
    const { image='', title='',titleaz='',date='',author='',text1='',text2='',text3='',text4='' ,textaz1='',textaz2='',textaz3='',textaz4=''  } = blogData;
    const blog = {image,title,titleaz,date,author,text1,text2,text3,text4,textaz1,textaz2,textaz3,textaz4};

    database.ref("blogs").push(blog).then((res) => {
        dispatch(addBlog({
            id: res.key,
            ...blog
        }))
    })
}
}

  export const editBlog =(id,update)=>({
    type:"EDIT_BLOG",
    id,
    update
  })



export const editBlogFromDatabase = (id, updates) => {
    return (dispatch) => {
        return database.ref(`blogs/${id}`).update(updates).then(() => {
            dispatch(editBlog(id,updates));
        })
    }
}
  
  
  export const deleteBlog =(id)=>({
    type:"REMOVE_BLOG",
    myid:id
  })




export const removeBlogFromDatabase = (id) => {
    return (dispatch) => {
        return database.ref(`blogs/${id}`).remove().then(() => {
            dispatch(deleteBlog(id));
        })
    }   
}



  export const getBlogs = (blogs) => ({
    type: "GET_BLOGS",
    blogs
})

export const getBlogsFromDatabase = () => {
    return (dispatch) => {
        return database.ref("blogs").once("value").then((snapshot) => {
            const blogs = [];

            snapshot.forEach((blog) => {
                blogs.push({
                    id: blog.key,
                    ...blog.val()
                })
            })

            dispatch(getBlogs(blogs));
        })
    }
}