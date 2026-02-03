import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, Target, Shield } from 'lucide-react';

const slides = [
    {
        url: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2070&auto=format&fit=crop",
        title: "Vertical Hydroponics",
        desc: "Maximizing yield with zero soil and minimal water in climate-controlled environments.",
        icon: Zap
    },
    {
        url: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=2070&auto=format&fit=crop",
        title: "Eco-Precision Farming",
        desc: "AI-driven irrigation and nutrient monitoring for the highest grade produce.",
        icon: Target
    },
    {
        url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
        title: "Smart Irrigation Systems",
        desc: "Automated water conservation technologies ensuring 24/7 sustainable growth.",
        icon: Shield
    }
];

const FarmCarousel = () => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        const slideInterval = setInterval(next, 5000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-brand-green font-black tracking-widest uppercase text-xs mb-4 block">State-of-the-art</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Next-Gen <br />
                            <span className="text-brand-green">Integrated Systems</span>
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={prev} className="p-4 rounded-full border border-gray-200 hover:bg-brand-green hover:text-white transition-all shadow-lg bg-white">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={next} className="p-4 rounded-full border border-gray-200 hover:bg-brand-green hover:text-white transition-all shadow-lg bg-white">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={curr}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <img src={slides[curr].url} alt={slides[curr].title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent p-12 lg:p-24 flex flex-col justify-center">
                                <div className="max-w-xl">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="bg-brand-gold/20 backdrop-blur-md p-4 rounded-2xl w-fit text-brand-gold mb-6"
                                    >
                                        {React.createElement(slides[curr].icon, { size: 32 })}
                                    </motion.div>
                                    <motion.h3
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                                    >
                                        {slides[curr].title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-white/70 text-lg md:text-xl leading-relaxed mb-8"
                                    >
                                        {slides[curr].desc}
                                    </motion.p>
                                    <motion.button
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-brand-gold hover:text-white transition-all"
                                    >
                                        Learn Specifications
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                onClick={() => setCurr(i)}
                                className={`transition-all w-3 h-3 rounded-full bg-white cursor-pointer ${curr === i ? "p-2 w-10 bg-brand-gold" : "bg-white/50"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FarmCarousel;
