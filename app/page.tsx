import { ArrowRight, MessageSquare, Globe, Zap, CheckCircle, Clock, Code, Users } from "lucide-react";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-screen bg-white flex items-center justify-center px-4 pt-12">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Content */}
                        <div className="space-y-8">
                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-inconsolata font-bold text-black leading-tight">
                                    The intelligent
                                    <br />
                                    <span className="text-gray-600">conversation</span>
                                    <br />
                                    that accelerates
                                    <br />
                                    your project
                                </h1>
                            </div>

                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                                Transform any website into an intelligent chatbot. Verbaland reads, understands, and enables natural conversations with your content.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors flex items-center gap-2 group">
                                    Start Building
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="border-2 border-black text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-black hover:text-white transition-colors">
                                    Watch Demo
                                </button>
                            </div>


                        </div>

                        {/* Right Column - Live Chat Demo */}
                        <div className="relative lg:pl-8">
                            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/10 border border-white/20 overflow-hidden ring-1 ring-white/30 max-w-md mx-auto">
                                <iframe 
                                    src="https://verba.land/app/chat/?projectId=c6ba2f7e-e610-4b93-a3a1-762e42ce6e87&welcomeMessage=Hi! welcome to Verbaland. How can I help you?"
                                    className="w-full h-96 border-0"
                                    title="Verbaland Live Chat Demo"
                                    allow="microphone; camera"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                ✨ Live Demo
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto">
                                <Globe className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-inconsolata font-semibold text-black">Website Integration</h3>
                            <p className="text-gray-600">Seamlessly scrape and understand any website content in seconds</p>
                        </div>
                        
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto">
                                <MessageSquare className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-inconsolata font-semibold text-black">Smart Conversations</h3>
                            <p className="text-gray-600">AI-powered chatbot that understands context and provides accurate answers</p>
                        </div>
                        
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto">
                                <Zap className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-inconsolata font-semibold text-black">Lightning Fast</h3>
                            <p className="text-gray-600">Deploy your chatbot in minutes, not hours or days</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-inconsolata font-semibold text-black">
                                    Never miss a visitor question again
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    While you sleep, Verbaland works. Your website visitors get instant, 
                                    intelligent responses based on your actual content and knowledge.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="text-green-500" size={20} />
                                        <span className="text-gray-700">Instant responses, no waiting</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="text-green-500" size={20} />
                                        <span className="text-gray-700">Accurate answers from your content</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="text-green-500" size={20} />
                                        <span className="text-gray-700">24/7 availability, never offline</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="text-green-500" size={20} />
                                        <span className="text-gray-700">Reduces support workload</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="relative">
                                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-gray-700">Live Chat Assistant</span>
                                        <div className="ml-auto flex items-center gap-1">
                                            <Users size={14} className="text-gray-400" />
                                            <span className="text-xs text-gray-400">247 online</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="bg-gray-100 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">"What are your pricing plans?"</p>
                                        </div>
                                        <div className="bg-black text-white p-3 rounded-lg">
                                            <p className="text-sm">We offer three pricing tiers: Starter ($29/mo), Pro ($79/mo), and Enterprise (custom). Each includes unlimited conversations and 24/7 support. Would you like me to explain the differences?</p>
                                        </div>
                                        <div className="bg-gray-100 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">"How long does setup take?"</p>
                                        </div>
                                        <div className="bg-black text-white p-3 rounded-lg">
                                            <p className="text-sm">Setup takes less than 5 minutes! Just paste your website URL, and embed one line of code. Your assistant will be live instantly.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                    Always Online
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-inconsolata font-semibold text-black mb-6">
                            Setup in minutes,
                            <br />
                            <span className="text-gray-600">support 24/7</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transform your website into an intelligent assistant in just three simple steps. 
                            Provide instant, accurate answers to your visitors around the clock.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center space-y-6">
                            <div className="relative">
                                <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto">
                                    <Globe className="text-white" size={32} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-inconsolata font-semibold text-black">Connect Your Website</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Simply paste your website URL. Verbaland automatically scrapes and understands your content, 
                                documentation, and knowledge base.
                            </p>
                        </div>

                        <div className="text-center space-y-6">
                            <div className="relative">
                                <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto">
                                    <Code className="text-white" size={32} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-inconsolata font-semibold text-black">Embed One Line of Code</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Copy and paste a single line of code into your website. No complex integrations, 
                                no technical expertise required.
                            </p>
                        </div>

                        <div className="text-center space-y-6">
                            <div className="relative">
                                <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto">
                                    <Clock className="text-white" size={32} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-inconsolata font-semibold text-black">Go Live Instantly</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Your intelligent chat assistant is now live, providing instant, accurate answers 
                                to your visitors 24 hours a day, 7 days a week.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Secondary Section */}
            <section className="bg-gray-50 py-24 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-inconsolata font-semibold text-black mb-8">
                        Ready to transform your website?
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Join thousands of businesses using Verbaland to create smarter, more engaging user experiences.
                    </p>
                    <button className="bg-black text-white px-12 py-5 rounded-full font-medium text-xl hover:bg-gray-800 transition-colors">
                        Get Started Free
                    </button>
                </div>
            </section>
        </>
    )
}