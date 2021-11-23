export const initialState = {
    basket: [{



        id="1232341",
        title="EarBuds for on the Go",
        price=11.96,
        rating= 5,
        image="https://m.media-amazon.com/images/I/41muD-dN5FL.jpg"

    }],
    user: null,

};

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
            // Logic for adding iten to basket
            return { state }

        default:
            return state;

    }
}

export default reducer;