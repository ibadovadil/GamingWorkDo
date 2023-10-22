import React, { useContext, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LangContext } from "../context/LangContext";




const admin = {
  email: "admin@admin",
  password: "user",
};

const userlogin = {
  // email: "user@user.gmail.com",
  email: "",
  password: "user",
};




const Registration = () => {
  const [lang, setLang] = useContext(LangContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const navigate = useNavigate();
  const [messege, setMessege] = useState({
    text: "",
    color: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessege({
        text: "please fill the input",
        color: "danger",
      });
    } else {
      if (password === userlogin.password) {
        setMessege({
          text: "Successfully done",
          color: "success",
        });
        navigate("/");

        localStorage.setItem("active", "user@user.gmail.com");
        window.location.reload();
      } else {
        setMessege({
          text: "email or password  is wrong",
          color: "danger",
        });
      }
    }








if (!email || !password) {
  setMessege({
    text: "please fill the input",
    color: "danger",
  });
} else {
  if (email === admin.email && password === admin.password) {
    setMessege({
      text: "Successfully done",
      color: "success",
    });
    navigate("/admin");

    localStorage.setItem("active", "admin@admin");
    window.location.reload();
  } else {
    setMessege({
      text: "email or password  is wrong",
      color: "danger",
    });
  }
}
    }


  return (
    <Container className="login">
      <h1 className="text-center my-5 text-light">Sign in</h1>
      <div className="d-flex justify-content-center">
        <Col md={6}>
          <p className={`alert alert-${messege.color}`}>{messege.text}</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label text-light">
              Email address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
        
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label text-light">
              Password
              </label>
              <input
              value={password}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="enter your password"
                onChange={(e) => setPassword(e.target.value)}
                
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label text-light">
                Name
              </label>
              <input 
              value={localStorage.setItem("name" , name)}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="enter your name"
                onChange={(e) => setName(e.target.value)}
               
              />
            </div>
           
            <button type="submit" className="btn btn-primary button-64 py-2">
              sign in
            </button>
          </form>
        </Col>
      </div>
    </Container>
  );
}

export default Registration