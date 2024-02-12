import React from 'react';
import CurrencyFlag from 'react-currency-flags';

function CurrencyWithFlag({ currencyCode }) {
  return (
    <div className="currency-with-flag">
      <div className="currency-flag">
        <CurrencyFlag currency={currencyCode} width={50} />
      </div>
      <span className="currency-code">{currencyCode}</span>
    </div>
  );
}

export default CurrencyWithFlag;
