import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobremim";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id*" element={<Post />}/>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
