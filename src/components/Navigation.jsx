
import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { LangContext } from "../context/LangContext";
import { ModeContext } from "../context/ModeContext";
import Modal from "react-bootstrap/Modal";

const Navigation = () => {
  const { totalItems } = useCart();
  const [show, setShow] = useState(false);
  const [mode, setMode] = useContext(ModeContext);
  const [lang, setLang] = useContext(LangContext);
  const [query, setQuery] = useState(null);
  const storedUsers = localStorage.getItem("users");
  const userData = JSON.parse(storedUsers);
  const navigate = useNavigate();

  const prState = useSelector((state) => state.pr);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".nav");
      const bottomNav = document.querySelector(".bottom_nav");
      if (window.scrollY > 100) {
        bottomNav.style.display = "none";
        navbar.classList.add("scrolled");
      } else {
        bottomNav.style.display = "block";
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("active");
    navigate("/login");
  };

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="nav ">
      <div className="wrapper">
        <div className="top_nav">
          <div className="left">
            <div className="logo">
            <Link to={"/"}>
            <img
                src="https://gaming-workdo.myshopify.com/cdn/shop/files/logo_aceeaa59-f6d4-423f-86f0-8c025cf33812.png?v=1671601485"
                alt=""
              />
            </Link>
            </div>
          </div>
          <div classname="offcanvas " id="offcanvasnoned" style={{display:"none"}}>
  <div className="btn my-3 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa-solid fa-bars" style={{color: '#ededed'}} /></div>
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header">
      <h5 id="offcanvasRightLabel" className="ms-4">  {localStorage.getItem("active") === "user@user.gmail.com" ? (
            <>
              <div className="user text-light">{localStorage.getItem("name")}</div>
              <span onClick={handleLogout} className="mx-2 text-light">
                <div class="sign">
           <i className="fa-solid fa-arrow-right-from-bracket" style={{color: '#ffffff'}} />

                </div>

              </span>
            </>
          ) : localStorage.getItem("active") === "admin@admin" ? (
            <>
            
              <Link to={"/admin"} className=" btn btn-outline-danger">
                Admin
              </Link>
              <span onClick={handleLogout} class="BTN">
                <div class="sign">
                  <svg viewBox="0 0 512 512">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>

                <div class="text-out">Logout</div>
              </span>
            </>
          ) : (
            <Link to={"/login"} className="btn">
              <span className="">
              <i
                      className="fa-regular fa-user fs-5"
                      style={{ color: "#ffffff" }}
                    />
              </span>
            </Link>
          )}</h5>
<div type="button" classname="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
<i className="fa-solid fa-xmark fs-4" style={{color: '#c20000'}} />

