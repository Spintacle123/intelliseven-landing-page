import React from "react";
import { motion } from "framer-motion";

export default function Offer() {
  const paragraph = [
    "Empowering businesses with smart, reliable,",
    "and future-ready IT solutions designed",
    "to transform the way you work.",
  ];

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-base sm:text-lg md:text-2xl lg:text-4xl text-center text-black font-light leading-relaxed max-w-5xl space-y-3 md:space-y-4 w-full px-4 md:px-8"
      >
        {paragraph.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </motion.div>
    </section>
  );
}