"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const INSTALL_CMD = "pipx install git+https://github.com/carnifex-cmd/iCommand.git";

export default function InstallSection() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(INSTALL_CMD);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback
        }
    };

    return (
        <section className="py-32 px-6" id="install">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto flex flex-col items-center gap-8"
            >
                <h2 className="text-white font-bold text-xl">Get Started</h2>

                {/* Primary install — pipx */}
                <div className="w-full border border-[#333333] p-6 bg-[#111111] flex justify-between items-center group relative">
                    <code className="text-[#eebd2b] text-sm sm:text-base font-bold break-all">
                        {INSTALL_CMD}
                    </code>
                    <button
                        aria-label="Copy to clipboard"
                        onClick={handleCopy}
                        className="text-gray-400 hover:text-white transition-colors ml-4 shrink-0"
                    >
                        {copied ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#eebd2b" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                                <rect x="9" y="9" width="13" height="13" rx="0" ry="0" />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                        )}
                    </button>
                    <div className="absolute -top-10 right-0 bg-[#eebd2b] text-black text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity font-bold pointer-events-none">
                        {copied ? "Copied!" : "Click to copy"}
                    </div>
                </div>

                {/* Coming soon — brew & pip */}
                <div className="w-full flex flex-col gap-3">
                    <div className="w-full border border-[#333333]/50 p-4 bg-[#111111]/50 flex justify-between items-center opacity-40">
                        <code className="text-[#888888] text-sm font-bold">
                            brew install icommand
                        </code>
                        <span className="text-xs text-[#555555] uppercase tracking-wider font-bold ml-4 shrink-0">
                            coming soon
                        </span>
                    </div>
                    <div className="w-full border border-[#333333]/50 p-4 bg-[#111111]/50 flex justify-between items-center opacity-40">
                        <code className="text-[#888888] text-sm font-bold">
                            pip install icommand
                        </code>
                        <span className="text-xs text-[#555555] uppercase tracking-wider font-bold ml-4 shrink-0">
                            coming soon
                        </span>
                    </div>
                </div>

                <div className="flex gap-4 text-xs text-gray-400">
                    <a
                        href="https://github.com/carnifex-cmd/iCommand"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-[#333333] hover:border-[#eebd2b] hover:text-white pb-0.5 transition-colors"
                    >
                        GitHub Repository
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
