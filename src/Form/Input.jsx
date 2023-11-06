import React from 'react';

const Input = ({ id, label }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} />
    </div>
  );
};

export default Input;
