export const initialState = {
    basket: ["Bread", "Chicken"],

}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding iten to basket
            break;


        case 'REMOVE_FROM_BASKET':
            // Logic for adding iten to basket
            break;
        default:
            return state;

    }
}

export default reducer;