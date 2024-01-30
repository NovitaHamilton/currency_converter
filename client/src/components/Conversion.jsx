import React from 'react';
import CurrencyWithFlag from './common/CurrencyWithFlag';
import FormInput from './common/FormInput';

function Conversion() {
  return (
    <div className="Conversion">
      <div className="currency-from">
        <CurrencyWithFlag currencyCode="CAD"></CurrencyWithFlag>
        <input type="number" value="1"></input>
      </div>
      <div className="currency-to">
        <CurrencyWithFlag currencyCode="IDR"></CurrencyWithFlag>
        <input type="number" value="11777.28"></input>
      </div>
    </div>
  );
}

export default Conversion;
