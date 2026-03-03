"use client";

import { motion } from "framer-motion";

export default function Tagline() {
    return (
        <section className="py-24 px-6 border-y border-[#333333] bg-[#111111]/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
            >
                <p className="text-lg md:text-xl leading-relaxed text-white font-medium">
                    <span className="text-[#eebd2b] font-bold">Ctrl+R</span> only matches
                    exact substrings.
                    <br />
                    <span className="text-[#eebd2b] font-bold">Grep</span> is powerful
                    but verbose.
                    <br />
                    You remember the intent, not the flags.
                </p>
            </motion.div>
        </section>
    );
}
