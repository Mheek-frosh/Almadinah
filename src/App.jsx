import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Facilities from './components/Facilities';
import Sustainability from './components/Sustainability';
import Impact from './components/Impact';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-green selection:text-white relative">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <About />
        <Facilities />
        <Sustainability />
        <Impact />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
