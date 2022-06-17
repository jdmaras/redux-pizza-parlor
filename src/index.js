import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

// Use REDUX to create the store of STATE objects / items, and use
// `combineReducers` to pull together multiple STATE values into a
// single object
import { createStore, combineReducers, applyMiddleware } from "redux";

// Import the provider to the REDUX store.
// This will allow access to our STATE throughout the App
import { Provider } from "react-redux";

// Used to log the REDUX values and changes to STATE in console.log()
import logger from "redux-logger";

// The GET from the App.jsx
const pizzaList = (state = [], action) => {
  switch (action.type) {
    case "GET_PIZZA":
      return action.payload;
  }
  return state;
};
const cart = (state = [], action) => {
  switch(action.type) {
    case "ADD_TO_CART":
      return [...state,action.payload]
    case "DELETE_ITEM":
      return state.splice(1,action.payload)
  }
  return state;
}
const runningTotal = (state = 0, action) => {
  console.log('this is the runningtotal',action.payload)
  switch(action.type)
  {case "UPDATE_TOTAL":
      return action.payload
  }
  return state;
}
//
const customerInfo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW_CUSTOMER':
      return action.payload;

    default:
        return state
  }
  return state;
};

// Create the main STORE that will serve all STATE values throughout our App
const store = createStore(
  combineReducers({
    // Contains each of the individual STATE items that we want access to
    customerInfo,
    pizzaList,
    customerInfo,
    runningTotal,
    cart
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
