
import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';

function App() {

  const [funcionarios, setFuncionarios] = useState([])

  const funcionarioAdicionado = (funcionario) => {
    console.log(funcionario)
    setFuncionarios([...funcionarios, funcionario])
  }
    
  return (
    <div className="App">
      <Banner />
      <Formulario cadastroFuncionario={funcionario => funcionarioAdicionado(funcionario)} />
      <Time nome="maquiagem"/>
      <Time nome="Barbeiro"/>

    </div>
  );
}

export default App;
