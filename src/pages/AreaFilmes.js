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
    
    console.log(listafilmes)

    return(
        <Container>
            {listafilmes.map((f) => 
            <Link to={`/horarios/${f.id}`}>
                <Filme capa = {f.posterURL}/>
            </Link>
            )}
        </Container>
    )

}   

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 800px;

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