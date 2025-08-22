import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/cute-kitten-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-white/20"></div>
      <div className="relative z-10 p-6 max-w-3xl">
        <h1 
          className="text-5xl md:text-7xl font-extrabold text-white fade-in-on-load" 
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.4)', animationDelay: '200ms' }}
        >
          Bienvenido al adorable mundo felino
        </h1>
        <p 
          className="mt-6 text-xl md:text-2xl text-white font-semibold fade-in-on-load" 
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)', animationDelay: '400ms' }}
        >
          Descubre la ternura y la alegría que solo una patita suave puede dar.
        </p>
        <a href="#gallery" className="inline-block fade-in-on-load" style={{ animationDelay: '600ms' }}>
            <button className="mt-10 neumorphic-button">
            Ver Gatitos
            </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;