import './payment.scss';
import React from 'react'
import {useStateValue} from "./../../StateProvider";
import { Link } from "react-router-dom";

import CheckoutProduct from "./../Checkout/CheckoutProduct";

function Payment() {

  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className="payment">

      <h1>Checkout (<Link to="/checkout"> {basket?.length} items </Link>)</h1>

      {/* Section 1 - Delivery address */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Delivery address</h3>
        </div>
        <div className="payment__address">
          <p>{user?.email}</p>
          <p>39 Kimono Crescent</p>
          <p>Richmond Hill, ON, CA</p>
        </div>
      </div>

      {/* Section 1 - Review items */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Review items and delivery</h3>
        </div>
        <div className="payment__items">
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}

        </div>
      </div>


      {/* Section 1 - Payment method */}
      <div className="payment__section">
        <div className="payment__title">
          <h3>Payment method</h3>
        </div>
        <div className="payment__details">

        </div>
      </div>
    </div>
  )
}

export default Payment