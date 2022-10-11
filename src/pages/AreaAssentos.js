import styled from "styled-components"
import { useEffect } from "react"
import axios from "axios"
import react from "react"
import Assento from "./Assento";

export default function AreaAssentos(props) {

    const {sessaoId, assentosSelecionados, setassentosSelecionados, idsAssentosSelecionados, setidsAssentosSelecionados, setinfodofilme} = props;
    const [listaAssentos, setlistaAssentos] = react.useState([]);

    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`);
        promessa.then((resposta) => (setlistaAssentos(resposta.data.seats)));
        promessa.then((resposta) => (setinfodofilme(resposta.data)));
        promessa.catch((erro) => (console.log(erro.response.data)));
    }
        , [])

    if(listaAssentos === []){
        return(
            <div>Carregando</div>
        )
    }

    return (
        <>
            <Container>
                {listaAssentos.map((a, index) =>
                <Assento isAvailable={a.isAvailable} 
                name={a.name}
                id={a.id}
                assentosSelecionados={assentosSelecionados}
                setassentosSelecionados={setassentosSelecionados}
                idsAssentosSelecionados={idsAssentosSelecionados}
                setidsAssentosSelecionados={setidsAssentosSelecionados}
                key={index}
                /> 
                )}
                <Legenda>
                    <div>
                        <EsferaSelecionado/>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <Esfera estaDisponivel={true}/>
                        <p>Disponível</p>
                    </div>
                    <div>
                        <Esfera estaDisponivel={false}/>
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
const Esfera = styled.button`
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    border: 1px solid ${(props) => (props.estaDisponivel ? "#7B8B99" : "#F7C52B")};
    background: ${(props) => (props.estaDisponivel ? "#C3CFD9" : "#FBE192")};
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
const EsferaSelecionado = styled(Esfera)`
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    background: #8DD7CF;
    border: 1px solid #1AAE9E;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    margin: 0px 4px 10px;
`