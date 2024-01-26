const express = require('express'); // We import the express application
const currenciesRouter = require('./routers/currencies'); // to import router
const countriesRouter = require('./routers/countries'); // to import countries router
const currencyCountryNameRouter = require('./routers/currency-coutryName');
const middleware = require('./utils/middleware');
const cors = require('cors'); // Necessary for localhost
const { authenticateConnection } = require('./config/sequelize'); // To import database connection
const app = express(); // Creates an express application in app

//
/**
 * Initial application setup
 * We need to use cors so we can connect to a localhost later
 * We need express.json so we can receive requests with JSON data attached
 */
app.use(cors());
app.use(express.json());

authenticateConnection(); //authenticate connection to database

app.use(middleware.logger); // to log request

/**
 * TESTING Endpoint (Completed)
 * @receives a get request to the URL: http://localhost:3001/
 * @responds with the string 'Hello World!'
 */
app.get('/', (request, response) => {
  response.status(201).send('Hello World!');
});

app.use('/api/currencies/', currenciesRouter); // Add currencies route
app.use('/api/countries/', countriesRouter); // Add countries route
app.use('/api/currency-countryName/', currencyCountryNameRouter); // Add countries route
app.use(middleware.unknownEndpoint); // to handle unknown endpoint

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
