
import CampoTexto from './Componentes/ CampoTexto';
import Banner from './Componentes/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto  label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto  label="Cargo"placeholder="Digite seu cargo"/>
      <CampoTexto  label="Imagem"placeholder="Digite o enderço da imagem"/>
      
    </div>
  );
}

export default App;
