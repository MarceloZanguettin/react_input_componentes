import React from 'react';

const Select = ({ options }) => {
  return (
    <select>
      <options value="" disabled>
        Selecione
      </options>
      {options.map((options) => (
        <options key={options} value={options}>
          {options}
        </options>
      ))}
    </select>
  );
};

export default Select;
