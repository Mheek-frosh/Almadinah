import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Warehouse, Utensils, Factory, Droplets, FlaskConical } from 'lucide-react';

const Facilities = () => {
    const facilities = [
        { name: 'Employee Wellness Gym', icon: Dumbbell, desc: 'Fully-equipped gym for staff health and fitness.' },
        { name: 'Spacious Warehouse', icon: Warehouse, desc: 'Advanced storage and processing facilities.' },
        { name: 'Farm-to-Table Restaurant', icon: Utensils, desc: 'Serving fresh produce directly from our fields.' },
        { name: 'Grain Processing Mills', icon: Factory, desc: 'State-of-the-art mills for high-quality processing.' },
        { name: 'Advanced Irrigation', icon: Droplets, desc: 'Efficient water management for year-round farming.' },
        { name: 'R&D Center', icon: FlaskConical, desc: 'A hub for innovation and agricultural experimentation.' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="py-32 bg-brand-green relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 -skew-x-12 translate-x-1/2" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-gold font-black tracking-[0.3em] uppercase text-xs mb-4 block"
                        >
                            World-Class Infrastructure
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-white leading-tight"
                        >
                            Excellence in every <br />
                            <span className="text-brand-gold">Facility</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-white/60 max-w-sm text-lg pb-2 border-b border-white/20 font-medium"
                    >
                        Investing in technology and our people to drive the future of agriculture.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {facilities.map((f, index) => {
                        const Icon = f.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3.5rem] hover:bg-white/10 transition-all group cursor-default shadow-xl"
                            >
                                <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold mb-8 group-hover:bg-brand-gold group-hover:text-gray-900 transition-all duration-500 transform group-hover:rotate-6">
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">{f.name}</h4>
                                <p className="text-white/50 leading-relaxed text-sm group-hover:text-white/70 transition-colors">{f.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-24 p-12 bg-white/5 border border-white/10 rounded-[4rem] text-center relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <p className="text-white/90 italic text-2xl max-w-4xl mx-auto leading-relaxed font-medium">
                            "Our collaborations with leading international organizations allow us to leverage cutting-edge technology and research to set the standard for sustainable agriculture."
                        </p>
                        <div className="mt-8 flex justify-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all">
                            {/* Mock partner logos or icon representation */}
                            <Globe size={40} className="text-white" />
                            <Award size={40} className="text-white" />
                            <Leaf size={40} className="text-white" />
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-gold/5 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
};

export default Facilities;
