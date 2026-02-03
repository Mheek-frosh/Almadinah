import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Handshake, Bookmark, Sparkles, Goal } from 'lucide-react';
import communityImg from '../assets/images/community.png';

const Impact = () => {
    const points = [
        {
            title: 'Youth Empowerment',
            description: 'Directly investing in the potential of Nigerian youth through specialized tech-driven training and modern internships.',
            icon: Sparkles
        },
        {
            title: 'Poverty Reduction',
            description: 'Creating high-yield employment and stable income corridors to uplift living standards across host communities.',
            icon: Goal
        },
        {
            title: 'Economic Stimulation',
            description: 'Catalyzing local marketplace activity by bridging the gap between subsistence and commercial agriculture.',
            icon: TrendingUp
        }
    ];

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <img
                                src={communityImg}
                                alt="Community Engagement at Almadinah"
                                className="rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] w-full aspect-square object-cover"
                            />
                            {/* Visual Accents */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-[80px]" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-green/10 rounded-full blur-[80px]" />
                        </motion.div>

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="absolute -bottom-12 -right-6 lg:-right-12 bg-white p-8 rounded-[2.5rem] shadow-2xl z-20 hidden md:block border border-gray-100"
                        >
                            <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-100">
                                <div className="bg-brand-green/10 p-4 rounded-2xl text-brand-green">
                                    <Users size={32} />
                                </div>
                                <div>
                                    <p className="text-3xl font-black text-gray-900 leading-none">200+</p>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Local Jobs Created</p>
                                </div>
                            </div>
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-brand-green to-brand-gold opacity-50" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-green text-white flex items-center justify-center text-[10px] font-bold">+195</div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-0.5 w-10 bg-brand-gold rounded-full" />
                                <span className="text-brand-green font-black tracking-[0.3em] uppercase text-xs">Empowering the Future</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-10 leading-[0.9] tracking-tighter">
                                Growing <br />
                                <span className="text-brand-green underline decoration-brand-gold/30 decoration-8 underline-offset-8">Together</span>
                            </h2>
                            <p className="text-gray-500 text-xl mb-16 leading-relaxed font-medium">
                                We believe that our business success is inextricably linked to the prosperity of the communities we serve. Our impact goes beyond the harvest.
                            </p>

                            <div className="grid grid-cols-1 gap-10">
                                {points.map((point, index) => {
                                    const Icon = point.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.2, duration: 0.6 }}
                                            viewport={{ once: true }}
                                            className="group flex gap-8 p-6 rounded-[2.5rem] hover:bg-gray-50 transition-all duration-500 border border-transparent hover:border-gray-100"
                                        >
                                            <div className="bg-white shadow-xl shadow-gray-200/50 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-500 shrink-0">
                                                <Icon size={28} strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-brand-green transition-colors">{point.title}</h4>
                                                <p className="text-gray-500 font-medium leading-relaxed group-hover:text-gray-700 transition-colors uppercase text-xs tracking-wider">
                                                    {point.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
