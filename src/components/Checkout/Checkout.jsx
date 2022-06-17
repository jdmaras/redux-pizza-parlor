// Import `useSelector` to get our current customer information from the STORE
import { useSelector } from 'react-redux'

// Import the component that builds the table rows of information
import CheckoutAddRowToTable from './CheckoutAddRowToTable'

// Import the used components
import CustomerAddress from '../CustomerAddress/CustomerAddress'
import TotalCost from '../Utilities/TotalCost'


function Checkout() {

    // Get the customer info from the STORE
    const customerInfo = useSelector(store => store.customerInfo)

    // Get the pizza order from the STORE
    const orderList = useSelector(store => store.cart)



    // Build out the HTML with associated logic
    return (
        <section>
            {/* Page title */}
            <h2>Step 3: Checkout</h2>

            {/* Address block */}
            <CustomerAddress customerInfo={customerInfo} />

            {/* Delivery method */}
            <div className="delivery-method">
                <p>{customerInfo.type}</p>
            </div>

            {/* Current order / cart for approval */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Loop through the current array of pizzas in the cart  */}

                    {orderList.map((orderItem, index) =>
                        <CheckoutAddRowToTable
                            key={`${orderItem.id}-${index}`}
                            orderItem={orderItem}
                        />
                    )}
                </tbody>
            </table>

            {/* Total cost area */}
            <div className="total-cost">
                <TotalCost objList={orderList} />
            </div>

            <div className="checkout-button-container">
                <button>Checkout</button>
            </div>

        </section>
    )
}

export default Checkout