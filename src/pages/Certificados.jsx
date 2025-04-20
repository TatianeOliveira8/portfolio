import React from 'react';
import CarrosselDeCertificados from '../components/CertificadosCarousel'; // Ajuste o caminho se necessário

const Certificado = () => {
  return (
    <div className="container mx-auto px-2">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {/* Usando o Carrossel de Certificados */}
        <CarrosselDeCertificados />
      </div>
    </div>
  );
};

export default Certificado;
