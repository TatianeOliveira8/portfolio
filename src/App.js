// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import Inicio from './pages/Inicio'; 
import Projetos from './pages/Projetos'; 
import Habilidades from './pages/Habilidades'; 
import SobreMim from './pages/SobreMim'; 
function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar para todas as páginas */}
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
