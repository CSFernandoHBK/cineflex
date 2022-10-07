import styled from "styled-components"
import { useEffect } from "react"
import axios from "axios"
import react from "react"

export default function AreaHorarios() {

    const [horarios, setHorarios] = react.useState();

    console.log(horarios);

    useEffect(() => {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies/2/showtimes");
        promessa.then((resposta) => (setHorarios(resposta.data)));
        promessa.catch((erro) => (console.log(erro.response.data)));
    }, [])

    return(
        <Container>
            <div>
                <p>Quinta-feira - 24/06/2021</p>
                <button>15:00</button>
                <button>19:00</button>
            </div>
            <div>
                <p>Sexta-feira - 25/06/2021</p>
                <button>15:00</button>
                <button>19:00</button>
            </div>
            
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