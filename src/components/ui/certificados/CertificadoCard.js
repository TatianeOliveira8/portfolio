import React from 'react';

const CertificadosCard = (props) => {
  console.log('Renderizando Card:', props); // debug

  const caminhoImagem = `${process.env.PUBLIC_URL}${props.imagem}`;

  return (
    <div className="bg-[var(--color-gray)] text-white p-2 rounded-3xl shadow-md flex flex-col items-center gap-4 w-[18rem] md:w-96 sm:w-80">
      <img
        src={caminhoImagem}
        alt={props.nome_curso}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold text-center text-[var(--color-yellow-primary)]">{props.nome_curso}</h3>
      <p className="text-sm text-center mb-2">{props.descricao}</p>
      <p className="text-sm text-center">{props.instituicao}</p>
      <p className="text-sm text-center">{props.ano_inicio} - {props.ano_conclusao}</p>
      {props.url_certificado && (
        <a href={props.url_certificado} target="_blank" rel="noopener noreferrer" className="text-sm text-yellow-400 underline">
          Ver Certificado
        </a>
      )}
    </div>
  );
};

export default CertificadosCard;



