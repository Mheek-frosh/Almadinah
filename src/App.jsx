/**
 * App.jsx
 * This is the root component of the Almadinah application.
 * it orchestrates the overall page layout by importing and 
 * nesting various section components like Navbar, Hero, About, etc.
 */
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
    // Main wrapper with styling for selection color and relative positioning for the ChatBot
    <div className="min-h-screen bg-white selection:bg-brand-green selection:text-white relative">
      <Navbar /> {/* Fixed or relative navigation bar */}
      <main>
        {/* Sections of the landing page */}
        <Hero />           {/* Hero section with main call to action */}
        <Partners />       {/* Showcase of partner/sponsor logos */}
        <About />          {/* Information about the organization */}
        <Facilities />     {/* Details about operational facilities */}
        <Sustainability />  {/* Commitment to sustainable practices */}
        <Impact />         {/* Highlight of positive changes and data */}
        <Gallery />        {/* Visual showcase of images */}
        <Contact />        {/* Contact form and organization details */}
      </main>
      <Footer />  {/* Footer with links and social icons */}
      <ChatBot /> {/* Floating chatbot interface */}
    </div>
  );
}

export default App;

