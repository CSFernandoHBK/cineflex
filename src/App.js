import PaginaFilmes from "./pages/PaginaFilmes"
import GlobalStyle from "./GlobalStyles";
import PaginaHorarios from "./pages/PaginaHorarios";

export default function App(){
    return(
        <>
            <GlobalStyle/>
            {/* <PaginaFilmes/> */}
            <PaginaHorarios/>
        </>
    );
}