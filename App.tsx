import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Breeds from './components/Breeds';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#e8e8e8] text-[#5c5c5c] min-h-screen">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Breeds />
      </main>
      <Footer />
    </div>
  );
};

export default App;