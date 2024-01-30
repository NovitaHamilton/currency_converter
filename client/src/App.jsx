import { useState, useEffect } from 'react';
import Login from './components/Login';
import Conversion from './components/Conversion';
import '../index.css';

const App = () => {
  console.log('test');
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className="first-section">
        <Conversion />
        <Login />
      </div>
    </div>
  );
};

export default App;
