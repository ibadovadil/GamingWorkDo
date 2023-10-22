import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LangContext } from "../context/LangContext";

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

function SingleCardFour ({ title, price, color, availability, type,typeaz, brand }) {
  const [lang ] =  useContext(LangContext);
  const maxTitleLength = 30;
  const truncatedTitle = truncateText(title, maxTitleLength);
  return (
    <div className="card bestcardfour">
      <h5 className="card-title mt-2 card-name">{truncatedTitle}</h5>
      <h5 className="card-title card-type text-start ">{lang === "az" ? 'Type' : 'Tip'} 
      :
       {lang === "az" ? type : typeaz}</h5>
      <h5 className="card-title card-brand text-start my-5  ">
      {lang === "az" ? 'HyperX Dual Chamber Drivers for more distinction and less distortion. Signature Award-Winning HyperX comfort. Durable aluminum frame with an expanded headband. Detachable braided cable with convenient in-line audio control. Detachable noise cancellation microphone.' : 'Daha çox fərq və daha az təhrif üçün HyperX Dual Chamber Drivers. İmza Mükafatlı HyperX rahatlığı. Genişlənmiş baş bandı ilə davamlı alüminium çərçivə. Rahat in-line audio nəzarəti ilə ayrıla bilən örgülü kabel. Çıxarılan səs-küyün ləğvi mikrofonu.'}
        </h5>
      <div className="card-body d-flex justify-content-between align-items-end">
        <p className="card-text card-price text-light">
          {price} <sup>USD</sup>
        </p>
        <Link to={"/products/-NdtDa6yDDzX-oTkqKGf"}><button className="cartbtn btn text-light "> {lang === "az" ? 'Read More' : 'Ətraflı'}</button></Link>
      </div>
    </div>
  );
}

export default SingleCardFour;

