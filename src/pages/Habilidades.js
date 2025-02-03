// src/pages/Habilidades.js

import React from 'react';

function Habilidades() {
  return (
    <div id="habilidades" className="max-w-7xl md:pt-24 md:pb-24 lg:h-[50vh] flex items-center justify-center opacity-0 fade-from-right">
      <div className="w-full px-8 flex flex-wrap justify-center gap-6 font-bold">
        {/* HTML5 */}
        <div className="flex items-center text-white bg-[var(--color-gray)] px-6 py-4 rounded-xl">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
            alt="HTML5" 
            className="w-8 h-8 sm:w-12 sm:h-12" 
          />
          <span className="ml-3 text-sm sm:text-lg">HTML</span>
        </div>

        {/* CSS3 */}
        <div className="flex items-center text-white bg-[var(--color-gray)] px-6 py-4 rounded-xl">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
            alt="CSS3" 
            className="w-8 h-8 sm:w-12 sm:h-12" 
          />
          <span className="ml-3 text-sm sm:text-lg">CSS</span>
        </div>

        {/* Python */}
        <div className="flex items-center text-white bg-[var(--color-gray)] px-6 py-4 rounded-xl">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
            alt="Python" 
            className="w-8 h-8 sm:w-12 sm:h-12" 
          />
          <span className="ml-3 text-sm sm:text-lg">Python</span>
        </div>

        {/* Figma */}
        <div className="flex items-center text-white bg-[var(--color-gray)] px-6 py-4 rounded-xl">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" 
            alt="Figma" 
            className="w-8 h-8 sm:w-12 sm:h-12" 
          />
          <span className="ml-3 text-sm sm:text-lg">Figma</span>
        </div>

        {/* Git */}
        <div className="flex items-center text-white bg-[var(--color-gray)] px-6 py-4 rounded-xl">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" 
            alt="Git" 
            className="w-8 h-8 sm:w-12 sm:h-12" 
          />
          <span className="ml-3 text-sm sm:text-lg">Git</span>
        </div>

        {/* JavaScript */}
        <div className="flex items-center text-white bg-[var(--color-gray)] px-6 py-4 rounded-xl">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
            alt="JavaScript" 
            className="w-8 h-8 sm:w-12 sm:h-12" 
          />
          <span className="ml-3 text-sm sm:text-lg">JavaScript</span>
        </div>

        {/* React */}
        <div className="flex items-center text-white bg-[var(--color-gray)] px-6 py-4 rounded-xl">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
            alt="React" 
            className="w-8 h-8 sm:w-12 sm:h-12" 
          />
          <span className="ml-3 text-sm sm:text-lg">React</span>
        </div>

        {/* MySQL */}
        <div className="flex items-center text-white bg-[var(--color-gray)] px-6 py-4 rounded-xl">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" 
            alt="MySQL" 
            className="w-8 h-8 sm:w-12 sm:h-12" 
          />
          <span className="ml-3 text-sm sm:text-lg">MySQL</span>
        </div>

        {/* Tailwind CSS */}
        <div className="flex items-center text-white bg-[var(--color-gray)] px-6 py-4 rounded-xl">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
            alt="Tailwind CSS" 
            className="w-8 h-8 sm:w-12 sm:h-12" 
          />
          <span className="ml-3 text-sm sm:text-lg">Tailwind CSS</span>
        </div>

        {/* Flask */}
        <div className="flex items-center text-white bg-[var(--color-gray)] px-6 py-4 rounded-xl">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" 
            alt="Flask" 
            className="w-8 h-8 sm:w-12 sm:h-12" 
            style={{ filter: "invert(1)" }} 
          />
          <span className="ml-3 text-sm sm:text-lg">Flask</span>
        </div>

        {/* Bootstrap */}
        <div className="flex items-center text-white bg-[var(--color-gray)] px-6 py-4 rounded-xl">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" 
            alt="Bootstrap" 
            className="w-8 h-8 sm:w-12 sm:h-12" 
          />
          <span className="ml-3 text-sm sm:text-lg">Bootstrap</span>
        </div>

        {/* AWS */}
        <div className="flex items-center text-white bg-[var(--color-gray)] px-6 py-4 rounded-xl">
          <img 
            src="/img/aws.svg" 
            alt="AWS" 
            className="w-8 h-8 sm:w-12 sm:h-12" 
          />
          <span className="ml-3 text-sm sm:text-lg">AWS</span>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
