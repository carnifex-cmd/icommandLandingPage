"use client";

import { motion } from "framer-motion";

const HERO_RESULTS = [
    { cmd: "git reset --soft HEAD~1", path: "/Users/dev/projects/icommand", time: "2m ago" },
    { cmd: "git revert HEAD", path: "/Users/dev/projects/legacy-app", time: "5m ago" },
    { cmd: "git commit --amend", path: "/Users/dev/work/backend", time: "12m ago" },
];

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

                {/* TUI Mockup — matches the real iCommand TUI */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full border border-[#444444] bg-[#1a1a1a]/80 backdrop-blur font-mono text-sm shadow-2xl flex flex-col overflow-hidden"
                >
                    {/* Search input */}
                    <div className="px-4 pt-4 pb-3">
                        <div className="border border-[#555555] bg-[#0d0d0d] px-4 py-3 flex items-center">
                            <span className="text-white font-bold">undo last git commit</span>
                            <span className="cursor-blink w-2 h-5 bg-[#eebd2b] ml-0.5 inline-block" />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-[#333333]" />

                    {/* Results list */}
                    <div className="flex flex-col flex-1 py-2">
                        {HERO_RESULTS.map((r, i) => (
                            <div
                                key={r.cmd}
                                className={`px-4 py-2 flex flex-col sm:flex-row sm:items-baseline justify-between ${i === 0 ? "bg-white/5" : "hover:bg-white/5"
                                    } transition-colors`}
                            >
                                <div className="flex flex-col gap-0.5">
                                    <span className="font-bold text-white">{r.cmd}</span>
                                    <span className="text-xs text-[#666666]">{r.path}</span>
                                </div>
                                <span className="text-xs text-[#666666] font-mono mt-1 sm:mt-0 shrink-0">
                                    {r.time}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Keybindings footer */}
                    <div className="border-t border-[#333333] px-4 py-2 flex gap-6 text-xs text-[#666666]">
                        <span><strong className="text-[#999999]">↑↓</strong> nav</span>
                        <span><strong className="text-[#999999]">↵</strong> select &amp; copy</span>
                        <span><strong className="text-[#999999]">Tab</strong> switch focus</span>
                        <span><strong className="text-[#999999]">Esc / q</strong> quit</span>
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
