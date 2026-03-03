"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Semantic Search",
        desc: "Uses local vector embeddings to understand intent behind queries, not just string matching.",
        border: "md:border-b-0 md:border-r",
    },
    {
        title: "Works Offline",
        desc: "Zero latency. No data leaves your machine. Your history remains private and secure.",
        border: "border-b",
    },
    {
        title: "Universal Shell",
        desc: "Seamless integration with Zsh, Bash, and Fish via a single binary. No complex config.",
        border: "border-b md:border-b-0 md:border-r",
    },
    {
        title: "Instant Results",
        desc: "Written in Rust for blazingly fast startup and search times, even with massive histories.",
        border: "",
    },
];

export default function Features() {
    return (
        <section className="py-12 px-6 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 border border-[#333333]">
                {features.map((f, i) => (
                    <motion.div
                        key={f.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.45, delay: i * 0.08 }}
                        className={`p-8 ${f.border} border-[#333333] hover:bg-white/5 transition-colors`}
                    >
                        <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
