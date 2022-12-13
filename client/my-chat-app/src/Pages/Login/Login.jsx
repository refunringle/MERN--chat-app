import React from "react";
import "./login.css";
import { Link } from "react-router-dom";



export default function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 bodyy">
            <div className="card">
              <form className="box">
                <h1>Login</h1>
                <p className="text-muted">
                  Please enter your login and password!
                </p>
                <input type="text" name="" placeholder="Username" />
                <input type="password" name="" placeholder="Password" />
                <Link to={'/register'}>
                <a className="forgot text-muted" href="#">
                  Sign up
                </a>
                </Link>
                <input type="submit" name="" value="Login" href="#" />
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
    </div>
  );
}
