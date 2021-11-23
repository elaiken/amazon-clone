import React from 'react'
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";


function Login() {
    let navigate = useNavigate();
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
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button onClick={login} type="submit" className="login__signInButton"> Sign In</button>
                </form>
                <p>
                    By signing-in you argee to Amazon's Conditions of to see our Privacy Notice, our Cookies Notice and out Notice.

                </p>
                <button className="login__registerButton"> Create Amazon Accout </button>
            </div>
        </div>
    )
}

export default Login
