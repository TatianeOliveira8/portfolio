import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fontsource/rubik';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre-mim", label: "Sobre mim" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" }
];

const socialLinks = [
  { href: "https://github.com/TatianeOliveira8", icon: faGithub },
  { href: "https://www.linkedin.com/in/tatiane-oliveira-a66789296/", icon: faLinkedin },
  { href: "http://localhost:3000/pdf/curriculum.pdf", icon: faFile }

];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ajuste para rolar automaticamente para a seção ao mudar o hash na URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };   

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-10 flex items-center lg:justify-center justify-between bg-black relative px-10 py-6 lg:py-0 font-semibold">
      <button
        className="text-white text-2xl lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      {/* Menu de navegação */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col absolute items-center top-20 left-0 w-full bg-[var(--color-gray-secondary)] lg:bg-[var(--color-gray)] rounded-b-3xl gap-4 list-none py-5 px-8 lg:px-6 lg:flex lg:flex-row lg:static lg:w-auto`}
      >
        {navLinks.map(({ href, label }) => (
          <li
            key={href}
            className="w-full md:w-28 h-10 border-0 lg:border-2 border-[var(--color-yellow-secondary)] rounded-2xl lg:rounded-3xl transition-transform hover:scale-105 lg:hover:bg-[var(--color-yellow-secondary)] mb-2 lg:mb-0"
          >
            <a
              href={href}
              className="w-full h-full flex justify-center items-center text-white text-sm md:text-base"
              onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Links de redes sociais */}
      <div className="absolute right-16 flex gap-4 text-xl text-white">
        {socialLinks.map(({ href, icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-[var(--color-yellow-secondary)] transition-transform"
          >
            <FontAwesomeIcon icon={icon} className="text-[25px]" />
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
