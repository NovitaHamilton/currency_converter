import React, { useState } from 'react';
import Card from './common/Card';
import Form from './common/Form';
import FormInput from './common/FormInput';

function DeleteCurrency() {
  const [deleteCurrencyForm, setDeleteCurrencyForm] = useState([
    {
      currencyCode: '',
    },
  ]);

  const handleDeleteCurrency = (e) => {
    e.preventDefault();
  };

  return (
    <div className="DeleteCurrency">
      <Card title="Delete Currency">
        <Form buttonText="Delete" onSubmit={handleDeleteCurrency}>
          <FormInput
            label="Currency Code"
            type="text"
            value={deleteCurrencyForm.currencyCode}
            onChange={(value) =>
              setDeleteCurrencyForm((preValue) => ({
                ...preValue,
                currencyCode: value,
              }))
            }
            name="currencyCode"
          />
        </Form>
      </Card>
    </div>
  );
}

export default DeleteCurrency;
