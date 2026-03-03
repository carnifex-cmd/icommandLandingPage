"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const TYPEWRITER_TEXT = "docker compose down volume";
const RESULTS = [
    {
        cmd: "docker-compose down -v --remove-orphans",
        time: "3h ago",
        active: true,
    },
    { cmd: "docker-compose down", time: "1d ago", active: false },
    { cmd: "docker volume prune", time: "4d ago", active: false },
    { cmd: "docker system prune -a --volumes", time: "1w ago", active: false },
    { cmd: "podman-compose down -v", time: "2w ago", active: false },
];

export default function TerminalDemo() {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let i = 0;
        setDisplayed("");
        const interval = setInterval(() => {
            if (i < TYPEWRITER_TEXT.length) {
                setDisplayed(TYPEWRITER_TEXT.slice(0, i + 1));
                i++;
            } else {
                // Pause then restart
                setTimeout(() => {
                    i = 0;
                    setDisplayed("");
                }, 2500);
            }
        }, 80);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 px-6 bg-[#111111] border-y border-[#333333]" id="demo">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-between items-end mb-4"
                >
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">
                        Live Preview
                    </h2>
                    <span className="text-xs text-gray-500 font-mono">v1.0.4-stable</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <TerminalWindow title="user@machine:~" className="h-[600px]">
                        <div className="flex-1 p-6 text-gray-300 overflow-y-auto h-full flex flex-col">
                            {/* Background commands — blurred */}
                            <div className="opacity-40 mb-4 blur-[0.5px]">
                                <div className="mb-1">
                                    <span className="text-green-500">➜</span>{" "}
                                    <span className="text-blue-400">~</span>{" "}
                                    <span className="text-gray-300">ls -la</span>
                                </div>
                                <div className="mb-1">
                                    <span className="text-green-500">➜</span>{" "}
                                    <span className="text-blue-400">~</span>{" "}
                                    <span className="text-gray-300">cd projects</span>
                                </div>
                                <div className="mb-1">
                                    <span className="text-green-500">➜</span>{" "}
                                    <span className="text-blue-400">~/projects</span>{" "}
                                    <span className="text-gray-300">npm install</span>
                                </div>
                            </div>

                            {/* iCommand search overlay */}
                            <div className="border border-[#333333] bg-[#0a0a0a] shadow-2xl relative z-10">
                                {/* Search input */}
                                <div className="p-3 border-b border-[#333333] flex gap-3">
                                    <span className="text-[#eebd2b] font-bold">Find:</span>
                                    <span className="text-white font-bold">
                                        {displayed}
                                        <span className="w-2 bg-white inline-block animate-pulse h-4 align-middle ml-0.5" />
                                    </span>
                                </div>

                                {/* Results */}
                                <div className="flex flex-col">
                                    {RESULTS.map((r) => (
                                        <div
                                            key={r.cmd}
                                            className={`flex justify-between px-4 py-3 border-l-2 ${r.active
                                                    ? "bg-[#eebd2b]/20 text-[#eebd2b] border-[#eebd2b]"
                                                    : "text-gray-400 hover:bg-white/5 border-transparent"
                                                } transition-colors`}
                                        >
                                            <span className={r.active ? "font-bold" : "font-medium"}>
                                                {r.cmd}
                                            </span>
                                            <span className="opacity-80 text-xs">{r.time}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer bar */}
                                <div className="p-2 border-t border-[#333333] flex justify-between text-xs text-gray-500 bg-[#111111]">
                                    <div className="flex gap-4">
                                        <span>
                                            <strong className="text-gray-300">RET</strong> run
                                        </span>
                                        <span>
                                            <strong className="text-gray-300">TAB</strong> edit
                                        </span>
                                        <span>
                                            <strong className="text-gray-300">^C</strong> cancel
                                        </span>
                                    </div>
                                    <div>
                                        <span>5/892 results</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TerminalWindow>
                </motion.div>
            </div>
        </section>
    );
}
