import React, {fragment} from 'react';
import "./subtotal.scss";

import CurrencyFormat from 'react-currency-format';

function Subtotal() {

    const renderText = (value) => {
        return (
            <p>
                Subtotal (0 items): <strong>0</strong>
            </p>
        )
    }


    return (
    <div className="subtotal">

        <CurrencyFormat 
            renderText={renderText}
            decimalScale={2} 
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
        </small>

        <button className="subtotal__button">Proceed to checkout</button>

    </div>
    )
}

export default Subtotal