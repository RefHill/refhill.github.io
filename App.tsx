import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionDemo from './components/VisionDemo';
import Features from './components/Features';
import Products from './components/Products';
import WhoAreWe from './components/WhoAreWe';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-yellow-500/30">
      <Navbar />
      <main>
        <Hero />
        <VisionDemo />
        <Features />
        <Products />
        <WhoAreWe />
      </main>
      <Footer />
    </div>
  );
};

export default App;