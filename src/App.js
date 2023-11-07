
import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';

function App() {

  const times = [
    {
      nome: 'Cabeleireiro(a)',
      corprimaria: '#57c778',
      corSecundaria: '#d9f7e9'
    },

    {
      nome: 'Maquiagem',
      corprimaria: '#b2cffa',
      corSecundaria: '#e8f8ff'
    },

    {
      nome: 'Manicure/Pedicure',
      corprimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },

    {
      nome: 'Barbeiro',
      corprimaria: '#ffba09',
      corSecundaria: '#ffeedf'
    },

    {
      nome: 'Massagista',
      corprimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    
    {
      nome: 'Esteticista',
      corprimaria: '#a20570',
      corSecundaria: '#eebedf'
    }
  ]

  const [funcionarios, setFuncionarios] = useState([])

  const funcionarioAdicionado = (funcionario) => {
    console.log(funcionario)
    setFuncionarios([...funcionarios, funcionario])
  }
    
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} cadastroFuncionario={funcionario => funcionarioAdicionado(funcionario)} />
      {times.map(time => <Time key={time.nome} nome={time.nome} corprimaria={time.corprimaria} corSecundaria={time.corSecundaria}/>)}
      
    </div>
  );
}

export default App;
