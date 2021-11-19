import React from 'react'
import "./Product.css"

function Product({ id, title, image, price, rating }) {
    return (
        <div className="Product">
            <p>{title}</p>
            <p className="product__">

                <small>$</small>
                <strong>{price}</strong>
            </p>
        </div>
    )
}

export default Product
