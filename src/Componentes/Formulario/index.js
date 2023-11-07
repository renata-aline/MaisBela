import { useState } from 'react'
import CampoTexto from '../ CampoTexto'
import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.cadastroFuncionario({
            nome,
            cargo,
            imagem,
            time
        })
       
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2 className='subtitle'>Venha fazer parte do nosso time!</h2>
                <CampoTexto 
                    obrigatório={true}
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                 />

                <CampoTexto 
                    obrigatório={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatório={true} 
                    label="Time" 
                    itens = {props.times} 
                    valor ={time}
                    aoAlterado={valor => setTime(valor)}

                />

                <Botao texto="Criar Card" />
            </form>
        </section>
    )

}
export default Formulario