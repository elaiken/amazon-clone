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
                    image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1370297_1919226_4153828_US_us_gw_pc_quad_image_card_2x_us_en_372x232_2X_en_US._SY232_CB639263285_.jpg " />
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
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41CJmRpTedL.jpg " />
                {/* Product */}
                <Product
                    id="1232341"
                    title="The Lean Startup: How Constat Innovation Creatness"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1370297_1919226_4153828_US_us_gw_pc_quad_image_card_2x_us_en_372x232_2X_en_US._SY232_CB639263285_.jpg " />
                <Product
                    id="1232341"
                    title="The Lean Startup: How Constat Innovation Creatness"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1370297_1919226_4153828_US_us_gw_pc_quad_image_card_2x_us_en_372x232_2X_en_US._SY232_CB639263285_.jpg " />
            </div>
            <div className="home__row">
                <Product
                    id="1232341"
                    title="The Lean Startup: How Constat Innovation Creatness"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1370297_1919226_4153828_US_us_gw_pc_quad_image_card_2x_us_en_372x232_2X_en_US._SY232_CB639263285_.jpg " />
                {/* Product */}
            </div>
        </div>
    )
}

export default Home
