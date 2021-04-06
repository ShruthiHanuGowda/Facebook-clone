// importing context API stuff
import React, { createContext, useContext, useReducer } from "react";

//preparing data layer
export const StateContext = createContext();

//this block is to  wrap the App, provides sort of data layer functionality
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
