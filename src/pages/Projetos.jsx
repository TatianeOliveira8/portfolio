import React from 'react';
import ProjetoCard from '../components//ui/ProjetosCard';

const projetos = [
  {
    imagem: `${process.env.PUBLIC_URL}/img/projetoVereadores.jpg`,
    titulo: 'Plataforma de Transparência Legislativa',
    descricao: 'Desenvolvi partes essenciais de uma plataforma web que transforma dados da prefeitura de São José dos Campos em informações acessíveis. Contribuí para a filtragem de proposições, a funcionalidade de avaliação de vereadores, além do desenvolvimento da página inicial e do ranking de desempenho. A ferramenta promove transparência e engajamento cívico com dados interativos e intuitivos.',
    cargo: 'Desenvolvedor Fullstack',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Python', 'Flask', 'Railway'],
    linkDiretorio: 'https://github.com/TatianeOliveira8/plataforma-legislativa',
    //linkVisualizar: 'https://meuprojeto1.com'
  },
  {
    imagem: `${process.env.PUBLIC_URL}/img/dashbordimpacto.png`,
    titulo: 'Dashbord de impacto',
    descricao: 'Como Scrum Master no projeto de desenvolvimento do Dashboard de Indicadores para a Helpnei, fui responsável por configurar o front-end, incluindo a integração de React, Tailwind e outras versões necessárias. Preparei a estrutura inicial do HTML do dashboard, facilitando o trabalho da equipe. Além disso, gerenciei as tarefas e o progresso do time, garantindo que as entregas fossem feitas conforme o planejado e com a qualidade esperada',
    cargo: 'Scrum Master / Desenvolvedora Front-end',
    tecnologias: ['React', 'Node', 'Mysql', 'JavaScript', 'Tailwind', 'Typescript'],
    linkDiretorio: 'https://github.com/the-devs-department/helpnei',
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
