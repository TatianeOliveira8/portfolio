import React, { useEffect, useState } from 'react';
import Projetos from './Projetos';
import Habilidades from './Tecnologias';
import SobreMim from './SobreMim';
import Certificado from './Certificados';
import { listarDadosPessoais } from '../services/ApiDadosPessoais';

function Inicio() {
  const [dadosPessoais, setDadosPessoais] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await listarDadosPessoais();
        setDadosPessoais(dados);
      } catch (err) {
        console.error('Erro ao carregar dados pessoais:', err);
      }
    }

    carregar();
  }, []);

  if (!dadosPessoais) return <p>Carregando...</p>;

  return (
    <div className="bg-black text-white flex flex-col items-center sm:py-8 sm:px-8 md:py-12 md:px-12 font-rubik">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-7xl w-full min-h-screen px-8">
        {/* Apresentação */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Oi, meu nome é <br />
            <span className="text-[var(--color-yellow-primary)]">{dadosPessoais.nome}</span>
            <span className="animate-blink opacity-25 font-thin">|</span>
          </h1>
          <div className="w-full h-[1px] bg-[var(--color-yellow-primary)] mb-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-6">
            <span className="text-[var(--color-yellow-primary)]">Desenvolvedora de Software Front-End</span> e estudante de Desenvolvimento de Sistemas Multiplataforma na FATEC.
            Experiência em projetos acadêmicos e pessoais.
          </p>
        </div>

       {/* Foto de perfil */}
<div
  className="relative w-80 h-96 md:w-[18rem] md:h-[23rem] rounded-[25px] shadow-[25px_18px_rgb(112,112,112,0.15)] md:ml-auto mx-auto animate-float"
>
  <img
    src={`${process.env.PUBLIC_URL}/img/perfil.png`}
    alt="Perfil"
    className="w-full h-full object-cover rounded-[25px]"
  />
</div>

      </div>

      {/* "Sobre Mim" */}
      <div id="SobreMim" className="w-full max-w-7xl mt-24 opacity-0 fade-from-right">
        <SobreMim />
      </div>

      {/* "Habilidades" */}
      <div id="habilidades" className="w-full max-w-7xl mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 p-5 text-center opacity-0 fade-from-left">
          <span className="text-[var(--color-yellow-primary)]">{'//'}</span> Habilidades
        </h2>
        <Habilidades />
      </div>

      <div id="certificados" className="w-full max-w-7xl mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 p-5 text-center opacity-0 fade-from-right">
          <span className="text-[var(--color-yellow-primary)]">{'//'}</span> Certificado
        </h2>
        <Certificado />
      </div>

      {/* "Projetos" */}
      <div id="projetos" className="w-full max-w-7xl mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 p-5 text-center opacity-0 fade-from-right">
          <span className="text-[var(--color-yellow-primary)]">{'//'}</span> Projetos
        </h2>
        <Projetos />
      </div>

    </div>
  );
}

export default Inicio;
