import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useForm } from "../../Utility/hooks";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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

    const toast_options = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    };

  const handleSubmit = async (event) => {
    const { username, password, email } = values;
    console.log(email, "dataaaa");

    const {data} = 
       await axios.post("http://localhost:5000/register", {
        username,
        email,
        password,
      })
      if (data.status === false){
        toast.error(data.msg, toast_options);
      }else{
        localStorage.setItem("chat-app-user",JSON.stringify(data.user));
        toast.success('Register Successfully..', toast_options);
      }
}

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
