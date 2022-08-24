import React, { useState, useEffect } from 'react';
import './style.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Container from './components/layout/container/container';
import Header from './components/layout/header/header';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
