import React, { useState } from 'react';
import Card from './common/Card';
import Form from './common/Form';
import FormInput from './common/FormInput';
import currencyService from '../services/currencyService';

function UpdateCurrency() {
  // const [updateCurrencyForm, setUpdateCurrencyForm] = useState({
  //   currencyCode: '',
  //   newConversionRate: '',
  // });
  const handleUpdateCurrency = async (e, formInput, resetForm) => {
    e.preventDefault();
    console.log('Update Currency:', formInput);

    try {
      // Get all currencies
      const currenciesResponse = await currencyService.getCurrencies();
      console.log(currenciesResponse);

      // Find the currency to update based on currencyCode
      const currencyToUpdate = await currenciesResponse.find(
        (currency) => currency.currencyCode === formInput.currencyCode
      );
      console.log(currencyToUpdate);

      // Get the id of the currency found
      const currencyToUpdateId = currencyToUpdate.id;

      // Get the new rate from input
      const newRate = formInput.newConversionRate;

      // Update conversion rate
      const updateResponse = await currencyService.updateCurrency(
        currencyToUpdateId,
        newRate
      );
      console.log('Updated Currency:', updateResponse);

      // Reset form
      resetForm();
    } catch (error) {
      console.error('Error updating currency:', error);
      throw error;
    }
  };

  return (
    <div className="UpdateCurrency">
      <Card title="Update Currency">
        <Form buttonText="Update" onFormSubmit={handleUpdateCurrency}>
          <FormInput label="Currency Code" type="text" name="currencyCode" />
          <FormInput
            label="New Conversion Rate"
            type="text"
            name="newConversionRate"
          />
        </Form>
      </Card>
    </div>
  );
}

export default UpdateCurrency;
