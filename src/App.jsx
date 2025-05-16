import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import LayoutHospital from "./components/layouts/LayoutHospital.jsx";
import Citas from "./pages/Citas.jsx";
import Diagnostico from "./pages/Diagnostico.jsx";
import SignosVitales from "./pages/SignosVitales.jsx";
import HospitalesCercanos from "./pages/HospitalesCercanos.jsx";
import Referencias from "./pages/Referencias.jsx";
import MiPerfil from "./pages/MiPerfil.jsx";
// Páginas
import Inicio from "./pages/Inicio.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutHospital><Inicio /></LayoutHospital>} />
        <Route path="/citas" element={<LayoutHospital><Citas /></LayoutHospital>} />
        <Route path="/diagnostico" element={<LayoutHospital><Diagnostico /></LayoutHospital>} />
        <Route path="/signos" element={<LayoutHospital><SignosVitales /></LayoutHospital>} />
        <Route path="/hospitales" element={<LayoutHospital><HospitalesCercanos /></LayoutHospital>} />
        <Route path="/referencias" element={<LayoutHospital><Referencias /></LayoutHospital>} />
        <Route path="/perfil" element={<LayoutHospital><MiPerfil /></LayoutHospital>} />
        {/* Puedes agregar más rutas aquí */}

      </Routes>
    </Router>
  );
}

export default App;
