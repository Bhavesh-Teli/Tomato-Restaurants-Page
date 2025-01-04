import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("Sign Up")
  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currState==="Login"?<></>:<input type="text" placeholder='Your Name' name="" id="" required/>}
            
            <input type="text" placeholder='Your Email' name="" id="" required/>
            <input type="text" placeholder='Your Password' name="" id="" required/>
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className='login-popup-condition'>
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LoginPopUp
