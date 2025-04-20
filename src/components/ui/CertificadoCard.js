import React from 'react';

const CertificadosCard = ({ imagem, titulo, descricao, alt }) => (
    <div className='bg-[var(--color-gray)] text-white p-2 rounded-3xl w-96 shadow-md flex flex-col items-center gap-4 '>
      <img
        src={imagem}
        alt={alt || titulo}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold text-center text-[var(--color-yellow-primary)]">{titulo}</h3>
      <p className="text-sm text-center mb-6">{descricao}</p>
    </div>
  );
  

export default CertificadosCard;
