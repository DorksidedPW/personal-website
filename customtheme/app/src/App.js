import React, { useState, useEffect } from 'react';
import './style.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Container from './components/layout/container/container';
import PageContainer from './components/layout/container/pagecontainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/post:id" element={<PageContainer id={'/:id'}/>} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
