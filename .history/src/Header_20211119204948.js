import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket }] = useStateValue();

    console.log(basket);


    return (
        <nav className='header'>
            {/* logo on the left --> img */}
            <Link to="/">

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
                        <span className="header__optionLineOne" >Hello El</span>
                        <span className="header__optionLineTwo"> Sign In </span>
                    </div>
                </Link>


                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> Returns </span>
                        <span className="header__optionLineTwo"> Orders </span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne"> Your </span>
                        <span className="header__optionLineTwo"> Prime </span>
                    </div>
                </Link>
                {/* 4th link */}
                <Link to="/checkout" className="header__link ">
                    <div className="header__optionBasket">
                        {/* Shopping basket icon */}
                        <ShoppingBasketIcon />
                        {/* Number of items in the basket */}
                        <span className="header__optionLineTwo" className="header__basketCount">{basket?.length}</span>

                    </div>
                </Link>



            </div >

            {/* Basket icon with number */}
        </nav >
    )
}

export default Header
