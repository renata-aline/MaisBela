import './Time.css'
import Funcionario from '../Funcionario'

const Time = (props) => {
    return(
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{ borderColor: props.corprimaria}}>{props.nome}</h3>
            <Funcionario/>
            <Funcionario/>
        </section>

    )
}
export default Time