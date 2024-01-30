import React from 'react';

function FormInput({ ...props }) {
  // uses destructuring method to collect all props into a single object called 'props'
  return (
    <div className="FormInput">
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      ></input>
    </div>
  );
}

export default FormInput;
