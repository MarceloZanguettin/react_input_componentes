import React from 'react';
import Input from './Form/Input';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form>
      <Input id="nome" label="Nome" />
      <Input id="email" label="Email" />
    </form>
  );
};

export default App;
