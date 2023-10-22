import { useSelector } from "react-redux";
import SingleCardTwo from "./SingleCardTwo";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/modules/pagination/pagination.min.css";
import { Pagination } from "swiper";
import "../../node_modules/swiper/swiper-bundle.min";
import { LangContext } from "../context/LangContext";
import { useContext } from "react";
function App() {
  const prState = useSelector((state) => state.pr);
  const [lang ] =  useContext(LangContext);

  return (
    <div className="bestgamingmain py-4">
      <Row className="bestgaming container">
        <Col md={3} sm={12}>
          <div className="leftpro">
          <Row className="lefptorow">
            <Col sm={6} lg={12}>
            <h1 className="text-light">
            {lang === "az" ? 'Best' : 'Ən yaxşı'} <br />
           <span> {lang === "az" ?' Pro Gaming ': 'pro oyun'}</span> <br />
            {lang === "az" ? 'Categories' : 'kateqoriyaları'}
            </h1>
            </Col>
            <Col sm={6} lg={12}>
            <div className="probtns">
              <button className="cartbtnpro btn ">
                <img
                  src="https://gaming-workdo.myshopify.com/cdn/shop/files/1_4e117171-0b63-4d80-b3fa-1ebc70c0f76e_18x17.png?v=1671615056"
                  alt=""
                />
                <p>

                {lang === "az" ? 'Consoles' : 'Konsollar'} 
                </p>
              </button>
              <button className="cartbtnpro btn ">
                <img
                  src="https://gaming-workdo.myshopify.com/cdn/shop/files/2_226ba59a-8c4d-48fd-9928-e32ed3555f5b_18x17.png?v=1671615074"
                  alt=""
                />
                <p>
                {lang === "az" ? 'Pc Cases' : 'Pc Keysləri'} 
                  
                </p>
              </button>
              <button className="cartbtnpro btn ">
                <img
                  src="https://gaming-workdo.myshopify.com/cdn/shop/files/3_ae3d1802-51fa-4ec7-9b73-1279de22395f_18x17.png?v=1671615083"
                  alt=""
                />
                <p>
                {lang === "az" ? 'Graphics Cards' : 'Qrafik Kartları'} 

                </p>
              </button>

            </div>
            </Col>
       
        
          </Row>
          </div>
        </Col>
        <Col md={8} sm={12}>
          <Row className="aaa">
          <Swiper
          slidesPerView={1}
          spaceBetween={10}
          modules={[Pagination]}
          // pagination={{ clickable: true }}
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
              slidesPerView: 2,
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
           {prState.slice(8,11).map((item) => (
            <SwiperSlide>
            
              <SingleCardTwo
                title={item.title}
                brand={item.brand}
                image={item.image}
                price={item.price}
                type={item.type}
                typeaz={item.typeaz}
                availability={item.availability}
                id={item.id}
              alldata={item}
                
              />
            </SwiperSlide>
            ))}

        </Swiper>
          </Row>
          <Row className="rightpro">
            {prState.slice(8,11).map((item) => (
              <SingleCardTwo
                title={item.title}
                brand={item.brand}
                image={item.image}
                typeaz={item.typeaz}
                price={item.price}
                type={item.type}
                availability={item.availability}
                id={item.id}
                alldata={item}

              />
            ))}
          <div>
            
          </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
