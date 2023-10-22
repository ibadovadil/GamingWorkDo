import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LangContext } from '../context/LangContext';

const Footer = () => {
  const [lang ] =  useContext(LangContext);

  return (
      <div className='footer py-5'>
          <Container>
                <Row>
                  <Col className='left'  lg={4} md={12} sm={12}>
                    <img src="https://gaming-workdo.myshopify.com/cdn/shop/files/logo.png?v=1670901413" alt="" />
                    <h3 className='my-4'>{lang === "az" ? 'Reach out & let your' : 'Uzadın və icazə verin'} <br /> <span>{lang === "az" ? 'mind explore' : 'ağıl araşdırmaq'}</span></h3>
                    <p> {lang === "az" ? 'also love the challenge of trying to beat a difficult game or master a new skill.' : 'həm də çətin oyunu məğlub etmək və ya yeni bacarıqlara yiyələnmək cəhdini sevirəm.'}</p>
                  </Col>
                  <Col className='middle d-flex ' lg={4} md={12} sm={12}>
                   <div className="listOne mx-3">
                   <h3 className='mb-3'> {lang === "az" ? 'Navigation' : 'Naviqasiya'}</h3>
                    <ul className='d-flex flex-column justify-content-end align-items-start'>
                      <li><Link to={"/products"}>
                      {lang === "az" ? 'SHOP' : 'MƏHSULLAR'}</Link></li>
                      <li><Link to={"/blogs"}>{lang === "az" ? 'BLOG' : 'BLOQ'}</Link></li>
                      <li><Link to={"/contact"}>{lang === "az" ? 'CONTACT' : 'ƏLAQƏ'}</Link></li>
                      <li><Link to={"/faqpage"}>FAQ</Link></li>
                    </ul>
                   </div>
                   <div className="listTwo ">
                   <h3 className='mb-3'>{lang === "az" ? 'Others' : 'Digər'}</h3>
                    <ul>
                      <li><Link to={"/cart"}>{lang === "az" ? 'CART' : 'SƏBƏT'}</Link></li>
                      <li><Link to={"/wishlist"}>{lang === "az" ? 'WISHLIST' : 'İSTƏK SİYAHISI'}</Link></li>
                    </ul>
                   </div>
                  </Col>
                  <Col className='right d-flex flex-column align-items-center'  lg={4} md={12} sm={12}>
                    <h3> {lang === "az" ? 'Share' : 'Paylaş'}</h3>
                      <div className="icons d-flex">
                      <div className="social-menu mt-4">
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
                   
                  </Col>
                </Row>
          </Container>
      </div>
  )
}

export default Footer