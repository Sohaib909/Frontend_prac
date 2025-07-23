import React from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import './App.css'

import Home from './pages/Home';
 import SignUp from './pages/SignUp';
 import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';

function App() {
   return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/reset-password" element={<ResetPassword/>}/>
    </Routes>
  );
  
}

export default App
