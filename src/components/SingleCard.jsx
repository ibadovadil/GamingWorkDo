import React, { useContext } from "react";
import { LangContext } from "../context/LangContext";
import { Link } from "react-router-dom";

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

function SingleCard({ title, price,image,type,typeaz, brand,id,availability }) {
  const [lang] =  useContext(LangContext);

  const maxTitleLength = 17;
  const truncatedTitle = truncateText(title, maxTitleLength);
  return (
    <Link to={`/products/${id}`}  className="card bestcard">
      <h5 className="card-title mt-2 card-name">{truncatedTitle}</h5>
      <h5 className="card-title card-type text-start ">TYPE : {lang === "az" ? typeaz : type}</h5>

      <h5 className="card-title card-brand text-start ">{brand}</h5>
      <img src={image} className="card-img-top mt-3" alt="..." />
      <div className="card-body d-flex justify-content-between align-items-end">
        <p className="card-text card-price">
          {price} <sup>USD</sup>
        </p>
        <button className="cartbtn btn "><p>Add To Cart</p></button>
      </div>
    </Link>
  );
}

export default SingleCard;

