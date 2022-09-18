import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Allbloggers from './Components/Allbloggers/Allbloggers';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Allbloggers />} />
      </Routes>
    </div>
  );
}

export default App;
