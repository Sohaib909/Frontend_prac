import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
 import './index.css';

import './App.css'
import Testimonials from './components/Testimonials';

function App() {
  return(
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Testimonials/>
    <Footer/>
    </>
  )
  
}

export default App
