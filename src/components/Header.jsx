import React, { useContext } from "react";
import {  Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { LangContext } from "../context/LangContext";
const Header = () => {
  const [lang ] =  useContext(LangContext);

  return (
    <>
      <div className="mainheader">
        <div className="headerwrapper">
          <div className="wrap1">
            <img
              src="
            https://gaming-workdo.myshopify.com/cdn/shop/files/Half-bluthooth.png?v=1671440723"
              alt=""
            />
          </div>
          <div className="wrap2">
            <h1>
       
            {lang === "az" ?'Best' : 'Ən yaxşı'} <span> {lang === "az" ?'Pro Gaming' : 'Pro Oyun'}</span> <br />  {lang === "az" ?'Accessories' : 'Aksesuarları'}
            </h1>
            <p>
            {lang === "az" ?'Gaming accessories include gear such as headsets, extra controllers' : 'Oyun aksesuarlarına qulaqlıqlar, əlavə avadanlıqlar daxildir nəzarətçilər'} <br />
            {lang === "az" ?'charging stations, memory devices, carrying cases and much more. ' : 'şarj stansiyaları, yaddaş qurğuları, daşıma hallar və daha çox.'}

          
            </p>
            <Row className="btnrow">
              <Col sm={12} md={12} lg={6}>
                {/* <Link
                  to={"/products"}
                  className=" mt-2 btn btn-primary productbtn "
                >
                  
                  {lang === "az" ?' Show products' : 'Məhsullara bax'}
                </Link> */}
              </Col>
              <Col sm={12} md={12} lg={6}>
                {" "}
                {/* <Link
                  to={"/blogs"}
                  className=" mt-2 btn btn-primary productbtntwo "
                >
                  {lang === "az" ?' Show Blogs' : 'Bloqlara bax'}
                  
                </Link> */}
              </Col>
            </Row>
          </div>
          <div className="wrap3"></div>
          <div className="wrap4">
            <img
              src="//gaming-workdo.myshopify.com/cdn/shop/files/Half-bluthooth-right.png?v=1671440737"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
