import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/modules/pagination/pagination.min.css";
import {  Pagination } from "swiper";
import "../../node_modules/swiper/swiper-bundle.min";
import "../../node_modules/swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay } from "swiper";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";
SwiperCore.use([Pagination, Autoplay]);
const Testimonials = () => {
  const [lang] = useContext(LangContext);

  return (
    <div className="comments py-5">
      <Container>
        <div className="top py-4">
          <h1>

          {lang === "az" ? "Testimonials" : "Rəylər"}
          </h1>
        </div>
        <div className="bottom py-4">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            modules={[Pagination]}
            breakpoints={{
                100:{
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
              640: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            
            }}
            className="mySwiper"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="commetcard">
              <div className="left">
                <img
                  src="https://gaming-workdo.myshopify.com/cdn/shop/files/testi-1.png?v=1670904860"
                  alt=""
                />
              </div>
              <div className="right">
                <div className="top">
                  <h1>
          {lang === "az" ? "Gamers" : "Oyunçular"}

                  </h1>
                </div>
                <div className="middle">
                  <p>
          {lang === "az" ? "Gaming has had a positive impact on my life in so many ways, and I'm so glad that I'm able to share my love of gaming with others.mers" : "Oyun həyatıma bir çox cəhətdən müsbət təsir etdi, və oyuna olan sevgimi paylaşa bildiyim üçün çox şadam başqaları ilə."}

                  </p>
                </div>
                <div className="bottom">
                  <div className="bottomone">
                  <img
                    src="https://gaming-workdo.myshopify.com/cdn/shop/files/client-img.png?v=1670904971"
                    alt=""
                  />
                  <p>David Rodriguez,</p>
                  </div>
              
                 <div className="bottomtwo">
                 <img
                    src="https://gaming-workdo.myshopify.com/cdn/shop/files/star.png?v=1670905123"
                    alt="" width={60} height={10}
                  />
                  <p>4.5/5.0</p>
                 </div>
                </div>
              </div>
            </SwiperSlide>{" "}

          </Swiper>
        </div>
      </Container>

    </div>
  );
};

export default Testimonials;
