import React from "react";
import { useScrollAnimation } from "../components/Animation";

function SobreMim() {
  useScrollAnimation(); 

  return (
    <div id="sobre-mim" className="w-full max-w-7xl flex items-center">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full px-8">
        {/* Conteúdo de Sobre mim */}
        <div className="text-center lg:text-left lg:w-[50%] opacity-0 fade-from-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-left">Sobre mim</h2>
          <div className="w-full h-[1px] bg-[var(--color-yellow-primary)] mx-auto mb-6"></div>
          <p className="text-base text-left sm:text-lg">
            Sou estudante de Desenvolvimento de Sistemas Multiplataforma na FATEC e estudo programação desde 2024. Tenho experiência prática em desenvolvimento full-stack, atuando em projetos acadêmicos e pessoais com foco em front-end.
            <br /> <br />
            Participei da criação de uma Plataforma Web para Transparência Legislativa, onde desenvolvi funcionalidades de front-end e back-end, integrei APIs públicas e implementei sistemas de filtragem e classificação de dados.
            <br /> <br />
            Estou em busca de um estágio ou de oportunidades em contratos ou freelancer, com o objetivo de aplicar meus conhecimentos, aprimorar minhas habilidades e contribuir para o desenvolvimento de soluções inovadoras.
          </p>
        </div>

        {/* linha code */}
        <div className="w-80 h-full flex items-center justify-center mx-auto pb-10 lg:block hidden opacity-0 fade-from-right">
          <div className="flex flex-wrap justify-center gap-4 opacity-70">
            <span className="h-3 w-48 rounded-full bg-[var(--color-yellow-primary)]"></span>
            <span className="h-3 w-32 rounded-full bg-[var(--color-gray-primary)]"></span>
            <span className="h-3 w-20 rounded-full bg-[var(--color-gray)]"></span>
            <span className="h-3 w-28 rounded-full bg-[var(--color-gray)]"></span>
            <span className="h-3 w-14 rounded-full bg-[var(--color-gray-primary)]"></span>
            <span className="h-3 w-20 rounded-full bg-[var(--color-yellow-primary)]"></span>
            <span className="h-3 w-32 rounded-full bg-[var(--color-yellow-primary)]"></span>
            <span className="h-3 w-32 rounded-full bg-[var(--color-gray)]"></span>
            <span className="h-3 w-32 rounded-full bg-[var(--color-gray-primary)]"></span>
            <span className="h-3 w-20 rounded-full bg-[var(--color-yellow-primary)]"></span>
            <span className="h-3 w-28 rounded-full bg-[var(--color-yellow-primary)]"></span>
            <span className="h-3 w-14 rounded-full bg-[var(--color-gray-primary)]"></span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SobreMim;
