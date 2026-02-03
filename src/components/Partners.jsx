import React from 'react';
import { motion } from 'framer-motion';

// Assets
import partner1 from '../assets/images/1.png';
import partner2 from '../assets/images/2.png';
import partner3 from '../assets/images/3.png';
import partner4 from '../assets/images/4.png';

const partners = [partner1, partner2, partner3, partner4];

const Partners = () => {
    return (
        <section className="py-24 bg-white border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/3 text-center lg:text-left">
                        <motion.h4
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] mb-4"
                        >
                            Global Network
                        </motion.h4>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl font-black tracking-tight text-gray-900"
                        >
                            INTERNATIONAL <br />
                            <span className="text-brand-green">PARTNERSHIPS</span>
                        </motion.h3>
                    </div>

                    <div className="lg:w-2/3">
                        <p className="text-gray-500 font-medium leading-relaxed mb-12 max-w-2xl text-center lg:text-left">
                            We collaborate with leading international organizations to leverage best practices, technology, and expertise in sustainable agriculture, integrating research-based innovations into our local systems.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                            {partners.map((partner, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.15, rotate: 2 }}
                                    className="w-64 md:w-80 lg:w-96 h-48 flex items-center justify-center p-8 bg-gray-50 rounded-[3rem] border border-transparent hover:border-brand-green/20 hover:shadow-2xl transition-all"
                                >
                                    <img
                                        src={partner}
                                        alt={`Partner ${idx + 1}`}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
