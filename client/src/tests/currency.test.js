const { convertCurrencyAmountFrom } = require('../utils/currency_utils'); // Update this

/**
 * The tests below will be based on the following conversion amounts,
 * where $1 CAD (Canadian dollar) is equivalent to $0.75 USD (US dollar),
 * and $0.58 GBP (British pounds). For ease of tests,
 * we have avoided putting any extraneous key-value pairs in the currency
 * objects, as we only need the conversion rate.
 */

const cadCurrency = {
  conversionRate: 1,
};

const usdCurrency = {
  conversionRate: 0.75,
};

const gbpCurrency = {
  conversionRate: 0.58,
};

/**
 * Tests follow the format of
 * test('description', () => { ...your code here... })
 * Please read here: https://jestjs.io/docs/getting-started
 * for more information on using jest to perform testing
 */
describe('Testing conversion', () => {
  /**
   * Test 1: Completed
   * This test performs a currency conversion, where it's really just the same currency
   * Therefore, we should return the same amount
   */
  test('same currency conversion', () => {
    const result = convertCurrencyAmountFrom(cadCurrency, cadCurrency, 100);
    expect(result).toBe(100);
  });

  /**
   * Test 2: TODO
   * Write a test that performs a currency conversion from CAD to GBP, for $100 CDN
   * Hint: the result should be $58 GBP according to our provided currencies.
   */
  test('CDN to GBP conversion', () => {
    const result = convertCurrencyAmountFrom(cadCurrency, gbpCurrency, 100);
    expect(result).toBe(58);
  });

  /**
   * Test 3: TODO
   * Write a test that performs a currency conversion from CAD to USD, for $75 CDN
   */
  test('CDN to USD conversion', () => {
    const result = convertCurrencyAmountFrom(cadCurrency, usdCurrency, 75);
    expect(result).toBe(56.25);
  });

  /**
   * Test 4: TODO
   * Write a test that performs a currency conversion from USD to GBP, for $200 USD
   */
  test('USD to GBP conversion', () => {
    const result = convertCurrencyAmountFrom(usdCurrency, gbpCurrency, 200);
    expect(result).toBe(154.67);
  });

  /**
   * Test 5: TODO
   * Write a test that performs a currency conversion from GBP to CAD, for $50 GBP
   */
  test('GBP to CAD conversion', () => {
    const result = convertCurrencyAmountFrom(gbpCurrency, cadCurrency, 50);
    expect(result).toBe(86.21);
  });
});
