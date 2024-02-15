import React, { useEffect, useState } from 'react';
import CurrencyWithFlag from './common/CurrencyWithFlag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import currencyService from '../services/currencyService';
import convertCurrency from '../utils/currency_utils';

function Conversion() {
  const [currencies, setCurrencies] = useState([]);
  const [currencyFrom, setCurrencyFrom] = useState({
    currencyCode: 'CAD',
  });
  const [currencyTo, setCurrencyTo] = useState({
    currencyCode: 'USD',
  });
  const [amountFrom, setAmountFrom] = useState(1);
  const [amountTo, setAmountTo] = useState(0);

  // To initialize currencies, getting data from DB
  useEffect(() => {
    initCurrencies();
  }, []);

  const initCurrencies = async () => {
    try {
      const data = await currencyService.getCurrencies();
      console.log('Fetched currencies:', data);

      setCurrencies(data);

      // Set default values after currencies data has been fetched
      const defaultCurrencyFrom = data.find(
        (currency) => currency.currencyCode === 'CAD'
      );
      const defaultCurrencyTo = data.find(
        (currency) => currency.currencyCode === 'USD'
      );

      // Update the states with default values
      if (defaultCurrencyFrom && defaultCurrencyTo) {
        setCurrencyFrom(defaultCurrencyFrom);
        setCurrencyTo(defaultCurrencyTo);
      } else {
        console.error('DEfault currencies not found.');
      }
    } catch (error) {
      console.error('Error fetching currencies', error);
    }
  };

  // To handle changes on currency code dropdown
  const handleCurrencyFromChange = (selectedCurrency) => {
    setCurrencyFrom(selectedCurrency);
    handleConversion();
  };
  console.log('Currency From:', currencyFrom);

  const handleCurrencyToChange = (selectedCurrency) => {
    setCurrencyTo(selectedCurrency);
    handleConversion();
  };
  console.log('Currency To:', currencyTo);

  // To handle change on amount input
  const handleAmountFromChange = (e) => {
    e.preventDefault();
    const value = Number(e.target.value);
    setAmountFrom(value);
    handleConversion();
  };

  const handleAmountToChange = (e) => {
    e.preventDefault();
    const value = Number(e.target.value);
    setAmountTo(value);
    handleConversion();
  };

  // To handle conversion
  const handleConversion = () => {
    const convertedAmount = convertCurrency(
      currencyFrom,
      currencyTo,
      amountFrom
    );
    setAmountTo(convertedAmount);
  };

  return (
    <div className="Conversion">
      <form>
        <div className="currency-from">
          <CurrencyWithFlag
            currencyCode={currencyFrom.currencyCode}
            currencies={currencies}
            value={currencyFrom.currencyCode}
            onCurrencyChange={handleCurrencyFromChange}
          ></CurrencyWithFlag>

          <input
            type="number"
            value={amountFrom}
            name="currencyFrom"
            onChange={handleAmountFromChange}
          ></input>
        </div>

        <div className="arrow-icon">
          <FontAwesomeIcon icon={faExchangeAlt} />
        </div>

        <div className="currency-to">
          <CurrencyWithFlag
            currencyCode={currencyTo.currencyCode}
            value={currencyTo.currencyCode}
            currencies={currencies}
            onCurrencyChange={handleCurrencyToChange}
          ></CurrencyWithFlag>
          <input
            type="number"
            value={amountTo}
            onChange={handleAmountToChange}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default Conversion;
