// import React, { useState, useEffect, useContext } from "react";
// import Navigation from "./Navigation";
// import { Col, Container, Row } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// // import ArrowBackIcon from "@mui/icons-material/ArrowBack"; 
// import { useSelector } from "react-redux";
// import BlogCard from "./BlogCard";
// import { LangContext } from "../context/LangContext";


// const BlogDetails = () => {
//   const brState = useSelector((state) => state.br);
//   const { url } = useParams();
//   const blogdetails = brState.find((p) => p.id.toString() === url);

//   const [isLoading, setIsLoading] = useState(true);
//   const [lang] = useContext(LangContext);

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <div
//           style={{ height: "100vh" }}
//           className="d-flex justify-content-center align-items-center preloader"
//         >
//           <div>
//             <img
//               src="https://gaming-workdo.myshopify.com/cdn/shop/files/286.gif?v=1670848128"
//               alt=""
//             />
//           </div>
//         </div>
//       ) : (
//         <>
//           <Navigation />

//           <div className="blogdetails">
//             <div className="top">
//               <div className="topcontainer">
//                 {/* <Link className="back" to="/blogs">
//                   <div className="arrow">
//                     <ArrowBackIcon /> 
//                   </div>{" "}
//                   <span className="ms-2">
//                   {lang === "az" ?'Back To Blogs' : 'Bloqlara Qayıdın'}</span>{" "}
//                 </Link> */}
//                 <div className="featured py-4">
//                   <p>
//                   {lang === "az" ?'Featured' : 'Seçilmiş'}
//                   </p>
//                   <h5>
//                   {lang === "az" ?'Category: news' : 'Kateqoriya: xəbərlər'}
//                   </h5>
//                   <span>
//                   {lang === "az" ?'Date: December 13, 2022' : 'Tarix: 13 dekabr 2022-ci il'}
//                   </span>
//                 </div>
//                 <h1 className="pb-3">
                 
//                   {lang === "az" ?' The Dev Diary Season Points Boomstick Gaming' : 'The Dev Diary Mövsüm Points Boomstick Gaming'}
//                 </h1>
//                 <p>
              
//                   {lang === "az" ?'    Gambling has been a main recreational activity in Great for centuries. Queen Elizabeth I chartered a lottery that was...' : 'Qumar Böyükdə əsas istirahət fəaliyyəti olmuşdur Britaniya əsrlər boyu. Kraliça I Yelizaveta lotereya icarəyə götürdü bu idi...'}
//                 </p>
//               </div>
//             </div>
//             <Container>
//               <div className="bottom py-5">
//                 <Row>
//                   <Col sm={12} lg={8}>
//                     <div className="left">
//                       <Row className="first">
//                         <>
//                           <Col sm={12} lg={4}>
//                             <span> {lang === "az" ?'Author' : 'Müəllif'}:{blogdetails.author}</span>
//                           </Col>
//                           <Col sm={12} lg={4}>
//                             <h5>{lang === "az" ?'Category' : 'Kateqoriya'}:news</h5>
//                           </Col>
//                           <Col sm={12} lg={4}>
//                             {" "}
//                             <p>{lang === "az" ?'Date' : 'Tarix'}:{blogdetails.date}</p>
//                           </Col>
//                         </>
//                       </Row>
//                       <div className="bloginside">
//                         <h1>{lang === "az" ? blogdetails.title : blogdetails.titleaz}</h1>
                        
//                         <img src={blogdetails.image} className="py-4" alt="" />
//                         <p>{lang === "az" ? blogdetails.text1 : blogdetails.textaz1}</p>
//                         <span className="py-4">{lang === "az" ? blogdetails.text2 : blogdetails.textaz2}</span>
                       
//                         <h2 className="py-4">{lang === "az" ? blogdetails.text3 : blogdetails.textaz3}</h2>

//                         <div className="path">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="custom-svg"
//                             viewBox="0 0 39 32"
//                             fill="none"
//                           >
//                             <path
//                               d="M17.0493 23.1822C17.0493 19.4844 14.347 16.0711 10.0804 15.36C10.7915 11.0933 14.6315 6.82666 17.0493 5.12L11.787 0C5.67149 5.26222 0.835938 12.6578 0.835938 22.6133C0.835938 27.8756 4.53371 31.2889 9.22705 31.2889C13.6359 31.2889 17.0493 27.5911 17.0493 23.1822ZM38.0982 23.1822C38.0982 19.4844 35.3959 16.0711 31.1293 15.36C31.8404 11.0933 35.6804 6.82666 38.0982 5.12L32.8359 0C26.7204 5.26222 21.8848 12.6578 21.8848 22.6133C21.8848 27.8756 25.5826 31.2889 30.2759 31.2889C34.6848 31.2889 38.0982 27.5911 38.0982 23.1822Z"
//                               fill="#183A40"
//                             ></path>
//                           </svg>
//                           <h3>{lang === "az" ? blogdetails.text4 : blogdetails.textaz4}</h3>
//                         </div>
//                         <div className="post py-5">
//                           <h3 className="mx-3">
//                           {lang === "az" ?'Share this post:' : 'Bu postu paylaşın:'}
//                           </h3>
//                           <div className="social-menu">
//                             <ul>
//                               <li>
//                                 <a href="https://github.com/" target="blank">
//                                   <i className="fab fa-github" />
//                                 </a>
//                               </li>
//                               <li>
//                                 <a
//                                   href="https://www.instagram.com/"
//                                   target="blank"
//                                 >
//                                   <i className="fab fa-instagram" />
//                                 </a>
//                               </li>
//                               <li>
//                                 <a
//                                   href="https://www.linkedin.com/"
//                                   target="blank"
//                                 >
//                                   <i className="fab fa-linkedin-in" />
//                                 </a>
//                               </li>
//                               <li>
//                                 <a href="https://twitter.com/">
//                                   <i
//                                     className="fab fa-brands fa-x-twitter"
//                                     target="blank"
//                                   />
//                                 </a>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </Col>
//                   <Col sm={12} lg={4}>
//                     <div className="right">
//                       <h1>
//                       {lang === "az" ?'Related Blogs ' : 'Əlaqədar Bloqlar'}
//                       </h1>
//                       <div className="div mt-3">
//                         {brState.slice(7, 10).map((item) => (
//                           <Col sm={12} key={item.id}>
//                             <BlogCard
//                               id={item.id}
//                               title={item.title}
//                               image={item.image}
//                               author={item.author}
//                               text1={item.text1}
//                               text2={item.text2}
//                               text3={item.text3}
//                               text4={item.text4}
//                             />
//                           </Col>
//                         ))}
//                       </div>
//                     </div>
//                   </Col>
//                 </Row>
//               </div>
//             </Container>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default BlogDetails;
import React, { useState, useEffect, useContext } from "react";
import Navigation from "./Navigation";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack"; 
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";

