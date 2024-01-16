const currenciesRouter = require('express').Router();

/**
 * DATA STORAGE
 * We're using a local variable 'currencies' to store our data: a list of currency objects
 * Each object represents a 'currency', and contains the following fields
 * id: a number,
 * currencyCode: a string, three letters (see https://www.iban.com/currency-codes as reference)
 * country: a string, the name of the country
 * conversionRate: the amount, in that currency, required to equal 1 Canadian dollar
 */

let currencies = [
  {
    id: 1,
    currencyCode: 'CDN',
    country: 'Canada',
    conversionRate: 1,
  },
  {
    id: 2,
    currencyCode: 'USD',
    country: 'United States of America',
    conversionRate: 0.75,
  },
];

// To generate a new ID for new currency entry
const generateId = () => {
  return currencies.length + 1;
};

/**
 * TODO: GET Endpoint
 * @receives a get request to the URL: http://localhost:3001/api/currency/
 * @responds with returning the data as a JSON
 */
currenciesRouter.get('/', (request, response) => {
  response.status(201).json(currencies);
});

/**
 * TODO: GET:id Endpoint
 * @receives a get request to the URL: http://localhost:3001/api/currencies/:id
 * @responds with returning specific data as a JSON
 */
currenciesRouter.get('/:id', (request, response) => {
  const id = Number(request.params.id);
  const currency = currencies.find((currency) => currency.id === id);

  // Check if currency was found
  if (!currency) {
    return response.status(404).json({ error: 'Currency not found' });
  }

  response.status(201).json(currency);
});

/**
 * TODO: POST Endpoint
 * @receives a post request to the URL: http://localhost:3001/api/currencies,
 * with data object enclosed
 * @responds by returning the newly created resource
 */
currenciesRouter.post('/', (request, response) => {
  const content = request.body.content;

  if (
    !content.currencyCode ||
    !content.country ||
    content.conversionRate == null
  ) {
    return response.status(400).json({ error: 'Missing required input' });
  }

  const newCurrency = {
    id: generateId(),
    ...content,
  };

  currencies = currencies.concat(newCurrency);
  response.status(201).json(newCurrency);
});

/**
 * TODO: PUT:id endpoint
 * @receives a put request to the URL: http://localhost:3001/api/currency/:id/:newRate
 * with data object enclosed
 * Hint: updates the currency with the new conversion rate
 * @responds by returning the newly updated resource
 */
currenciesRouter.put('/:id/:newRate', (request, response) => {
  const newRate = Number(request.params.newRate);
  const id = Number(request.params.id);
  const selectedCurrency = currencies.find((currency) => currency.id === id);

  selectedCurrency.conversionRate = newRate;

  response.status(201).json(selectedCurrency);
});

/**
 * TODO: DELETE:id Endpoint
 * @receives a delete request to the URL: http://localhost:3001/api/currencies/:id,
 * @responds by returning a status code of 204
 */
currenciesRouter.delete('/:id', (request, response) => {
  const id = Number(request.params.id);
  currencies = currencies.filter((currency) => currency.id !== id);
  response.status(201).json(currencies);
});

module.exports = currenciesRouter;
