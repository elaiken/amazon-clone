import React from 'react'
import { useStateValue } from "./StateProvider"

function Checkout() {
    const [{ basket }] = useStateValue();


    return (
        <div className="checkout" >
            <img className="checkout_ad"
                src=" "
                alt=""
            />


        </div>
    )
}

export default Checkout;
