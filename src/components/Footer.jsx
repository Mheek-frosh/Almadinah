import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Zap } from 'lucide-react';
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
        { name: 'Our Architecture', href: '#home' },
        { name: 'Legacy & Vision', href: '#about' },
        { name: 'Core Verticals', href: '#services' },
        { name: 'Future Stewardship', href: '#sustainability' },
        { name: 'Visual Archive', href: '#gallery' },
    ];

    const contactInfo = [
        { icon: Mail, text: 'info@almadinahfarms.com', label: 'Inquiries' },
        { icon: Phone, text: '+234 (0) 803 123 4567', label: 'Direct Line' },
        { icon: MapPin, text: 'Kano State, Nigeria', label: 'Headquarters' },
    ];

    return (
        <footer className="bg-gray-900 pt-32 pb-12 relative overflow-hidden text-white">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-10"
                        >
                            <img src={logo} alt="Almadinah" className="h-16 w-auto mb-10 brightness-0 invert" />
                            <p className="text-white/60 font-medium leading-relaxed mb-10 text-sm">
                                Architecting the future of Nigerian agriculture through systemic innovation and sustainable mastery since 1997.
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((social, idx) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 hover:bg-brand-gold hover:text-gray-900 hover:scale-110 transition-all duration-500 border border-white/5"
                                        >
                                            <Icon size={24} strokeWidth={1.5} />
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-black text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-12">Exploration</h4>
                        <ul className="space-y-6">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="text-white/40 font-black text-xs uppercase tracking-widest hover:text-white hover:translate-x-2 transition-all duration-300 block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h4 className="font-black text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-12">Connect</h4>
                        <ul className="space-y-10">
                            {contactInfo.map((info, idx) => {
                                const Icon = info.icon;
                                return (
                                    <li key={idx} className="flex gap-6 group">
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-500 border border-white/5 shadow-xl">
                                            <Icon size={20} strokeWidth={1} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">{info.label}</p>
                                            <p className="text-white/80 font-medium text-sm transition-colors group-hover:text-brand-gold">{info.text}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Newsletter/Motto */}
                    <div className="bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-white/10 relative overflow-hidden group hover:bg-white/[0.08] transition-all duration-700">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Zap size={40} className="text-brand-gold" />
                        </div>
                        <h4 className="font-black text-white text-2xl mb-8 leading-tight">Join the <br /><span className="text-brand-green italic">Green Revolution</span></h4>
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Intelligence & Insights</p>

                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Quantum Email"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm font-medium focus:outline-none focus:border-brand-gold transition-colors placeholder:text-white/10"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-brand-gold text-gray-900 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                                SEND
                            </button>
                        </div>
                    </div>
                </div>

                {/* Final Footer */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/20 font-black text-[10px] uppercase tracking-[0.5em]">
                        &copy; {currentYear} Al-madinah Farms. All Rights Reserved.
                    </p>
                    <div className="flex gap-10">
                        <a href="#" className="text-white/10 font-black text-[10px] uppercase tracking-[0.5em] hover:text-white transition-colors">Privacy Alpha</a>
                        <a href="#" className="text-white/10 font-black text-[10px] uppercase tracking-[0.5em] hover:text-white transition-colors">Standard Protocols</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
