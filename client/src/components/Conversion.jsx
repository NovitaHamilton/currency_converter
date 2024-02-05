import React from 'react';
import CurrencyWithFlag from './common/CurrencyWithFlag';
import Button from './common/Button';
import Form from './common/Form';

function Conversion() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Conversion">
      <Form onSubmit={handleFormSubmit} buttonText="Convert">
        <div className="currency-from">
          <CurrencyWithFlag currencyCode="CAD"></CurrencyWithFlag>
          <input type="number" value="1" name="currencyFrom"></input>
        </div>

        {/* <div className="convert-button">
          <Button>Convert</Button>
        </div> */}

        <div className="currency-to">
          <CurrencyWithFlag currencyCode="IDR"></CurrencyWithFlag>
          <input type="number" value="11777.28"></input>
        </div>
      </Form>
    </div>
  );
}

export default Conversion;
