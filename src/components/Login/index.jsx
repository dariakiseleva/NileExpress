import "./login.scss"
import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Login() {

    //States to store user input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Handle login when button is clicked
    const signIn = (e) => {
        //Prevent prefresh on clicking button
        e.preventDefault()
        //Firebase login....
    }

    //Handle registration when button is clicked
    const register = (e) => {
        e.preventDefault()
        //Firebase register
    }
    

    return (
        <div className="login">
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className="login__logo">NileExpress</div>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>Email</h5>
                    <input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        type='text'
                    />
                    <h5>Password</h5>
                    <input 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <button 
                        className="login__signInButton"
                        onClick={signIn}
                        type="submit"
                    >Sign In</button>
                </form>

                <p>Don't have an account?</p>
                <button 
                    className="login__registerButton"
                    onClick={register}
                    type="submit"
                >Sign up</button>

            </div>




        </div>
    )
}

export default Login