import React, { useState } from 'react';
import Card from './common/Card';
import Form from './common/Form';
import FormInput from './common/FormInput';
import currencyService from '../services/currencyService';
import countryService from '../services/countryService';

function AddCurrency() {
  const handleAddCurrency = async (e, formInput, resetForm) => {
    e.preventDefault();
    console.log(formInput);

    try {
      // Add country to DB
      const countryResponse = await countryService.addCountry({
        name: formInput.countryName,
      });

      // Get the newly created country ID
      const countryId = countryResponse.newCountry.id;

      // Add currency with the countryId to DB
      const currencyResponse = await currencyService.addCurrency({
        countryId,
        currencyCode: formInput.currencyCode,
        conversionRate: formInput.conversionRate,
      });

      // Reset form
      resetForm();
    } catch (error) {
      console.error();
    }
  };

  return (
    <div className="AddCurrency">
      <Card title="Add Currency">
        <Form buttonText="Add" onFormSubmit={handleAddCurrency}>
          <FormInput label="Country Name" type="text" name="countryName" />

          <FormInput label="Currency Code" type="text" name="currencyCode" />

          <FormInput
            label="Conversion Rate"
            type="text"
            name="conversionRate"
          />
        </Form>
      </Card>
    </div>
  );
}

export default AddCurrency;
