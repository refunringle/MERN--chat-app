import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useForm } from "../../Utility/hooks";
import { ToastContainer } from "react-toastify";
import axios from "axios";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const loginusercallback = () => {
    console.log("loginusercallback");
    handleSubmit();
  };

  const { onChange, onSubmit, values } = useForm(loginusercallback, {
    username: "",
    email: "",
    password: "",
    Re_password: "",
    isLogin: false,
  });

  console.log(values.Re_password, "valure");

  const handleSubmit = (event) => {
    const { username, password, email } = values;
    //  const data = { username, password, email };
    console.log(email, "dataaaa");

    // Send the form data to the Node.js server
    axios
      .post("http://localhost:5000/register", {
        username,
        email,
        password,
      })
      //   .then((response) => response.json())
      .then((response) => {
        if (response.data) {
          alert("Data was saved successfully!");
        } else {
          alert("There was an error saving the data.");
        }
      });
  };

  return (
    <div className="bodys">
      <div className="loginBox ">
        <img
          className="user"
          src="https://i.ibb.co/yVGxFPR/2.png"
          style={{ backgroundColor: "transparent" }}
          height="100px"
          width="100px"
        />
        <h3>Sign Up Here</h3>
        <form onSubmit={onSubmit}>
          <div className="inputBox">
            <input
              type="text"
              onChange={onChange}
              name="username"
              placeholder="Name"
              id="fname"
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              onChange={onChange}
              name="email"
              placeholder="Email Adress"
              id="uname"
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              onChange={onChange}
              placeholder="Password"
              id="pass"
              minLength="6"
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="Re_password"
              onChange={onChange}
              placeholder="Re-password"
              id="pass"
              minLength="6"
            />
          </div>
          <button type="submit" name="Signup" value="Sign-up">
            submit
          </button>
        </form>
        <a href="#" className="icoGoogle" title="Google +">
          <i className="fab fa-google-plus"></i>
        </a>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
