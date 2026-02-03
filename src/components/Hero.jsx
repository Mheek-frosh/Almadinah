import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '../lib/utils';

// Images
import facilityHero from '../assets/images/tractors.jpeg'; // Tractors
import partnerMeeting from '../assets/images/partner-meeting.jpg';

const slides = [
    {
        url: partnerMeeting,
        tag: "Global Alliance",
        title: "STRATEGIC",
        highlight: "SYNERGY",
        desc: "We have successfully concluded a landmark strategic meeting with our international partners, paving the way for advanced agricultural integration and expanding our global operational footprint.",
    },
    {
        url: facilityHero,
        tag: "Operations",
        title: "MECHANIZED",
        highlight: "PRECISION",
        desc: "Deploying state-of-the-art tractor fleets and automated machinery to drive efficiency across our integrated farm ecosystem.",
    },
    {
        url: "https://images.unsplash.com/photo-1595844890664-d36c34b10b37?q=80&w=2070&auto=format&fit=crop",
        tag: "Harvest",
        title: "BOUNTIFUL",
        highlight: "YIELDS",
        desc: "Cultivating nutrient-rich produce through sustainable practices that honor the land and empower our community.",
    }
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setIndex((prev) => (prev + 1) % slides.length);
    const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-black font-sans">
            {/* Background Carousel */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80 z-10" />
                    <img src={slides[index].url} alt={slides[index].title} className="w-full h-full object-cover" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-30 h-full container mx-auto px-6 flex flex-col justify-center items-center text-center">
                <motion.div
                    key={`content-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-5xl"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md mb-8">
                        <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                        <span className="text-xs font-bold text-white uppercase tracking-widest">{slides[index].tag}</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-tight">
                        {slides[index].title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-gold">
                            {slides[index].highlight}
                        </span>
                    </h1>

                    <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
                        {slides[index].desc}
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <a href="#about" className="px-10 py-5 bg-brand-green text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-all shadow-[0_10px_30px_rgba(0,132,89,0.3)]">
                            Explore Operations
                        </a>
                        <a href="#contact" className="px-10 py-5 bg-white text-black rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-all">
                            Partner With Us
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Carousel Controls */}
            <div className="absolute bottom-12 left-0 right-0 z-40 flex justify-center items-center gap-8">
                <button onClick={prev} className="p-4 rounded-full border border-white/20 text-white/50 hover:text-white hover:bg-white/10 transition-all">
                    <ChevronLeft size={24} />
                </button>
                <div className="flex gap-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-500",
                                index === i ? "w-12 bg-brand-green" : "w-2 bg-white/20 hover:bg-white/40"
                            )}
                        />
                    ))}
                </div>
                <button onClick={next} className="p-4 rounded-full border border-white/20 text-white/50 hover:text-white hover:bg-white/10 transition-all">
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
};

export default Hero;
