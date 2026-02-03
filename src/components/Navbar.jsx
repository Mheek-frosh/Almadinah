import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import logo from '../assets/images/image.png';

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
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Sustainability', href: '#sustainability' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-6',
                isScrolled
                    ? 'py-4'
                    : 'bg-transparent'
            )}
        >
            <div className={cn(
                "max-w-7xl mx-auto px-6 py-3 rounded-full transition-all duration-500 flex justify-between items-center group",
                isScrolled
                    ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/40"
                    : "bg-black/10 backdrop-blur-md border border-white/10"
            )}>
                <a href="#home" className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="Almadinah Farms Logo"
                        className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "px-5 py-2 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-brand-gold hover:text-white",
                                isScrolled
                                    ? "text-gray-600"
                                    : "text-white/80 hover:text-white"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="w-px h-6 bg-gray-200 mx-2 hidden lg:block opacity-20" />
                    <a
                        href="#contact"
                        className={cn(
                            "ml-2 px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-green/20",
                            isScrolled
                                ? "bg-brand-green text-white hover:bg-gray-900"
                                : "bg-white text-brand-green hover:bg-brand-gold hover:text-white"
                        )}
                    >
                        GET IN TOUCH
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "md:hidden p-2 rounded-xl transition-colors",
                        isScrolled ? "text-gray-900" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-24 left-6 right-6 bg-white/95 backdrop-blur-2xl rounded-[3rem] overflow-hidden shadow-2xl border border-white/50 z-50 p-8"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-900 font-black text-xs uppercase tracking-[0.3em] hover:text-brand-green transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-brand-green text-white text-center py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-green/20"
                            >
                                CONTACT US
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
