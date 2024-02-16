import React from 'react';
import CurrencyFlag from 'react-currency-flags';

function CurrencyWithFlag({
  currencyCode,
  currencies,
  onCurrencyChange,
  disabled,
}) {
  console.log(currencyCode);
  const handleCurrencyChange = (e) => {
    const selectedCurrency = currencies.find(
      (option) => option.currencyCode === e.target.value
    );
    console.log(selectedCurrency);
    onCurrencyChange(selectedCurrency);
  };

  return (
    <div className="currency-with-flag">
      <div className="currency-flag">
        {currencyCode && <CurrencyFlag currency={currencyCode} width={50} />}
      </div>
      <span className="currency-code">
        <select
          name="currencyCode"
          value={currencyCode}
          onChange={handleCurrencyChange}
          disabled={disabled}
        >
          {currencies.map((option) => (
            <option key={option.currencyCode} value={option.currencyCode}>
              {option.currencyCode}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
}

export default CurrencyWithFlag;
