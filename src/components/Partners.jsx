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
        <section className="py-32 bg-gray-50 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 translate-x-32" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
                    <div className="max-w-2xl">
                        <h4 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] mb-6">Global Network</h4>
                        <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                            INTERNATIONAL <span className="text-brand-green">ALLIANCE</span>
                        </h3>
                    </div>
                    <p className="text-gray-500 font-medium max-w-md text-sm leading-relaxed">
                        Collaborating with world-class agricultural institutions to bring cutting-edge research and standardized quality to Nigeria.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group h-[300px] bg-white rounded-[3rem] border border-gray-100 flex items-center justify-center p-12 hover:border-brand-green/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            <img
                                src={partner}
                                alt={`Partner ${idx + 1}`}
                                className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
