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
                    src=""
                    alt=""
                />
            </Link>
        </div>
    )
}

export default Login
