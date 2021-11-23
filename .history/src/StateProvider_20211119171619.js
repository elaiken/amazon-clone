// setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// THIS IS THE DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, childern }) => (
    < StateContext.Provider value={useReducer(reducer, initialState)} >
        {childern}
    </StateContext.Provider>
);

// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);