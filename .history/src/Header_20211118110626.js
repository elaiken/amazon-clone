import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";


function Header() {
    return (
        <nav className='header'>
            {/* logo on the left --> img */}
            <Link to="/login">

                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png " alt="" />
            </Link>
            {/* Search Box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>


            {/* 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span>Hello El</span>
                        <span> Sign In </span>
                    </div>
                </Link>


                {/* 2nd link */}

                {/* 3rd link */}

                {/* 4th link */}



            </div>

            {/* Basket icon with number */}
        </nav>
    )
}

export default Header
