import styled from "styled-components"
import AreaFilmes from "./AreaFilmes"
import Header from "../componentes/Header"
import TextoSuperior from "../componentes/TextoSuperior"

export default function PaginaFilmes() {
    return(
        <Container>
            <Header/>
            <TextoSuperior texto={"Selecione o filme:"}/>
            <AreaFilmes/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`