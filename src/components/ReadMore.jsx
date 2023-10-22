import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Countdown from "react-countdown";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/modules/pagination/pagination.min.css";
import { Pagination } from "swiper";
import "../../node_modules/swiper/swiper-bundle.min";
import SwiperCore, { Autoplay } from "swiper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "react-use-cart";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";

const ReadMore = () => {
  const prState = useSelector((state) => state.pr);
  const { url } = useParams();
  const productdetails = prState.find((p) => p.id.toString() === url);
  SwiperCore.use([Pagination, Autoplay]);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const handleCheckout = (e) => {
    e.preventDefault()

    const isLogged = localStorage.getItem("active");
    navigate(isLogged ? "/checkoutt" : "/login")
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const [lang] = useContext(LangContext);

  const isAvailable = productdetails?.availability === "In Stock";
  const notify = () =>
    toast.success("Product Added Your Cart", {
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
    <>
      {isLoading ? (
        <div
          style={{ height: "100vh" }}
          className="d-flex justify-content-center align-items-center preloader"
        >
          <div>
            <img
              src="https://gaming-workdo.myshopify.com/cdn/shop/files/286.gif?v=1670848128"
              alt=""
            />
          </div>
        </div>
      ) : (
        <>
          <Navigation />
          <div className="productdetails mt-4">
            <Container>
              <Row>
                <Col lg={6} sm={12} md={12}>
                  <div className="left">
                    <Link className="back pb-4" to="/products">
                      <div className="arrow">
                        <ArrowBackIcon />
                      </div>
                      <span className="ms-2">
                      {lang === "az"
                            ? 'Back To Products'
                            : 'Məhsullara qayıt'}
                      </span>
                    </Link>
                    <div className="brand py-3">
                      <h1 className="me-3 brandcolor">
                        {productdetails.brand}
                      </h1>
                      
                    </div>
                    <div className="star py-2">
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#ffffff" }}
                      />
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#ffffff" }}
                      />
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#ffffff" }}
                      />
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#ffffff" }}
                      />
                      <i
                        className="fa-solid fa-star"
                        style={{ color: "#ffffff" }}
                      />
                    </div>
                    <div className="title py-3">{productdetails.title}</div>
                    <div className="type pb-3">
                    {lang === "az" ? 'Type' : 'Tip'}:
                      {lang === "az"
                            ? productdetails.type
                            : productdetails.typeaz}
                    </div>
                    <div className="clock ">
                      <i
                        className="fa-regular fa-clock me-2"
                        style={{ color: "#ffffff" }}
                      />
                      <Countdown
                        className="date"
                        date={Date.now() + 1000000300}
                      />
                    </div>
                    <div className="desc py-3">
                    {lang === "az"
                            ? productdetails.desc
                            : productdetails.descaz}</div>
                    <div className="price">
                      <h5 className="pe-5">
                        {productdetails.price} <sup>USD</sup>
                      </h5>
                      {isAvailable ? (
                        <h5 className="text-primary">
                          {lang === "az"
                            ? productdetails.availability
                            : productdetails.availabilityaz}
                        </h5>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="buttons py-3">
                      {isAvailable ? (
                        <>
                          <button
                            className="btn me-3"
                            onClick={() => {
                              addItem(productdetails);
                              notify();
                            }}
                          >
                            
                            {lang === "az"
                            ? 'Add To Cart'
                            : 'Səbətə at'}
                          </button>
                          <Link onClick={handleCheckout} to={"/checkoutt"} className="btn">
                          {lang === "az"
                            ? 'Buy It Now'
                            : 'Indi Al'}
                          </Link>
                        </>
                      ) : (
                        <button className="btn" disabled>
                          
                          {lang === "az"
                            ? 'Out of Stock'
                            : 'Stokda Yoxdur'}
                        </button>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={6} sm={12} md={12}>
                  <div className="right">
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
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 1,
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
                      <SwiperSlide>
                        <img src={productdetails.image} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={productdetails.imagetwo} alt="" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default ReadMore;
