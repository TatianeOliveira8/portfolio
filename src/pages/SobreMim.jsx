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
            Sou estudante de Desenvolvimento de Sistemas Multiplataforma em SJC e estudo programação desde 2024, ano em que iniciei a FATEC. Desde então, meu interesse pela área cresceu bastante, e tive grandes oportunidades de desenvolver minhas hard skills e soft skills, especialmente comunicação e trabalho em equipe, que foram minhas maiores dificuldades no início da faculdade.
            <br /> <br />
           Ao longo da faculdade, participei de projetos acadêmicos em parceria com empresas e startups como Helpnei e GSW Software, além de outros trabalhos recentes, incluindo criação de IA e desenvolvimento de soluções para problemas reais. Essas experiências me permitiram crescer tanto tecnicamente quanto em habilidades interpessoais.
            <br /> <br />
            Atualmente, faço estágio na HABIT como desenvolvedora FullStack no setor de RH, criando soluções de automação para processos internos. Estou sempre buscando evoluir e aberta a novas experiências para continuar crescendo na área de tecnologia.
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
