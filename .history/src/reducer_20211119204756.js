export const initialState = {
    basket: [],
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