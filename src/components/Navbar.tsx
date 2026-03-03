"use client";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-[#333333] bg-[#0d0d0d]/95 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-[#eebd2b] font-bold">&gt;</span>
                    <span className="text-white font-bold tracking-tight">icommand</span>
                </div>
                <div className="flex gap-6 text-sm text-[#888888]">
                    <a href="#install" className="hover:text-white transition-colors">
                        Install
                    </a>
                    <a href="#features" className="hover:text-white transition-colors">
                        Features
                    </a>
                    <a href="#demo" className="hover:text-white transition-colors">
                        Demo
                    </a>
                </div>
            </div>
        </nav>
    );
}
