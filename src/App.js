//Import styles
import './App.scss';

//Import functionalities
import React, {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

// Import components
import Header from "./components/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import Login from "./components/Login"
import Payment from "./components/Payment"

//Import helpers
import { useStateValue } from './StateProvider';
//For some reason the shorthand did not work?
import firebaseData from "./firebase";
const {db, auth} = firebaseData;


//This is a public key which does not need to be hidden
const promise = loadStripe('pk_test_51L77UxF0wKL9RjqmQqU3DjvIBklXfyXcKUZtqdDyL9mr65sHqFSIZaEm60RKoPpj0fiSNZRhyNxNc9sfiGCjIBHR001bwNWK9H');




function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //A listener for login/logouts - manipulate data layer/react context API
    auth.onAuthStateChanged(authUser => {
      //Firebase returns the current user

      if(authUser){
        //If a user has logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //If user has logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <Router>
      <div className="App">

        <Routes>

          {/* Checkout route */}
          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            </>
          } />


          {/* Checkout route */}
          <Route path="/payment" element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          } />

           {/* Login route */}
           <Route path="/login" element={<Login />} />

          {/* Homepage route */}
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
