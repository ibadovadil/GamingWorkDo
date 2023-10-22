import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import Navigation from "../components/Navigation";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";

const CartPage = () => {
  const [lang ] =  useContext(LangContext);
  const { items } = useCart();
  const users = localStorage.getItem("users")
  const userlogin = JSON.parse(users);
  const navigate = useNavigate();
  const handleCheckout = (e) => {
    e.preventDefault()

    const isLogged = localStorage.getItem("active");
    navigate(isLogged ? "/checkoutt" : "/login")
  }
  const { updateItemQuantity, removeItem, isEmpty, cartTotal, emptyCart } =
    useCart();
  // const handleButtonClick = () => {
  //   document.documentElement.classList.toggle("checked-out");
  // };
  if (isEmpty)
    return <h1 className="text-center text-light my-5">{lang === "az" ?'Your cart is empty ': 'Sizin səbətiniz boşdur'}</h1>;
  return (
    <div className="cartpage">
      <Container>
        <h1 className="px-5 py-5 text-center text-light"> 
        {lang === "az" ?'Your Cart' : 'Səbət'}

        </h1>
        <Row>
          <Col lg={9}>
            <table className=" carttable table table-hover">
              <thead>
                <tr>
                  <th scope="col">{lang === "az" ?'İmage ': 'Təsvir'}</th>
                  <th scope="col"> {lang === "az" ?'Title ': 'Ad'}</th>
                  <th scope="col"> {lang === "az" ?'Price ': 'Qiymət'}</th>
                  <th scope="col">{lang === "az" ?'Quantity ': 'Say'}</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, count) => (
                  <tr>
                    <td>
                      <img src={item.image} width={70} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>
                      {item.price * item.quantity} <sup >USD</sup>
                    </td>
                    <td>
                      <div className="inc">
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="decrement-button"
                        >
                          -
                        </button>
                        <span className="px-1 fs-5">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          className="increment-button"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <i
                        onClick={() => removeItem(item.id)}
                        className=" fs-5 fa-solid fa-trash"
                        style={{ color: "#ff0000" }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
          <Col lg={3}>
            <ul className="list-group">
              <li className="list-group-item active fs-2">{lang === "az" ?'Subtotal ': 'Yekun'}</li>
              <li className="list-group-item">
                <h1>
                  {cartTotal} <sup className="fs-4">USD</sup>
                </h1>
              </li>
              <li className="list-group-item d-flex ">
                <div className="deletebutton">
                  <button
                    onClick={() => {
                      emptyCart();
                    }}
                    className="noselect"
                  >
                    <span className="text">{lang === "az" ?'Delete all ': 'Sil'}</span>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                      </svg>
                    </span>
                  </button>
                </div>
                <Link onClick={handleCheckout} className="checkbtn mx-4" to={"/checkoutt"}>
                  <button data-hover="Checkout">
                    <div>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </button>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartPage;
