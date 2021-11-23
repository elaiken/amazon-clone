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
                    src="https://www.pngfind.com/pngs/m/56-565024_amazon-logo-png-amazon-png-transparent-png.png "
                    alt=""
                />
            </Link>
        </div>
    )
}

export default Login
