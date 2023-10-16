
import React from 'react';
import './App.css';

import Index from './AL'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
