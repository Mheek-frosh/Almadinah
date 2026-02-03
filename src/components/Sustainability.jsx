import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Droplets, Recycle, Heart, GraduationCap, Activity, ShieldCheck, Zap } from 'lucide-react';

const Sustainability = () => {
    const initiatives = [
        {
            title: 'Renewable Energy',
            icon: Sun,
            desc: 'We are transitioning to solar power and other renewable energy sources to significantly reduce our carbon footprint.',
            color: 'bg-orange-500/10 text-orange-500'
        },
        {
            title: 'Water Conservation',
            icon: Droplets,
            desc: 'Our hydroponic systems and efficient irrigation practices minimize water waste and ensure sustainable resource usage.',
            color: 'bg-blue-500/10 text-blue-500'
        },
        {
            title: 'Waste Management',
            icon: Recycle,
            desc: 'Implementing industry best practices in composting and recycling to minimize our overall environmental footprint.',
            color: 'bg-green-500/10 text-green-500'
        },
    ];

    const csrPrinciples = [
        { title: 'Community Engagement', icon: Heart, desc: 'Understanding needs and priorities through regular dialog.' },
        { title: 'Education & Skills', icon: GraduationCap, desc: 'Investing in the potential of Nigerian youth through training.' },
        { title: 'Health Initiatives', icon: Activity, desc: 'Promoting healthy living and supporting healthcare access.' },
    ];

    return (
        <section id="sustainability" className="py-32 bg-gray-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-green/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-green font-black tracking-[0.4em] uppercase text-[10px] mb-4 block"
                    >
                        Pillars of Excellence
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
                    >
                        Sustainability & <span className="text-brand-green">Stewardship</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 text-xl max-w-2xl mx-auto font-medium"
                    >
                        Linking our commercial success to the environmental and social well-being of Nigeria.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {initiatives.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-white p-12 rounded-[4rem] shadow-2xl shadow-gray-200/50 border border-gray-100 flex flex-col group hover:-translate-y-3 transition-all duration-500"
                            >
                                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-6">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed font-medium opacity-80">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="bg-white rounded-[5rem] p-8 lg:p-24 shadow-2xl relative overflow-hidden border border-gray-100">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-brand-gold font-black tracking-[0.3em] uppercase text-[10px] mb-6 block">CSR Policy</span>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
                                Investing in our <br />
                                <span className="text-brand-green">Host Communities</span>
                            </h3>

                            <div className="space-y-8">
                                {csrPrinciples.map((p, idx) => {
                                    const Icon = p.icon;
                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex gap-6 items-start"
                                        >
                                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-green shrink-0 shadow-sm">
                                                <Icon size={28} strokeWidth={1.5} />
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-gray-900 text-lg mb-1">{p.title}</h5>
                                                <p className="text-gray-500 font-medium text-sm leading-relaxed">{p.desc}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="bg-gray-900 p-12 lg:p-16 rounded-[4rem] text-white relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-green/20 to-transparent pointer-events-none" />
                            <h4 className="font-black text-brand-gold mb-10 uppercase tracking-[0.2em] text-xs">Community Relations Policy</h4>
                            <ul className="space-y-6">
                                {[
                                    'Quarterly engagement with local leadership',
                                    'Prioritized local hiring for over 200+ roles',
                                    'Respect for indigenous culture & traditions',
                                    'Direct investment in local infrastructure',
                                    'Fast-track grievance & concern resolution'
                                ].map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-4 text-white/80 font-medium group-hover:text-white transition-colors"
                                    >
                                        <div className="w-2 h-2 bg-brand-gold rounded-full shrink-0 shadow-[0_0_10px_#FBBF24]" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="mt-12 flex items-center gap-4 pt-10 border-t border-white/10">
                                <div className="bg-brand-green/20 p-3 rounded-full text-brand-green">
                                    <ShieldCheck size={24} />
                                </div>
                                <p className="text-xs font-bold tracking-widest uppercase text-white/50">Full compliance with regulations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
