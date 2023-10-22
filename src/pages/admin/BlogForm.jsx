import { useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const BlogForm = ({ sendData, editblog }) => {
  const [image, setImage] = useState(editblog ? editblog.image : "");
  const [title, setTitle] = useState(editblog ? editblog.title : "");
  const [titleaz, setTitleaz] = useState(editblog ? editblog.titleaz : "");
  const [date, setDate] = useState(editblog ? editblog.date : "");
  const [author, setAuthor] = useState(editblog ? editblog.author : "");
  const [text1, setText1] = useState(editblog ? editblog.text1 : "");
  const [text2, setText2] = useState(editblog ? editblog.text2 : "");
  const [text3, setText3] = useState(editblog ? editblog.text3 : "");
  const [text4, setText4] = useState(editblog ? editblog.text4 : "");
  const [textaz1, setTextaz1] = useState(editblog ? editblog.textaz1 : "");
  const [textaz2, setTextaz2] = useState(editblog ? editblog.textaz2 : "");
  const [textaz3, setTextaz3] = useState(editblog ? editblog.textaz3 : "");
  const [textaz4, setTextaz4] = useState(editblog ? editblog.textaz4 : "");
  const blogFormSubmit = (e) => {
    e.preventDefault();
    sendData({
      image: image,
      title: title,
      titleaz: titleaz,
      date: date,
      author: author,
      text1: text1,
      text2: text2,
      text3: text3,
      text4: text4,
      textaz1: textaz1,
      textaz2: textaz2,
      textaz3: textaz3,
      textaz4: textaz4,
    });
  };
  return (
    <div className="d-flex justify-content-center">
      <Col md={6}>
        <Form onSubmit={blogFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">image</Form.Label>
            <Form.Control
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="Enter image url"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Title</Form.Label>
            <Form.Control
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Titleaz</Form.Label>
            <Form.Control
              required
              value={titleaz}
              onChange={(e) => setTitleaz(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">date</Form.Label>
            <Form.Control
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">author</Form.Label>
            <Form.Control
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">text1</Form.Label>
            <Form.Control
              required
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">text2</Form.Label>
            <Form.Control
              required
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">text3</Form.Label>
            <Form.Control
              required
              value={text3}
              onChange={(e) => setText3(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">text4</Form.Label>
            <Form.Control
              required
              value={text4}
              onChange={(e) => setText4(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label className="text-light">textaz1</Form.Label>
            <Form.Control
              required
              value={textaz1}
              onChange={(e) => setTextaz1(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">textaz2</Form.Label>
            <Form.Control
              required
              value={textaz2}
              onChange={(e) => setTextaz2(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">textaz3</Form.Label>
            <Form.Control
              required
              value={textaz3}
              onChange={(e) => setTextaz3(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">textaz4</Form.Label>
            <Form.Control
              required
              value={textaz4}
              onChange={(e) => setTextaz4(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </Form.Group>
          <Button variant="primary" type="submit" to="/blogadmin">
            Save
          </Button>
        </Form>
      </Col>
    </div>
  );
};

export default BlogForm;
