import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

      <div className="app">
        <Routes>
          <Route path="/checkout" elememt={Checkout}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
