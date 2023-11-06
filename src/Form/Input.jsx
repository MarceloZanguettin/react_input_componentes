import React from 'react';

const Input = ({ label }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="text" />
    </div>
  );
};

export default Input;
