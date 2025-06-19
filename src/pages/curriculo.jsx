import React, { useEffect, useState } from 'react';
import { listarDadosPessoais } from '../services/ApiDadosPessoais.js';
import { listarProjetos } from '../services/ApiProjetos.js';
import { listarCertificados } from '../services/ApiCertificado.js';
import { listarTecnologias } from '../services/ApiTecnologias.js';
import { softSkills } from '../dados/Skills.js'; // COMENTADO

function Curriculo() {
  const [dadosPessoais, setDadosPessoais] = useState(null);
  const [projetos, setProjetos] = useState([]);
  const [certificados, setCertificados] = useState([]);
  const [tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    async function carregarDados() {
      try {
        const dados = await listarDadosPessoais();
        setDadosPessoais(dados || null);  // ALTERAÇÃO AQUI, tirar [0]

        const proj = await listarProjetos();
        setProjetos(proj || []);

        const cert = await listarCertificados();
        setCertificados(cert || []);

        const techs = await listarTecnologias();
        setTecnologias(techs || []);
      } catch (erro) {
        console.error('Erro ao carregar dados:', erro);
      }
    }
    carregarDados();
  }, []);

  if (!dadosPessoais) return <p className="text-white text-center mt-8">Carregando...</p>;

  return (
    <div className="bg-[var(--color-gray)] text-white min-h-screen p-8 max-w-5xl mx-auto space-y-10 mt-2">
      {/* Nome */}
      <header className="border-b pb-4">
        <h1 className="text-4xl font-bold text-[var(--color-yellow-primary)]">{dadosPessoais.nome}</h1>
        <div className="mt-2 space-y-1 text-sm">
          <p>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${dadosPessoais.email}`} className="text-blue-600 underline p-2">
              {dadosPessoais.email}
            </a>
          </p>
          <p><strong>Telefone:</strong> {dadosPessoais.telefone}</p>
          <p>
            <strong>Redes:</strong>{' '}
            <a
              href={dadosPessoais.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline px-2"
            >
              GitHub
            </a>
            |
            <a
              href={dadosPessoais.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline px-2"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </header>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--color-yellow-primary)] border-b mb-2">Objetivo</h2>
        <p>{dadosPessoais.objetivo}</p>
      </section>

      {/* Formação */}
      {dadosPessoais.formacoes?.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-yellow-primary)] border-b mb-2">Formação</h2>
          <ul className="list-disc pl-5 space-y-3">
            {dadosPessoais.formacoes.map((formacao, index) => (
              <li key={index}>
                <p className="font-semibold">{formacao.curso}</p>
                <p>{formacao.instituicao}</p>
                <p className="text-sm text-gray-300">
                  {formacao.anoInicio} - {formacao.anoConclusao}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Experiência */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--color-yellow-primary)] border-b mb-2">Experiência</h2>
        <ul className="space-y-5">
          {projetos.map((projeto, index) => (
            <li key={index} className="border-l-4 border-[var(--color-yellow-primary)] pl-4">
              <p className="text-lg font-bold">{projeto.titulo}</p>
              <p>{projeto.descricao}</p>
              <p><strong>Cargo:</strong> {projeto.cargo}</p>
              {projeto.tecnologias?.length > 0 && (
                <p><strong>Tecnologias:</strong> {projeto.tecnologias.join(', ')}</p>
              )}
            <a href={projeto.link_diretorio} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline cursor-pointer">
              Ver projeto no GitHub
            </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hard Skills */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-yellow-primary)] border-b mb-2">Hard Skills</h2>
          <ul className="list-disc pl-5 space-y-2">
            {tecnologias.map((tec, index) => (
              <li key={index}>{tec.nome}</li>
            ))}
          </ul>
        </section>

        {/* Soft Skills */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-yellow-primary)] border-b mb-2">Soft Skills</h2>
          <ul className="list-disc pl-5 space-y-2">
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
       
      </div>


{/* Certificados */}
<section className="mt-6">
  <h2 className="text-2xl font-semibold text-[var(--color-yellow-primary)] border-b pb-1 mb-4">
    Certificados
  </h2>
  <ul className="space-y-3">
    {certificados.map((cert, index) => (
      <li
        key={index}
        className="shadow-md rounded-xl p-4 border-l-2 border-[var(--color-yellow-primary)] bg-[#1a1a1a]"
      >
        <p className="text-base font-semibold text-white">
          {cert.nome_curso} – {cert.instituicao}, {cert.ano_conclusao}
        </p>
        {cert.descricao && (
          <p className="text-sm text-gray-400 mt-1">
            {cert.descricao}
          </p>
        )}
      </li>
    ))}
  </ul>
</section>




      <section className="text-center">
        <p>
          <a href="./pdf/curriculum.pdf" download className="inline-block rounded-3xl bg-[var(--color-yellow-primary)] hover:bg-[var(--color-yellow-secondary)] px-4 py-2 font-bold">
            Baixar currículo
          </a>
        </p>
      </section>
    </div>
  );
}

export default Curriculo;
