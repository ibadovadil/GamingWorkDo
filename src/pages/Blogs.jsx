import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { useSelector } from "react-redux";
import Pagination from "../../node_modules/@mui/material/Pagination";
import PaginationItem from "../../node_modules/@mui/material/PaginationItem";
import Stack from "../../node_modules/@mui/material/Stack";
import ArrowBackIcon from "../../node_modules/@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "../../node_modules/@mui/icons-material/ArrowForward";
import Navigation from "../components/Navigation"
import { useContext } from "react";
import { LangContext } from "../context/LangContext";
const Blogs = () => {
  const brState = useSelector((state) => state.br);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const [lang] = useContext(LangContext);

  const handlePageChange = (event, value) => {
    setCurrentPage(value - 1);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedBlogs = brState.slice(offset, offset + itemsPerPage);

  return (
   <>
    <div className="blogcontainer">
   <Navigation/>
      <Container className="container">
        <div className="top">
          <div className="topcontainer py-5">
          <Link className="back" to="/"><div className="arrow">{<ArrowBackIcon />}</div> <span className="ms-2">
          {lang === "az" ? "Back To Home" : "Əsas Səhifəyə Qayıdın"}
          </span> </Link>
          <h1 className="my-4 ms-1">          {lang === "az" ? "News" : "Xəbərlər"}
</h1>
          <p>
          {lang === "az" ? "  The process of selecting only the best of the best gaming blogs was challenging. These days, anyone can consider themselves a gaming blogger and expert, so it took some time to separate the wheat from the chaff." : "Ən yaxşı oyun bloglarından yalnız ən yaxşısını seçmək prosesi çətin idi. Bu günlərdə hər kəs özünü oyun bloggeri və mütəxəssisi hesab edə bilər, ona görə də buğdanı samandan ayırmaq bir qədər vaxt apardı."}
          
          </p>
          </div>
        </div>
      <div className="bottom">
      <div className="bottomcontainer">
          <div className="one">
            <p>

          {lang === "az" ? "All Blogs" : "Bütün Bloqlar"}

            </p>
            <h1> {lang === "az" ? "Game" : "Oyun"}</h1>
          </div>
          <div className="two">
            <Row className="row">
              {paginatedBlogs.map((item) => (
                <Col sm={12} lg={3} md={6} key={item.id} className="cardblog">
                  <BlogCard 
                    id={item.id}
                    title={item.title}
                    titleaz={item.titleaz}
                    image={item.image}
                    author={item.author}
                    text1={item.text1}
                    textaz1={item.textaz1}
                    text2={item.text2}
                    text3={item.text3}
                    text4={item.text4}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="pagination my-4">
          <Stack spacing={2}>
            <Pagination
              variant="outlined"
              color="primary"
              count={Math.ceil(brState.length / itemsPerPage)}
              page={currentPage + 1}
              onChange={handlePageChange}
              renderItem={(item) => (
                <PaginationItem
                  className="alma"
                  component={Link}
                  to="#"
                  {...item}
                />
              )}
              // prevIcon={<ArrowBackIcon />}
              // nextIcon={<ArrowForwardIcon />}
            />
          </Stack>
        </div>
      </div>
      </Container>
    </div>
   </>
  );
};

export default Blogs;
