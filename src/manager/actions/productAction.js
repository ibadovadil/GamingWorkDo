import database from '../../firebase/firebaseConfig';

export const addProduct = (product)=>({
    type: "ADD_PRODUCT",
    product
  });

export const addProductToDatabase = (productData={})=>{
  return (dispatch) => {
    const { image='', imagetwo ='',title='',price='',type='',typeaz='',  brand='', availability='', availabilityaz='',desc='',descaz=''  } = productData;
    const product = {image,imagetwo,title,price,type,typeaz,brand,availability,availabilityaz,desc,descaz};

    database.ref("products").push(product).then((res) => {
        dispatch(addProduct({
            id: res.key,
            ...product
        }))
    })
}
}

  export const editProduct =(id,update)=>({
    type:"EDIT_PRODUCT",
    id,
    update
  })



export const editProductFromDatabase = (id, updates) => {
    return (dispatch) => {
        return database.ref(`products/${id}`).update(updates).then(() => {
            dispatch(editProduct(id,updates));
        })
    }
}
  
  
  export const deleteProduct =(id)=>({
    type:"REMOVE_PRODUCT",
    id:id
  })




export const removeProductFromDatabase = (id) => {
    return (dispatch) => {
        return database.ref(`products/${id}`).remove().then(() => {
            dispatch(deleteProduct(id));
        })
    }   
}



  export const getProducts = (products) => ({
    type: "GET_PRODUCTS",
    products
})

export const getProductsFromDatabase = () => {
    return (dispatch) => {
        return database.ref("products").once("value").then((snapshot) => {
            const products = [];

            snapshot.forEach((product) => {
                products.push({
                    id: product.key,
                    ...product.val()
                })
            })

            dispatch(getProducts(products));
        })
        
    }
}