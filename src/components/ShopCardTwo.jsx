
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import 'react-toastify/dist/ReactToastify.css';
import { useWishlist } from "react-use-wishlist";
import Heart from "react-animated-heart";
import { LangContext } from "../context/LangContext";

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

function ShopCardTwo({ title, price, image, type, typeaz, brand, id, alldata }) {
  const [lang ] =  useContext(LangContext);

  const maxTitleLength = 17;
  const truncatedTitle = truncateText(title, maxTitleLength);
  const { addItem } = useCart();
  const [isClick, setClick] = useState(false);
  const { addWishlistItem, removeWishlistItem } = useWishlist();
  

  const handleAddToWishlist = () => {
    if (isClick) {
      removeWishlistItem(alldata.id); 
    } else {
      addWishlistItem(alldata); 
    }
    setClick(!isClick); 
;
  };
  
 
  return (
    <div className="card shopcard">
      <h5 className="card-title mt-2 card-name">{truncatedTitle}</h5>
      <h5 className="card-title card-type text-start ">{lang === "az" ? 'Type' : 'Tip'} 
      :
       {lang === "az" ? type : typeaz}</h5>
      <h5 className="card-title card-brand text-start">{brand}</h5>
      <img src={image} className="card-img-top mt-3" alt="..." />
      <div className="card-body d-flex justify-content-between align-items-end">
        <p className="card-text card-price">
          {price} <sup>USD</sup>{" "}
        </p>
      </div>
      <div className="hover-effect">
        <div>
          <Link to={`/products/${id}`} className="button mx-2">
            <span className="button-text">{lang === "az" ? 'Read More' : 'Ətraflı'}</span>
            <div className="fill-container" />
          </Link>
          <button className="button" onClick={() =>  addItem(alldata) }>
            <span className="button-text" >
            {lang === "az" ? 'Add To Cart' : 'Səbətə at'}</span>
            <div className="fill-container" />
          </button>
            <div className="wishlistdiv">
            <Heart isClick={isClick} onClick={() => { handleAddToWishlist(); }} className="button-text"></Heart>
            <div className="fill-container" />
            </div>
        </div>
      </div>
     
    </div>
  );
}

export default ShopCardTwo;
