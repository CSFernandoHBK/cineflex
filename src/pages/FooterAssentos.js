import styled from "styled-components"

export default function FooterAssentos(props) {
    const {title, imagem, dia, hora} = props;

    return (
        <Container>
            <img src={imagem} />
            <Texto>
                <p>{title}</p>
                <p>{dia} - {hora}</p>
            </Texto>
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    bottom:0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    width: 100%;
    height: 117px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;

    img{
        width: 48px;
        height: 72px;
        margin-right: 25px;
    }
`
const Texto = styled.div`
    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }
`