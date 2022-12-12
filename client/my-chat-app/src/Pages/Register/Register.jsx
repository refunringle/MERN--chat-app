import React from 'react'
import './register.css'

export default function Register() {
  return (
    <div className='bodys'>
      <div className="loginBox " >
        <img
          className="user"
          src="https://i.ibb.co/yVGxFPR/2.png"
          height="100px"
          width="100px"/>
        <h3>Sign Up Here</h3>
        <form method="post">
          <div className="inputBox">
            <input type="text" name="First_Name" placeholder="Name" id="fname" required/>
          </div>

          <div className="inputBox">
            <input type="text" name="Username" placeholder="Username" id="uname"/>

          </div>
          <div className="inputBox">
            <input
              type="password"
              name="Password"
              placeholder="Password"
              id="pass"
              minLength="8"
              required/>

          </div>
          <div className="inputBox">
            <input
              type="password"
              name="Re-password"
              placeholder="Re-password"
              id="pass"
              minLength="8"
              required/>
          </div>
          <input type="submit" name="Signup" value="Sign-up"/>
        </form>
        <a href="#">Sign-in</a>
      </div>
    </div>
  )
}
