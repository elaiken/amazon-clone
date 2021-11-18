import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

      <div className="app">
        <Routes>
          <Rpute path="/checkout" elememt={Checkout}>
          </Rpute>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
