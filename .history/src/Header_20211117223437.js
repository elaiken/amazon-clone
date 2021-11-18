import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons"


function Header() {
    return (
        <nav className='header'>
            {/* logo on the left --> img */}
            <Link to="/login">

                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png " />
            </Link>
            {/* Search Box */}
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />

            {/* 3 links */}
            {/* Basket icon with number */}
        </nav>
    )
}

export default Header
