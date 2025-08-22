import React, { useState } from 'react';

const CatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 12.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-5-2c.83 0 1.5.67 1.5 1.5S4.33 16 3.5 16 2 15.33 2 14.5 2.67 12.5 3.5 12.5zm17 0c.83 0 1.5.67 1.5 1.5S21.33 16 20.5 16 19 15.33 19 14.5s.67-1.5 1.5-1.5zM12 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
  </svg>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#gallery', text: 'Galería' },
    { href: '#breeds', text: 'Razas' },
  ];

  return (
    <header className="bg-[#e8e8e8]/80 backdrop-blur-sm sticky top-0 z-50 neumorphic-shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-[#5c5c5c] hover:text-[#f7a8b8] transition-colors">
          <CatIcon className="h-8 w-8 text-[#f7a8b8]" />
          <span>Patitas Suaves</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-lg text-gray-600 hover:text-[#f7a8b8] font-semibold transition-colors duration-300">
              {link.text}
            </a>
          ))}
        </nav>
        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#5c5c5c] focus:outline-none z-20 relative">
            <svg className="h-6 w-6 transition-transform duration-300" style={{ transform: isMenuOpen ? 'rotate(45deg)' : 'none' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
               {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden bg-[#e2e0e0] mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-600 hover:text-[#f7a8b8] font-semibold transition-colors duration-300">
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;