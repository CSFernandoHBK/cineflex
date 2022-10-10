import styled from "styled-components"
import Header from "../componentes/Header"
import TextoSuperior from "../componentes/TextoSuperior"
import { Link } from "react-router-dom"

export default function PaginaSucesso() {
    return (
        <Container>
            <Header />
            <TextoSuperior texto={"Pedido feito com sucesso!"} />
            <AlinhadoEsquerda>
                <h2>Filme e sessão</h2>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
                <h2>Ingressos</h2>
                <p>Assento 15</p>
                <h2>Comprador</h2>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </AlinhadoEsquerda>
            <Link to={"/"}>
                <button>Voltar pra Home</button>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-top: 25px;
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-top: 3px;
    }

    button{
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        margin-top: 80px;
    }
`

const AlinhadoEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80vw;
`