const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51L77UxF0wKL9Rjqmzb8NXI8UU2SL1MzWNaqzA7DdjAgsE5JPEYYcFGhQsUbXx4fTEth4czRVZSV9iIcpjFnaurxQ00irmg9lG0');

//App config
const app = express()

//Middlewares
app.use(cors({ origin: true }))
app.use(express.json());


//API routes
app.get('/', (req, res) => {
    res.status(200).send('hello')
})


//receives axios call
app.post('/payments/create', cors(), async (req, res) => {

    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });
    
      // 201 means OK and something reated
      res.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    });


//Listen
exports.api = functions.https.onRequest(app)


