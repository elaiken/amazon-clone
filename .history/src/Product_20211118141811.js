import React from 'react'
import "./Product.css"

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div product__rating>
                {

                    Array(rating)
                        .fill()
                        .map(_) => (
                <p>:star</p>
                ))
            }


            </div>

        </div>

    )
}


export default Product
