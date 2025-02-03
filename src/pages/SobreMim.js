import React from "react";
import { useScrollAnimation } from "../components/Animation";

function SobreMim() {
  useScrollAnimation(); // Usando o hook para ativar a animação

  return (
    <div id="sobre-mim" className="w-full max-w-7xl flex items-center">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full px-8">
        {/* Conteúdo de Sobre mim */}
        <div className="text-center lg:text-left lg:w-[50%] opacity-0 fade-from-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-left">Sobre mim</h2>
          <div className="w-full h-[1px] bg-[var(--color-yellow-primary)] mx-auto mb-6"></div>
          <p className="text-base text-left sm:text-lg">
            Desde 2024, estou estudando programação e, atualmente, estou no 2º semestre de Análise e Desenvolvimento de Sistemas na FATEC São José dos Campos, onde estou aprendendo bastante com projetos acadêmicos. Agora, meu objetivo é conquistar meu primeiro estágio em TI, onde posso aplicar o que já sei e continuar aprendendo em um ambiente profissional.
            <br />
            Sou uma pessoa criativa, organizada e que adora resolver problemas. Gosto de trabalhar em equipe e aprender rapidamente, o que acredito ser essencial para crescer na área de tecnologia.
          </p>
        </div>

        {/* Barras coloridas */}
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
