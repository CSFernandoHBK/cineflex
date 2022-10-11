import react from "react"
import styled from "styled-components"

export default function AreaFormulario(props) {

    const {nome, setnome, cpf, setcpf} = props;

    return (
        <Container>
            <form>
                <div>
                    <label htmlFor="nome">Nome do comprador:</label>
                    <input id="nome" type="text" 
                    placeholder="Digite seu nome..."
                    value={nome}
                    onChange={(e) => setnome(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input id="cpf" type="text" 
                    placeholder="Digite seu CPF..."
                    value={cpf}
                    onChange={(e) => setcpf(e.target.value)}/>
                </div>
            </form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    margin-top:32px;

    div{
        display:flex;
        flex-direction:column;
    }

    input{
        height: 51px;
        width: 90vw;
        max-width: 410px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }

    label{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
        margin-top: 8px;
    }
`