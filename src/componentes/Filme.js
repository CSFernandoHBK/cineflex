import styled from "styled-components"

export default function Filme(props) {
    const {capa} = props

    return(
        <Capafilme>
            <img src={capa}/>
        </Capafilme>
    )
}

const Capafilme = styled.div`

    margin-right: 15px;
    margin-left: 15px;
    margin-top: 20px;

    img{
        width: 129px;
        height: 193px;   
    }
    
`