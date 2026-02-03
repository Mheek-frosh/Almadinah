import React from 'react';
import { motion } from 'framer-motion';
import { Egg, Beef, Sprout, ShieldCheck, Zap, Heart } from 'lucide-react';
import hydroponicsImg from '../assets/images/hydroponics.png';
import trucksImg from '../assets/images/trucks.png';

const FocusCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-brand-green/30 transition-all hover:-translate-y-2 group"
    >
        <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

const About = () => {
    const premiumFarmImg = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop";

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <img
                                src={premiumFarmImg}
                                alt="Innovation"
                                className="rounded-[3rem] shadow-2xl relative z-10 w-full aspect-[4/3] object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-brand-green rounded-[3rem] z-0" />
                        </motion.div>
                        {/* Stats Overlay */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                            className="absolute top-10 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 hidden sm:flex"
                        >
                            <div className="bg-brand-gold p-3 rounded-full">
                                <Zap className="text-white" size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Innovation</p>
                                <p className="text-gray-900 font-bold">State-of-the-Art</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                                Pioneering Agriculture <br />
                                <span className="text-brand-green">Since 1997</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Located in Kano State, Nigeria, Al-madinah Farms is a pioneering agricultural enterprise that embodies innovation, sustainability, and social responsibility.
                            </p>
                            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                                Our modern farm is equipped with state-of-the-art machinery and equipment, enabling us to drive efficiency and productivity while minimizing our environmental footprint.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-green/10 p-2 rounded-lg text-brand-green shrink-0">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <p className="text-gray-700 font-semibold">Quality Assurance</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-green/10 p-2 rounded-lg text-brand-green shrink-0">
                                        <Heart size={20} />
                                    </div>
                                    <p className="text-gray-700 font-semibold">Humane Treatment</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div id="services">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
                        <div className="w-20 h-1.5 bg-brand-gold mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FocusCard
                            icon={Egg}
                            title="Poultry Production"
                            description="Large-scale operation producing high-quality eggs and chicken products for the Nigerian market with unmatched efficiency."
                            delay={0.1}
                        />
                        <FocusCard
                            icon={Beef}
                            title="Animal Husbandry"
                            description="Breeding and raising healthy livestock, including cattle, goats, and sheep, using best practices and humane treatment."
                            delay={0.2}
                        />
                        <FocusCard
                            icon={Sprout}
                            title="Hydroponic Farming"
                            description="Advanced systems to grow leafy greens, vegetables, and fruits, ensuring year-round production and reduced water usage."
                            delay={0.3}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
