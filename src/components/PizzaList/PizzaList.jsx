import DisplayPizza from "./DisplayPizza";
import { useSelector } from 'react-redux'
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";

function PizzaList(){

    const history = useHistory();
    const pizza = useSelector(store => store.pizzaList)

    return(
        <section className="pizza-list-container">
            <h3>Step 1: Select Your Pizza</h3>
            <div className="outter-pizza-div">
                {pizza.map((item, i) => {
                return <DisplayPizza 
                key={i}
                pizzaList={item}/>
            })}

            {/* <DisplayPizza pizzaList={pizza}/> */}


            {/* history is imported above. history is an array of where we have been
            the last item in the array is where we are. pushing new end point
            changes page to show that Component
            https://github.com/PrimeAcademy/gaiman-syllabus/blob/main/lecture-notes/week-12-redux/11-01_react-router.md */}
            <button onClick={() => history.push('/customer')}>NEXT</button>

            </div>

        </section>
    )
}
export default PizzaList;