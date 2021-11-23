import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://m.media-amazon.com/images/I/71oCtqQvsEL._SX3000_.jpg"
                alt=""
            />
            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="1232341"
                    title="EarBuds for on the Go"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/7192WMkcIRL._AC_UL640_FMwebp_QL65_.jpg" />
                {/* Product */}
                <Product
                    id="1232342"
                    title="Up to 28% off select LG C1 Series 4K OLED Smart TVs"
                    price={2896.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51ZM0O35Z+L.jpg" />
                {/* Product */}
            </div>
            <div className="home__row">
                <Product
                    id="1232343"
                    title="Up to 37% off select Garmin Watches and Naviagtion products"
                    price={799.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41CJmRpTedL.jpg " />
                {/* Product */}
                <Product
                    id="1232341"
                    title="Bedsure Large Dog Bed for Large Dogs up to 75lbs"
                    price={40.79}
                    rating={5}
                    image=" https://m.media-amazon.com/images/I/41emVeIesGS.jpg" />
                <Product
                    id="1232341"
                    title="The Lean Startup: How Constat Innovation Creatness"
                    price={16.14}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51WCeoEYKLL.jpg " />
            </div>
            <div className="home__row">
                <Product
                    id="1232341"
                    title="The Lean Startup: How Constat Innovation Creatness"
                    price={149.98}
                    rating={5}
                    image=" https://m.media-amazon.com/images/I/51b955MaWFL.jpg" />
                {/* Product */}
            </div>
        </div>
    )
}

export default Home
