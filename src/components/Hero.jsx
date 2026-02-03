import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Leaf, Play, Award, Users, Globe, ChevronLeft } from 'lucide-react';

const slides = [
    {
        url: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2070&auto=format&fit=crop",
        title: "INNOVATING THE",
        highlight: "FUTURE OF FARMING",
        desc: "A state-of-the-art agricultural ecosystem in Kano, Nigeria, driving global standards in sustainability and social responsibility.",
        tag: "Established 1997"
    },
    {
        url: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=2070&auto=format&fit=crop",
        title: "SUSTAINABLE",
        highlight: "INTEGRATED SYSTEMS",
        desc: "Maximizing productivity while minimizing our environmental footprint through advanced machinery and eco-conscious practices.",
        tag: "100% Sustainable"
    },
    {
        url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
        title: "EMPOWERING",
        highlight: "LOCAL COMMUNITIES",
        desc: "Investing in youth development and poverty reduction, providing skills and income for a thriving Kano state.",
        tag: "200+ Employees"
    }
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % slides.length);
    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setInterval(next, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <img
                        src={slides[index].url}
                        alt={slides[index].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-20 h-full container mx-auto px-6 pt-32 flex flex-col justify-center">
                <motion.div
                    key={`content-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-5xl"
                >
                    <div className="inline-flex items-center gap-3 bg-brand-green/30 backdrop-blur-xl px-5 py-2 rounded-full border border-white/20 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                        </span>
                        <span className="text-white text-[10px] font-black tracking-[0.3em] uppercase">{slides[index].tag}</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black text-white leading-[0.85] tracking-tighter mb-10">
                        {slides[index].title}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold animate-gradient-x">
                            {slides[index].highlight}
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-white/80 max-w-2xl mb-12 font-medium leading-tight">
                        {slides[index].desc}
                    </p>

                    <div className="flex flex-wrap gap-6 items-center">
                        <a
                            href="#about"
                            className="bg-brand-green hover:bg-white hover:text-brand-green group px-10 py-5 rounded-full font-black text-white transition-all duration-500 flex items-center gap-3 shadow-[0_0_40px_rgba(0,132,89,0.3)] hover:shadow-white/20"
                        >
                            EXPLORE THE FARM <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button className="flex items-center gap-4 text-white font-bold group">
                            <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-gray-900 transition-all duration-500">
                                <Play fill="currentColor" size={18} className="ml-1" />
                            </div>
                            <span className="tracking-widest uppercase text-xs">Innovation Tour</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-12 right-12 z-30 flex items-center gap-4">
                <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all"
                >
                    <ChevronLeft size={24} />
                </button>
                <div className="flex gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 transition-all duration-500 rounded-full ${index === i ? "w-12 bg-brand-gold" : "w-4 bg-white/30"}`}
                        />
                    ))}
                </div>
                <button
                    onClick={next}
                    className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
};

export default Hero;
