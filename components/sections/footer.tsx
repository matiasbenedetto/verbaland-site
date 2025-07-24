import Link from "next/link";
import { Twitter, Linkedin, Mail, MessageSquare, Globe, Zap } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-black text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-brand text-white">Verbaland</Link>
                        <p className="text-gray-400 leading-relaxed">
                            Transform any website into an intelligent chatbot. The smart conversation to accelerate your project.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Product Column */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                    <MessageSquare size={16} />
                                    <span>Chatbot Builder</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                    <Globe size={16} />
                                    <span>Website Integration</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                    <Zap size={16} />
                                    <span>Analytics</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    API Documentation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Get Started</h3>
                        <p className="text-gray-400">
                            Ready to transform your website? Start building your chatbot today.
                        </p>
                        <div className="space-y-3">
                            <button className="w-full bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                                Start Free Trial
                            </button>
                            <Link 
                                href="mailto:hello@verbaland.com" 
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                            >
                                <Mail size={16} />
                                <span>hello@verbaland.com</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Verbaland. All rights reserved.
                        </p>
                        <div className="flex space-x-8">
                            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
