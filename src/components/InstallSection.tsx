"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function InstallSection() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("brew install icommand");
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
                className="max-w-xl mx-auto flex flex-col items-center gap-6"
            >
                <h2 className="text-white font-bold text-xl">Get Started</h2>

                <div className="w-full border border-[#333333] p-6 bg-[#111111] flex justify-between items-center group relative">
                    <code className="text-[#eebd2b] text-lg font-bold">
                        brew install icommand
                    </code>
                    <button
                        aria-label="Copy to clipboard"
                        onClick={handleCopy}
                        className="text-gray-400 hover:text-white transition-colors ml-4 shrink-0"
                    >
                        {copied ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#eebd2b"
                                strokeWidth="2"
                                strokeLinecap="square"
                                strokeLinejoin="miter"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="square"
                                strokeLinejoin="miter"
                            >
                                <rect x="9" y="9" width="13" height="13" rx="0" ry="0" />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                        )}
                    </button>

                    {/* Tooltip */}
                    <div className="absolute -top-10 right-0 bg-[#eebd2b] text-black text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity font-bold pointer-events-none">
                        {copied ? "Copied!" : "Click to copy"}
                    </div>
                </div>

                <div className="flex gap-4 text-xs text-gray-400">
                    <a
                        href="#"
                        className="border-b border-[#333333] hover:border-[#eebd2b] hover:text-white pb-0.5 transition-colors"
                    >
                        Linux Install Guide
                    </a>
                    <a
                        href="#"
                        className="border-b border-[#333333] hover:border-[#eebd2b] hover:text-white pb-0.5 transition-colors"
                    >
                        Windows Install Guide
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
