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
                    src="http://upload.wikimedia.org/wikipedia/
                    commons/thumb/a/a9/Amazon_logo.svg
                    1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
        </div>
    )
}

export default Login
