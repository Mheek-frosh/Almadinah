import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import MissionVision from './components/MissionVision';
import Impact from './components/Impact';
import Partners from './components/Partners';
import Sustainability from './components/Sustainability';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <MissionVision />
        <Impact />
        <Partners />
        <Sustainability />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
