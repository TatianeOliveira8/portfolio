import React, { useState, useEffect } from 'react';
import CertificadosCard from '../components/ui/CertificadoCard';
import { dadosCertificados } from '../dados/DadosCertificado';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CarrosselDeCertificados = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [itensPorPagina, setItensPorPagina] = useState(2);

  useEffect(() => {
    const ajustarItensPorPagina = () => {
      if (window.innerWidth < 840) { // tela pequena (exemplo: <640px)
        setItensPorPagina(1);
      } else {
        setItensPorPagina(2);
      }
      setIndiceAtual(0); // resetar índice para evitar overflow ao trocar itensPorPagina
    };

    ajustarItensPorPagina();

    window.addEventListener('resize', ajustarItensPorPagina);
    return () => window.removeEventListener('resize', ajustarItensPorPagina);
  }, []);

  const maxIndice = Math.ceil(dadosCertificados.length / itensPorPagina) - 1;

  const navegarAnterior = () => {
    setIndiceAtual(prev => Math.max(prev - 1, 0));
  };

  const navegarProximo = () => {
    setIndiceAtual(prev => Math.min(prev + 1, maxIndice));
  };

  const itensVisiveis = dadosCertificados.slice(indiceAtual * itensPorPagina, (indiceAtual + 1) * itensPorPagina);

  return (
    <div className="flex flex-col items-center gap-4 mb-4 p-2 opacity-0 fade-from-left mx-4">
      <div className="flex items-center gap-8">
        <button onClick={navegarAnterior} className="p-2 text-white rounded-full hover:bg-gray-600">
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff", fontSize: "24px" }} />
        </button>

        <div className="flex gap-4">
          {itensVisiveis.map((certificado, index) => (
            <CertificadosCard key={index} {...certificado} />
          ))}
        </div>

        <button onClick={navegarProximo} className="p-2 text-white rounded-full hover:bg-gray-600">
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff", fontSize: "24px" }} />
        </button>
      </div>
    </div>
  );
};

export default CarrosselDeCertificados;
