import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>

      <div className="app">
        <Routes>
          <Route path="/checkout" element={""}>

          </Route>
          <Route path="/login" element={""} >

          </Route>
          <Route path="/" element={""}>
            <h1> HOME PAGE
            </h1>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
