import React, { useEffect, useState } from 'react';
import { listarProjetos } from '../services/ApiProjetos';  // ajuste o caminho
import ProjetoCard from '../components/ui/projetos/ProjetosCard';

const Projetos = () => {
  const [projetos, setProjetos] = useState([]);

useEffect(() => {
  listarProjetos()
    .then(data => {
      console.log('Projetos:', data);
      setProjetos(data);
    })
    .catch(console.error);
}, []);


  return (
    <div className="container mx-auto px-2 opacity-0 fade-from-left">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {projetos.map((projeto, index) => (
          <ProjetoCard key={index} {...projeto} />
        ))}
      </div>
    </div>
  );
};

export default Projetos;
