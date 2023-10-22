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

function SingleCardThree ({ title, price, color, availability, type,typeaz, brand }) {
  const [lang ] =  useContext(LangContext);
  const maxTitleLength = 17;
  const truncatedTitle = truncateText(title, maxTitleLength);
  return (
    <div className="card bestcardthree">
      <h5 className="card-title mt-2 card-name">{truncatedTitle}</h5>
      <h5 className="card-title card-type text-start ">{lang === "az" ? 'Type' : 'Tip'} 
      :
       {lang === "az" ? type : typeaz}</h5>
      <h5 className="card-title card-brand text-start my-5 "><span>
      {lang === "az" ? 'Multiple connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly with ease. Preloaded with Windows 10 64-bit OS for enhanced productivity and multitasking.' : 'HDMI, USB portları və RGB ventilyatorları da daxil olmaqla çoxsaylı qoşulma variantları müxtəlif ətraf qurğuları asanlıqla birləşdirməyə imkan verir. Wi-Fi Hazır – İnternetə asanlıqla simsiz qoşulun. Təkmil məhsuldarlıq və çoxlu tapşırıqlar üçün Windows 10 64-bit ƏS ilə əvvəlcədən yüklənmişdir.'} 
      </span></h5>
      <div className="card-body d-flex justify-content-between align-items-end">
        <p className="card-text card-price text-light">
          {price} <sup>USD</sup>
        </p>
        <Link to={"/products/-NdtJgM-P0mYQcDmWkBt"}><button className="cartbtn btn ">{lang === "az" ? 'Read More' : 'Ətraflı'}</button></Link>
      </div>
    </div>
  );
}

export default SingleCardThree;

