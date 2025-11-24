import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProjetoCard = ({
  imagem,
  titulo,
  descricao,
  cargo,
  tecnologias,
  linkDiretorio,
  linkVisualizar,
  contribuicoesPessoais = [],
  hardSkillsDesenvolvidas = [],
  softSkillsDesenvolvidas = [],
}) => {
  const [modoExtra, setModoExtra] = useState(false);

  return (
    <div className="bg-[var(--color-gray)] rounded-3xl w-full sm:w-[95%] md:w-[85%] lg:w-[60%] mb-6 flex flex-col justify-between p-4 h-[800px] opacity-0 fade-from-left mx-4 transition-all duration-300">

      {/* Imagem que some suavemente SEM mudar o layout */}
      <div
        className={`relative flex justify-center mb-4 group transition-all duration-300 ${
          modoExtra ? 'opacity-0 pointer-events-none h-0 overflow-hidden' : 'opacity-100 h-auto'
        }`}
      >
        <img
          src={imagem}
          alt={titulo}
          className="w-full max-w-[900px] h-auto aspect-[18/9] object-cover p-2 rounded-3xl select-none"
        />

        {linkVisualizar && (
          <a
            href={linkVisualizar}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 text-[var(--color-yellow-primary)] text-3xl opacity-0 group-hover:opacity-100 transition-opacity p-2"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        {!modoExtra ? (
          <>
            <h2 className="text-[var(--color-yellow-primary)] text-xl sm:text-xl font-semibold text-left px-4 mb-2">{titulo}</h2>
            <p className="text-white text-left mb-4 px-4">{descricao}</p>
            <p className="text-left mb-4 px-4">
              <span className="text-[var(--color-yellow-primary)]">Cargo:</span> {cargo}
            </p>

            <div className="flex flex-wrap justify-left gap-2 pl-4 pr-4 mb-4">
              {tecnologias.map((tecnologia, index) => (
                <span
                  key={index}
                  className="text-[var(--color-yellow-primary)] font-semibold bg-[var(--color-yellow-opacity)] px-2 py-2 rounded-md text-sm"
                >
                  {tecnologia}
                </span>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="px-4 py-2 text-white">
              {contribuicoesPessoais.length > 0 && (
                <>
                  <h3 className="font-semibold mt-2 mb-1 text-[var(--color-yellow-primary)]">Contribuições Pessoais:</h3>
                  <ul className="list-disc list-inside text-sm mb-2">
                    {contribuicoesPessoais.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {hardSkillsDesenvolvidas.length > 0 && (
                <>
                  <h3 className="font-semibold mt-2 mb-1 text-[var(--color-yellow-primary)]">Hard Skills Desenvolvidas:</h3>
                  <ul className="list-disc list-inside text-sm mb-2">
                    {hardSkillsDesenvolvidas.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {softSkillsDesenvolvidas.length > 0 && (
                <>
                  <h3 className="font-semibold mt-2 mb-1 text-[var(--color-yellow-primary)]">Soft Skills Desenvolvidas:</h3>
                  <ul className="list-disc list-inside text-sm mb-2">
                    {softSkillsDesenvolvidas.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </>
        )}
      </div>

      <div className="flex justify-between items-center p-4">
        <a
          href={linkDiretorio}
          className="hover:text-[var(--color-yellow-primary)] text-white px-2 py-1 rounded-md flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faCode} className="text-xl" />
        </a>

        <FontAwesomeIcon
          icon={modoExtra ? faArrowLeft : faArrowRight}
          className="text-xl cursor-pointer hover:text-[var(--color-yellow-primary)] transition-colors"
          onClick={() => setModoExtra(!modoExtra)}
        />
      </div>
    </div>
  );
};

export default ProjetoCard;
