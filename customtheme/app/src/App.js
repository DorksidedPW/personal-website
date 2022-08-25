import React from 'react';
import './style.css';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Container from './components/layout/container/container';
import Viewer from './components/viewerapp/viewer'
import PageContainer from './components/layout/container/pagecontainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/app" element={<Viewer />} />
          <Route path="/post:id" element={<PageContainer id={'/:id'}/>} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
