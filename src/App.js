import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Import styles
import './App.scss';

// Import components
import Header from "./components/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import Login from "./components/Login"

function App() {
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
