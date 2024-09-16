import React from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'bootstrap-icons/font/bootstrap-icons.css';


import PostDetails from './pages/PostDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import Wishlist from './pages/Wishlist';



function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/blog/:id" element={<PostDetails />} />
      <Route path='/register'element={<Register/>} />
      <Route path='/login'element={<Login/>} />
      <Route path='/wishlist'element={<Wishlist/>} />
   
    </Routes>
    < ToastContainer/>
    <Footer/>
   </Router>
    </>
  )
}

export default App;
