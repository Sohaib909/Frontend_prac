import React from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import './App.css'

import Home from './pages/Home';
 import SignUp from './pages/SignUp';

function App() {
   return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  );
  
}

export default App
