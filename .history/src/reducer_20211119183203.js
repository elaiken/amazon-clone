export const initialState = {
    basket: [],

}

function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
        // Logic for adding iten to basket






        case "REMOVE_FROM_BASKET":
            // Logic for adding iten to basket
            ;

        default:
            return state;

    }
}

export default reducer;