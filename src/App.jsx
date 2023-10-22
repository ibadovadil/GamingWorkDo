import React, { useContext } from "react";
import Home from "./pages/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";

import AddProduct from "./pages/admin/update/AddProduct";
import EditProduct from "./pages/admin/update/EditProduct";
import Dashboard from "./pages/admin/Dashbaord";

import { ModeContext, ModeProvider } from "./context/ModeContext";
import { LangProvider } from "./context/LangContext";
import "./sass/style.scss";
import "./sass/media.scss";
import { CartProvider } from "react-use-cart";
import CartPage from "./pages/CartPage";
import Checkoutt from "./components/Checkoutt";
import Login from "./pages/Login";
import BlogDashboard from "./pages/admin/BlogDashboard";
import AddBlog from "./pages/admin/update/AddBlog";
import EditBlog from "./pages/admin/update/EditBlog";
import Blogs from "./pages/Blogs";
import ReadMore from "./components/ReadMore";
import Wishlist from "./pages/Wishlist";
import { WishlistProvider } from "react-use-wishlist";
import BlogDetalis from "./components/BlogDetails";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import Registration from "./pages/Registration";
import CheckoutStepTwo from "./components/CheckoutStepTwo";

const Main = () => {
  const [mode] = useContext(ModeContext);
  return (
    <div className={mode}>
      <div className="main-con">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:url" element={<ReadMore />}></Route>
          <Route path="/blogs/:url" element={<BlogDetalis />}></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
          <Route path="/admin/add" element={<AddProduct />}></Route>
          <Route path="/admin/edit/:id" element={<EditProduct />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/blogadmin" element={<BlogDashboard />}></Route>
          <Route path="/blogadmin/add" element={<AddBlog />}></Route>
          <Route path="/blogadmin/edit/:id" element={<EditBlog />}></Route>
          <Route path="/checkoutt" element={<Checkoutt />}></Route>
          <Route path="/checkoutTwo" element={<CheckoutStepTwo />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/signup" element={<Signup />}></Route> */}
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/faqpage" element={<FaqPage />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
          <LangProvider>
            <ModeProvider>
              <Main />
            </ModeProvider>
          </LangProvider>
        </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  );
};

export default App;
