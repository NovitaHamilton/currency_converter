import React, { useState } from 'react';
import Card from './common/Card';
import Form from './common/Form';
import FormInput from './common/FormInput';

function AddCurrency() {
  const [addCurrencyForm, setAddCurrencyForm] = useState({
    countryName: '',
    currencyCode: '',
    conversionRate: '',
  });
  const handleAddCurrency = (e) => {
    e.preventDefault();
  };
  return (
    <div className="AddCurrency">
      <Card title="Add Currency">
        <Form buttonText="Add" onSubmit={handleAddCurrency}>
          <FormInput
            label="Country Name"
            type="text"
            value={addCurrencyForm.countryName}
            onChange={(value) =>
              setAddCurrencyForm((preValue) => ({
                ...preValue,
                countryName: value,
              }))
            }
            name="countryName"
          />

          <FormInput
            label="Currency Code"
            type="text"
            value={addCurrencyForm.currencyCode}
            onChange={(value) =>
              setAddCurrencyForm((preValue) => ({
                ...preValue,
                currencyCode: value,
              }))
            }
            name="currencyCode"
          />

          <FormInput
            label="Conversion Rate"
            type="text"
            value={addCurrencyForm.conversionRate}
            onChange={(value) =>
              setAddCurrencyForm((preValue) => ({
                ...preValue,
                conversionRate: value,
              }))
            }
            name="conversionRate"
          />
        </Form>
      </Card>
    </div>
  );
}

export default AddCurrency;
