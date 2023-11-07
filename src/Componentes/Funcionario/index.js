import './Funcionario.css'

const Funcionario = ({nome, imagem, cargo}) => {
    return (
        <div className='funcionario'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>

    )
}
export default Funcionario
