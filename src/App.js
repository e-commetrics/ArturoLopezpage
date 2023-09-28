import React from 'react';
import './App.css';

import About from './Test'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Sección de video */}
      <Router>
        <Routes>
          <Route path="/" element={<About />} /> 
          <Route path="/AL" element={<Home />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
