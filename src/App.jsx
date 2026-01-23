import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/secciones/Home.jsx";
import Cursos from "./componentes/secciones/Cursos.jsx";
import About from "./componentes/secciones/About.jsx";
import Servicios from "./componentes/secciones/Servicios.jsx";
import Contacto from "./componentes/secciones/Contacto.jsx";
import Login from "./componentes/secciones/Login.jsx";
import Navbar from "./componentes/Navbar.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/about" element={<About />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
