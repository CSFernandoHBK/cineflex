import { useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "../componentes/Footer"
import Header from "../componentes/Header"
import TextoSuperior from "../componentes/TextoSuperior"
import AreaAssentos from "./AreaAssentos"
import AreaFormulario from "./AreaFormulario"

export default function PaginaAssentos() {

    const params = useParams();
    const sessaoId = params.sessaoId;

    return(
        <Container>
            <Header/>
            <TextoSuperior texto={"Selecione o(s) assento(s)"}/>
            <AreaAssentos sessaoId={sessaoId}/>
            <AreaFormulario/>
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