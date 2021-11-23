import React from 'react'
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";


function Login() {
    let navigate = useNavigate();
    return (
        <div className="Login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://images.squarespace-cdn.com/content/v1/5ac4ee3df2e6b1d3662a5624/1548442268291-DILRLBXWV6OYCAJSVD83/amazon-logo-transparent.png "
                    alt=""
                />
            </Link>
        </div>
    )
}

export default Login
