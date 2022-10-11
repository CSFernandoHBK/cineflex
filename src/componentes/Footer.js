import styled from "styled-components"

export default function Footer(props) {

    const { title, posterURL, infodofilme } = props;

    if(infodofilme === undefined){
        return(<div>Carregando...</div>)
    }

    return (
        <>
            {/* {infodofilme
                ?
                <Container>
                    <img src={infodofilme.movie.posterURL} />
                    <p>{infodofilme.movie.title}</p>
                    <p>{infodofilme.day.weekday} - {infodofilme.movie.name}</p>
                </Container>
                :
                <Container>
                    <img src={posterURL} />
                    <p>{title}</p>
                </Container>
            } */}
        </>
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

    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }
`