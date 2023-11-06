import React from 'react';
import Input from './Form/Input';

const App = () => {
  return (
    <form>
      <Input id="nome" label="Nome" />
      <Input id="email" label="Email" />
    </form>
  );
};

export default App;
