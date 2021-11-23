import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login"
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";


function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {

  }, []);

  return (




    <Router>


      <Header />
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Checkout />}>

          </Route>
          <Route path="/login" element={<Login />} >

          </Route>
          <Route path="/" element={<Home />} >

          </Route>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
