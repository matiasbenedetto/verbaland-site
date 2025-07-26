"use client";

import Link from "next/link";

function Header() {
    return (
            <header className="fixed top-4 left-0 right-0 w-full z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center bg-black/80 backdrop-blur-xl rounded-2xl py-3 px-6 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] ring-1 ring-white/20 hover:bg-black/40 transition-all duration-300">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-2 group">
                                <span className="text-xl font-bold text-white tracking-tight">Verbaland</span>
                            </Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <nav className="hidden md:flex items-center gap-6">
                                <Link href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Solutions</Link>
                                <Link href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Platform</Link>
                                <Link href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Pricing</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
    );
}

export default Header;