import styled from "styled-components"
import Filme from "../componentes/Filme"
import { useEffect } from "react"
import axios from "axios"
import react from "react"
import { Link } from "react-router-dom"

export default function AreaFilmes() {

    const[listafilmes, setlistafilmes] = react.useState([]);

    useEffect(() => {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promessa.then((resposta) => (setlistafilmes(resposta.data)));
        promessa.catch((erro) => (console.log(erro.response.data)));
    }, [])
    
    return(
        <Container>
            {listafilmes.map((f, index) => 
            <Link to={`/horarios/${f.id}`}>
                <Filme capa = {f.posterURL} key={index}/>
            </Link>
            )}
        </Container>
    )

}   

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 90%;
    max-width: 600px;

    p{
        width: 100%;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }

`