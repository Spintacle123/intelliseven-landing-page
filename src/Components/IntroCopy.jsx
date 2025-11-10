// src/Components/IntroCopy.jsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const word = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

export default function IntroCopy({
  text = "A showcase of the systems and solutions we've developed designed to streamline processes, improve efficiency, and deliver real value to businesses across industries.",
  className = "",
  replayOnScroll = true,
  viewportAmount = 0.25,
}) {
  const words = text.trim().split(/\s+/);
  const controls = useAnimation();

  const viewport = { once: !replayOnScroll, amount: viewportAmount };

  useEffect(() => {
    if (!replayOnScroll) controls.start("visible");
  }, [replayOnScroll, controls]);

  return (
    <div>
      <div className="flex justify-center mb-20">
        <div className="mt-10 sm:mt-16 md:mt-20 max-w-2xl text-center px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 border-t border-main"></div>
            <span className="mx-4 text-[12px] sm:text-sm md:text-lg lg:text-4xl  text-main font-bold font-poppins">
              About Us
            </span>
            <div className="w-16 border-t border-main"></div>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-center mx-auto max-w-6xl py-8 sm:py-10 mb-10 sm:mb-16 px-4 ${className}`}
      >
        <motion.p
          className="text-[18px] sm:text-xl md:text-2xl lg:text-3 xl xl:text-4xl text-center text-white font-poppins font-light leading-relaxed"
          variants={container}
          initial="hidden"
          animate={controls}
          whileInView="visible"
          viewport={viewport}
          onViewportLeave={() => {
            if (replayOnScroll) controls.start("hidden");
          }}
        >
          <span className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {words.map((w, i) => (
              <motion.span key={i} variants={word} className="inline-block">
                {w}&nbsp;
              </motion.span>
            ))}
          </span>
        </motion.p>
      </div>
    </div>
  );
}
