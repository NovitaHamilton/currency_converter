const express = require('express'); // We import the express application
const cors = require('cors'); // Necessary for localhost
const app = express(); // Creates an express application in app

/**
 * Initial application setup
 * We need to use cors so we can connect to a localhost later
 * We need express.json so we can receive requests with JSON data attached
 */
app.use(cors());
app.use(express.json());

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

/**
 * TESTING Endpoint (Completed)
 * @receives a get request to the URL: http://localhost:3001/
 * @responds with the string 'Hello World!'
 */
app.get('/', (request, response) => {
  response.status(201).send('Hello World!');
});

/**
 * TODO: GET Endpoint
 * @receives a get request to the URL: http://localhost:3001/api/currency/
 * @responds with returning the data as a JSON
 */
app.get('/api/currencies/', (request, response) => {
  response.status(201).json(currencies);
});

/**
 * TODO: GET:id Endpoint
 * @receives a get request to the URL: http://localhost:3001/api/currencies/:id
 * @responds with returning specific data as a JSON
 */
app.get('/api/currencies/:id', (request, response) => {
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
app.post('/api/currencies/', (request, response) => {
  const newId = currencies.length + 1;
  const newCurrency = {
    id: newId,
    currencyCode: 'IDR',
    country: 'Indonesia',
    conversionRate: 11581.4,
  };

  if (
    !newCurrency.currencyCode ||
    !newCurrency.country ||
    newCurrency.conversionRate == null
  ) {
    return response.status(400).json({ error: 'Missing required input' });
  }

  currencies = currencies.concat(newCurrency);
  response.status(201).json(currencies);
});

/**
 * TODO: PUT:id endpoint
 * @receives a put request to the URL: http://localhost:3001/api/currency/:id/:newRate
 * with data object enclosed
 * Hint: updates the currency with the new conversion rate
 * @responds by returning the newly updated resource
 */
app.put('/api/currencies/:id/:newRate', (request, response) => {
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
app.delete('/api/currencies/:id', (request, response) => {
  const id = Number(request.params.id);
  currencies = currencies.filter((currency) => currency.id !== id);
  response.status(201).json(currencies);
});

// Handle undefined routes
app.use((request, response) => {
  response.status(404).json({ error: 'Unknown endpoint' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