</div>

    </div>
    <div className="offcanvas-body">
    <ul>
               <li className="mx-2">
              
              </li>
              
              <li className="drp">
                <li className="nav-item">
               
                </li>
              </li>

             

              <li className="">
               <Link to={"/wishlist"}>
             Wishlist :  <i
                  className="fa-regular fa-heart fs-5"
                  style={{ color: "#e6e6e6" }}
                />
               </Link>
              </li>
            
              <li>
                <Link
                  type="button"
                  to={"/cart"}
                  className="btn  position-relative"
                >
                Cart :  <i
                    className="fa-solid fa-cart-shopping"
                    style={{ color: "#ffffff" }}
                  />

                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
              
              <li className="">
             Search :   <i
                  onClick={() => setShow(true)}
                  className="fa-solid fa-magnifying-glass fs-5"
                  style={{ color: "#ffffff" }}
                />

                <Modal
                  style={{"zIndex":"10"}}
                  className="modalclass"
                  show={show}
                  onHide={() => setShow(false)}
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                      Search
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form class="input-group mb-3">
                      <input
                        onChange={(e) => setQuery(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Search Product"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                    </form>
                    <ul className="list-group">
                      {prState
                        .filter((p) => p.title.toLowerCase().includes(query))
                        .map((item) => (
                          <Link to={`/products/${item.id}`}>
                            <li
                              key={item.id}
                              id={item.id}
                              className="list-group-item d-flex justify-content-between"
                            >
                              {item.title}
                              <img src={item.image} width={80} alt="" />
                            </li>
                          </Link>
                        ))}
                    </ul>
                  </Modal.Body>
                </Modal>
              </li>
             
            </ul>
            <ul>
            <div className="dropdown">
                    <button className="dropbtn">
                  Settings :    <i
                        className="fa-solid fa-gear"
                        style={{ color: "#f2f2f2" }}
                      />
                      
                    </button>
                    <div className="dropdown-content">
                      <ul className="d-flex flex-column">
                        
                        <li className="language me-3">
                          {" "}
                          {lang === "az" ? 'Language ' : 'Dil'}
                          <button
                            onClick={() => {
                              lang === "az" ? setLang("en") : setLang("az");
                              lang === "az"
                              ? localStorage.setItem("lang", "en")
                              : localStorage.setItem("lang", "az");
                            }}
                            className="ms-3 mt-2 btn btn-outline-dark"
                          >
                            {lang === "az" ? "AZ" : "EN"}
                          </button>
                        </li>
                        <li>
                           
                          <span className="me-3">{lang === "az" ? 'Mode' : 'Mod'}</span>

                <Link className="mt-4"
                  onClick={() => {
                    mode === "light" ? setMode("dark") : setMode("light");
                    mode === "light"
                      ? localStorage.setItem("mode", "dark")
                      : localStorage.setItem("mode", "light");
                  }}
                >
                  {mode === "light" ? (
              <i className="fa-solid fa-sun mt-3" />

                    ) : (
                      
                      <i
                        className="fa-solid fa-moon mt-3"
                        style={{ color: "#ffffff" }}
                        />
                  )}
                </Link>
              </li>
                      </ul>
                    </div>
                  </div>
            </ul>
    </div>
  </div>
</div>

          <div className="right"  id="offcanvasdisplayed" >
            <ul>


            {localStorage.getItem("active") === "user@user.gmail.com" ? (
            <>
              <div className="user text-light">{localStorage.getItem("name")}</div>
              <span onClick={handleLogout} className="mx-2 text-light">
                <div class="sign">
           <i className="fa-solid fa-arrow-right-from-bracket" style={{color: '#ffffff'}} />

                </div>

              </span>
            </>
          ) : localStorage.getItem("active") === "admin@admin" ? (
            <>
            
              <Link to={"/admin"} className=" btn btn-outline-danger">
                Admin
              </Link>
              <span onClick={handleLogout} class="BTN">
                <div class="sign">
                
                </div>

                <span class="text-out text-light mx-2 ">  <i  className=" adminlog fa-solid fa-arrow-right-from-bracket" style={{color: '#ffffff'}} /></span>
              </span>
            </>
          ) : (
            <Link to={"/login"} className="btn">
              <span className="">
              <i
                      className="fa-regular fa-user fs-5"
                      style={{ color: "#ffffff" }}
                    />
              </span>
            </Link>
          )}


              <li className="drp">
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="dropbtn">
                      <i
                        className="fa-solid fa-gear"
                        style={{ color: "#f2f2f2" }}
                      />
                      
                    </button>
                    <div className="dropdown-content">
                      <ul className="d-flex flex-column">
                        
                        <li className="language me-3">
                          {" "}
                          {lang === "az" ? 'Language ' : 'Dil'}
                          <button
                            onClick={() => {
                              lang === "az" ? setLang("en") : setLang("az");
                              lang === "az"
                              ? localStorage.setItem("lang", "en")
                              : localStorage.setItem("lang", "az");
                            }}
                            className="ms-3 btn btn-outline-dark"
                          >
                            {lang === "az" ? "AZ" : "EN"}
                          </button>
                    
                        </li>
                        
                        <li>
                           
                          <span className="me-3">{lang === "az" ? 'Mode' : 'Mod'}</span>

                <Link
                  onClick={() => {
                    mode === "light" ? setMode("dark") : setMode("light");
                    mode === "light"
                      ? localStorage.setItem("mode", "dark")
                      : localStorage.setItem("mode", "light");
                  }}
                >
                  {mode === "light" ? (
                    <i class="fa-solid fa-sun"></i>
                    ) : (
                      
                      <i
                        className="fa-solid fa-moon"
                        style={{ color: "#ffffff" }}
                        />
                  )}
                </Link>
              </li>
              
                      </ul>
                    </div>
                  </div>
                </li>
              </li>

             

              <li className="mx-2">
               <Link to={"/wishlist"}>
               <i
                  className="fa-regular fa-heart fs-5"
                  style={{ color: "#e6e6e6" }}
                />
               </Link>
              </li>
            
              <li>
                <Link
                  type="button"
                  to={"/cart"}
                  className="btn  position-relative"
                >
                  <i
                    className="fa-solid fa-cart-shopping"
                    style={{ color: "#ffffff" }}
                  />

                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
              <li className="mx-2">
                <i
                  onClick={() => setShow(true)}
                  className="fa-solid fa-magnifying-glass fs-5"
                  style={{ color: "#ffffff" }}
                />

                <Modal
                  className="modalclass"
                  show={show}
                  onHide={() => setShow(false)}
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                      Search
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form class="input-group mb-3">
                      <input
                        onChange={(e) => setQuery(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Search Product"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                    </form>
                    <ul className="list-group">
                      {prState
                        .filter((p) => p.title.toLowerCase().includes(query))
                        .map((item) => (
                          <Link to={`/products/${item.id}`}>
                            <li
                              key={item.id}
                              id={item.id}
                              className="list-group-item d-flex justify-content-between"
                            >
                              {item.title}
                              <img src={item.image} width={80} alt="" />
                            </li>
                          </Link>
                        ))}
                    </ul>
                  </Modal.Body>
                </Modal>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="bottom_nav">
          <Container>
            <ul>
              <li>
                <Link to={"/products"}>{lang === "az" ? 'Shop' : 'Məhsullar'}</Link>
              </li>
              <li>
                <Link to={"/blogs"}>{lang === "az" ? 'Blog' : 'Bloq'}</Link>
              </li>
              <li>
                <Link to={"/contact"}>{lang === "az" ? 'Contact' : 'Əlaqə'}</Link>
              </li>
              <li>
                <Link to={"/faqpage"}>FAQ</Link>
     
             
              </li>
            </ul>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
