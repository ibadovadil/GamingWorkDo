import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import SingleCardFour from "./SingleCardFour";
const Earphone = () => {
  const prState = useSelector((state) => state.pr);

  return (
    <div className="cloud py-5">
      <Container className="cloudcontainer">
        {/* <Row> */}
          {/* <Col  lg={6} sm={12} md={12} > */}
            <div className="cloudleft">
              <img
                src="https://gaming-workdo.myshopify.com/cdn/shop/files/double-bluthoth.png?v=1671594490"
                alt=""
              />
            </div>
          {/* </Col> */}
          {/* <Col  lg={6} sm={12} md={12} > */}
            <div className="cloudright">
              {prState.slice(4, 5).map((item) => (
                <SingleCardFour
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
            </div>
          {/* </Col> */}
        {/* </Row> */}
      </Container>
    </div>
  );
};

export default Earphone;
