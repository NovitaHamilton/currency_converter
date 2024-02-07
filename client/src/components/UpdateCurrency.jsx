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
      // Get the currencies
      const currenciesResponse = await currencyService.getCurrencies();
      console.log(currenciesResponse);

      // Find the currency ro update based on currencyCode
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
          <FormInput
            label="Currency Code"
            type="text"
            // value={updateCurrencyForm.currencyCode}
            // onChange={(value) =>
            //   setUpdateCurrencyForm((preValue) => ({
            //     ...preValue,
            //     currencyCode: value,
            //   }))
            // }
            name="currencyCode"
          />
          <FormInput
            label="New Conversion Rate"
            type="text"
            // value={updateCurrencyForm.newConversionRate}
            // onChange={(value) =>
            //   setUpdateCurrencyForm((preValue) => ({
            //     ...preValue,
            //     conversionRate: value,
            //   }))
            // }
            name="newConversionRate"
          />
        </Form>
      </Card>
    </div>
  );
}

export default UpdateCurrency;
