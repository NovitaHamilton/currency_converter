const Country = require('./models/country');

Country.sync().then(() => {
  console.log('Country table has been successfully created');

  try {
    Country.bulkCreate([
      {
        name: 'Canada',
      },
      {
        name: 'United States',
      },
    ]).then(() => console.log('Country created successfully'));
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: 'Error creating table' });
  }
});
