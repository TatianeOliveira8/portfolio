import React, { useState, useEffect } from 'react';
import CertificadosCard from '../components/ui/certificados/CertificadoCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { listarCertificados } from '../services/ApiCertificado'; // ajuste caminho

const CarrosselDeCertificados = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [certificados, setCertificados] = useState([]);
  const [itensPorPagina, setItensPorPagina] = useState(2);

  useEffect(() => {
    function ajustarItensPorPagina() {
      if (window.innerWidth < 800) {
        setItensPorPagina(1);
      } else {
        setItensPorPagina(2);
      }
    }

    ajustarItensPorPagina();
    window.addEventListener('resize', ajustarItensPorPagina);
    return () => window.removeEventListener('resize', ajustarItensPorPagina);
  }, []);

  useEffect(() => {
    listarCertificados()
      .then(dados => {
        setCertificados(dados);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const maxIndice = Math.ceil(certificados.length / itensPorPagina) - 1;
    if (indiceAtual > maxIndice) {
      setIndiceAtual(maxIndice >= 0 ? maxIndice : 0);
    }
  }, [itensPorPagina, certificados, indiceAtual]);

  const itensVisiveis = certificados.slice(
    indiceAtual * itensPorPagina,
    (indiceAtual + 1) * itensPorPagina
  );

  const navegarAnterior = () => {
    setIndiceAtual(prev => Math.max(prev - 1, 0));
  };

  const navegarProximo = () => {
    const maxIndice = Math.ceil(certificados.length / itensPorPagina) - 1;
    setIndiceAtual(prev => Math.min(prev + 1, maxIndice));
  };

  return (
    <div className="flex flex-col items-center gap-4 mb-4 flex flex-col justify-between p-2 opacity-0 fade-from-left mx-4">
      {/* Carrossel de Certificados */}
      <div className="flex items-center gap-8">
        {/* Botão de navegação para o anterior */}
        <button
          onClick={navegarAnterior}
          className="p-2 text-white rounded-full hover:bg-gray-600"
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff", fontSize: "24px" }} />
        </button>

        {/* Exibe os certificados atuais */}
        <div className="flex gap-4">
          {itensVisiveis.map((certificado) => (
            <CertificadosCard key={certificado.cer_cod} {...certificado} />
          ))}
        </div>

        {/* Botão de navegação para o próximo */}
        <button
          onClick={navegarProximo}
          className="p-2 text-white rounded-full hover:bg-gray-600"
        >
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff", fontSize: "24px" }} />
        </button>
      </div>
    </div>
  );
};

export default CarrosselDeCertificados;
