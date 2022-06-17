// Function that handles adding a row of information into the
// checkout table
function CheckoutAddRowToTable({ orderItem }) {
    return (
        <tr>
            <td>{orderItem.name}</td>
            <td>
                ${orderItem.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"}
                )}</td>
        </tr>
    )
}

export default CheckoutAddRowToTable