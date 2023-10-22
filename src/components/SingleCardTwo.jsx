import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { LangContext } from "../context/LangContext";
function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

function SingleCardTwo ({ title, price, color, image, availability, type, typeaz, brand , id,alldata}) {
  const [lang ] =  useContext(LangContext);
  const maxTitleLength = 17;
  const truncatedTitle = truncateText(title, maxTitleLength);
  const { addItem } = useCart();
  const notify = () => toast.success('Product Added', {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  return (
    <Link className="card bestcardtwo">
      <Link to={`/products/${id}`} >
      <h5 className="card-title mt-2 card-name">{truncatedTitle}</h5>
      <h5 className="card-title card-type text-start ">{lang === "az" ? 'Type' : 'Tip'} 
      :
       {lang === "az" ? type : typeaz}</h5>
      <h5 className="card-title card-brand text-start ">{brand}</h5>
        <img  src={image} className="card-img-top mt-3" alt="..." />
      </Link>
      <div className="card-body d-flex justify-content-between align-items-end">
        <p className="card-text card-price text-dark ">
          {price} <sup>USD</sup> {" "}
        </p>
        <button className="cartbtn btn ms-1"  onClick={() => { notify(addItem(alldata)) }}>{lang === "az" ? 'Add To Cart' : 'Səbətə at'}</button>
      </div>
    </Link>
  );
}

export default SingleCardTwo;

