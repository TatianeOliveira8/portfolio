// src/dados/projetos.js
export const dadosProjetos = [
      {
        imagem: `${process.env.PUBLIC_URL}/img/projetoVereadores.jpg`,
        titulo: 'Plataforma de Transparência Legislativa',
        descricao:'O projeto foi proposto pelo professor Fernando Masanori. Os moradores de São José dos Campos tinham dificuldade em acessar informações claras sobre a atuação dos vereadores, pois os dados estavam dispersos. Criamos uma plataforma web que centraliza e apresenta essas informações de forma acessível, permitindo que os eleitores tomem decisões mais informadas nas eleições municipais.',
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
  "Neste semestre trabalhei como Dev Team na equipe Syntaxe. Fiquei responsável por uma parte grande da estrutura do sistema. No front-end, organizei toda a base usando arquitetura por features e defini alguns padrões para o time seguir. Desenvolvi as telas principais, como dashboard, relatórios e cadastros, e também fiz o controle de acesso por rotas, bloqueando quando o JWT não era válido. Criei ainda um sistema centralizado de erros e mensagens. No back-end, trabalhei no módulo de projetos, desenvolvi o CRUD completo e fiz a integração com as telas do front."
],

licoesAprendidas: [
  "O semestre me fez entender na prática a importância do alinhamento de requisitos e de uma documentação bem feita. Foi o ponto que mais impactou o andamento do projeto e onde eu mais senti a diferença entre “achar que está claro” e realmente ter tudo registrado de forma objetiva. Trabalhar com um time novo, com níveis diferentes de autonomia e ritmo de estudo, exigiu mais paciência, comunicação e revisão constante do que estava sendo entregue. Também precisei lidar com momentos de queda de proatividade, especialmente na última sprint, o que me levou a rever minha organização pessoal. Do lado técnico, evoluí no uso da arquitetura por features, melhorei minha forma de estruturar autenticação e deixei a integração entre front-end e back-end mais consistente. Para os próximos projetos, quero ficar mais atenta à qualidade da documentação desde o início, para conseguir auxiliar se for necessário, e manter um ritmo mais estável ao longo das sprints."
],

hardSkillsDesenvolvidas: [
  'React e TypeScript para construção de interfaces e lógica de front-end.',
  'Tailwind CSS para estilização e criação de layouts responsivos.',
  'Java e Spring Boot para desenvolvimento do back-end e criação de endpoints.',
  'MongoDB para modelagem e persistência de dados.'
],

softSkillsDesenvolvidas: [
  'Solução de problemas: Durante o desenvolvimento do front-end, surgiram vários problemas práticos envolvendo autenticação, controle de acesso e padronização do código. Resolver esses pontos para manter o sistema funcionando de forma consistente fortaleceu minha capacidade de analisar e corrigir falhas de maneira objetiva.',
  'Proatividade: A falta de alinhamento em algumas sprints exigiu que eu tomasse iniciativa com mais frequência para manter o projeto mais próximo do que era ideal para o produto. Tive que tirar dúvidas por conta própria e buscar soluções de forma independente, o que fortaleceu minha proatividade ao longo do semestre.',
  'Comunicação: Como fiquei responsável por grande parte da arquitetura do front-end, precisei orientar o time sobre como seguir o padrão definido. Expliquei as decisões, alinhei estrutura de pastas, componentes e convenções. A comunicação foi essencial para manter tudo consistente, especialmente em uma equipe que ainda estava se conhecendo.',
],

      }
    ];
  