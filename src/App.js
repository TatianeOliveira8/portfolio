// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Certifique-se de importar corretamente
import Navbar from './components/Navbar'; // Importando a Navbar com a capitalização correta
import Inicio from './pages/Inicio'; // A capitalização deve ser "Inicio.js"
import Projetos from './pages/Projetos'; // A capitalização deve ser "Projetos.js"
import Habilidades from './pages/Habilidades'; // A capitalização deve ser "Habilidades.js"
import SobreMim from './pages/SobreMim'; // A capitalização deve ser "Habilidades.js"
function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar vai ser a mesma para todas as páginas */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/sobremim" element={<SobreMim />} />
      </Routes>
    </Router>
  );
}

export default App;
