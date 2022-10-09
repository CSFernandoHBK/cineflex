import styled from "styled-components"
import { useEffect } from "react"
import axios from "axios"
import react from "react"

export default function AreaAssentos() {

    const [listaAssentos, setlistaAssentos] = react.useState([]);

    useEffect(() => {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/showtimes/2/seats");
        promessa.then((resposta) => (setlistaAssentos(resposta.data.seats)));
        promessa.catch((erro) => (console.log(erro.response.data)));
    }
        , [])

    console.log(listaAssentos);

    return (
        <>
            <Container>
                {listaAssentos.map((a) => <Esfera>{a.name}</Esfera>)}
                <Legenda>
                    <div>
                        <Esfera/>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <Esfera/>
                        <p>Disponível</p>
                    </div>
                    <div>
                        <Esfera/>
                        <p>Indisponível</p>
                    </div>
                </Legenda>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    max-width: 410px;
    margin: 0px 25px 0px;
    flex-wrap: wrap;
`
const Esfera = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    border: 1px solid #808F9D;
    background: #C3CFD9;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    margin: 0px 4px 10px;
`

const Legenda = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 12px;
    width: 360px;
    max-width: 360px;

    div{
        display:flex;
        flex-direction:column;
        align-items:center;
    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`