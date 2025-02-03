import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons';

const Projeto = ({ imagem, titulo, descricao, tecnologias, linkDiretorio, linkVisualizar }) => {
  return (
    <div className="bg-[var(--color-gray)] rounded-3xl w-full sm:w-[90%] md:w-[80%] lg:w-[48%] mb-4 flex flex-col justify-between p-2 opacity-0 fade-from-right mx-4">
      <div>
        <div className="flex justify-center mb-2 ">
          <img src={imagem} alt={titulo} className="w-full max-w-[1280px] h-auto aspect-[2/1] object-cover p-2 rounded-3xl" />
        </div>
        <h2 className="text-[var(--color-yellow-primary)] text-lg sm:text-xl font-semibold text-left px-4 mb-2">{titulo}</h2>
        <p className="text-white text-left mb-4 px-4 text-sm sm:text-base ">{descricao}</p>
        <div className="flex flex-wrap justify-left gap-2 pl-4 pr-4 mb-4 ">
          {tecnologias.map((tecnologia, index) => (
            <span
              key={index}
              className="text-[var(--color-yellow-primary)] font-bold bg-[var(--color-yellow-opacity)]  px-2 py-1 rounded-md  text-xs sm:text-sm"
            >
              {tecnologia}
            </span>
          ))}
        </div>
      </div>

      {/* Botões no canto inferior direito */}
      <div className="flex justify-end gap-4 p-4">
        <a
          href={linkDiretorio}
          className="hover:text-[var(--color-yellow-primary)] text-white text-black px-2 py-1 rounded-md flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faCode} className="text-xl" />
        </a>
        {linkVisualizar && (
          <a
            href={linkVisualizar}
            className="hover:text-[var(--color-yellow-primary)] flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xl" />
          </a>
        )}
      </div>
    </div>
  );
};

const Projetos = () => {
  const projetos = [
    {
      imagem: '/img/projetoVereadores.jpg',
      titulo: 'Plataforma de Transparência Legislativa',
      descricao: 'Desenvolvi partes essenciais de uma plataforma web que transforma dados da prefeitura de São José dos Campos em informações acessíveis. Contribuí para a filtragem de proposições, a funcionalidade de avaliação de vereadores, além do desenvolvimento da página inicial e do ranking de desempenho. A ferramenta promove transparência e engajamento cívico com dados interativos e intuitivos.',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Python', 'Flask', 'Railway'],
      linkDiretorio: 'https://github.com/nicolygz/the-devs-department.git',
      //linkVisualizar: 'https://meuprojeto1.com' para adicionar o link de visualização
    },
    
  ];

  return (
    <div className="container mx-auto px-2">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {projetos.map((projeto, index) => (
          <Projeto key={index} {...projeto} />
        ))}
      </div>
    </div>
  );
};

export default Projetos;
