import React, { useRef } from 'react'
import "./login.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { useState } from "react";
import { Link } from 'react-router-dom';


const Signup = () => {

  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleTermsCheckboxChange = (event) => {
    setTermsAgreed(event.target.checked);
  };


  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    }
    else if (!termsAgreed) {
      alert("Please agree to the terms and conditions before signing up.");
      return;

    } else {
      const user = {
        username: username.current.value,
        password: password.current.value,
      };
      try {
        
        await axios.post("/auth/register", user);
        navigate("/login");
        alert("You have successfully signed up!");
        return;
      } catch (err) {
        console.log(err);
      }
    }
  }

  const handleLogin = () => {
      navigate("/login");
    }

  return (
    <div className="homeContainer">
      <form className="loginContainer" onSubmit={handleClick}>
        <div className="loginTitle">Sign Up</div>
        <div className="loginForm">

            <div className="loginField">
            Username <input name="username" className='inputStyle'
              ref={username}
            />
            </div>

            <div className="loginField">
            Password <input
              type={"password"}
              className="inputStyle"
              required
              minLength={8}
              ref={password}
              />
            </div>

            <div className="loginField">
            Confirm Password <input
              type={"password"}
              className="inputStyle"
              required
              minLength={8}
              ref={passwordAgain}

              />
            </div>

            

        </div>
        <div >
        <label style={{display:'flex', flexDirection:'row', gap:"5px"}}>
        <input
          type="checkbox"
          checked={termsAgreed}
          onChange={handleTermsCheckboxChange}
        />
        I agree to the <Link to="">terms and conditions</Link>
      </label>
      </div>
        <button className="homeCtaBtn" type="submit">Sign Up</button>
        <div className="loginLink" onClick={handleLogin}>Already have an account? Log in</div>
        </form>
      </div>
  )
}

export default Signup
