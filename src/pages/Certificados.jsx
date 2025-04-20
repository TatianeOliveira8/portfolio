import React from 'react';
import CarrosselDeCertificados from '../components/CertificadosCarousel';

const Certificado = () => {
  return (
    <div className="container mx-auto px-2">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {/* Carrosel sendo utilizado*/}
        <CarrosselDeCertificados />
      </div>
    </div>
  );
};

export default Certificado;
