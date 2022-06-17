import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";


function CustomerInfo() {

    const history = useHistory();
    const dispatch = useDispatch();
    //initializes variable object to hold customer info
    //from input fields to package up to dipatch to index.js
    const [custInfoToAdd, setCustInfoToAdd] = 
    useState({
        name: '',
        address:'',
        city:'',
        zip:0,
        type: ''
    })

    //handles change of name input field
    const handleNameChange = (event) => {
        setCustInfoToAdd({
          ...custInfoToAdd,
          name: event.target.value,
        });
      }
      //handles change of address input field
      const handleAddressChange = (event) => {
        setCustInfoToAdd({
          ...custInfoToAdd,
          address: event.target.value,
        });
      }
      //handles change of city input field
      const handleCityChange = (event) => {
        setCustInfoToAdd({
          ...custInfoToAdd,
          city: event.target.value,
        });
      }
    //handles change of zip code input field
      const handleZipChange = (event) => {
        setCustInfoToAdd({
          ...custInfoToAdd,
          zip: event.target.value,
        });
      }
      const handleTypeChange = (event) => {
        setCustInfoToAdd({
          ...custInfoToAdd,
          type: event.target.value,
        });
      }

//handles dispatch
    const handleSubmit = (event) => {
        event.preventDefault();

        //sends info to customerInfo STATE held in index.js
        dispatch({
        type: 'ADD_NEW_CUSTOMER',
        payload: custInfoToAdd
        });
        //onSubmit changes our current endpoint by pushing the
        //location we want to go to the history table
        history.push('/checkout');
    };//end handleSubmit


    return (
        <div>
            <h2>Step 2: Customer Information</h2>
            <form onSubmit={(event) => handleSubmit(event)} className="customer-info-form">
                <input
                    required
                    type="text"
                    placeholder="Name"
                    className="name-input"
                    onChange={handleNameChange}
                /><br/>
                <input
                    required
                    type="text"
                    placeholder="Street Address"
                    className="address-input"
                    onChange={handleAddressChange}
                /><br/>
                <input
                    required
                    type="text"
                    placeholder="City"
                    className="city-input"
                    onChange={handleCityChange}
                /><br/>
                <input
                    required
                    type="number"
                    placeholder="Zip"
                    className="zip-input"
                    onChange={handleZipChange}
                /><br/>
                <input
                    required
                    type="radio"
                    id="pickup"
                    name="delivery-method"
                    value="pickup"
                    className="type-input"
                    onChange={handleTypeChange}
                /> <label htmlFor="pickup">Pickup</label> <br/>
                <input
                    required
                    type="radio"
                    id="delivery"
                    name="delivery-method"
                    className="type-input"
                    value="delivery"
                    onChange={handleTypeChange}
                /> <label htmlFor="delivery">Delivery</label>
                {/* submit button */}
                <button type="submit">NEXT</button>
            </form>
        </div>
    )
}

export default CustomerInfo;