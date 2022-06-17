import { useSelector } from 'react-redux';
import cartPic from "./cartPic.png";
import TotalCost from '../Utilities/TotalCost';

function Header(){
    const theTotal = useSelector(store => store.runningTotal)

    const totalCount = useSelector(store => store.cart.length)
    const orderList = useSelector(store => store.cart)

    return(
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
          <div className="headerCart">
            <p className='item-count'>{
                totalCount ?
                    <span>({totalCount})</span>
                    :
                    <span> </span>
            }</p>
            <img src={cartPic}/>

            {/* Choose whether or not the cart total is shown */}
            {theTotal.total ?
                <h3>Cart Total: <span>{
                    <TotalCost objList={orderList}/>
                }</span></h3>
                :
                null
            }

            </div>
        </header>
    )
}
export default Header;