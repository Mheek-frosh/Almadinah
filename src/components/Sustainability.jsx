import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Droplets, Recycle, Zap, Globe } from 'lucide-react';

const Sustainability = () => {
    const initiatives = [
        {
            title: 'Renewable Core',
            icon: Sun,
            desc: 'We are transitioning to solar power and other renewable energy sources to significantly reduce our carbon footprint.',
            color: 'text-orange-500',
            bg: 'bg-orange-500/10'
        },
        {
            title: 'Water Intelligence',
            icon: Droplets,
            desc: 'Our hydroponic systems and efficient irrigation practices minimize waste and ensure sustainable water usage.',
            color: 'text-blue-500',
            bg: 'bg-blue-500/10'
        },
        {
            title: 'Bio-Management',
            icon: Recycle,
            desc: 'Implementing best practices in waste management, including composting and recycling, to minimize environmental impact.',
            color: 'text-brand-green',
            bg: 'bg-brand-green/10'
        }
    ];

    const sdgs = [
        { id: 2, name: 'Zero Hunger', color: 'bg-[#D32F2F]' },
        { id: 8, name: 'Decent Work & Growth', color: 'bg-[#A21942]' },
        { id: 12, name: 'Responsible Production', color: 'bg-[#BF8B2E]' },
        { id: 13, name: 'Climate Action', color: 'bg-[#3F7E44]' },
        { id: 15, name: 'Life on Land', color: 'bg-[#56C02B]' }
    ];

    return (
        <section id="future" className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] mb-8">Systemic Stewardship</h2>
                        <h3 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] tracking-tighter text-gray-900 uppercase">
                            ENVIRONMENTAL <br />
                            <span className="text-gray-200">RESPONSIBILITY</span>
                        </h3>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12 max-w-xl">
                            At Almadinah Farms, we are committed to sustainable agriculture practices that contribute to Nigeria's food security and promote environmental stewardship.
                        </p>

                        <div className="space-y-8">
                            {initiatives.map((item, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-3xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black mb-2 uppercase tracking-tight text-gray-900">{item.title}</h4>
                                        <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="bg-gray-950 rounded-[4rem] p-12 md:p-20 relative overflow-hidden group">
                            {/* Tech Grid Overlay */}
                            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(#008459 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                            <div className="relative z-10">
                                <Zap className="text-brand-gold mb-12 opacity-50" size={40} />
                                <h4 className="text-white text-3xl font-black mb-10 tracking-tight">SDG ALIGNMENT <br /> PROTOCOLS</h4>
                                <div className="space-y-6">
                                    {sdgs.map((sdg) => (
                                        <div key={sdg.id} className="flex items-center gap-6 group/item">
                                            <div className={`w-12 h-12 ${sdg.color} rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-black/20 group-hover/item:scale-110 transition-transform`}>
                                                {sdg.id}
                                            </div>
                                            <div>
                                                <p className="text-white font-black text-sm uppercase tracking-widest">{sdg.name}</p>
                                                <p className="text-white/20 text-[10px] font-black tracking-[0.2em] group-hover/item:text-brand-green transition-colors">UNITED NATIONS MODULE</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Scanning Line */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-green/30 animate-scanline opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* External Floating Card */}
                        <div className="absolute -bottom-10 -right-10 bg-brand-gold p-10 rounded-[3rem] shadow-2xl hidden md:block">
                            <Globe className="text-gray-950 mb-4" size={32} />
                            <p className="text-gray-950 font-black text-xs uppercase tracking-widest leading-none">Global Standard <br /> Operational</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
