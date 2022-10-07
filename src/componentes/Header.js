import styled from "styled-components"

export default function Header() {

    return(
        <Topo>
            <p>CINEFLEX</p>
        </Topo>
    )

}

const Topo = styled.div`
    background: #C3CFD9;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;

    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
    }
`