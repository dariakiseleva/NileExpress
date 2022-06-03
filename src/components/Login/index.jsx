import "./login.scss"
import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
        <Link to='/' style={{ textDecoration: 'none' }}>
            <div className="login__logo">NileExpress</div>
        </Link>

        <div className="login__container">
            <h1>Sign In</h1>

            <form>
                <h5>Email</h5>
                <input type='text'/>
                <h5>Password</h5>
                <input type='password'/>
                <button className="login__signInButton">Sign In</button>
            </form>

            <p>Don't have an account?</p>
            <button className="login__registerButton">Sign up</button>

        </div>




    </div>
  )
}

export default Login