import react from "react";
import styled from "styled-components"

export default function Assento(props) {
    const [clicado, setClicado] = react.useState(false);

    const {isAvailable, name, id, assentosSelecionados, setassentosSelecionados, idsAssentosSelecionados, setidsAssentosSelecionados} = props;

    function verificarAssento(){
        if(!isAvailable){
            return(
                alert("Esse assento não está disponível")
            )
        }
        if(assentosSelecionados.includes(name)){
            const arrayFiltrada = assentosSelecionados.filter((v) => (v !== name))
            const arrayFiltradaIds = idsAssentosSelecionados.filter((v) => (v !== id))
            setassentosSelecionados(arrayFiltrada);
            setidsAssentosSelecionados(arrayFiltradaIds);
            return(
                setClicado(!clicado)
            )
        }
        setClicado(!clicado);
        setassentosSelecionados([...assentosSelecionados, name])
        setidsAssentosSelecionados([...idsAssentosSelecionados, id])
    }


    return(
        <Esfera
        onClick={() => verificarAssento()}
        isAvailable={isAvailable}
        clicado={clicado}
        >{name}</Esfera>
    )
}

const Esfera = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    border: 1px solid ${(props) => (props.isAvailable ? (props.clicado ? "red" : "#7B8B99") : "#F7C52B")};
    background: ${(props) => (props.isAvailable ? (props.clicado ? "#8DD7CF" : "#C3CFD9") : "#FBE192")};
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    margin: 0px 4px 10px;
`