import React from 'react';

const Input = ({ id, label }) => {
  const [nome, setNome] = React.useState('');

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} />
    </div>
  );
};

export default Input;
