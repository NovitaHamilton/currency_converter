/**
 * This file is meant to be where you will complete the utility function below, for performing a conversion of some amount
 * to another currency.
 */

/**
 * TODO:
 * @receives two currency objects, currencyA and currencyB, as well as an integer-amount of cash in currencyA
 * @performs a currency conversion between integer amount of currencyA to an integer amount of currencyB
 * @returns an integer
 */
const convertCurrencyAmountFrom = (currencyA, currencyB, amountFrom) => {
  console.log('AmountFrom:', amountFrom);
  console.log(currencyA, currencyB);
  // CAD to CAD conversion
  if (currencyA === currencyB) {
    return amountFrom;
    // CAD to non-CAD
  } else if (currencyA === 'CAD') {
    return parseFloat(amountFrom * currencyB.conversionRate).toFixed(2);
  }
  // Non-CAD to CAD
  else if (currencyB === 'CAD') {
    return parseFloat((amountFrom / currencyA.conversionRate).toFixed(2));
  }
  // Non-CAD to non-CAD
  else {
    return parseFloat(
      (
        (amountFrom / currencyA.conversionRate) *
        currencyB.conversionRate
      ).toFixed(2)
    );
  }
};

const convertCurrencyAmountTo = (currencyA, currencyB, amountTo) => {
  console.log('AmountTo:', amountTo);
  console.log(currencyA, currencyB);
  // CAD to CAD conversion
  if (currencyA === currencyB) {
    return amountTo;
    // CAD to non-CAD
  } else {
    return parseFloat(amountTo / currencyB.conversionRate).toFixed(2);
  }
};

export { convertCurrencyAmountFrom, convertCurrencyAmountTo };
