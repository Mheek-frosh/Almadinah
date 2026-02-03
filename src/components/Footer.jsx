import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Linkedin, ArrowRight, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-32 pb-16 overflow-hidden relative">
            {/* Decorative Blur */}
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-10 group cursor-pointer">
                            <div className="bg-brand-green p-2 rounded-xl group-hover:rotate-12 transition-transform duration-500 shadow-xl shadow-brand-green/20">
                                <Leaf size={28} className="text-white" />
                            </div>
                            <span className="font-black text-2xl tracking-tighter">
                                AL-MADINAH <span className="text-brand-gold">FARMS</span>
                            </span>
                        </div>
                        <p className="text-white/50 leading-relaxed mb-10 text-lg font-medium">
                            Revolutionizing Nigerian agriculture through state-of-the-art innovation and a deep-rooted commitment to our community since 1997.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-green hover:shadow-[0_0_20px_rgba(0,132,89,0.3)] transition-all duration-300 transform hover:-translate-y-1">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-xs uppercase tracking-[0.3em] text-brand-gold mb-10">Platform</h4>
                        <ul className="space-y-6 text-white/60 font-medium">
                            {['Home', 'About Us', 'Our Facilities', 'Focus Areas', 'Pictorial Tour'].map(link => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-white flex items-center gap-2 group transition-colors">
                                        {link} <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-xs uppercase tracking-[0.3em] text-brand-gold mb-10">Governance</h4>
                        <ul className="space-y-6 text-white/60 font-medium">
                            {['CSR Policy', 'Sustainability', 'Youth Programs', 'Quality Standards', 'Legal Notice'].map(link => (
                                <li key={link}>
                                    <a href="#" className="hover:text-white flex items-center gap-2 group transition-colors">
                                        {link} <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black text-xs uppercase tracking-[0.3em] text-brand-gold mb-10">Headquarters</h4>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-brand-green shrink-0 mt-1" size={20} />
                                <p className="text-white/60 font-medium leading-relaxed">Kano Modern Hydroponics,<br />Al-madinah Farms, Kano State, Nigeria</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="text-brand-green shrink-0" size={20} />
                                <p className="text-white/60 font-medium">info@almadinahfarms.com</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-brand-green shrink-0" size={20} />
                                <p className="text-white/60 font-medium">+234 123 456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
                        © {new Date().getFullYear()} Al-madinah Integrated Farms Ltd. Precision in every grain.
                    </p>
                    <div className="flex gap-10">
                        <a href="#" className="text-white/20 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white/20 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
