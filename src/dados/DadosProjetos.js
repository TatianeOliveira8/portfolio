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
  "Neste semestre, atuei como Dev Team na equipe Syntaxe e fui responsável por uma parte significativa da estrutura do sistema. No front-end, organizei toda a base usando Feature-Based Architecture, defini padrões de código e unifiquei a forma de desenvolvimento do time. Desenvolvi as principais telas, dashboard, relatórios e cadastros, e implementei o controle de acesso por rotas, garantindo que apenas usuários autenticados tivessem acesso. Também criei o sistema centralizado de erros e mensagens, incluindo bloqueio de tela quando não havia JWT válido. No back-end, trabalhei no módulo de projetos, desenvolvendo o CRUD completo e integrando as funcionalidades com as páginas do front-end."
],

licoesAprendidas: [
  "O maior desafio do semestre foi me adaptar a uma equipe completamente nova, com um estilo de comunicação e organização diferente do que eu estava acostumada. Precisei ajustar meu ritmo de trabalho. A integração com um time pequeno, com membros em níveis muito diferentes de autonomia, exigiu mais comunicação, paciência e clareza nas entregas. As dificuldades internas, como baixa proatividade em algumas sprints, comunicação falha e falta de alinhamento em requisitos, me fizeram aprender a lidar melhor com imprevistos, manter meu foco mesmo com atrasos e reforçar meu papel na organização do trabalho. Do lado técnico, aprendi a aplicar de forma mais madura a arquitetura por features, a estruturar melhor a segurança com autenticação e a integrar back-end e front-end de forma mais consistente. Esses pontos consolidaram minha capacidade de adaptação e colaboração."
],

hardSkillsDesenvolvidas: [
  'React e TypeScript para construção de interfaces e lógica de front-end.',
  'Tailwind CSS para estilização e criação de layouts responsivos.',
  'Java e Spring Boot para desenvolvimento do back-end e criação de endpoints.',
  'MongoDB para modelagem e persistência de dados.'
],

softSkillsDesenvolvidas: [
  'Resolução de problemas: Neste semestre, lidar com um front-end estruturado do zero e integrar com o back-end trouxe vários problemas práticos, principalmente envolvendo autenticação, controle de acesso e padronização do código. Resolver esses pontos e manter a aplicação funcionando conforme o esperado fortaleceu minha habilidade de enfrentar problemas técnicos de forma objetiva.',
  'Proatividade: As dificuldades internas do time exigiram que eu tomasse iniciativa com mais frequência. Precisei buscar professores, tirar dúvidas por conta própria e correr atrás de soluções sem depender de outras pessoas, o que aumentou minha autonomia e meu ritmo de entrega.',
  'Comunicação: Como fiquei responsável por grande parte da arquitetura do front-end, precisei orientar o time sobre como seguir o padrão definido. Expliquei as decisões, alinhei estrutura de pastas, componentes e convenções. A comunicação foi essencial para manter tudo consistente, especialmente em uma equipe que ainda estava se conhecendo.',
],

      }
    ];
  