import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox';

const App = () => {
  /*
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);
  */
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validadteCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBur({ target }) {
    console.log(validadteCep(target.value));
  }

  function handleChanger({ target }) {
    if (error) validadteCep(target.value);
    setCep(target.value);
  }

  return (
    <form>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        value={cep}
        onBlur={handleBur}
        onChange={handleChanger}
      />
      {error && <p>{error}</p>}
    </form>
  );
  /*
  (
    <form>
      <h2>Checkbox</h2>
      <Checkbox
        options={['JavaScript', 'PHP', 'Python']}
        value={linguagens}
        setValue={setLinguagens}
      />
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <Select
        options={['smartphone', 'tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );*/
};

export default App;
