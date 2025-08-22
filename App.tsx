import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Breeds from './components/Breeds';
import Footer from './components/Footer';
import ChismosoScreen from './components/ChismosoScreen';

const App: React.FC = () => {
  return (
    <Router basename="/root">
      <div className="bg-[#e8e8e8] text-[#5c5c5c] min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Gallery />
                  <Breeds />
                </>
              }
            />
            <Route path="/chismoso" element={<ChismosoScreen />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;