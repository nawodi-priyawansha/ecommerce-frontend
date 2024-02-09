import React from 'react'
import './CSS/LoginSignu.css'

const LoginSignu = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsigup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-feilds">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Adress' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignu
