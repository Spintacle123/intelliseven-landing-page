// Components/Offer.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Offer() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // enter when section-top hits viewport-top
    container: undefined,
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.2, 1, 1, 0.4]
  );
  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.92, 1]);

  const paragraph = [
    "Empowering businesses with smart, reliable,",
    "and future-ready IT solutions designed",
    "to transform the way you work.",
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] bg-white overflow-x-hidden" // NOTE: no overflow-hidden on Y
    >
      <div className="sticky top-16 md:top-20 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] flex items-center justify-center px-4 md:px-8">
        <motion.div
          style={{ opacity, y, scale }}
          className="text-base sm:text-lg md:text-2xl lg:text-4xl text-center text-black font-light leading-relaxed max-w-5xl space-y-3 md:space-y-4"
        >
          {paragraph.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
