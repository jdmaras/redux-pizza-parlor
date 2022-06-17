
// Function that builds the customer address block.
// Structures the address block based on the information provided
function CustomerAddress({ customerInfo }) {
    return (

        // Build out the address block
        <div className="address-block">
            {/* Check if customer name exists */}
            {customerInfo.customer_name ?
                <p className="customer-name">customerInfo.customer_name</p>
                :
                null
            }
            {/* Check if address exists */}
            {customerInfo.street_address ?
                <p className="customer-street">{customerInfo.street_address}</p>
                :
                null
            }
            {/* Check if city OR zip exists, need at least ONE */}
            {customerInfo.city || customerInfo.zip ?
                
                <p>
                    {/* Check if the city exists */}
                    {customerInfo.city ?
                        <span className="customer-city">{customerInfo.city}</span>
                        :
                        null
                    }
                    {/* Check if the city AND zip exists, then add the comma and space */}
                    {customerInfo.city && customerInfo.zip ?
                        <span>, </span>
                        :
                        null
                    }
                    {/* Check if the zip exists */}
                    {customerInfo.zip ?
                        <span className="customer-zip">{customerInfo.zip}</span>
                        :
                        null
                    }
                </p>
            :
            null
            }
        </div>
    )
}

export default CustomerAddress