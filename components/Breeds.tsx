import React from 'react';
import { CAT_BREEDS } from '../constants';
import { Breed } from '../types';

const BreedCard: React.FC<{ breed: Breed; animationDelay: string }> = ({ breed, animationDelay }) => (
  <div 
    className="bg-[#e8e8e8] rounded-2xl overflow-hidden neumorphic-shadow flex flex-col p-6 soft-transition card-hover-effect fade-in-on-load"
    style={{ animationDelay }}
  >
    <img src={breed.imageUrl} alt={breed.name} className="w-full h-56 object-cover rounded-xl mb-6" />
    <div className="flex flex-col flex-grow">
      <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--accent-color)' }}>{breed.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{breed.description}</p>
      <div className="mt-auto">
        <p className="font-semibold text-gray-500 mb-2">Origen: <span className="font-normal">{breed.origin}</span></p>
        <div className="flex flex-wrap gap-2">
          {breed.temperament.map(trait => (
            <span key={trait} className="text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-full neumorphic-inset-shadow">
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Breeds: React.FC = () => {
  return (
    <section id="breeds" className="py-20 bg-[#e2e0e0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 fade-in-on-load" style={{ color: 'var(--accent-color)' }}>Razas Adorables</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto fade-in-on-load" style={{ animationDelay: '200ms' }}>
            Cada raza tiene su encanto especial. Conoce a algunos de los gatitos más populares del mundo.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CAT_BREEDS.map((breed, index) => (
            <BreedCard key={breed.name} breed={breed} animationDelay={`${200 + index * 100}ms`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Breeds;