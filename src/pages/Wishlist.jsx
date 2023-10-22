import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import Navigation from "../components/Navigation";
import { LangContext } from "../context/LangContext";

function Wishlist() {
  const [lang] =  useContext(LangContext);
  const { isWishlistEmpty, items, removeWishlistItem } =
    useWishlist();
  const { addItem } = useCart();

  if (isWishlistEmpty)
    return <h1 className="text-center text-light my-5">
    {lang === "az" ?'Your wishlist is empty' : 'İstək siyahınız boşdur'}
    </h1>;

  return (
    <div className="wishcard">
      <Navigation />
      <h1 className="text-center text-light   py-4">
      {lang === "az" ?'Your Wishlist' : 'İstək siyahısı'}
         {/* ({totalWishlistItems}) */}
      </h1>
      <Container>
        <table className="table  table-bordered tablewish table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">
              {lang === "az" ?'Product Image' : 'Məhsul Təsviri'}
              </th>
              <th scope="col">
              {lang === "az" ?'Product Title' : 'Məhsul Adı'}

              </th>
              <th scope="col">
              {lang === "az" ?'Product Price' : 'Məhsul Qiyməti'}
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} width={80} alt="" />
                </td>
                <td>{item.title}</td>
                <td>{item.price} <sup>USD</sup> </td>
                <td className="btntd">
                  <Row>
                    <Col className="mt-1" sm={12} lg={6} md={6}>
                      <button
                        className="button wishbtn"
                        onClick={() => {
                          addItem(item);
                        }}
                      >
                        <span className="button-text ">{lang === "az" ?'Add To Cart' : 'Səbətə At'}</span>
                      </button>
                    </Col>
                    <Col className="mt-1" sm={12} lg={6} md={6}>
                      <button
                        onClick={() => removeWishlistItem(item.id)}
                        class="noselect "
                      >
                        <span class="text">{lang === "az" ?'Delete' : 'Sil'}</span>
                        <span class="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                          </svg>
                        </span>
                      </button>
                    </Col>
                  </Row>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default Wishlist;
