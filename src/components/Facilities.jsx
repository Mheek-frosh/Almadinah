import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Warehouse, Utensils, Factory, Droplets, FlaskConical } from 'lucide-react';

// Assets
// Assets
import f1 from '../assets/images/f1.png'; // Keeping for reference if needed, but f3 is used for wellness now
import f3 from '../assets/images/f3.png'; // Now Employee Wellness
import trucks from '../assets/images/trucks.png';

const facilityList = [
    { title: 'Logistics & Transport', icon: Warehouse, img: trucks, desc: 'Efficient fleet management ensuring timely distribution across the region.' },
    { title: 'Smart Storage Warehouse', icon: Warehouse, img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop', desc: 'Spacious warehouse for precision storage and automated processing.' },
    { title: 'Employee Wellness Gym', icon: Dumbbell, img: f3, desc: 'A fully-equipped gym for employee wellness and health maintenance.' },
    { title: 'Farm-to-Table Restaurant', icon: Utensils, img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', desc: 'A spacious restaurant serving fresh, organic farm-to-table produce.' },
    { title: 'Advanced Grain Mills', icon: Factory, img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5d0e?q=80&w=2070&auto=format&fit=crop', desc: 'State-of-the-art mills for high-efficiency grain processing.' },
    { title: 'Irrigation & Lab', icon: Droplets, img: 'https://images.unsplash.com/photo-1563514227146-24298e20f171?q=80&w=2070&auto=format&fit=crop', desc: 'Advanced irrigation systems and R&D center for continuous innovation.' },
];

const Facilities = () => {
    return (
        <section id="facilities" className="py-32 bg-gray-950 text-white relative overflow-hidden">
            {/* HUD Scanlines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 4px, 3px 100%' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] mb-8">Engineering Infrastructure</h2>
                        <h3 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] tracking-tighter">
                            MODERN <br />
                            <span className="text-brand-green italic">FACILITIES</span>
                        </h3>
                        <p className="text-xl text-white/40 font-medium leading-relaxed max-w-2xl">
                            Our farm boasts a range of state-of-the-art facilities designed to drive efficiency and productivity while ensuring workplace excellence.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilityList.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="group relative bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden hover:border-brand-green/50 transition-all duration-700"
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                                </div>
                                <div className="p-10 relative">
                                    <div className="w-14 h-14 bg-brand-green/20 rounded-2xl flex items-center justify-center text-brand-green mb-8 group-hover:bg-brand-green group-hover:text-white transition-all duration-500">
                                        <Icon size={24} />
                                    </div>
                                    <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h4>
                                    <p className="text-white/40 font-medium leading-relaxed text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                                {/* Tech Corner Accent */}
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-12 h-12 border-t-2 border-r-2 border-brand-green/50 rounded-tr-3xl" />
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Innovation Node Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-brand-green/10 rounded-[3rem] border-2 border-dashed border-brand-green/30 p-12 flex flex-col justify-center items-center text-center group"
                    >
                        <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-2xl shadow-brand-green/20">
                            <FlaskConical size={32} />
                        </div>
                        <h4 className="text-3xl font-black mb-6">GLOBAL R&D CENTER</h4>
                        <p className="text-brand-green/60 font-black text-[10px] uppercase tracking-widest leading-loose">
                            Innovation & Experimentation Node <br />
                            System 01 Active
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;
