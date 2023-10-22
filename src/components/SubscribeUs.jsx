import Aos from "aos";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LangContext } from "../context/LangContext";

const SubscribeUs = () => {
  const [lang] =  useContext(LangContext);

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="subscribe py-5">
      <Row className="container">
        <Col lg={4} sm={12}> 
          <div className="subleft " >
            <div className="box">
            {lang === "az" ? 'Subscribe Us' : 'Abunə Olun'} 
            </div>
            <div className="subtext">
              <h1>           {lang === "az" ? 'Subscribe newsletter and ' : 'Bülletenə abunə olun və'} 
 <span>
 {lang === "az" ? 'get -20% off ' : '-20% endirim əldə edin'} </span></h1>
              <p>
                
                {lang === "az" ? 'Almost three-quarters of dedicated PC gamers say their main motivation to upgrade is improving gaming experiences. ' : 'Xüsusi PC oyunçularının demək olar ki, dörddə üçü əsas şeylərini deyir təkmilləşdirmək üçün motivasiya oyun təcrübələrini yaxşılaşdırmaqdır.'}
              </p>
            </div>
            <Link to={"/login"} className="subbtn text-light">
            
            {lang === "az" ? 'Subscribe ' : 'Abunə ol'}</Link>
          </div>
        </Col>
        <Col   lg={8} sm={12}>
          <div className="subsright">
            <img
              src="https://gaming-workdo.myshopify.com/cdn/shop/files/subscribe-img.png?v=1670903810"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SubscribeUs;

