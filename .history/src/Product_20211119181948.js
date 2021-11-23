import React from 'react'
import "./Product.css"

const [{ basket }, dispatch] = useStateValue();
const addToBasket = () => { };



return (
    <div className="product">
        <p>{title}</p>
        <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className=" product__rating">
            {

                Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
            }
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}> Add to basket </button>
    </div>

);
}


export default Product
