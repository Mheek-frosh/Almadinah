import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Facebook, href: '#', name: 'Facebook' },
        { icon: Instagram, href: '#', name: 'Instagram' },
        { icon: Twitter, href: '#', name: 'Twitter' },
        { icon: Linkedin, href: '#', name: 'LinkedIn' },
    ];

    const quickLinks = [
        { name: 'Architecture', href: '#home' },
        { name: 'Legacy', href: '#about' },
        { name: 'Verticals', href: '#services' },
        { name: 'Future', href: '#sustainability' },
        { name: 'Gallery', href: '#gallery' },
    ];

    return (
        <footer className="bg-[#003624] pt-32 pb-12 relative overflow-hidden text-white font-sans">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Logo & Motto */}
                <div className="mb-20 flex flex-col items-center">
                    <div className="bg-white p-4 rounded-3xl mb-12 shadow-2xl shadow-black/20">
                        <img src={logo} alt="Almadinah" className="h-20 w-auto object-contain" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
                        Cultivating the <span className="text-brand-gold italic">Future</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl leading-relaxed font-medium">
                        Pioneering sustainable agriculture through integrated technology, community empowerment, and global best practices since 1997.
                    </p>
                </div>

                {/* Main Links */}
                <div className="flex flex-wrap justify-center gap-8 mb-20">
                    {quickLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            className="px-8 py-3 rounded-full border border-white/10 hover:bg-white hover:text-[#003624] transition-all font-bold uppercase text-xs tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl mb-24 border-t border-white/10 pt-20">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold">
                            <MapPin size={24} />
                        </div>
                        <p className="text-white font-bold">Kano State, Nigeria</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold">
                            <Mail size={24} />
                        </div>
                        <a href="mailto:info@almadinahfarms.com" className="text-white font-bold hover:text-brand-gold transition-colors">info@almadinahfarms.com</a>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-gold">
                            <Phone size={24} />
                        </div>
                        <a href="tel:+2348031234567" className="text-white font-bold hover:text-brand-gold transition-colors">+234 (0) 803 123 4567</a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/10 text-xs font-bold tracking-widest text-white/40 uppercase">
                    <p>&copy; {currentYear} Al-madinah Integrated Farms.</p>
                    <div className="flex gap-4">
                        {socialLinks.map((social, idx) => {
                            const Icon = social.icon;
                            return (
                                <a key={idx} href={social.href} className="hover:text-white transition-colors">
                                    <Icon size={18} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
