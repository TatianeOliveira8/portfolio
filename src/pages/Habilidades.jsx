import React from 'react';
import HabilidadesCard from '../components/habilidades/HabilidadesCard.js';

const habilidades = [
  {
    nome: 'HTML',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    nome: 'CSS',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    nome: 'Python',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  {
    nome: 'Figma',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  },
  {
    nome: 'Git',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    nome: 'JavaScript',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    nome: 'React',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    nome: 'MySQL',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
  },
  {
    nome: 'Tailwind CSS',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    nome: 'Flask',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
    estilo: { filter: 'invert(1)' },
  },
  {
    nome: 'Bootstrap',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  },
  {
    nome: 'AWS',
    imagem: `${process.env.PUBLIC_URL}/img/aws.svg`,
  },
];

const Habilidades = () => {
  return (
    <div id="habilidades" className="max-w-7xl md:pt-24 md:pb-24 lg:h-[50vh] flex items-center justify-center opacity-0 fade-from-right">
      <div className="w-full px-8 flex flex-wrap justify-center gap-6 font-bold">
        {habilidades.map((item, index) => (
          <HabilidadesCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
