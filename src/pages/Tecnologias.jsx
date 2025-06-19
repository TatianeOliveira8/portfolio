import React, { useEffect, useState } from 'react';
import TecnologiasCard from '../components/ui/tecnologias/TecnologiasCard.js';
import { listarTecnologias } from '../services/ApiTecnologias.js';

const Tecnologias = () => {
  const [tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    async function carregarTecnologias() {
      try {
        const dados = await listarTecnologias();
        setTecnologias(dados);
      } catch (erro) {
        console.error('Erro ao carregar tecnologias:', erro);
      }
    }

    carregarTecnologias();
  }, []);

  return (
    <div id="tecnologias" className="max-w-7xl md:pt-24 md:pb-24 lg:h-[50vh] flex items-center justify-center opacity-0 fade-from-right">
      <div className="w-full px-8 flex flex-wrap justify-center gap-6 font-bold">
        {tecnologias.map((item, index) => (
          <TecnologiasCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Tecnologias;
