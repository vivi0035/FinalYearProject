import React from 'react'
import { useNavigate } from "react-router-dom"
import "./login.css"
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useContext, useState } from "react";
import NavbarHome from '../navbar/NavbarHome';

<NavbarHome/>

const Login = () => {


  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };



  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/homepage")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: {message: "You have entered wrong details."}});
    }
  };
console.log(user);


    const handleSignup = () => {
        navigate("/signuppage");
        
     }



  return (
    <div className="homeContainer">
      <div className="loginContainer">
        <div className="loginTitle">Login</div>
        <div className="loginForm">

        <div className="loginField">
            Username <input 
            className='inputStyle' 
            id="username" 
            onChange={handleChange}/>
            </div>

            <div className="loginField">
            Password <input
              type={"password"}
              className="inputStyle"
              id="password"
              onChange={handleChange}
              />
            </div>

        </div>
        <button disabled={loading} className="homeCtaBtn" onClick={handleClick}>Login</button>
        {error && <span style={{color:"red"}}>{error.message}</span>}
        <div className="loginLink">Forgot password?</div>
        <div className="loginLink" onClick={handleSignup}>Create an account</div>
      
      </div>
      </div>
  )
}

export default Login;
