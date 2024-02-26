import React, { useState } from 'react';
import Card from './common/Card';
import Form from './common/Form';
import FormInput from './common/FormInput';
import currencyService from '../services/currencyService';

function DeleteCurrency() {
  const handleDeleteCurrency = async (e, formInput, resetForm) => {
    e.preventDefault();
    try {
      // Get all currencies
      const currenciesResponse = await currencyService.getCurrencies();

      // Find the currency to delete based on currency code
      const currencyToDelete = await currenciesResponse.find(
        (currency) => currency.currencyCode === formInput.currencyCode
      );
      console.log('Currency to Delete:', currencyToDelete);

      const deleteResponse = await currencyService.deleteCurrency(
        currencyToDelete.id
      );
      console.log(deleteResponse);

      // Reset form
      resetForm();
    } catch (error) {
      console.error('Error deleting currency:', error);
      throw error;
    }
  };

  return (
    <div className="DeleteCurrency">
      <Card title="Delete Currency">
        <Form buttonText="Delete" onFormSubmit={handleDeleteCurrency}>
          <FormInput label="Currency Code" type="text" name="currencyCode" />
        </Form>
      </Card>
    </div>
  );
}

export default DeleteCurrency;
