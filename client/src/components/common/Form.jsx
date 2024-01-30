import React from 'react';
import Button from './Button';

function Form({ onSubmit, buttonText, children }) {
  return (
    <form onSubmit="">
      <h2>Form</h2>
      {React.Children.map(
        children,
        (
          child // iterate over its the components passed (children)
        ) =>
          React.cloneElement(child, {
            onChange: hadleInputChange,
            value: formState[child.props.name] || '',
          })
      )}

      <Button type="submit">{buttonText}</Button>
    </form>
  );
}

export default Form;
