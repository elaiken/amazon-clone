import React from 'react'
import { useStateValue } from "./StateProvider"
import "./Checkout.css"

function Checkout() {
    const [{ basket }] = useStateValue();


    return (
        <div className="checkout" >
            <img className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/01/poppin/AmazonLive/2021_OCT-DEC/Winter_Fashion_Haul_with_Lala_Kent__ILM_Desktop_1x_650x45._CB653725434_.jpg "
                alt=""
            />


        </div>
    )
}

export default Checkout;
