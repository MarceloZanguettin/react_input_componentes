import React from 'react';

const Input = (props) => {
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <input type="text" />
    </div>
  );
};

export default Input;
