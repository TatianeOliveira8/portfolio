import React from 'react';
import ProjetoCard from '../components/Projetos/ProjetosCard';

const projetos = [
  {
    imagem: `${process.env.PUBLIC_URL}/img/projetoVereadores.jpg`,
    titulo: 'Plataforma de Transparência Legislativa',
    descricao: 'Desenvolvi partes essenciais de uma plataforma web que transforma dados da prefeitura de São José dos Campos em informações acessíveis. Contribuí para a filtragem de proposições, a funcionalidade de avaliação de vereadores, além do desenvolvimento da página inicial e do ranking de desempenho. A ferramenta promove transparência e engajamento cívico com dados interativos e intuitivos.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Python', 'Flask', 'Railway'],
    linkDiretorio: 'https://github.com/nicolygz/the-devs-department.git',
    //linkVisualizar: 'https://meuprojeto1.com'
  },
  {
    imagem: `${process.env.PUBLIC_URL}/img/seuOutroProjeto.jpg`,
    titulo: 'Nome do Novo Projeto',
    descricao: 'Descrição do novo projeto aqui.',
    tecnologias: ['React', 'Node.js', 'MongoDB'],
    linkDiretorio: 'https://github.com/seuusuario/seu-repositorio',
    //linkVisualizar: 'https://link-do-projeto.com'
  }
];

const Projetos = () => {
  return (
    <div className="container mx-auto px-2">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {projetos.map((projeto, index) => (
          <ProjetoCard key={index} {...projeto} />
        ))}
      </div>
    </div>
  );
};

export default Projetos;
