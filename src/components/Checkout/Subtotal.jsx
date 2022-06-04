import "./subtotal.scss";
import React, {fragment} from 'react';
import { useStateValue } from '../../StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "../../reducer";
import { useNavigate  } from "react-router-dom";

function Subtotal() {

    const navigate = useNavigate ();
    const [{basket}, dispatch] = useStateValue();

    const renderText = (value) => {
        return (
            <p>
                {/* Pull number of items and total price from the data layer */}
                Subtotal ({basket.length} {basket.length===1 ? "item" : "items"}):         
                <strong> {value}</strong>
            </p>
        )
    }


    return (
    <div className="subtotal">

        <CurrencyFormat 
            decimalScale={2} 
            value={getBasketTotal(basket)}
            renderText={(value) => renderText(value)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
        </small>

        <button onClick={e => navigate("/payment")} className="subtotal__button">Proceed to checkout</button>

    </div>
    )
}

export default Subtotal