import React from 'react';

import {Routes, Route } from 'react-router-dom'; // Import Router and Route
import Navbar from './assets/Navbar'; // Import Navbar
import Home from './assets/Home';
import Products from './assets/Products';
import Login from './assets/Login';
import Register from './assets/Register';

const App = () => {
  return (
   
      <div className="w-[90%] m-auto mt-5">
        <Navbar />
        <div className='mt-24'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        </Routes>
        </div>
      </div>
   
  );
};

export default App;
