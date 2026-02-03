import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Zap, Satellite, Terminal } from 'lucide-react';
import { cn } from '../lib/utils';

// Images
import facilityHero from '../assets/images/f1.png'; // Using f1 for facility hero as requested previously, or keep the uploaded one if preferred. Converting to local import.
import partnerMeeting from '../assets/images/partner-meeting.jpg';

const slides = [
    {
        url: partnerMeeting,
        tag: "Strategic Alliance",
        title: "GLOBAL",
        highlight: "PARTNERSHIPS",
        desc: "Strengthening our integrated farm ecosystem through high-level international collaborations. Concluded strategic meeting with key global partners to accelerate agricultural innovation.",
    },
    {
        url: facilityHero,
        tag: "Modern Infrastructure",
        title: "PRECISION",
        highlight: "AG-TECH",
        desc: "Engineering the future of Nigerian agriculture through state-of-the-art innovation and a deep-rooted commitment to our community since 1997.",
    },
    {
        url: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2070&auto=format&fit=crop",
        tag: "Global Standards",
        title: "SYSTEMIC",
        highlight: "TRANSFORMATION",
        desc: "Empowering communities and enriching lives through innovative farming practices and environmental stewardship.",
    },
    {
        url: "https://images.unsplash.com/photo-1509391366360-fe5bb658582f?q=80&w=2070&auto=format&fit=crop",
        tag: "Sustainable Energy",
        title: "RENEWABLE",
        highlight: "SYNERGY",
        desc: "Harnessing solar power and advanced hydroponic modules to ensure year-round production with minimal environmental footprint.",
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
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60 z-10" />
                    <img src={slides[index].url} alt={slides[index].title} className="w-full h-full object-cover" />
                </motion.div>
            </AnimatePresence>

            {/* Tech Overlays (HUD) */}
            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute top-20 left-20 border-l border-t border-brand-green/40 w-32 h-32" />
                <div className="absolute bottom-20 right-20 border-r border-b border-brand-green/40 w-32 h-32" />
                <div className="absolute top-1/2 left-10 -translate-y-1/2 flex flex-col gap-4 text-[10px] font-black text-brand-green/50 tracking-[0.3em] uppercase vertical-rl">
                    <span>X: 11.5361° N</span>
                    <span>Y: 8.5222° E</span>
                </div>
                <div className="absolute h-px w-full top-1/3 bg-brand-green/10 animate-scanline" />
                <div className="absolute w-px h-full left-1/4 bg-brand-green/5" />
            </div>

            {/* Content */}
            <div className="relative z-30 h-full container mx-auto px-6 flex flex-col justify-center">
                <div className="max-w-4xl">
                    <motion.div
                        key={`tag-${index}`}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="h-[1px] w-12 bg-brand-gold" />
                        <span className="text-brand-gold font-black tracking-[0.4em] uppercase text-xs">
                            {slides[index].tag}
                        </span>
                    </motion.div>

                    <motion.h1
                        key={`title-${index}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-7xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter mb-8"
                    >
                        {slides[index].title} <br />
                        <span className="text-brand-green italic bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-brand-green-light">
                            {slides[index].highlight}
                        </span>
                    </motion.h1>

                    <motion.p
                        key={`desc-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-white/60 text-xl md:text-2xl max-w-2xl mb-12 font-medium leading-relaxed"
                    >
                        {slides[index].desc}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-6"
                    >
                        <a href="#about" className="group relative px-12 py-5 bg-brand-green rounded-2xl overflow-hidden shadow-2xl shadow-brand-green/20">
                            <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <span className="relative z-10 text-white group-hover:text-black font-black uppercase tracking-[0.3em] text-[10px] flex items-center gap-3">
                                EXPLORE ARCHITECTURE <ChevronRight size={16} />
                            </span>
                        </a>
                        <a href="#contact" className="px-12 py-5 border border-white/20 rounded-2xl text-[10px] uppercase tracking-[0.3em] font-black text-white hover:bg-white hover:text-black transition-all">
                            TECHNICAL INQUIRY
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Carousel Controls */}
            <div className="absolute bottom-12 right-12 z-40 flex items-center gap-6">
                <div className="flex gap-4">
                    <button
                        onClick={prev}
                        className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group"
                    >
                        <ChevronLeft size={24} className="group-active:scale-90 transition-transform" />
                    </button>
                    <button
                        onClick={next}
                        className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group"
                    >
                        <ChevronRight size={24} className="group-active:scale-90 transition-transform" />
                    </button>
                </div>
                <div className="flex gap-2">
                    {slides.map((_, i) => (
                        <div key={i} className={cn(
                            "h-1 rounded-full transition-all duration-500",
                            index === i ? "w-8 bg-brand-gold" : "w-2 bg-white/20"
                        )} />
                    ))}
                </div>
            </div>

            {/* Bottom Tech Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-40 bg-white/[0.03] backdrop-blur-2xl border-t border-white/5 py-4 hidden lg:block">
                <div className="container mx-auto px-12 flex justify-between items-center text-[10px] font-black tracking-[0.4em] text-white/40 uppercase">
                    <div className="flex gap-12">
                        <span>EST 1997</span>
                        <span>KAN0 REGION 01</span>
                    </div>
                    <div className="flex gap-12 text-brand-green">
                        <span>SYSTEM STATUS: OPTIMAL</span>
                        <span>NODES ACTIVE: 200+</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
