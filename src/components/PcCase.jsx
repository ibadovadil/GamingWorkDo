// import { Button } from "bootstrap";
import React from "react";
import { useSelector } from "react-redux";
import SingleCardThree from "./SingleCardThree";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";

const PcCase = () => {
  const prState = useSelector((state) => state.pr);
  const [lang] =  useContext(LangContext);


  return (
    <div className="case">
      
      <div className="casetop">
        <h1>

        {lang === "az" ? 'Best Pro Gaming Products ' : 'Ən yaxşı Pro Oyun Məhsulları'}
        </h1>
        <p className="casetext" >
        {lang === "az" ? 'More powerful hardware not only betters their experiences in games ' : 'Daha güclü təchizat təkcə onların oyunlardakı təcrübələrini yaxşılaşdırmır'}

            <br />
        {lang === "az" ? ' they are currently playing, but it also gives many players access to titles' : 'onlar hazırda oynayırlar, lakin bu, həm də bir çox oyunçuya titullara giriş imkanı verir'}
       <br /> {lang === "az" ? ' with more demanding specifications. ' : 'daha tələbkar spesifikasiyalarla.'}
        </p>
        <Link to="/products">  <button className="btnraptor" onClick={() => {
                                      window.scroll({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                      });
                                      }}> {lang === "az" ? 'Show Products ' : 'Məhsullar'}</button></Link>
      </div>
      <Row className="casebottom">
      <Col className="casebottomone">
      <img
          width={511}
          src="
                https://gaming-workdo.myshopify.com/cdn/shop/files/product-cpu.png?v=1671539253"
          alt=""
        />
      </Col>
        <Col className="casebottomtwo">
        {prState.slice(22, 23).map((item) => (
          <SingleCardThree
            key={item.id}
            title={item.title}
            brand={item.brand}
            image={item.image}
            price={item.price}
            type={item.type}
            typeaz={item.typeaz}
            availability={item.availability}
          />
        ))}
        </Col>
        <Col className="casebottomtwo">
        <img
          width={502}
          src="https://gaming-workdo.myshopify.com/cdn/shop/files/double.cpu.png?v=1671539287"
          alt=""
        />
        </Col>
      </Row>
    </div>
  );
};

export default PcCase;
