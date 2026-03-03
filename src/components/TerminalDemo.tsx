"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";

const TYPEWRITER_TEXT = "docker compose down volume";
const RESULTS = [
    { cmd: "docker-compose down -v --remove-orphans", path: "/Users/dev/projects/webapp", time: "3h ago" },
    { cmd: "docker-compose down", path: "/Users/dev/projects/api-server", time: "1d ago" },
    { cmd: "docker volume prune", path: "/Users/dev/projects/webapp", time: "4d ago" },
    { cmd: "docker system prune -a --volumes", path: "/Users/dev/infra", time: "1w ago" },
    { cmd: "podman-compose down -v", path: "/Users/dev/projects/legacy", time: "2w ago" },
];

export default function TerminalDemo() {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let i = 0;
        let timeout: ReturnType<typeof setTimeout>;
        setDisplayed("");

        const type = () => {
            if (i < TYPEWRITER_TEXT.length) {
                setDisplayed(TYPEWRITER_TEXT.slice(0, i + 1));
                i++;
                timeout = setTimeout(type, 80);
            } else {
                timeout = setTimeout(() => {
                    i = 0;
                    setDisplayed("");
                    timeout = setTimeout(type, 400);
                }, 2500);
            }
        };
        timeout = setTimeout(type, 600);
        return () => clearTimeout(timeout);
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

                            {/* iCommand TUI overlay — matches real TUI */}
                            <div className="border border-[#444444] bg-[#1a1a1a]/90 backdrop-blur shadow-2xl relative z-10 flex flex-col font-mono text-sm">
                                {/* Search input */}
                                <div className="px-4 pt-3 pb-2">
                                    <div className="border border-[#555555] bg-[#0d0d0d] px-4 py-2.5 flex items-center">
                                        {displayed.length === 0 ? (
                                            <span className="text-[#666666]">Type to search your command history…</span>
                                        ) : (
                                            <>
                                                <span className="text-white font-bold">{displayed}</span>
                                                <span className="w-2 h-4 bg-white inline-block animate-pulse ml-0.5" />
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-[#333333]" />

                                {/* Results */}
                                <div className="flex flex-col flex-1 py-1">
                                    {RESULTS.map((r, i) => (
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
                            </div>
                        </div>
                    </TerminalWindow>
                </motion.div>
            </div>
        </section>
    );
}
