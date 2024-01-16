const morgan = require('morgan'); //HTTP request logger middleware for node.js

const logger = morgan(
  ':method :url :status :res[content-length] - :response-time ms'
);

// Handle undefined routes
const unknownEndpoint = (request, response, next) => {
  response.status(404).json({ error: 'Unknown endpoint' });
};

module.exports = { logger, morgan, unknownEndpoint };
