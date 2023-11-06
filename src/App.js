
import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';

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

    </div>
  );
}

export default App;
