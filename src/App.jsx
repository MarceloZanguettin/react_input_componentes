import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  /*
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);
  */
  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviou');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <button>Enviar</button>
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
