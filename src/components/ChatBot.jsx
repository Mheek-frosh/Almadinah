import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Welcome to Al-madinah Farms! How can I assist you today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const generateResponse = (text) => {
        const lowerText = text.toLowerCase();
        if (lowerText.includes('partners') || lowerText.includes('international')) return "Our global alliance includes strategic partnerships with leading agricultural institutions worldwide.";
        if (lowerText.includes('farm') || lowerText.includes('yield')) return "We cultivate nutrient-rich produce using sustainable, mechanized precision farming.";
        if (lowerText.includes('contact') || lowerText.includes('email') || lowerText.includes('phone')) return "You can reach us at info@almadinahfarms.com or call +234 (0) 803 123 4567.";
        if (lowerText.includes('location') || lowerText.includes('where')) return "Our headquarters are located in Kano State, Nigeria.";
        if (lowerText.includes('job') || lowerText.includes('career')) return "Please check our careers page or email your CV to careers@almadinahfarms.com.";
        return "Thank you for your message. A representative will get back to you shortly. Is there anything else I can help with?";
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate network delay
        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: generateResponse(userMsg.text),
                sender: 'bot'
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden z-[60] border border-gray-100 flex flex-col font-sans"
                    >
                        {/* Header */}
                        <div className="bg-brand-green p-6 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Al-madinah Support</h4>
                                    <p className="text-white/60 text-[10px] uppercase tracking-wider font-black flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Online
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                                ? 'bg-brand-green text-white rounded-br-none'
                                                : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none shadow-sm'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm flex items-center gap-1">
                                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce duration-500" />
                                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce duration-500 delay-150" />
                                        <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce duration-500 delay-300" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-green/30 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim()}
                                    className="bg-brand-green text-white p-3 rounded-xl disabled:opacity-50 hover:bg-brand-green/90 transition-colors"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 w-16 h-16 bg-brand-green text-white rounded-full shadow-2xl flex items-center justify-center z-[60] hover:bg-brand-gold hover:text-gray-900 transition-colors"
            >
                <MessageSquare size={28} fill="currentColor" />
            </motion.button>
        </>
    );
};

export default ChatBot;
