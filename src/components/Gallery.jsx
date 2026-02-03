import React from 'react';
import { motion } from 'framer-motion';
import trucksImg from '../assets/images/trucks.png';
import communityImg from '../assets/images/community.png';
import hydroponicsImg from '../assets/images/hydroponics.png';
import meetingImg from '../assets/images/meeting.png';
import fieldImg from '../assets/images/field.png';

const Gallery = () => {
    const galleryItems = [
        {
            src: fieldImg,
            title: 'Modern Field Operations',
            category: 'Agriculture',
            span: 'md:col-span-2 md:row-span-2'
        },
        {
            src: hydroponicsImg,
            title: 'Hydroponics Innovation',
            category: 'Innovation',
            span: 'md:col-span-1 md:row-span-1'
        },
        {
            src: trucksImg,
            title: 'Efficient Logistics',
            category: 'Distribution',
            span: 'md:col-span-1 md:row-span-1'
        },
        {
            src: meetingImg,
            title: 'Strategic Governance',
            category: 'Management',
            span: 'md:col-span-1 md:row-span-1'
        },
        {
            src: communityImg,
            title: 'Community Empowerment',
            category: 'CSR',
            span: 'md:col-span-2 md:row-span-1'
        },
    ];

    return (
        <section id="gallery" className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-green font-black tracking-widest uppercase text-xs mb-4 block"
                        >
                            Visual Journey
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
                        >
                            Inside <span className="text-brand-green">Al-madinah</span><br />
                            Modern Facilities
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 max-w-sm text-lg pb-2 border-b-2 border-brand-gold font-medium"
                    >
                        Witness the integration of technology and tradition in our daily operations.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className={`relative group overflow-hidden rounded-[3rem] shadow-2xl ${item.span}`}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                >
                                    <span className="bg-brand-gold text-gray-900 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
                                        {item.category}
                                    </span>
                                    <h4 className="text-white text-3xl font-bold leading-none">{item.title}</h4>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
