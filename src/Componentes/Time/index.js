import Funcionario from "../Funcionario";

const Time = (props) => {
  return props.funcionarios.length > 0 ? (
    <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corprimaria }}>{props.nome}</h3>
      <div className="funcionarios">
        {props.funcionarios.map((funcionario) => (
          <Funcionario
            corDeFundo={props.corprimaria}
            key={funcionario.nome}
            nome={funcionario.nome}
            cargo={funcionario.cargo}
            imagem={funcionario.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};
export default Time;
