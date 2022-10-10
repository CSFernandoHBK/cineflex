import react from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "../componentes/Footer"
import Header from "../componentes/Header"
import TextoSuperior from "../componentes/TextoSuperior"
import AreaAssentos from "./AreaAssentos"
import AreaFormulario from "./AreaFormulario"

export default function PaginaAssentos() {
    const params = useParams();
    const sessaoId = params.sessaoId;

    const [assentosSelecionados, setassentosSelecionados] = react.useState([])
    const [idsAssentosSelecionados, setidsAssentosSelecionados] = react.useState([]);
    const [nome, setnome] = react.useState("");
    const [cpf, setcpf] = react.useState("");

    console.log(idsAssentosSelecionados);

    function enviarPost(){
        // const arrayNumerosAssentos = assentosSelecionados.map((a) => ())
        const objeto = {ids: 123, name: {nome}, cpf: {cpf}};
        return(null)
    }

    return (
        <Container>
            <Header />
            <TextoSuperior texto={"Selecione o(s) assento(s)"} />
            <AreaAssentos sessaoId={sessaoId} assentosSelecionados={assentosSelecionados}
            setassentosSelecionados={setassentosSelecionados}
            idsAssentosSelecionados={idsAssentosSelecionados}
            setidsAssentosSelecionados={setidsAssentosSelecionados}/>
            <AreaFormulario nome={nome} setnome={setnome} cpf={cpf} setcpf={setcpf}/>
            <Link to={`/sucesso`}>
                <Botao onClick={() => enviarPost()}>Reservar assento(s)</Botao>
            </Link>
            <Footer />
        </Container>
    )

}

const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`

const Botao = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    margin-top: 80px;
`