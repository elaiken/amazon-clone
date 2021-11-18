import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';


function App() {
  return (
    <Router>

      <div className="app">
        <Routes>
          <Route path="/checkout" element={"Checkout"}>

          </Route>
          <Route path="/login" element={"Login Page"} >

          </Route>
          <Route path="/" element={<Header />}>
            <h1>Hello</h1>
          </Route>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
