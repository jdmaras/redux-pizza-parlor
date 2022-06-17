function OrderItem({order}) {


    return (
        <>
            <td>
                {order.name}
            </td>
            <td>
                {order.time}
            </td>
            <td>
                {order.type}
            </td>
            <td>
                {order.cost}
            </td>
        </>
    );
};

export default OrderItem;