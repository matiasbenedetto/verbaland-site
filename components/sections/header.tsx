"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Send, X } from "lucide-react";
import { useState } from "react";

function Header() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [message, setMessage] = useState("");

    return (
        <>
            <header className="fixed top-[20px] left-0 right-0 w-full z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center bg-white/80 backdrop-blur-xl rounded-full py-3 px-6 border border-white/20 shadow-2xl shadow-black/10 ring-1 ring-white/30">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="text-xl font-brand text-black">Verbaland</Link>
                        </div>
                        <button 
                            onClick={() => setIsChatOpen(!isChatOpen)}
                            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            <MessageCircle size={16} />
                            <span className="text-sm font-medium">Try Demo</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Chat Window */}
            {isChatOpen && (
                <div className="fixed top-[80px] right-4 w-80 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/20 border border-white/20 z-50 overflow-hidden ring-1 ring-white/30">
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="font-medium text-sm">Verbaland Assistant</span>
                        </div>
                        <button 
                            onClick={() => setIsChatOpen(false)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X size={16} />
                        </button>
                    </div>
                    
                    <div className="h-64 p-4 overflow-y-auto bg-gray-50/50">
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                                <p className="text-sm text-gray-700">👋 Hi! I'm your Verbaland assistant. I can help you understand how our chatbot integration works.</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                                <p className="text-sm text-gray-700">Try asking me: "How does Verbaland work?" or "What websites can you integrate with?"</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-4 border-t border-gray-100">
                        <div className="flex gap-2">
                            <input 
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Ask me anything..."
                                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
                                onKeyPress={(e) => e.key === 'Enter' && setMessage('')}
                            />
                            <button 
                                onClick={() => setMessage('')}
                                className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                <Send size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;