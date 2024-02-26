const Currency =
  process.env.NODE_ENV === 'test'
    ? require('./models/testCurrency')
    : require('./models/currency');

Currency.sync().then(() => {
  console.log('Currency table has been successfully created');

  try {
    Currency.bulkCreate([
      {
        currencyCode: 'CDN',
        countryId: 1,
        conversionRate: 1,
      },
      {
        currencyCode: 'USD',
        countryId: 2,
        conversionRate: 0.75,
      },
    ]).then(() => console.log('Currencies created successfully'));
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: 'Error creating table' });
  }
});
