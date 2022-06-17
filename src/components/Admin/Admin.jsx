import axios from 'axios';

function Admin() {


    const getOrders = () => {
        axios({
            method: 'GET',
            url: '/api/order'
        })
        .then((response) => {
            console.log('in Admin axios.get',response.data)
        })
        .catch((err) => {
            console.log('error in GET', err)
        })
    };

    const orders = getOrders();

    console.log('in Admin getOrders', orders)
    return (

        // (orders.length > 0) &&
        <div className="table-container">
            <table className="orders-table">
                <thead>
                        <th>
                            Name
                        </th>
                        <th>
                            Time Order Placed
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            Cost
                        </th>
                </thead>
                <tbody>
                    <tr>
                        {/* //map through orders placed from 
                        database with AdminOrder */}
                      {orders.map((order, i) => {
                          return <OrderItem key={i} order={order}/>
                          })}  
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Admin;