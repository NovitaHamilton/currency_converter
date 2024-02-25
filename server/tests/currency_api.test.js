/**
 * Necessary imports, make sure you have these packages installed in your server directory
 */
const supertest = require('supertest');
const { sequelize } = require('../config/sequelize'); // Provide a path to your config.js or database.js file, wherever you export that sequelize
const helper = require('./test_helper');
const server = require('../server'); // Provide a path to your server.js file, or wherever you are starting your server and add your endpoints via router
const api = supertest(server); // Creates a test api that will send requests where we want them to be sent

beforeEach(async () => {
  // Setup currencies table (if not already setup)
  await helper.init();

  // Clear data and load new entries for tests
  await helper.clearData();
  await helper.load();
});

describe('GET tests', () => {
  /**
   * Completed:
   * This is an example test, where we are checking if we have 2 currencies in the database as expected
   * we added the two currencies in the 'beforeEach' setup phase
   */
  test('We have 2 currencies at the start', async () => {
    const response = await api.get('/api/currencies');
    expect(response.body).toHaveLength(2);
  });

  /**
   * Completed:
   * This is another example test, where we are checking if we are able to get a particular currency as expected.
   * Our test will get the first currency, the Canadian one that we added.
   * You can confirm the identiy of the currency based on the conversionRate and the currencyCode
   * We are restricting it to these two, rather than a complete equals, since the table provides other extraneous values
   * such as time of last update and so on
   */
  test('Getting a specific currency', async () => {
    const canadianCurrency = helper.initialCurrencies[0];
    const getId = canadianCurrency.id;

    // Verify that we get the same currency
    const response = await api.get(`/api/currencies/${getId}`).expect(200);

    // As stated above, we will compare the conversionRate and currencyCode
    const currencyReceived = response.body;
    expect(canadianCurrency.conversionRate).toEqual(
      currencyReceived.conversionRate
    );
    expect(canadianCurrency.currencyCode).toEqual(
      currencyReceived.currencyCode
    );
  });
});

/**
 * The tests for POST, PUT, and DELETE are left un-implemented, and you will have to complete them
 * All the helper functions have been provided, and the examples as well are sufficient
 * You will need to do some reading on supertest documentation as well
 *
 * IMPORTANT: You are only working with currencies, we removed the countries connection to make it a bit simpler
 */

describe('POST tests', () => {
  // Add a currency, and verify that a currency is added to our database
  test('Adding a currency', async () => {
    // Create new currency
    const newCurrency = {
      id: 3,
      currencyCode: 'IDR',
      conversionRate: 11562.78,
    };

    // Send it to the endpoint
    const response = await api
      .post(`/api/currencies/`)
      .send(newCurrency)
      .expect(201);

    const currencyReceived = response.body;

    // Compare the length of the database from 2 to 3 after the new currency added
    const currencies = await helper.currenciesInDb();
    expect(currencies).toHaveLength(3);

    // Check if the currency added is the same as the one we get back
    expect(newCurrency.id).toEqual(currencyReceived.id);
    expect(newCurrency.currencyCode).toEqual(currencyReceived.currencyCode);
  });
});

describe('PUT tests', () => {
  // Update a currency, and verify that a currency has been updated
  test('Updating a currency', async () => {
    // Define the newRate and the id of the currency to be updated
    const newRate = 0.73;
    const currencyToUpdate = helper.initialCurrencies[1];
    const id = currencyToUpdate.id;

    // Send it to the endpoint
    const response = await api
      .put(`/api/currencies/${id}/${newRate}`)
      .send(newRate.toString())
      .expect(200);

    // Check if the conversion rate is updated to the newRate
    const updatedCurrency = response.body;
    expect(newRate).toEqual(updatedCurrency.conversionRate);
    expect(id).toEqual(updatedCurrency.id);
  });
});

describe('DELETE tests', () => {
  // Delete a currency, and verify that a currency has been deleted
  test('Deleting a currency', async () => {
    // Define the id of the currency to delete
    const currencyToDelete = helper.initialCurrencies[1];
    const id = currencyToDelete.id;

    // Send it to endpoint
    const response = await api.delete(`/api/currencies/${id}`).expect(200);

    // Check the new length of the currencies, should change from 2 to 1
    const currencies = await helper.currenciesInDb();
    expect(currencies).toHaveLength(1);
  });
});

afterAll(async () => {
  // Closes connection after all tests run
  server.close();
  await sequelize.close();
});
