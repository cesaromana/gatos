import React, { useState } from 'react';

const galleryImages = [
  'public/img/benito.jpeg',
  'public/img/mango.jpeg',
  'public/img/brando.jpeg',
  'public/img/lulu.jpeg',
];

const GalleryImage: React.FC<{ src: string; animationDelay: string; }> = ({ src, animationDelay }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`neumorphic-card aspect-square fade-in-on-load soft-transition${isActive ? ' active' : ''}`}
      style={{ animationDelay }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setIsActive(true); }}
      onKeyUp={e => { if (e.key === 'Enter' || e.key === ' ') setIsActive(false); }}
    >
      <div className="neumorphic-card-overlay"></div>
      <div className="neumorphic-card-inner group">
        <img
          src={src}
          alt="Gatito tierno en la galería"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-[#e8e8e8]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 fade-in-on-load" style={{ color: 'var(--accent-color)' }}>Galería de Ternura</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto fade-in-on-load" style={{ animationDelay: '200ms' }}>
          Una colección de momentos adorables que te derretirán el corazón. ¡Cuidado, alto nivel de monería!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {galleryImages.map((src, index) => (
            <GalleryImage key={index} src={src} animationDelay={`${200 + index * 100}ms`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;