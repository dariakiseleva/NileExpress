import React from 'react'
import "./checkout.scss"

import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from '../../StateProvider';

export default function Checkout() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <main className="checkout">
        <div className="checkout__left">
            <div className="checkout__title"><h2>Shopping cart</h2></div>
            {/* Basket items */}

            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />

            ))}


        </div>

        <div className="checkout__right">
            <Subtotal />
        </div>
    </main>
  )
}
