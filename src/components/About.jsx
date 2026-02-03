import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck } from 'lucide-react';

// Assets
import chicken from '../assets/images/chicken.png';
import egg from '../assets/images/egg.png';
import cow1 from '../assets/images/cow1.png';
import cow2 from '../assets/images/cow2.png';
import goats from '../assets/images/goats.png';
import hydroponics from '../assets/images/hydroponics.png';

const StatCard = ({ label, value, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col border-l border-gray-200 pl-8"
    >
        <span className="text-brand-green font-black text-4xl mb-2">{value}</span>
        <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{label}</span>
    </motion.div>
);

const FocusArea = ({ image, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        viewport={{ once: true }}
        className="group"
    >
        <div className="relative aspect-square mb-10 bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 group-hover:border-brand-green/30 transition-all duration-700">
            <motion.img
                whileHover={{ scale: 1.1, rotate: 5 }}
                src={image}
                alt={title}
                className="w-full h-full object-contain p-6 transition-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <h4 className="text-2xl font-black mb-4 group-hover:text-brand-green transition-colors">{title}</h4>
        <p className="text-gray-500 font-medium leading-relaxed text-sm">{desc}</p>
    </motion.div>
);

const About = () => {
    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] mb-8">Establishment 1997</h2>
                            <h3 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] tracking-tighter text-gray-900">
                                ARCHITECTING <br />
                                <span className="text-gray-200">PROSPERITY</span>
                            </h3>
                            <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-xl">
                                Located in Kano State, Nigeria, Al-madinah Farms is a pioneering agricultural enterprise that embodies innovation, sustainability, and social responsibility since its founding in 1997.
                            </p>

                            <div className="grid grid-cols-2 gap-12 mb-12 border-t border-gray-100 pt-12">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-brand-green">
                                        <Target size={20} />
                                        <span className="font-black text-xs uppercase tracking-widest text-black">Precision Mission</span>
                                    </div>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">Empowering communities through innovative farming practices and environmental stewardship.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-brand-green">
                                        <Eye size={20} />
                                        <span className="font-black text-xs uppercase tracking-widest text-black">Global Vision</span>
                                    </div>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">To be a leading model of sustainable agriculture in Nigeria, contributing to food security.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 relative">
                        <div className="space-y-8 pt-20">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                src={cow1}
                                className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl"
                            />
                            <div className="bg-brand-green p-10 rounded-[3rem] text-white">
                                <ShieldCheck size={40} className="mb-6 opacity-30" />
                                <p className="font-black text-2xl uppercase tracking-tighter leading-none">Bio-Security Guaranteed</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="bg-brand-gold p-10 rounded-[3rem] text-black h-48 flex items-center">
                                <p className="font-black text-2xl uppercase tracking-tighter leading-none text-gray-900">27 Years of Excellence</p>
                            </div>
                            <motion.img
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: true }}
                                src={hydroponics}
                                className="w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Focus Areas */}
                <div id="services" className="mb-24">
                    <div className="flex justify-between items-end mb-20">
                        <div>
                            <h2 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] mb-4">Core Verticals</h2>
                            <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 uppercase">Our Focus Areas</h3>
                        </div>
                        <div className="hidden md:flex gap-16">
                            <StatCard label="ANNUAL CAPACITY" value="50M+" delay={0.1} />
                            <StatCard label="QUALITY NODES" value="A+" delay={0.2} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
                        <FocusArea
                            image={egg}
                            title="Egg Matrix"
                            desc="Large-scale poultry farm producing high-quality eggs for the Nigerian market."
                            delay={0.1}
                        />
                        <FocusArea
                            image={chicken}
                            title="Poultry Hub"
                            desc="Producing premium chicken products with modern hygiene and safety standards."
                            delay={0.2}
                        />
                        <FocusArea
                            image={cow2}
                            title="Cattle Ranch"
                            desc="Raising healthy livestock using best practices and humane treatment Protocols."
                            delay={0.3}
                        />
                        <FocusArea
                            image={goats}
                            title="Livestock Hub"
                            desc="Breeding healthy goats and sheep to enrich lives and support food security."
                            delay={0.4}
                        />
                        <FocusArea
                            image={hydroponics}
                            title="Hydroponic Lab"
                            desc="Advanced vertical systems for year-round production of leafy greens and fruits."
                            delay={0.5}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
