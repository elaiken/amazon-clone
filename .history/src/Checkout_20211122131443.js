import React from 'react'
import { useStateValue } from "./StateProvider"
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket }] = useStateValue();


    return (
        <div className="checkout" >
            <div className="checkout__left">

                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/poppin/AmazonLive/2021_OCT-DEC/Winter_Fashion_Haul_with_Lala_Kent__ILM_Desktop_1x_650x45._CB653725434_.jpg "
                    alt=""
                />


                {basket?.length === 0 ? (
                    <div>
                        <h2> Your Shopping Backet is empty </h2>
                        <p>
                            Your have no items in your basket. To buy one or more itmes, click "Add to basket" next to the item.

                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title"> Your Shopping Basket </h2>
                        {/*  List of Checkout Products */}
                        {basket?.map(item =>

                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )

                        }

                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <h1> Subtotal</h1>
                    <Subtotal />
                </div>

            )}
        </div>
    )
}

export default Checkout;
