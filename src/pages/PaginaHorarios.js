import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useEffect } from "react"
import axios from "axios"
import react from "react"
import Footer from "../componentes/Footer"
import Header from "../componentes/Header"
import TextoSuperior from "../componentes/TextoSuperior"
import AreaHorarios from "./AreaHorarios"

export default function PaginaHorarios() {

    const params = useParams();
    const filmeId = (params.filmeId);

    const [horarios, setHorarios] = react.useState();

    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`);
        promessa.then((resposta) => (setHorarios(resposta.data)));
        promessa.catch((erro) => (console.log(erro.response.data)));
    }, [])

    if(horarios === undefined){
        return(
            <div>Carregando...</div>
        )
    }

    return(
        <Container>
            <Header/>
            <TextoSuperior texto={"Selecione o horário:"}/>
            <AreaHorarios filmeId={filmeId} horarios={horarios} setHorarios={setHorarios}/>
            <Footer title={horarios.title} posterURL={horarios.posterURL} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`