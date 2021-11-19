import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';
import Home from './Home';


function App() {
  return (
    <Router>

      <Header />
      <div className="app">
        <Routes>
          <Route path="/checkout" element={"Checkout"}>

          </Route>
          <Route path="/login" element={"Login Page"} >

          </Route>
          <Route path="/" element={"Home"} >

          </Route>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
