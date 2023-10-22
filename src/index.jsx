import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './manager/store/configureStore';
import { getProductsFromDatabase } from './manager/actions/productAction';
import { getBlogsFromDatabase } from './manager/actions/blogAction';

const mystore = configureStore();

const result = (
  <Provider store={mystore}>
      <App />
  </Provider>
)

ReactDOM.render(
   <div style={{"height":"100vh"}} className='d-flex justify-content-center align-items-center'>
<img src="https://gaming-workdo.myshopify.com/cdn/shop/files/286.gif?v=1670848128" alt="" />
</div>, 
document.getElementById('root'));

mystore.dispatch(getProductsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
});
mystore.dispatch(getBlogsFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById('root'));
})

