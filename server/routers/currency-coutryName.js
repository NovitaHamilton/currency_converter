const currencyCountryNameRouter = require('express').Router();
const { request, response } = require('express');
const Currency = require('../models/currency');
const Country = require('../models/country');

//-----------------GET Endpoint------------------------//
/**
 * @receives a get request to the URL: http://localhost:3001/api/currency-countryName/
 * @responds with returning the data as a JSON
 */

currencyCountryNameRouter.get('/', async (request, response) => {
  try {
    console.log('Request received:', request.url, request.query);
    // To fetch all currencies along with their associated countries
    const currencies = await Currency.findAll({
      include: [
        {
          model: Country,
          attributes: ['name'], // To get country name
          required: false,
        },
      ],
      attributes: ['currencyCode'],
    });

    response.status(200).json(currencies);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = currencyCountryNameRouter;
