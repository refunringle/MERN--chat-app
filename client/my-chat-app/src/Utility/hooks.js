import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values, "hooks");
  };

  const validation = () => {
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

    const { password, Re_password, username, email, isLogin } = values;

    console.log(values, "main");
    console.log(password, "jdjfwfhow");
    if (isLogin) {
      if (!email || !password) {
        toast.error("Need all Fields !", toast_options);
        return false
      }
      return true
    }
    else {
      if (!email || !password || !username || !Re_password) {
        toast.error("Need all Fields !", toast_options);
        return false
      } else if (Re_password !== password) {
        toast.error("Passwors is not match!", toast_options);
        return false;
      } 
      return true
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    callback();
    validation();
  };

  return { onChange, onSubmit, values };
};
