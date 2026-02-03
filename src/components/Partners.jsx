import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Landmark, ShieldCheck, Zap } from 'lucide-react';
import p1 from '../assets/images/1.png';
import p2 from '../assets/images/2.png';
import p3 from '../assets/images/3.png';
import p4 from '../assets/images/4.png';

const Partners = () => {
    const partners = [
        { name: 'Global Agri-Tech', img: p1, type: 'Technology Partner' },
        { name: 'Eco-Cert Systems', img: p2, type: 'Sustainability Auditor' },
        { name: 'Nordic Agro', img: p3, type: 'Yield Optimization' },
        { name: 'West-Agro Group', img: p4, type: 'Strategic Investor' },
    ];

    return (
        <section className="py-32 bg-gray-50 overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20 mb-24">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-green font-black tracking-[0.4em] uppercase text-[10px] mb-4 block"
                        >
                            Global Footprint
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-8"
                        >
                            International <br />
                            <span className="text-brand-green">Strategic Partners</span>
                        </motion.h2>
                        <p className="text-gray-500 text-xl font-medium leading-relaxed max-w-xl">
                            We collaborate with world-class organizations to integrate cutting-edge agricultural technology and sustainable practices into our Kano operations.
                        </p>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-8">
                        <div className="space-y-8 pt-12">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-center gap-5">
                                <div className="bg-brand-gold/10 p-3 rounded-xl text-brand-gold">
                                    <Globe2 size={24} />
                                </div>
                                <p className="font-bold text-gray-900 text-sm">Global Standards</p>
                            </div>
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-center gap-5 translate-x-12">
                                <div className="bg-brand-green/10 p-3 rounded-xl text-brand-green">
                                    <ShieldCheck size={24} />
                                </div>
                                <p className="font-bold text-gray-900 text-sm">Certified Quality</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-center gap-5">
                                <div className="bg-blue-500/10 p-3 rounded-xl text-blue-500">
                                    <Landmark size={24} />
                                </div>
                                <p className="font-bold text-gray-900 text-sm">Institutional Support</p>
                            </div>
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-center gap-5 translate-x-12">
                                <div className="bg-orange-500/10 p-3 rounded-xl text-orange-500">
                                    <Zap size={24} />
                                </div>
                                <p className="font-bold text-gray-900 text-sm">Rapid Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-60 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-full aspect-[3/2] flex items-center justify-center p-8 bg-white rounded-[3rem] border border-transparent group-hover:border-brand-green/20 group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                <img
                                    src={partner.img}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <span className="mt-6 text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-brand-green transition-colors">
                                {partner.type}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
