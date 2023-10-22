import React from "react";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LangContext } from "../context/LangContext";

const About = () => {
  const [lang] = useContext(LangContext);

  return (
    <div className="about py-4">
      <Container>
        <div className="top">
          <h1>{lang === "az" ? "About our shop" : "Mağazamız haqqında"}</h1>
          <p>
            {lang === "az"
              ? "Gaming can help to improve cognitive skills such as problem-solving, memory, and attention."
              : "Oyun problem həll etmə, yaddaş və diqqət kimi idrak bacarıqlarını inkişaf etdirməyə kömək edə bilər."}
          </p>
        </div>
        <div className="bottom py-4">
          <Row>
            <Col sm={12} md={3} lg={3}>
              <div className="aboutcard py-4 px-3">
                <h1>01</h1>
                <h3>{lang === "az" ? "Gift Boxes" : "Hədiyyə Qutuları"}</h3>
                <p>
                  {lang === "az"
                    ? "Finished products products and gift wrapping"
                    : "Hazır məhsullar və hədiyyələrin qablaşdırılması"}
                </p>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className="aboutcard  py-4 px-3">
                <h1>02</h1>
                <h3>{lang === "az" ? "Promotions" : "Promosyonlar"}</h3>
                <p>
                  {lang === "az"
                    ? "Large promotions with numerous discounts"
                    : "Çoxlu endirimlərlə böyük promosyonlar"}
                </p>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className="aboutcard aboutcard2   py-4 px-3">
                <h1>03</h1>
                <h3>{lang === "az" ? "Shipping" : "Çatdırılma"}</h3>
                <p>
                  {lang === "az"
                    ? " Free shipping on any order from $ 150"
                    : "150 dollardan başlayan istənilən sifarişdə pulsuz çatdırılma"}
                </p>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className="aboutcard  aboutcard1 py-4 px-3">
                <h1>04</h1>
                <h3> {lang === "az" ? "Quality" : "Keyfiyyət"}</h3>
                <p>
                  {lang === "az"
                    ? "All products are made by engineers from USA"
                    : "Bütün məhsullar ABŞ-dan olan mühəndislər tərəfindən hazırlanır"}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
