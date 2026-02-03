import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Leaf, Globe, ShoppingCart, CloudRain, TreePine, Sparkles } from 'lucide-react';

const MissionVision = () => {
    const sdgs = [
        { id: 2, name: 'Zero Hunger', icon: ShoppingCart, color: 'text-orange-600' },
        { id: 8, name: 'Economic Growth', icon: Globe, color: 'text-blue-600' },
        { id: 12, name: 'Responsible Production', icon: Leaf, color: 'text-green-600' },
        { id: 13, name: 'Climate Action', icon: CloudRain, color: 'text-sky-600' },
        { id: 15, name: 'Life on Land', icon: TreePine, color: 'text-emerald-700' },
    ];

    return (
        <section className="py-32 bg-gray-900 relative overflow-hidden">
            {/* Background Texture/FX */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-green/30 rounded-full blur-[150px]" />
                <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-brand-gold/20 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-gold font-black tracking-[0.4em] uppercase text-[10px] mb-4 block"
                        >
                            Visionary Leadership
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-white leading-tight"
                        >
                            A Leading Model of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Sustainable Agriculture</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl p-16 rounded-[4rem] border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all duration-700 shadow-2xl"
                    >
                        <div className="absolute -top-10 -right-10 text-brand-green/10 group-hover:text-brand-green/20 transition-colors transform group-hover:scale-125 duration-1000">
                            <Target size={240} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center text-white mb-10 shadow-[0_0_30px_rgba(0,132,89,0.3)]">
                                <Target size={32} />
                            </div>
                            <h3 className="text-3xl font-black text-white mb-8">Our Mission</h3>
                            <p className="text-xl leading-relaxed text-white/70 font-medium">
                                To be a leading model of sustainable agriculture in Nigeria, empowering communities and enriching lives through innovative farming practices, environmental stewardship, and social responsibility.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl p-16 rounded-[4rem] border border-white/10 relative overflow-hidden group hover:bg-white/10 transition-all duration-700 shadow-2xl"
                    >
                        <div className="absolute -top-10 -right-10 text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors transform group-hover:scale-125 duration-1000">
                            <Sparkles size={240} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center text-gray-900 mb-10 shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-3xl font-black text-white mb-8">Our Commitment</h3>
                            <p className="text-xl leading-relaxed text-white/70 font-medium">
                                We are committed to sustainable agriculture practices that contribute to Nigeria's food security, promote environmental stewardship, and empower local communities across the nation.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h4 className="text-white font-black tracking-[0.3em] uppercase text-xs mb-4">Driving Global Impact</h4>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-10 bg-brand-green/30" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">United Nations Sustainable Development Goals</h2>
                            <div className="h-px w-10 bg-brand-green/30" />
                        </div>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
                        {sdgs.map((sdg, index) => {
                            const Icon = sdg.icon;
                            return (
                                <motion.div
                                    key={sdg.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="group flex flex-col items-center"
                                >
                                    <div className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-[2.5rem] flex flex-col items-center justify-center border border-white/10 group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:border-transparent">
                                        <Icon size={36} className={`${sdg.color} group-hover:scale-110 transition-transform duration-500`} />
                                        <span className="text-[10px] font-black text-gray-400 mt-2 block group-hover:text-gray-900">SDG {sdg.id}</span>
                                    </div>
                                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-6 group-hover:text-brand-gold transition-colors">{sdg.name}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
