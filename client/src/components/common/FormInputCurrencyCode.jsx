import React from 'react';
import FormInput from './FormInput';

function FormInputCurrencyCode() {
  return (
    <div>
      <h2>FormInputCurrencyCode</h2>
      <FormInput
        type="text"
        placeholder="Currency Code, e.g USD"
        name="Currency Code"
        value="USD"
        onChange={hadleInputChange}
      />
    </div>
  );
}
