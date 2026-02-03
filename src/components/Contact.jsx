import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-gray-50 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(0,132,89,0.03),transparent)] pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row bg-white rounded-[5rem] shadow-[0_50px_100px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100 relative">

                    <div className="lg:w-[45%] bg-gray-900 p-16 lg:p-24 text-white relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-green/20 to-transparent opacity-50" />

                        <div className="relative z-10">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-brand-gold font-black tracking-[0.4em] uppercase text-[10px] mb-8 block"
                            >
                                Connect With Us
                            </motion.span>
                            <h2 className="text-5xl md:text-6xl font-black mb-10 leading-[0.9] tracking-tighter">
                                Let's Build the <br />
                                <span className="text-brand-green">Future </span> Together
                            </h2>
                            <p className="text-white/60 text-lg mb-16 font-medium leading-relaxed">
                                Have questions about our sustainable products or youth programs? Our team is ready to assist you.
                            </p>

                            <div className="space-y-10">
                                {[
                                    { icon: Phone, label: "Direct Line", val: "+234 123 456 7890", color: "text-blue-400" },
                                    { icon: Mail, label: "Official Email", val: "info@almadinahfarms.com", color: "text-brand-gold" },
                                    { icon: MapPin, label: "Visit the Farm", val: "Kano State, Nigeria", color: "text-brand-green" }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-8 group cursor-pointer"
                                    >
                                        <div className="w-16 h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-gold group-hover:text-gray-900 transition-all duration-500">
                                            <item.icon size={28} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <p className="text-white/30 font-black text-[10px] uppercase tracking-widest mb-1">{item.label}</p>
                                            <p className="text-xl font-bold group-hover:text-brand-gold transition-colors">{item.val}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-20 pt-12 border-t border-white/10 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="bg-brand-green p-1.5 rounded-lg">
                                    <MessageCircle size={18} className="text-white" />
                                </div>
                                <p className="font-bold text-xs tracking-widest uppercase text-white/50">Response within 24 Hours</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[55%] p-16 lg:p-24 bg-white">
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                                    <input type="text" className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-[2rem] focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all font-semibold" placeholder="Enter name" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
                                    <input type="email" className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-[2rem] focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all font-semibold" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Subject</label>
                                <select className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-[2rem] focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all font-semibold appearance-none">
                                    <option>General Inquiry</option>
                                    <option>Product Sales</option>
                                    <option>CSR / Education</option>
                                    <option>Investment</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-2">Your Message</label>
                                <textarea rows="5" className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-[3rem] focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green outline-none transition-all resize-none font-semibold" placeholder="How can we help?"></textarea>
                            </div>

                            <button className="w-full bg-brand-green hover:bg-gray-900 text-white font-black text-xs uppercase tracking-[0.3em] py-6 rounded-[3rem] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-brand-green/30 flex items-center justify-center gap-4">
                                Send Inquiry <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
