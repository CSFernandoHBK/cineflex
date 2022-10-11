import PaginaFilmes from "./pages/PaginaFilmes"
import GlobalStyle from "./GlobalStyles";
import PaginaHorarios from "./pages/PaginaHorarios";
import PaginaAssentos from "./pages/PaginaAssentos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaSucesso from "./pages/PaginaSucesso";
import react from "react";

export default function App() {

    const [objetoSucesso, setobjetoSucesso] = react.useState();

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<PaginaFilmes />} />
                <Route path="/horarios/:filmeId" element={<PaginaHorarios />} />
                <Route path="/assentos/:sessaoId" element={<PaginaAssentos setobjetoSucesso={setobjetoSucesso}/>}/>
                <Route path="/sucesso" element={<PaginaSucesso objetoSucesso={objetoSucesso}/>}/>
            </Routes>
        </BrowserRouter>
    );
}