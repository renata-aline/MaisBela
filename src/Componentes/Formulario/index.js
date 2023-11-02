import CampoTexto from '../ CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Cabeleireiro',
        'Maquiador',
        'Manicure',
        'Barbeiro',
        'Massagista',
        'Esteticista'

    ]

    return (
        <section className='formulario'>
            <form>
                <h2 className='subtitle'>Venha fazer parte do nosso time!</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Time" itens = {times} />
            </form>
        </section>
    )

}
export default Formulario