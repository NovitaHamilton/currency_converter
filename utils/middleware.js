const morgan = require('morgan'); //HTTP request logger middleware for node.js

//Define custom token for logging request body for POST request
morgan.token('body', function (req, res) {
  return JSON.stringify(req.body);
});

const logger = morgan(
  ':method :url :status :res[content-length] - :response-time ms :body'
);

// Handle undefined routes
const unknownEndpoint = (request, response, next) => {
  response.status(404).json({ error: 'Unknown endpoint' });
};

module.exports = { logger, morgan, unknownEndpoint };
