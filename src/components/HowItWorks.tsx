"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
    const steps = [
        {
            num: "01",
            title: "> Trigger",
            terminal: (
                <div className="bg-black border border-[#333333] p-4 text-xs mb-4 font-mono text-gray-400">
                    ${" "}
                    <span className="cursor-blink bg-gray-400 w-2 h-4 inline-block align-middle ml-1" />
                </div>
            ),
            desc: (
                <>
                    Press{" "}
                    <span className="text-white bg-[#333333] px-1">Ctrl+S</span> anywhere
                    in your terminal. The interface overlays instantly without context
                    switching.
                </>
            ),
        },
        {
            num: "02",
            title: "> Describe",
            terminal: (
                <div className="bg-black border border-[#333333] p-4 text-xs mb-4 font-mono">
                    <span className="text-[#eebd2b]">?</span>{" "}
                    <span className="text-white">kill node process on 3000</span>
                </div>
            ),
            desc: "Type what you want to do in natural language. No need to remember exact regex or pipe commands.",
        },
        {
            num: "03",
            title: "> Execute",
            terminal: (
                <div className="bg-black border border-[#333333] p-4 text-xs mb-4 font-mono">
                    <span className="text-[#eebd2b]">&gt;</span>{" "}
                    <span className="text-white">lsof -i :3000 | xargs kill</span>
                </div>
            ),
            desc: "icommand ranks historical commands by semantic similarity. Hit enter to copy the command.",
        },
    ];

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto w-full" id="features">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12 border-b border-[#333333] pb-4"
            >
                Process
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#333333] divide-y md:divide-y-0 md:divide-x divide-[#333333]">
                {steps.map((step, i) => (
                    <motion.div
                        key={step.num}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="p-8 group hover:bg-white/5 transition-colors"
                    >
                        <span className="text-4xl font-bold text-[#333333] group-hover:text-[#eebd2b] transition-colors block mb-6">
                            {step.num}
                        </span>
                        <h3 className="text-white text-lg font-bold mb-4">{step.title}</h3>
                        {step.terminal}
                        <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
