import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Architecture', href: '#home' },
        { name: 'Legacy', href: '#about' },
        { name: 'Verticals', href: '#services' },
        { name: 'Future', href: '#sustainability' },
        { name: 'Visuals', href: '#gallery' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-6 py-8',
                isScrolled ? 'py-4' : 'py-8'
            )}
        >
            <div className={cn(
                "max-w-7xl mx-auto px-10 py-4 rounded-[2.5rem] transition-all duration-700 flex justify-between items-center group relative",
                isScrolled
                    ? "bg-white/90 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-brand-green/10 translate-y-2"
                    : "bg-black/10 backdrop-blur-xl border border-white/10"
            )}>
                {/* Brand Logo */}
                <a href="#home" className="relative z-10 hover:scale-105 transition-transform duration-500">
                    <img
                        src={logo}
                        alt="Almadinah Farms Logo"
                        className="h-12 md:h-16 w-auto object-contain brightness-0 invert transition-all group-hover:brightness-100 group-hover:invert-0"
                        style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "relative text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 hover:text-brand-gold pb-1 group/link",
                                isScrolled ? "text-gray-900" : "text-white/70 hover:text-white"
                            )}
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-gold group-hover/link:w-full transition-all duration-500" />
                        </a>
                    ))}

                    <div className="w-px h-8 bg-gray-200/20 mx-4 hidden lg:block" />

                    <a
                        href="#contact"
                        className={cn(
                            "px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-green/20",
                            isScrolled
                                ? "bg-brand-green text-white hover:bg-gray-900"
                                : "bg-white/10 backdrop-blur-2xl text-white border border-white/20 hover:bg-white hover:text-brand-green"
                        )}
                    >
                        CONNECT
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "md:hidden p-3 rounded-2xl transition-all active:scale-90",
                        isScrolled ? "bg-gray-100 text-gray-900" : "bg-white/10 text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Redesign */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="md:hidden absolute top-32 left-6 right-6 bg-white/90 backdrop-blur-[40px] rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-white/50 z-50 p-12"
                    >
                        <div className="flex flex-col gap-10">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-900 font-black text-xs uppercase tracking-[0.5em] hover:text-brand-green transition-all"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-brand-green text-white text-center py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-2xl shadow-brand-green/30"
                            >
                                START CONVERSATION
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};


export default Navbar;
