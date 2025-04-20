import React, { useState } from 'react';
import CertificadosCard from '../components/ui/CertificadoCard'; // ajusta o caminho se precisar
import { dadosCertificados } from '../dados/DadosCertificado'; // ajusta o caminho se precisar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CarrosselDeCertificados = () => {
  // Estado para controlar qual certificado está sendo exibido
  const [indiceAtual, setIndiceAtual] = useState(0);

  // Número de itens a serem exibidos por vez
  const itensPorPagina = 2; // Exibe 2 itens por vez, você pode ajustar este valor conforme necessário

  // Função para mover para o certificado anterior
  const navegarAnterior = () => {
    setIndiceAtual((prev) => Math.max(prev - 1, 0));
  };
  
  const navegarProximo = () => {
    const maxIndice = Math.ceil(dadosCertificados.length / itensPorPagina) - 1;
    setIndiceAtual((prev) => Math.min(prev + 1, maxIndice));
  };
  

  // Calcular os itens a serem exibidos
  const itensVisiveis = dadosCertificados.slice(indiceAtual * itensPorPagina, (indiceAtual + 1) * itensPorPagina);

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
          {itensVisiveis.map((certificado, index) => (
            <CertificadosCard key={index} {...certificado} />
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
