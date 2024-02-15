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
const convertCurrency = (currencyA, currencyB, amount) => {
  // CAD to CAD conversion
  if (currencyA === currencyB) {
    return amount;
    // CAD to non-CAD
  } else if (currencyA === 'CAD') {
    return parseFloat(amount * currencyB.conversionRate).toFixed(2);
  }
  // Non-CAD to CAD
  else if (currencyB === 'CAD') {
    return parseFloat((amount / currencyA.conversionRate).toFixed(2));
  }
  // Non-CAD to CAD
  else {
    return parseFloat(
      ((amount / currencyA.conversionRate) * currencyB.conversionRate).toFixed(
        2
      )
    );
  }
};

export default convertCurrency;
