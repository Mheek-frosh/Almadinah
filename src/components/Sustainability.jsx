import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Droplets, Recycle, Zap, Globe, Leaf, Wind } from 'lucide-react';

const Sustainability = () => {
    const initiatives = [
        {
            title: 'Renewable Core',
            icon: Sun,
            desc: 'Transitioning to 100% solar dependencies to power our automated systems.',
            color: 'text-brand-gold'
        },
        {
            title: 'Water Intelligence',
            icon: Droplets,
            desc: 'Precision hydroponics reducing water usage by 90% compared to traditional methods.',
            color: 'text-brand-green'
        },
        {
            title: 'Circular Systems',
            icon: Recycle,
            desc: 'Zero-waste protocols turning organic byproduct into nutrient-rich compost.',
            color: 'text-brand-green'
        }
    ];

    const sdgs = [
        { id: 2, name: 'Zero Hunger' },
        { id: 8, name: 'Decent Work' },
        { id: 12, name: 'Responsible' },
        { id: 13, name: 'Climate' },
        { id: 15, name: 'Life on Land' }
    ];

    return (
        <section id="sustainability" className="py-32 bg-white relative overflow-hidden font-sans">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-green/5 via-transparent to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-brand-green font-black tracking-[0.4em] uppercase text-xs mb-6 block">Legacy of Stewardship</span>
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8">
                            ENVIRONMENTAL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-green/60">RESPONSIBILITY</span>
                        </h2>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed">
                            We don't just farm the land; we engineer ecosystems. Our systemic approach ensures that every yield contributes to a regenerative future for Nigeria.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
                    {initiatives.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100 hover:shadow-2xl hover:border-brand-green/20 transition-all duration-500 group"
                        >
                            <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center ${item.color} shadow-sm mb-8 group-hover:scale-110 transition-transform`}>
                                <item.icon size={32} />
                            </div>
                            <h4 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h4>
                            <p className="text-gray-500 font-bold text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-gray-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-16">
                    <div className="absolute inset-0 bg-brand-green/10 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />

                    <div className="relative z-10 max-w-xl">
                        <h3 className="text-white text-3xl md:text-5xl font-black mb-6 tracking-tight">SDG ALIGNMENT</h3>
                        <p className="text-white/60 font-medium text-lg mb-10">
                            Our operations are rigorously calibrated to meet and exceed the United Nations Sustainable Development Goals.
                        </p>
                        <div className="flex gap-4">
                            <Leaf className="text-brand-green" />
                            <Wind className="text-brand-gold" />
                            <Globe className="text-blue-500" />
                        </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {sdgs.map((sdg, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors cursor-default">
                                <span className="text-white/20 font-black text-xs block mb-2">GOAL {sdg.id}</span>
                                <span className="text-white font-bold text-xs uppercase tracking-wider">{sdg.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
