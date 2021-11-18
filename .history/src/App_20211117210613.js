import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>

      <div className="app">
        <Routes>
          <Route path="/checkout" elememt={""}>
            <h1>Checkout</h1>
          </Route>
          <Route path="/login" elememt={""}>
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <h1>HOME PAGE!!!</h1>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
