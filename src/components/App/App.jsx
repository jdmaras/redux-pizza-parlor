// Import the core libraries used
import React from 'react';
import axios from 'axios';


// Import the Router to allow for linking throughout out App.jsx project
// and Route to link to specific pages
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

// Import the components used in App.jsx
import Checkout from '../Checkout/Checkout';
import CustomerInfo from '../CustomerInfo/CustomerInfo'
import PizzaList from '../PizzaList/PizzaList';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';

// Import the stylesheets
import './App.css';

function App() {

  
  useEffect(() => {
    console.log('in useEffect');
    getPizzaList()
  },[])

  const dispatch = useDispatch();
  
  const getPizzaList = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
    .then((response) => {
      dispatch({
        type: 'GET_PIZZA',
        payload: response.data
      })
    })
      .catch((err) => {
        console.log('Err in GET', err);
    })
  }
   

  return (
    <Router>
      <div className='App'>
        <Header />
    
        {/* <img src='images/pizza_photo.png' /> */}
        {/* <p>Pizza is great.</p> */}

        <Route path="/" exact>
        <PizzaList />
        </Route>
 
        <Route path="/customer" exact>
        <CustomerInfo/>
        </Route>

        <Route path="/checkout" exact>
          <Checkout />
        </Route>

        <Route path="/admin" exact>
          <Admin />
        </Route>


      </div>
    </Router>
  );
}

export default App;
