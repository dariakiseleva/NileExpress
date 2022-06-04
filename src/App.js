//Import styles
import './App.scss';

//Import functionalities
import React, {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


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
              <Payment />
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
