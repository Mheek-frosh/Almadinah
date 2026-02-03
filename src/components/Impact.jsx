import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Heart, GraduationCap, Activity } from 'lucide-react';

const Impact = () => {
    const highlights = [
        {
            title: 'Youth Empowerment',
            desc: 'Investing in the potential of Nigerian youth through specialized training programs, internships, and high-tech job creation.',
            icon: GraduationCap,
            stat: '200+',
            suffix: 'EMPLOYED'
        },
        {
            title: 'Poverty Reduction',
            desc: "Providing stable employment and income opportunities to improve living standards in our host communities.",
            icon: Heart,
            stat: '27Y',
            suffix: 'COMMITMENT'
        },
        {
            title: 'Economic Growth',
            desc: 'Investing in agriculture and stimulating local economic activity to contribute to Nigeria\'s macro-growth.',
            icon: TrendingUp,
            stat: 'TOP',
            suffix: 'CONTRIBUTOR'
        }
    ];

    const principles = [
        'Community Engagement & Needs Assessment',
        'Women & Youth Empowerment Initiatives',
        'Scholarships & Educational Promotion',
        'Healthcare Support & healthy living',
        'Direct Local Economic Opportunities'
    ];

    return (
        <section id="impact" className="py-32 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] mb-8">Social Responsibility</h2>
                        <h3 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9] tracking-tighter text-gray-900 uppercase">
                            EMPOWERING <br />
                            <span className="text-brand-green italic">LIVES</span>
                        </h3>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-2xl">
                            At Almadinah Farms, we believe that our business success is intrinsically linked to the well-being of the communities we operate in.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
                    {highlights.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-12 rounded-[4rem] shadow-2xl shadow-gray-200/50 border border-gray-100 group hover:border-brand-green/30 transition-all duration-700"
                            >
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-500">
                                        <Icon size={28} />
                                    </div>
                                    <div className="text-right">
                                        <p className="text-3xl font-black text-gray-900">{item.stat}</p>
                                        <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest">{item.suffix}</p>
                                    </div>
                                </div>
                                <h4 className="text-2xl font-black mb-6 uppercase tracking-tight text-gray-900">{item.title}</h4>
                                <p className="text-gray-500 font-medium leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="bg-gray-950 rounded-[5rem] p-12 lg:p-24 relative overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h4 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em] mb-8">System 01 Core Principles</h4>
                            <h3 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                                OUR CSR <br />
                                <span className="text-brand-green">PHILOSOPHY</span>
                            </h3>
                            <ul className="space-y-6">
                                {principles.map((p, idx) => (
                                    <li key={idx} className="flex items-center gap-6 group">
                                        <div className="w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_#008459] group-hover:scale-125 transition-transform" />
                                        <span className="text-white/40 group-hover:text-white transition-colors font-black text-[10px] uppercase tracking-widest leading-none">
                                            {p}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-white/10 relative overflow-hidden">
                            <Activity className="text-brand-gold mb-8 opacity-50" size={32} />
                            <h4 className="text-white text-2xl font-black mb-6 uppercase tracking-tight">Community Integration</h4>
                            <p className="text-white/40 font-medium leading-relaxed mb-8">
                                Regular engagement with community leaders and stakeholders to address concerns fairly and support long-term development.
                            </p>
                            <div className="flex gap-4">
                                <span className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black text-brand-green uppercase tracking-widest">Local Hiring First</span>
                                <span className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black text-brand-green uppercase tracking-widest">Active Dialogue</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
