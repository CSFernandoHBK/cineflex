import styled from "styled-components"
import { useEffect } from "react"
import axios from "axios"
import react from "react"
import { Link } from "react-router-dom";

export default function AreaHorarios(props) {
    const {filmeId} = props;
    const [horarios, setHorarios] = react.useState();

    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`);
        promessa.then((resposta) => (setHorarios(resposta.data)));
        promessa.catch((erro) => (console.log(erro.response.data)));
    }, [])

    if(horarios === undefined){
        return(
            <div>Carregando</div>
        )
    }

    return(
        <Container>
            {horarios.days.map((dia) => 
            <div>
                <p>{dia.weekday} - {dia.date}</p>
                {dia.showtimes.map((s) =>
                    <Link to={`/`}>
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
    align-items:center;

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