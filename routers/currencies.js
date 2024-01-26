const currenciesRouter = require('express').Router();
const { request, response } = require('express');
const Currency = require('../models/currency'); // to import the Currency model

/**
 * DATA STORAGE
 * We're using a local variable 'currencies' to store our data: a list of currency objects
 * Each object represents a 'currency', and contains the following fields
 * id: a number,
 * currencyCode: a string, three letters (see https://www.iban.com/currency-codes as reference)
 * country: a string, the name of the country
 * conversionRate: the amount, in that currency, required to equal 1 Canadian dollar
 */

//-----------------GET Endpoint------------------------//
/**
 * @receives a get request to the URL: http://localhost:3001/api/currency/
 * @responds with returning the data as a JSON
 */

// Without Sequelize and model
// currenciesRouter.get('/', (request, response) => {
//   response.status(201).json(currencies);
// });

// With Sequelize and model
currenciesRouter.get('/', async (request, response) => {
  try {
    const currencies = await Currency.findAll();
    response.status(200).json(currencies);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});

//------------------------GET:id Endpoint--------------//

/**
 * @receives a get request to the URL: http://localhost:3001/api/currencies/:id
 * @responds with returning specific data as a JSON
 */

// Without Sequelize and model
// currenciesRouter.get('/:id', (request, response) => {
//   const id = Number(request.params.id);
//   const currency = currencies.find((currency) => currency.id === id);

//   // Check if currency was found
//   if (!currency) {
//     return response.status(404).json({ error: 'Currency not found' });
//   }

//   response.status(201).json(currency);
// });

// With Sequelize and model
currenciesRouter.get('/:id', async (request, response) => {
  try {
    // Capture the id from the request link
    const id = Number(request.params.id);

    // To find currency by its Primary Key
    const currency = await Currency.findByPk(id);

    // Check if currency was found
    if (!currency) {
      return response.status(404).json({ error: 'Currency not found' });
    }

    // To retrieve the currency if found
    response.status(200).json(currency);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
  }
});

//------------------POST Endpoint----------------------//

/**
 * @receives a post request to the URL: http://localhost:3001/api/currencies,
 * with data object enclosed
 * @responds by returning the newly created resource
 */

// Without Sequelize and model
// currenciesRouter.post('/', (request, response) => {
//   const content = request.body.content;

//   if (
//     !content.currencyCode ||
//     !content.country ||
//     content.conversionRate == null
//   ) {
//     return response.status(400).json({ error: 'Missing required input' });
//   }

//   const newCurrency = {
//     id: generateId(),
//     ...content,
//   };

//   currencies = currencies.concat(newCurrency);
//   response.status(201).json(newCurrency);
// });

// With Sequelize and model
currenciesRouter.post('/', async (request, response) => {
  try {
    // Get data from request body
    const content = request.body.content;
    // Validate data
    if (
      !content.currencyCode ||
      !content.countryId ||
      content.conversionRate == null
    ) {
      return response.status(400).json({ error: 'Missing required input' });
    }

    // Create a new currency record
    const newCurrency = await Currency.create(content);
    // Respond with newly created currency
    response.status(201).json({ newCurrency });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
  }
});

//------------------PUT:id/:newRate endpoint-----------------------//
/**
 * @receives a put request to the URL: http://localhost:3001/api/currency/:id/:newRate
 * with data object enclosed
 * Hint: updates the currency with the new conversion rate
 * @responds by returning the newly updated resource
 */

// Without Sequelize and model
// currenciesRouter.put('/:id/:newRate', (request, response) => {
//   const newRate = Number(request.params.newRate);
//   const id = Number(request.params.id);
//   const selectedCurrency = currencies.find((currency) => currency.id === id);

//   selectedCurrency.conversionRate = newRate;

//   response.status(201).json(selectedCurrency);
// });

// With Sequalize and model
currenciesRouter.put('/:id/:newRate', async (request, response) => {
  try {
    const newRate = Number(request.params.newRate);
    const id = Number(request.params.id);

    // To find the currency by id
    const selectedCurrency = await Currency.findByPk(id);
    if (!selectedCurrency) {
      return response.status(404).json({ error: 'Currency not found' });
    }

    // To update the currency rate
    const udpatedCurrency = await selectedCurrency.update({
      conversionRate: newRate,
    });

    // Respond with the updated currency
    response.status(200).json(udpatedCurrency);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});

//----------------DELETE:id Endpoint-----------------------//

/**
 * @receives a delete request to the URL: http://localhost:3001/api/currencies/:id,
 * @responds by returning a status code of 204
 */

// Without Sequelize and model
// currenciesRouter.delete('/:id', (request, response) => {
//   const id = Number(request.params.id);
//   currencies = currencies.filter((currency) => currency.id !== id);
//   response.status(201).json(currencies);
// });

// With Sequalize and model
currenciesRouter.delete('/:id', async (request, response) => {
  try {
    const id = Number(request.params.id);

    // To find the currency by id
    const selectedCurrency = await Currency.findByPk(id);
    if (selectedCurrency) {
      await selectedCurrency.destroy();
      response
        .status(200)
        .json(`${selectedCurrency.currencyCode} has been successfully deleted`);
    } else {
      return response.status(404).json({ error: 'Currency not found' });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = currenciesRouter;
