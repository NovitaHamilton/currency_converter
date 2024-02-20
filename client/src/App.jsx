import { useState, useEffect } from 'react';
import Login from './components/Login';
import Conversion from './components/Conversion';
import '../index.css';
import AddCurrency from './components/AddCurrency';
import UpdateCurrency from './components/UpdateCurrency';
import DeleteCurrency from './components/DeleteCurrency';

const App = () => {
  const mockFunction = () => {};
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className="first-section">
        <Conversion convertCurrencyAmountFromMock={mockFunction} />
        <Login />
      </div>

      <div className="second-section">
        <AddCurrency />
        <UpdateCurrency />
        <DeleteCurrency />
      </div>
    </div>
  );
};

export default App;
