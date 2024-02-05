import React, { useState } from 'react';
import Card from './common/Card';
import Form from './common/Form';
import FormInput from './common/FormInput';

function UpdateCurrency() {
  const [updateCurrencyForm, setUpdateCurrencyForm] = useState({
    currencyCode: '',
    newConversionRate: '',
  });
  const handleUpdateCurrency = (e) => {
    e.preventDefault();
  };

  return (
    <div className="UpdateCurrency">
      <Card title="Update Currency">
        <Form buttonText="Update" onSubmit={handleUpdateCurrency}>
          <FormInput
            label="Currency Code"
            type="text"
            value={updateCurrencyForm.currencyCode}
            onChange={(value) =>
              setUpdateCurrencyForm((preValue) => ({
                ...preValue,
                currencyCode: value,
              }))
            }
            name="currencyCode"
          />
          <FormInput
            label="New Conversion Rate"
            type="text"
            value={updateCurrencyForm.newConversionRate}
            onChange={(value) =>
              setUpdateCurrencyForm((preValue) => ({
                ...preValue,
                conversionRate: value,
              }))
            }
            name="newConversionRate"
          />
        </Form>
      </Card>
    </div>
  );
}

export default UpdateCurrency;
