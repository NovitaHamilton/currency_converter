import React, { useState } from 'react';
import Button from './Button';

function Form({ onSubmit, buttonText, children }) {
  const [formInput, setFormInput] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault(e);
    const { name, value } = e.target;
    setFormInput((prevValue) => ({ ...prevValue, [name]: value }));
  };
  console.log(formInput);

  return (
    <form onSubmit={onSubmit}>
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
