import React ,{useState} from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useForm } from "../../Utility/hooks";
import { ToastContainer } from "react-toastify";


export default function Login() {
  const loginusercallback = () => {
    console.log("loginusercallback");
  };

  const { onChange, onSubmit, values } = useForm(loginusercallback, {
    email: "",
    password: "",
    isLogin: true
  });

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 bodyy">
            <div className="card">
              <form className="box" onSubmit={onSubmit}>
                <h1>Login</h1>
                <p className="text-muted">
                  Please enter your login and password!
                </p>
                <input
                  type="text"
                  name="email"
                  onChange={onChange}
                  placeholder="Enter your email"
                />
                <input
                  type="text"
                  name="password"
                  onChange={onChange}
                  placeholder="Password"
                />
                <Link to={"/register"}>
                  <a className="forgot text-muted" href="#">
                    Sign up
                  </a>
                </Link>
                <input type="submit" name=""  value="Login" href="#" />
                <div className="col-md-12">
                  <ul className="social-network social-circle">
                    <li>
                      <a href="#" className="icoFacebook" title="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icoTwitter" title="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icoGoogle" title="Google +">
                        <i className="fab fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
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
