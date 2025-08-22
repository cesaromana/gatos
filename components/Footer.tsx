import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#e8e8e8]">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Patitas Suaves. Todos los derechos reservados.</p>
        <p className="mt-2 text-sm">Holaaaaa</p>
        <button
          className="neumorphic-button mt-6"
          onClick={() => navigate('/chismoso')}
        >
          Para saber del creador de la página haz click acá
        </button>
      </div>
    </footer>
  );
};

export default Footer;