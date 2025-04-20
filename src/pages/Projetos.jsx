import React from 'react';
import { dadosProjetos } from '../dados/DadosProjetos.js';   
import ProjetoCard from '../components/ui/ProjetosCard.js';  

const Projetos = () => {
  return (
    <div className="container mx-auto px-2">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {dadosProjetos.map((projeto, index) => (
          <ProjetoCard key={index} {...projeto} />
        ))}
      </div>
    </div>
  );
};

export default Projetos;
