import React from 'react';
import { dadosPessoais } from '../dados/DadosPessoas.js';
import { dadosProjetos } from '../dados/DadosProjetos.js';
import { softSkills, hardSkills } from '../dados/Skills.js';
import { dadosCertificados } from '../dados/DadosCertificado.js';

function Curriculo() {
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
          {dadosPessoais.telefones.map((tel, index) => (
            <p key={index}><strong>Telefone:</strong> {tel}</p>
          ))}
          <p>
            <strong>Redes:</strong>{' '}
            <a
              href={dadosPessoais.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline px-2"
            >
              GitHub
            </a>
            |
            <a
              href={dadosPessoais.links.linkedin}
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

      {/* Experiência */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--color-yellow-primary)] border-b mb-2">Experiência</h2>
        <ul className="space-y-5">
          {dadosProjetos.map((projeto, index) => (
            <li key={index} className="border-l-4 border-[var(--color-yellow-primary)] pl-4">
              <p className="text-lg font-bold">{projeto.titulo}</p>
              <p>{projeto.descricao}</p>
              <p><strong>Cargo:</strong> {projeto.cargo}</p>
              <p><strong>Tecnologias:</strong> {projeto.tecnologias.join(', ')}</p>
              <a href={projeto.linkDiretorio} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
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
    {hardSkills.map((skill, index) => (
      <li key={index}>
        <strong>{skill.categoria}:</strong> {skill.itens.join(', ')}
      </li>
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
      <section>
  <h2 className="text-2xl font-semibold text-[var(--color-yellow-primary)] border-b mb-2">Certificados</h2>
  <ul className="space-y-4">
    {dadosCertificados.map((cert, index) => (
      <li key={index} className="flex items-start gap-4">
        <div>
          <p className="font-semibold">{cert.titulo}</p>
          <p className="text-sm">{cert.descricao}</p>
        </div>
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
