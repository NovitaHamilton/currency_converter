const countriesRouter = require('express').Router();
const { request, response } = require('express');
const Country = require('../models/country'); //to import the country model

//-----------------GET Endpoint--------------------------//

/**
 * @receives a get request to the URL: http://localhost:3001/api/countries/
 * @responds with returning the data as a JSON
 */

countriesRouter.get('/', async (request, response) => {
  try {
    const countries = await Country.findAll();
    response.status(200).json(countries);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});

//---------------------GET:id Endpoint--------------//

/**
 * @receives a get request to the URL: http://localhost:3001/api/countries/:id
 * @responds with returning specific data as a JSON
 */

countriesRouter.get('/:id', async (request, response) => {
  try {
    // capture the id of the request
    const id = Number(request.params.id);

    // To find country by its Primary Key
    const country = await Country.findByPk(id);

    // Check if currency was found
    if (!country) {
      return response.status(404).json({ error: 'Country not found' });
    }

    // To retrieve the country if found
    response.status(200).json(country);
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

countriesRouter.post('/', async (request, response) => {
  try {
    // Get data from the request body
    const content = request.body.content;
    // Validate the data
    if (!content.name) {
      return response.status(400).json({ error: 'Missing required input' });
    }
    // Create a new country record
    const newCountry = await Country.create(content);
    // Response with newly created country
    response.status(201).json({ newCountry });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
  }
});

//------------------DELETE Endpoint----------------------//

/**
 * @receives a delete request to the URL: http://localhost:3001/api/currencies/:id,
 * @responds by returning a status code of 204
 */

countriesRouter.delete('/:id', async (request, response) => {
  try {
    const id = Number(request.params.id);

    // To find the country by id
    const selectedCountry = await Country.findByPk(id);
    if (selectedCountry) {
      await selectedCountry.destroy();
      response
        .status(200)
        .json(`${selectedCountry.name} has been successfully deleted`);
    } else {
      response.status(404).json({ error: 'Country not found' });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = countriesRouter;
