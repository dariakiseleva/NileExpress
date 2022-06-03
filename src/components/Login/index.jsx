import "./login.scss"
import React, {useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom';

//For some reason the shorthand did not work?
import firebaseData from "./../../firebase";
const {db, auth} = firebaseData;

function Login() {
    const navigate = useNavigate();

    //States to store user input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Handle login when button is clicked
    const signIn = (e) => {
        //Prevent prefresh on clicking button
        e.preventDefault()
        //Firebase login
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //If authentication is successful (auth exists)
            if(auth) {
                //On successful login, transition to the homepage
                navigate('/')
            }
        })
        //This displays the alert on the screen
        .catch((error) => alert(error.message));
    }

    //Handle registration when button is clicked
    const register = (e) => {
        e.preventDefault();

        //Firebase register
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth) {
                navigate('/')
            }
        })
        .catch((error) => alert(error.message));
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