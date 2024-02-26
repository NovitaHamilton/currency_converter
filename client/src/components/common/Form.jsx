import React, { useState } from 'react';
import Button from './Button';

function Form({ buttonText, children, onFormSubmit }) {
  const [formInput, setFormInput] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault(e);
    const { name, value } = e.target;
    setFormInput((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const resetForm = () => {
    setFormInput({});
  };

  return (
    <form onSubmit={(e) => onFormSubmit(e, formInput, resetForm)}>
      {React.Children.map(
        children,
        (
          child // iterate over its the components passed (children)
        ) =>
          React.cloneElement(child, {
            onChange: handleInputChange,
            value: formInput[child.props.name] || '',
          })
      )}

      <Button type="submit">{buttonText}</Button>
    </form>
  );
}

export default Form;
