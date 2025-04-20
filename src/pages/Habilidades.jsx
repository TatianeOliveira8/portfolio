// src/pages/Habilidades.jsx
import React from 'react';
import HabilidadesCard from '../components/ui/HabilidadesCard';
import { habilidades } from '../dados/DadosHabilidades.js'; // aqui importa os dados

const Habilidades = () => {
  return (
    <div id="habilidades" className="max-w-7xl md:pt-24 md:pb-24 lg:h-[50vh] flex items-center justify-center opacity-0 fade-from-right">
      <div className="w-full px-8 flex flex-wrap justify-center gap-6 font-bold">
        {habilidades.map((item, index) => (
          <HabilidadesCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
