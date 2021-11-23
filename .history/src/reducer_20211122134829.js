export const initialState = {
    basket: [
        {
            id: "1232341",
            title: "SIMREX X500 mini Drone",
            price: 49.99,
            rating: 4,
            image: "https://m.media-amazon.com/images/I/7192WMkcIRL._AC_UL640_FMwebp_QL65_.jpg"

        },
        {
            id: "1232341",
            title: "SIMREX X500 mini Drone",
            price: 49.99,
            rating: 4,
            image: "https://m.media-amazon.com/images/I/7192WMkcIRL._AC_UL640_FMwebp_QL65_.jpg"

        },
    ],
    user: null,

};

export const getBasketTotal = (basics) =>
    basket?.reduce((amount, items) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            // Logic for adding iten to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            }




        case "REMOVE_FROM_BASKET":
            // Logic for adding iten to basket...


            //we cloned the basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // item exist in basket, remove it... 
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Can't remove product (id: $(action.id)) as its not in basket`
                )
            }
            return {
                ...state,
                basket: newBasket
            };
        default:
            return state;

    }
}

export default reducer;