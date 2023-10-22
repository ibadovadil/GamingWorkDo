import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/modules/pagination/pagination.min.css";
import { Pagination } from "swiper";
import "../../node_modules/swiper/swiper-bundle.min";
import SwiperCore, { Autoplay } from "swiper"; // Import Autoplay module
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import ShopCardTwo from "./ShopCardTwo";
const CheckoutStepTwo = () => {

    SwiperCore.use([Pagination, Autoplay]); // Initialize Swiper with Pagination and Autoplay modules

  const prState = useSelector((state) => state.pr);

  const [lang] =  useContext(LangContext);

  return (
    <div style={{minHeight:"100vh"}}>
    <div className="text-center text-light" style={{fontSize:"30px"}}>Your order is complete 
            <br />
        <span className="text-primary" style={{fontSize:"10px"}}>Your reciept number : 72f11n926b</span>
     <br /> <Link to={"/"} className="btn btn-outline-primary">Go To Home</Link>
        
    </div>

    <h1 className="text-center text-light pt-4 ">Recommend Products </h1>
    <div className="bestswiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
          className="mySwiper"
          loop={true} 
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false, 
          }}
        >
          {prState.slice(0, 15).map((item) => (
            <SwiperSlide>
              <ShopCardTwo
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              color={item.color}
              image={item.image}
              availability={item.availability}
              type={item.type}
              typeaz={item.typeaz}
              brand={item.brand}
              alldata={item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>{" "}

    </div>
    
  )
}

export default CheckoutStepTwo