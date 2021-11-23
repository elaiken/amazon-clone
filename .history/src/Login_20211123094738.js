import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import { auth } from './firebase'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        e.preventDefault(); // this stops the refresh!!!
        /// do the login logic
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, redirect to homepage... 
                navigate.push("/");
            })
            .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault(); // this stops the refresh!!!
        // do the register logic..
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // created a user and logged in, redirect to homepage
                navigate.push("/");
            })
            .catch((e) => alert(e.message));
    };



    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://images.squarespace-cdn.com/content/v1/5ac4ee3df2e6b1d3662a5624/1548442268291-DILRLBXWV6OYCAJSVD83/amazon-logo-transparent.png "
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton"> Sign In</button>
                </form>
                <p>
                    By signing-in you argee to Amazon's Conditions of use & Sale . Please go see our Privacy Notice, our Cookies Notice and out Notice.

                </p>
                <button onclick={register} className="login__registerButton"> Create Amazon Accout </button>
            </div>
        </div>
    )
}

export default Login
