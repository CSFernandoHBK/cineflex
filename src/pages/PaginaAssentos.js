import axios from "axios"
import react from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Header from "../componentes/Header"
import TextoSuperior from "../componentes/TextoSuperior"
import AreaAssentos from "./AreaAssentos"
import AreaFormulario from "./AreaFormulario"
import FooterAssentos from "./FooterAssentos"

export default function PaginaAssentos(props) {
    const { setobjetoSucesso } = props;

    const params = useParams();
    const sessaoId = params.sessaoId;

    const [assentosSelecionados, setassentosSelecionados] = react.useState([])
    const [idsAssentosSelecionados, setidsAssentosSelecionados] = react.useState([]);
    const [nome, setnome] = react.useState("");
    const [cpf, setcpf] = react.useState("");
    const [infodofilme, setinfodofilme] = react.useState(undefined);

    function enviarPost() {
        const objeto = { ids: idsAssentosSelecionados, name: nome, cpf: cpf };
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", objeto);
        promise.catch((resposta) => (console.log(resposta)))
        const objetoSus = {
            title: infodofilme.movie.title,
            data: infodofilme.day.date,
            hora: infodofilme.name,
            assentos: assentosSelecionados,
            nome: nome,
            cpf: cpf
        }
        setobjetoSucesso(objetoSus);
    }

    return (
        <Container>
            <Header />
            <TextoSuperior texto={"Selecione o(s) assento(s)"} />
            <AreaAssentos sessaoId={sessaoId} assentosSelecionados={assentosSelecionados}
                setassentosSelecionados={setassentosSelecionados}
                idsAssentosSelecionados={idsAssentosSelecionados}
                setidsAssentosSelecionados={setidsAssentosSelecionados}
                setinfodofilme={setinfodofilme} />
            <AreaFormulario nome={nome} setnome={setnome} cpf={cpf} setcpf={setcpf} />
            <Link to={`/sucesso`}>
                <Botao onClick={() => enviarPost()}>Reservar assento(s)</Botao>
            </Link>
            {infodofilme === undefined ?
                <div>Carregando...</div> :
                <FooterAssentos
                    title={infodofilme.movie.title}
                    imagem={infodofilme.movie.posterURL}
                    dia={infodofilme.day.weekday}
                    hora={infodofilme.name} />
            }
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
    text-decoration: none;
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