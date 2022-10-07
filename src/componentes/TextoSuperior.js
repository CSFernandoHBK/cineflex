import styled from "styled-components"


export default function TextoSuperior(props) {
    
    const{texto} = props;

    return(
        <Container>
            <p>{texto}</p>
        </Container>
    )

}

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
    margin-top: 110px;
    margin-bottom: 33px;
`
