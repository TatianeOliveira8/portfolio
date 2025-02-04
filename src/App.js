import React from 'react';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Projetos from './pages/Projetos';
import Habilidades from './pages/Habilidades';
import SobreMim from './pages/SobreMim';

function App() {
  return (
    <>
      <Navbar />
      <div id="inicio">
        <Inicio />
      </div>
    </>
  );
}

export default App;
