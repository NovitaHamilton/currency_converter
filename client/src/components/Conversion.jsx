import React from 'react';
import CurrencyWithFlag from './common/CurrencyWithFlag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

function Conversion() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Conversion">
      <form onSubmit={handleFormSubmit}>
        <div className="currency-from">
          <CurrencyWithFlag currencyCode="CAD"></CurrencyWithFlag>
          <input type="number" value="1" name="currencyFrom"></input>
        </div>

        <div className="arrow-icon">
          <FontAwesomeIcon icon={faExchangeAlt} />
        </div>

        <div className="currency-to">
          <CurrencyWithFlag currencyCode="IDR"></CurrencyWithFlag>
          <input type="number" value="11777.28"></input>
        </div>
      </form>
    </div>
  );
}

export default Conversion;
