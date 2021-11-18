import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';


function App() {
  let body = (<Header />)



  return (
    <Router>

      <Header />
      <div className="app">
        <Routes>
          <Route path="/checkout" element={"Checkout"}>

          </Route>
          <Route path="/login" element={"Login Page"} >

          </Route>
          <Route path="/" element={"Home Page"} >

          </Route>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
