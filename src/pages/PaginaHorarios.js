import { useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "../componentes/Footer"
import Header from "../componentes/Header"
import TextoSuperior from "../componentes/TextoSuperior"
import AreaHorarios from "./AreaHorarios"

export default function PaginaHorarios() {

    const params = useParams();
    const filmeId = (params.filmeId);

    return(
        <Container>
            <Header/>
            <TextoSuperior texto={"Selecione o horário:"}/>
            <AreaHorarios filmeId={filmeId}/>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`