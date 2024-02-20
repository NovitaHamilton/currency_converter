import React, { useEffect, useState } from 'react';
import CurrencyWithFlag from './common/CurrencyWithFlag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import currencyService from '../services/currencyService';
import {
  convertCurrencyAmountFrom,
  convertCurrencyAmountTo,
} from '../utils/currency_utils';

function Conversion({ convertCurrencyAmountFromMock }) {
  const [currencies, setCurrencies] = useState([]);
  const [currencyFrom, setCurrencyFrom] = useState('');
  const [currencyTo, setCurrencyTo] = useState('');
  const [amountFrom, setAmountFrom] = useState(1);
  const [amountTo, setAmountTo] = useState(0);
  const [conversionSource, setConversionSource] = useState(''); // To keep track of the source that triggers useEffect for conversion

  // To initialize currencies, getting data from DB
  useEffect(() => {
    initCurrencies();
  }, []);

  // To trigger conversion when there's a change on amountFrom, currencyTo, currencies, amountTo, conversionSource
  useEffect(() => {
    if (conversionSource === 'amountTo') {
      handleConversionAmountTo();
    } else {
      handleConversionAmountFrom();
    }
  }, [amountFrom, currencyTo, currencies, amountTo, conversionSource]);

  const initCurrencies = async () => {
    try {
      const data = await currencyService.getCurrencies();
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

      // Calculate the initial amountTo (in USD)
      const initialAmountTo = convertCurrencyAmountFrom(
        currencyFrom,
        currencyTo,
        amountFrom
      );
      setAmountTo(initialAmountTo);
    } catch (error) {
      console.error('Error fetching currencies', error);
    }
  };

  // To handle changes on currency code dropdown
  const handleCurrencyFromChange = (selectedCurrency) => {
    setCurrencyFrom(selectedCurrency);
  };

  const handleCurrencyToChange = (selectedCurrency) => {
    setCurrencyTo(selectedCurrency);
  };

  // To handle change on amount input
  const handleAmountFromChange = (e) => {
    e.preventDefault();
    const value = e.target.value.trim();
    setAmountFrom(value || '');
    setConversionSource('amountFrom');
  };

  const handleAmountToChange = (e) => {
    e.preventDefault();
    const value = e.target.value.trim();
    setAmountTo(value || '');
    setConversionSource('amountTo');
  };

  // To handle conversion
  const handleConversionAmountFrom = () => {
    // if (currencyFrom && currencyFrom.currencyCode === 'CAD') {
    const convertedAmount = convertCurrencyAmountFrom(
      currencyFrom,
      currencyTo,
      amountFrom
    );
    setAmountTo(convertedAmount);
    convertCurrencyAmountFromMock();
    // }
  };

  const handleConversionAmountTo = () => {
    // if (currencyFrom && currencyFrom.currencyCode === 'CAD') {
    const convertedAmount = convertCurrencyAmountTo(
      currencyFrom,
      currencyTo,
      amountTo
    );
    setAmountFrom(convertedAmount);
    // }
  };

  return (
    <div className="Conversion" data-testid="conversion-test">
      <form>
        <div className="currency-from">
          <CurrencyWithFlag
            currencyCode={currencyFrom.currencyCode}
            currencies={currencies}
            value={currencyFrom.currencyCode}
            onCurrencyChange={handleCurrencyFromChange}
            disabled={true}
          ></CurrencyWithFlag>

          <input
            type="number"
            value={amountFrom}
            name="amount-from"
            data-testid="amountFromInput-test"
            onChange={handleAmountFromChange}
          ></input>
        </div>

        <div className="arrow-icon">
          <FontAwesomeIcon icon={faArrowRight} />
          {/* <FontAwesomeIcon icon={faExchangeAlt} /> */}
        </div>

        <div className="currency-to">
          <CurrencyWithFlag
            currencyCode={currencyTo.currencyCode}
            value={currencyTo.currencyCode}
            currencies={currencies}
            onCurrencyChange={handleCurrencyToChange}
          ></CurrencyWithFlag>
          <input
            name="amount-to"
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
