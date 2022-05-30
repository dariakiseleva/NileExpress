import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Import styles
import './App.scss';

// Import components
import Header from "./components/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout"

function App() {
  return (
    <Router>
      <div className="App">

        {/* The header is rendered on all pages, so placed outside of Routes*/}
        <Header />

        <Routes>

          {/* Checkout route */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Homepage route */}
          <Route path="/" element={<Home />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
