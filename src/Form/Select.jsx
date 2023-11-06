import React from 'react';

const Select = ({ options, value, setValue }) => {
  return (
    <select value={value} onChange={({ target }) => setValue(target.value)}>
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
