import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Allbloggers from './Components/Allbloggers/Allbloggers';
import Navbar from './Components/Navbar/Navbar';
import NotYet from './Components/notYet/NotYet';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Allbloggers />} />
        <Route path="/about" element={<NotYet />} />
      </Routes>
    </div>
  );
}

export default App;
