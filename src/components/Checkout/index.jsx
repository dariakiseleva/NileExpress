import React from 'react'
import "./checkout.scss"

import Subtotal from "./Subtotal";

export default function Checkout() {
  return (
    <main className="checkout">
        <div className="checkout__left">
            <div className="checkout__title"><h2>Shopping cart</h2></div>
        </div>

        <div className="checkout__right">
            <Subtotal />
        </div>
    </main>
  )
}
