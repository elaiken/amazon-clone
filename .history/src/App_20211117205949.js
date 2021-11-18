import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>

      <div className="app">
        <Routes>
          <Route path="/checkout" elememt={Checkout}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
