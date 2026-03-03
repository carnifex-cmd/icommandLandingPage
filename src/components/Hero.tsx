"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 relative pt-28">
            <div className="max-w-4xl w-full flex flex-col gap-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-center md:text-left text-white"
                >
                    search your command
                    <br />
                    history{" "}
                    <span className="text-[#888888]">the way you think.</span>
                </motion.h1>

                {/* Terminal mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full border border-[#333333] bg-[#111111] p-1"
                >
                    {/* Search bar */}
                    <div className="flex items-center gap-3 px-3 py-3 border-b border-[#333333]">
                        <span className="text-[#eebd2b] font-bold">➜</span>
                        <span className="text-[#888888] font-bold">find</span>
                        <span className="text-white font-bold">undo last git commit</span>
                        <span className="cursor-blink w-2 h-5 bg-[#eebd2b] block" />
                    </div>

                    {/* Results */}
                    <div className="flex flex-col">
                        {/* Top result — highlighted */}
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between px-3 py-2 bg-[#eebd2b]/10 text-[#eebd2b]">
                            <div className="flex flex-col">
                                <span className="font-bold text-[#eebd2b]">
                                    git reset --soft HEAD~1
                                </span>
                                <span className="text-xs opacity-80 mt-1 text-[#eebd2b]/80">
                                    ~/projects/icommand/src
                                </span>
                            </div>
                            <span className="text-xs opacity-80 font-mono mt-1 sm:mt-0 text-[#eebd2b]">
                                2m ago
                            </span>
                        </div>

                        {/* Second result */}
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between px-3 py-2 hover:bg-white/5 text-gray-400 transition-colors">
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-300">git revert HEAD</span>
                                <span className="text-xs opacity-70 mt-1 text-[#666666]">
                                    ~/projects/legacy-app
                                </span>
                            </div>
                            <span className="text-xs opacity-60 font-mono mt-1 sm:mt-0 text-[#666666]">
                                2d ago
                            </span>
                        </div>

                        {/* Third result */}
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between px-3 py-2 hover:bg-white/5 text-gray-400 transition-colors">
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-300">
                                    git commit --amend
                                </span>
                                <span className="text-xs opacity-70 mt-1 text-[#666666]">
                                    ~/work/backend
                                </span>
                            </div>
                            <span className="text-xs opacity-60 font-mono mt-1 sm:mt-0 text-[#666666]">
                                5d ago
                            </span>
                        </div>
                    </div>

                    {/* Status bar */}
                    <div className="flex justify-between items-center px-3 py-1 bg-[#333333]/30 text-[10px] uppercase tracking-wider text-[#888888] border-t border-[#333333]">
                        <span>340 matches</span>
                        <span>ENTER: execute</span>
                    </div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="#install"
                        className="h-12 px-8 border border-[#eebd2b] text-[#eebd2b] hover:bg-[#eebd2b] hover:text-black transition-colors text-sm font-bold uppercase tracking-wider flex items-center justify-center"
                    >
                        &gt; Install Now
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 px-8 border border-[#333333] text-gray-300 hover:text-white hover:border-white transition-colors text-sm font-bold uppercase tracking-wider flex items-center justify-center"
                    >
                        Github ↗
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
