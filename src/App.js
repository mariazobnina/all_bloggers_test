import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Allbloggers from './Components/Allbloggers/Allbloggers';
import Navbar from './Components/Navbar/Navbar';
import NotYet from './Components/notYet/NotYet';

function App() {
  const [flag, setFlag] = useState(false);
  console.log(flag);
  const burgerMenuHandler = (e) => {
    setFlag(!flag);
  };
  return (
    <div id={flag ? 'lock' : ''} className="App">
      <Navbar flag={flag} setFlag={setFlag} burgerMenuHandler={burgerMenuHandler} />
      <Routes>
        <Route path="/" element={<Allbloggers />} />
        <Route path="/about" element={<NotYet />} />
      </Routes>
    </div>
  );
}

export default App;
