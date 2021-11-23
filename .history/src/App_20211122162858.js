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

  // useEffect <<<<<<<< Powerful 
  // Piece of code which runs based on a given conditon

  useEffect(() => {
    auth.
      onAuthStateChanged((authUser) => {
        if (authuser) {
          // the user is logged in...
          dispatch({
            type: "SET_USER",
            user: authUser
          })
        } else {
          // the user is looged out...
        }
      })
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
