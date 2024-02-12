const express = require('express'); // We import the express application
const currenciesRouter = require('./routes/currencies');
const middleware = require('./utils/middleware');
const cors = require('cors'); // Necessary for localhost
const app = express(); // Creates an express application in app

/**
 * Initial application setup
 * We need to use cors so we can connect to a localhost later
 * We need express.json so we can receive requests with JSON data attached
 */
app.use(cors());
app.use(express.json()); // to parse JSON bodies
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
app.use(middleware.unknownEndpoint); // to handle unknown endpoint

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
