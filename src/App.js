import PaginaFilmes from "./pages/PaginaFilmes"
import GlobalStyle from "./GlobalStyles";
import PaginaHorarios from "./pages/PaginaHorarios";
import PaginaAssentos from "./pages/PaginaAssentos";
import { useParams, BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<PaginaFilmes />} />
                <Route path="/horarios/:filmeId" element={<PaginaHorarios />} />
                <Route path="/assentos" element={<PaginaAssentos />}/>
            </Routes>
        </BrowserRouter>
    );
}