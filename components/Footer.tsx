import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#e8e8e8]">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Patitas Suaves. Todos los derechos reservados.</p>
        <p className="mt-2 text-sm">Creado con amor y patitas suaves.</p>
      </div>
    </footer>
  );
};

export default Footer;