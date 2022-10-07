import styled from "styled-components"
import Footer from "../componentes/Footer"
import Header from "../componentes/Header"
import TextoSuperior from "../componentes/TextoSuperior"
import AreaHorarios from "./AreaHorarios"

export default function PaginaHorarios() {
    return(
        <Container>
            <Header/>
            <TextoSuperior texto={"Selecione o horário:"}/>
            <AreaHorarios/>
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