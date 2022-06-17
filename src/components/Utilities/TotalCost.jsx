// Function that takes in an array and returns the total value
// of the price from all objects in the array

function TotalCost({ objList }) {    
    console.log('in TotalCost', objList)
    // REF: https://stackoverflow.com/a/6300596
    const totalCost = objList.reduce(
        (initialNumber, orderItem) => 
            initialNumber + Number(orderItem.price), 0
    )
    console.log('in totalCost',totalCost);

    // Return the total cost amount
    return totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"}
    )
}

export default TotalCost