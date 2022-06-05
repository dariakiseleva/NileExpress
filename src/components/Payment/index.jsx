import './payment.scss';

//Importing the instance of axios we created, not normal one
import axios from '../../axios';

//Using the normal one and specifying here
//import axios from 'axios';

import React, {useState, useEffect} from 'react'
import {useStateValue} from "./../../StateProvider";
import { Link, useNavigate } from "react-router-dom";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "../../reducer";

import CheckoutProduct from "./../Checkout/CheckoutProduct";

function Payment() {

  const [{basket, user}, dispatch] = useStateValue();
  
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  
  const [error, setError] = useState(null);
  const [disabled, setDidsabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);


  useEffect(() => {
    //Generate special stripe secret to charge the customer
    //Has to change whenever the basket changes

    const getClientSecret = async () => {
      //Make a call to stripe to create new secret
      const response = await axios(
        {
          method: 'post',
          //stripe expects total in a currencies subunit (here in cents since using dollars)
          //request query after ?
          url: `payments/create?total=${(getBasketTotal(basket) * 100)}`
      })
      setClientSecret(response.data.clientSecret);
    }
    //Running an async function inside useEffect
    getClientSecret();

  }, [basket])


  //ASYNCHRONOUS FUNCTION
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    //Have stripe confirm the payment
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
    .then((response) => {
      //paymentIntent is the payment confirmation
      const {paymentIntent} = response;
      setSucceeded(true)
      setError(null)
      setProcessing(false)
      navigate("/orders") // Redirect to orders
    })
  }

  const handleChange = (event) => {
    //Listen for changes in card element
    //Display changes when user types in card details
    setDidsabled(event.empty); //Disabled button if nothing changes
    setError(event.error ? event.error.message : "") //Display error from the event if it exists
  }

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

          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />

            <div className="payment__priceContainer">

              {/* Display total price */}
              <CurrencyFormat 
                renderText={(value) => (
                  <h3>Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"$"}
              />

              {/* Button that can be enabled or disabled*/}
              <button disabled={processing || disabled || succeeded}>
                <span>
                  {processing ? <p>Processing</p> : "Buy now"}
                </span>
              </button>
            </div>

            {/* Display error if it exists */}
            {error && <div>{error}</div>}

          </form>

        </div>
      </div>
    </div>
  )
}

export default Payment