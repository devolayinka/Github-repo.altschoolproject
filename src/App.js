import React from 'react';
import './App.css';
import Search from './component/fetch';
import Home from './pages/home'
import Error from './pages/error';
import { Routes, Route } from "react-router-dom";

function App() {

  return (     
      <div className="container">
        <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/home" element={  <Home /> }/>
        <Route path ="/search" element={  <Search /> }/>
        <Route path ="*" element={  <Error /> }/>
    </Routes>
  </div>
  );
}

export default App;
