import styled from "styled-components"
import Footer from "../componentes/Footer"
import Header from "../componentes/Header"
import TextoSuperior from "../componentes/TextoSuperior"
import AreaAssentos from "./AreaAssentos"

export default function PaginaAssentos() {

    return(
        <Container>
            <Header/>
            <TextoSuperior texto={"Selecione o(s) assento(s)"}/>
            <AreaAssentos/>
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