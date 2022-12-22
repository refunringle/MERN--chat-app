import React ,{useState} from "react";
import "./login.css";
import { useForm } from "../../Utility/hooks";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";


export default function Login() {
  const loginusercallback = () => {
    console.log("loginusercallback");
    handleSubmit()
  };

  const navigate = useNavigate();


  const { onChange, onSubmit, values } = useForm(loginusercallback, {
    email: "",
    password: "",
    isLogin: true
  });

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
  const { password, email } = values;
  console.log(email, "dataaaa");

  const { data } = 
     await axios.post("http://localhost:5000/login", {
      email,
      password,
    })
    if (data.status === false){
      toast.error(data.msg, toast_options);
    }else{
      localStorage.setItem("chat-app-user",JSON.stringify(data.user));
      toast.success('Register Successfully..', toast_options);
      navigate("/");
    }
}

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
