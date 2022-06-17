**EACH PERSON NEEDS TO:**

[ ] Git Clone project from 
[ ] Initialize the Database:
    [ ] Postico
        *- or -*
    [ ] Terminal:
        [ ] `createdb pizza_parlor`
        [ ] `psql -d pizza_parlor -f ./database.sql`
            **NOTE**
            [ ] `drop pizza_parlor` to start over


**Components**
[ ] **App.jsx**
    [ ] Router (from HashRouter)
    [ ] Route
[ ] **index.js**
    [ ] REDUX stores
        [x] pizzas as array
        [x] customer information
        [ ] current pizza?
[ JOHN ] **PizzaList.jsx**
    [x] axios GET from database
    [x] store array to REDUX on index.js
    [x] header saying: "Step 1: Select Your Pizza"
    [ ] **DisplayPizza.jsx**
        [ ] pizza name
        [ ] button to add to cart
        [ ] button to remove from cart
            [ ] only show `remove` if the pizza is in the cart
        [ ] description
        [ ] price
        [ ] image_path?    
[ ] **Header.jsx**
    [ ] <h1> Prime Pizza </h1>
    [ ] **HeaderCart.jsx**
        [ ] cart icon
        [ ] total cost of pizzas
        [ ] (stretch) # pizzas
[ JOSH ] **CustomerInfo.jsx**
    [ X ] *form* with `onSubmit()` function
        [  ] `axios` to POST to db
        [ X ] *inputs*
            [ X ] customer_name
            [ X ] street_address
            [ X ] city
            [ X ] zip
            [ X ] type
                [ X ] *radio button to choose between `Pickup` or `Delivery`
            [ ] total
[ COLIN ] **Checkout.jsx**
    [x] `useSelector` to get *customer information* from REDUX
    [x] `useSelector` to get *pizza order* from REDUX
        [x] Show the information in a <table> view
    [x] show the total cost of the order
    [ ] <button> for "Checkout"
    [ ] display delivery method (pickup or delivery)
[ ] **admin.jsx**
    [ ] create admin route in server.js
    [ ] create different header component
    [ ] create table showing order history