const BlogDetails = () => {
  const brState = useSelector((state) => state.br);
  const { url } = useParams();
  const blogdetails = brState.find((p) => p.id.toString() === url);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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

          <div className="blogdetails">
            <div className="top">
              <div className="topcontainer">
                {/* <Link className="back" to="/blogs">
                  <div className="arrow">
                    <ArrowBackIcon /> 
                  </div>{" "}
                  <span className="ms-2">Back To Blogs</span>{" "}
                </Link> */}
                <div className="featured py-4">
                  <p>Featured</p>
                  <h5>Category: news</h5>
                  <span>Date: December 13, 2022</span>
                </div>
                <h1 className="pb-3">
                  The Dev Diary Season Points Boomstick Gaming
                </h1>
                <p>
                  Gambling has been a main recreational activity in Great
                  Britain for centuries. Queen Elizabeth I chartered a lottery
                  that was...
                </p>
              </div>
            </div>
            <Container>
              <div className="bottom py-5">
                <Row>
                  <Col sm={12} lg={8}>
                    <div className="left">
                      <Row className="first">
                        <>
                          <Col sm={12} lg={4}>
                            <span>Author: {blogdetails.author}</span>
                          </Col>
                          <Col sm={12} lg={4}>
                            <h5>Category: news</h5>
                          </Col>
                          <Col sm={12} lg={4}>
                            <p>Date: {blogdetails.date}</p>
                          </Col>
                        </>
                      </Row>
                      <div className="bloginside">
                        <h1>{blogdetails.title}</h1>
                        
                        <img src={blogdetails.image} className="py-4" alt="" />
                        <p>{blogdetails.text1}</p>
                        <span className="py-4">{blogdetails.text2}</span>
                       
                        <h2 className="py-4">{blogdetails.text3}</h2>

                        <div className="path">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="custom-svg"
                            viewBox="0 0 39 32"
                            fill="none"
                          >
                            <path
                              d="M17.0493 23.1822C17.0493 19.4844 14.347 16.0711 10.0804 15.36C10.7915 11.0933 14.6315 6.82666 17.0493 5.12L11.787 0C5.67149 5.26222 0.835938 12.6578 0.835938 22.6133C0.835938 27.8756 4.53371 31.2889 9.22705 31.2889C13.6359 31.2889 17.0493 27.5911 17.0493 23.1822ZM38.0982 23.1822C38.0982 19.4844 35.3959 16.0711 31.1293 15.36C31.8404 11.0933 35.6804 6.82666 38.0982 5.12L32.8359 0C26.7204 5.26222 21.8848 12.6578 21.8848 22.6133C21.8848 27.8756 25.5826 31.2889 30.2759 31.2889C34.6848 31.2889 38.0982 27.5911 38.0982 23.1822Z"
                              fill="#183A40"
                            ></path>
                          </svg>
                          <h3>{blogdetails.text4}</h3>
                        </div>
                        <div className="post py-5">
                          <h3 className="mx-3">Share this post:</h3>
                          <div className="social-menu">
                            <ul>
                              <li>
                                <a href="https://github.com/" target="blank">
                                  <i className="fab fa-github" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.instagram.com/"
                                  target="blank"
                                >
                                  <i className="fab fa-instagram" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.linkedin.com/"
                                  target="blank"
                                >
                                  <i className="fab fa-linkedin-in" />
                                </a>
                              </li>
                              <li>
                                <a href="https://twitter.com/">
                                  <i
                                    className="fab fa-brands fa-x-twitter"
                                    target="blank"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={12} lg={4}>
                    <div className="right">
                      <h1>Related Blogs</h1>
                      <div className="div mt-3">
                        {brState.slice(7, 10).map((item) => (
                          <Col sm={12} key={item.id}>
                            <BlogCard
                              id={item.id}
                              title={item.title}
                              image={item.image}
                              author={item.author}
                              text1={item.text1}
                              text2={item.text2}
                              text3={item.text3}
                              text4={item.text4}
                            />
                          </Col>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </>
      )}
    </>
  );
};

export default BlogDetails;
