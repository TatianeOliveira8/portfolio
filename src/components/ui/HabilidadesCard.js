import React from 'react';


const HabilidadesCard = ({ imagem, nome, alt, className = '', estilo = {} }) => (
    <div className='flex items-center text-white bg-[var(--color-gray)] px-6 py-4 rounded-xl'>
      <img src={imagem}
       alt={alt || nome}
       className={`w-8 h-8 sm:w-12 sm:h-12 ${className}`} 
       style={estilo} />
      <span className="ml-3 text-sm sm:text-lg">{nome}</span>
    </div>
  );
  export default HabilidadesCard;