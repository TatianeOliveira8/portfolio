// src/dados/projetos.js
export const dadosProjetos = [
      {
        imagem: `${process.env.PUBLIC_URL}/img/projetoVereadores.jpg`,
        titulo: 'Plataforma de Transparência Legislativa',
        descricao: 'O projeto foi proposto pela Helpnei, que não possuía nenhuma ferramenta para visualizar o impacto e os resultados das empresas parceiras dentro da plataforma, contando apenas com uma página inicial sem métricas. Para resolver isso, desenvolvemos um Dashboard de Indicadores, permitindo monitorar o crescimento das empresas cadastradas, exibir dados estratégicos para patrocinadores e investidores e incluir um sistema de captação de usuários interessados em patrocínio.',
        cargo: 'Fullstack',
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Python', 'Flask', 'MySQL', 'Figma', 'Railway'],
        linkDiretorio: 'https://github.com/TatianeOliveira8/plataforma-legislativa',
        // linkVisualizar: 'https://meuprojeto1.com',
        contribuicoesPessoais: [
          'Desenvolvi as interfaces de front-end, sendo a página inicial e o ranking de vereadores.',
          'Implementei no back-end a classificação política automática dos vereadores (esquerda, direita ou centro).',
          'Integrei a API pública, implementei paginação e exibi os dados no front-end de forma clara.'
        ],
        hardSkillsDesenvolvidas: [
      'HTML para a estruturação das páginas da plataforma.',
      'CSS para a estilização base da interface.',
      'JavaScript para a lógica do front-end e interações.',
      'Tailwind para estilização utilitária e layout responsivo.',
      'Python para a lógica do back-end.',
      'Flask para construção da API do projeto.',
      'MySQL para armazenamento e gerenciamento dos dados.',
    ],

        softSkillsDesenvolvidas: [
          'Trabalho em equipe: Trabalhei em equipe pedindo ajuda quando necessário e participando das discussões do projeto.',
          'Autonomia: Busquei soluções por conta própria, estudando o necessário para resolver os desafios técnicos.',

        ]



      },
      {
        imagem: `${process.env.PUBLIC_URL}/img/dashbordImpacto.png`,
        titulo: 'Dashbord de impacto – 2° Semestre 2025-02',
        descricao: 'O projeto foi proposto pela Helpnei, que não possuía nenhuma ferramenta para visualizar o impacto e os resultados das empresas parceiras dentro da plataforma, contando apenas com uma página inicial sem métricas. Para resolver isso, desenvolvemos um Dashboard de Indicadores, permitindo monitorar o crescimento das empresas cadastradas, exibir dados estratégicos para patrocinadores e investidores e incluir um sistema de captação de usuários interessados em patrocínio.',
        cargo: 'Scrum Master',
        tecnologias: ['React', 'Node', 'MySQL', 'JavaScript', 'Tailwind', 'TypeScript', 'HTML', 'CSS', 'Express', 'Figma'],
        linkDiretorio: 'https://github.com/the-devs-department/helpnei',
        //linkVisualizar: 'https://link-do-projeto.com'
        contribuicoesPessoais: [
  'Estruturei e conduzi o processo ágil do time, organizando entregas, cerimônias e priorização no Jira, garantindo fluxo contínuo de desenvolvimento.',
  'Configurei a arquitetura inicial do front-end com React e TailwindCSS, estabelecendo padrões para escalabilidade e manutenção do projeto.',
  'Colaborei com o Product Owner na definição do Product e Sprint Backlog, alinhando objetivos técnicos e de produto.'
],

hardSkillsDesenvolvidas: [
  'React e Tailwind CSS para construção e estilização do front-end com padrões escaláveis.',
  'Jira para gerenciamento ágil de tarefas e sprints.',
  'Planejamento e estruturação de arquitetura front-end para manutenção e escalabilidade.'
],
        softSkillsDesenvolvidas: [
  'Liderança: conduzi o time como Scrum Master, organizando cerimônias, definindo prioridades e garantindo fluxo contínuo de desenvolvimento.',
'Comunicação: conduzi dailys e reuniões, alinhando objetivos e soluções com o time e garantindo que todos estivessem sincronizados.',
 'Adaptabilidade: ajustei o fluxo de trabalho e prioridades diante de mudanças nos requisitos e no escopo do projeto.'
]
      },

      {
        imagem: `${process.env.PUBLIC_URL}/img/gerenciamentoTarefas.png`,
  titulo: 'Gerenciamento de Tarefas – 3° Semestre 2025-08',
 descricao: 'O projeto foi proposto pela GSW, que enfrentava problemas no controle de tarefas, comunicação falha, atividades perdidas e atrasos nas entregas. Para resolver isso, desenvolvemos um gerenciador de tarefas, uma plataforma web que centraliza equipes, projetos e atividades, permite colaboração em tempo real, oferece quadros Kanban, métricas em dashboard e integração com Google Calendar, facilitando a organização, acompanhamento e comunicação entre os times.',
  cargo: 'Fullstack',
  tecnologias: ['React', 'TypeScript', 'Tailwind', 'CSS', 'Java', 'Spring Boot', 'MongoDB', 'Figma'
  ],
  linkDiretorio: 'https://github.com/Syntax-Fatec-SJC/SideQuest',
contribuicoesPessoais: [
  'Desenvolvi a arquitetura do front-end utilizando Feature-Based Architecture, garantindo escalabilidade e padronização.',
  'Defini convenções de código e organização de componentes, unificando o padrão de desenvolvimento do time.',
  'Desenvolvi as principais interfaces do sistema (dashboard, relatórios, projetos e cadastros) e implementei controle de acesso por rota.',
  'Criei um sistema centralizado de tratamento de erros e mensagens, elevando a confiabilidade e usabilidade do front-end.',
  'Integrei o front-end ao back-end, exibindo dados em tempo real do MongoDB.',
  'No back-end (Java + Spring Boot), configurei a conexão com MongoDB, desenvolvi CRUD completo de projetos e realizei refatoração estrutural do código (DTOs, módulos e padrões da aplicação) durante a primeira sprint.'
],

hardSkillsDesenvolvidas: [
  'React e TypeScript para construção de interfaces e lógica de front-end.',
  'Tailwind CSS para estilização e criação de layouts responsivos.',
  'Java e Spring Boot para desenvolvimento do back-end e criação de endpoints.',
  'MongoDB para modelagem e persistência de dados.'
],

softSkillsDesenvolvidas: [
  'Trabalho em equipe: colaborei ativamente e compartilhei meus conhecimentos.',
'Adaptabilidade: entendi como cada integrante trabalha e ajustei minha forma de contribuir conforme o fluxo do time.',
  'Comunicação: desenvolvi habilidades para dar sugestões, pedir opiniões e colaborar nas decisões do time.',
  'Pensamento crítico: analisei erros no front-end para identificar causas e propor melhorias no sistema.',
  'Aprendizagem contínua: adquiri rapidamente conhecimentos em Spring Boot e MongoDB para superar desafios técnicos.'
]
      }
    ];
  