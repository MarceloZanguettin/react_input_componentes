import React from 'react';

const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    >
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
