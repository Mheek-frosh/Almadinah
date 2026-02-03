import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ChevronRight } from 'lucide-react';

// Assets
import f1 from '../assets/images/f1.png';
import f2 from '../assets/images/f2.png';
import f3 from '../assets/images/f3.png';
import f4 from '../assets/images/f4.png';
import f5 from '../assets/images/f5.png';
import partner1 from '../assets/images/1.png';
import partner2 from '../assets/images/2.png';
import partner3 from '../assets/images/3.png';
import partner4 from '../assets/images/4.png';
import chicken from '../assets/images/chicken.png';
import egg from '../assets/images/egg.png';
import cow1 from '../assets/images/cow1.png';
import cow2 from '../assets/images/cow2.png';

const TourSegment = ({ title, images, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8 }}
        viewport={{ once: true }}
        className="group"
    >
        <div className="flex justify-between items-end mb-8">
            <h4 className="text-2xl font-black uppercase tracking-tighter text-gray-900">{title}</h4>
            <div className="h-[1px] flex-grow mx-8 bg-gray-100 group-hover:bg-brand-green/30 transition-colors" />
            <span className="text-[10px] font-black tracking-widest text-brand-gold uppercase">SEGMENT.0{delay * 10}</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {images.map((img, idx) => (
                <div key={idx} className="aspect-square bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-brand-green/30 transition-all group/img flex items-center justify-center p-4">
                    <img
                        src={img}
                        alt={`${title} ${idx}`}
                        className="w-full h-full object-contain group-hover/img:scale-110 transition-transform duration-700"
                    />
                </div>
            ))}
        </div>
    </motion.div>
);

const Gallery = () => {
    return (
        <section id="gallery" className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] mb-8">Visual Architecture</h2>
                        <h3 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] tracking-tighter text-gray-900 uppercase">
                            PICTORIAL <br />
                            <span className="text-gray-200">TOUR</span>
                        </h3>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-2xl">
                            Witness the integration of technology, scale, and international standards across our diverse agricultural portfolio.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-32">
                    <TourSegment
                        title="Poultry & Delivery Services"
                        images={[egg, chicken, f4, f2]}
                        delay={0.1}
                    />
                    <TourSegment
                        title="Cattle Ranch & Livestock"
                        images={[cow1, cow2, '../assets/images/goats.png', cow1]}
                        delay={0.2}
                    />
                    <TourSegment
                        title="Infrastructure & Facilities"
                        images={[f1, f2, f3, f5]}
                        delay={0.3}
                    />
                    <TourSegment
                        title="Global Alliance Branding"
                        images={[partner1, partner2, partner3, partner4]}
                        delay={0.4}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 text-center"
                >
                    <a href="#contact" className="inline-flex items-center gap-6 group">
                        <span className="text-4xl md:text-6xl font-black tracking-tighter text-gray-300 group-hover:text-brand-green transition-colors uppercase">Schedule Field Visit</span>
                        <div className="w-20 h-20 rounded-full bg-brand-green text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-black transition-all">
                            <ChevronRight size={40} />
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
