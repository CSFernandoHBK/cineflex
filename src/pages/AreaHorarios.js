import styled from "styled-components"
import { Link } from "react-router-dom";

export default function AreaHorarios(props) {
    const { filmeId, horarios, setHorarios } = props;

    if (horarios === undefined) {
        return (
            <div>Carregando</div>
        )
    }

    return (
        <Container>
            {horarios.days.map((dia, index) =>
                <div key={index}>
                    <p>{dia.weekday} - {dia.date}</p>
                    {dia.showtimes.map((s, index) =>
                        <Link to={`/assentos/${s.id}`} key={index}>
                            <button>
                                {s.name}
                            </button>
                        </Link>
                    )}
                </div>
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    width: 85%;
    max-width: 410px;

    div{
        margin-bottom: 10px;
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
        margin-bottom: 22px;
    }

    button{
        width: 83px;
        height: 43px;
        background: #E8833A;
        border-radius: 3px;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        color: #FFFFFF;
        margin-bottom: 22px;
        margin-right: 10px;
    }
`
