import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Offer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"], 
  });

  const paragraph = [
    "Empowering businesses with smart, reliable,",
    "and future-ready IT solutions designed",
    "to transform the way you work."
  ];

  return (
    <section ref={ref} className="relative h-[180vh] md:h-[250vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div className="text-2xl lg:text-4xl text-center text-black/85 font-poppins font-light leading-relaxed max-w-4xl px-4 space-y-3">
          {paragraph.map((line, i) => {

            const start = (i * 0.25);
            const end = start + 0.3;

            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            const y = useTransform(scrollYProgress, [start, end], [30, 0]);

            return (
              <motion.p
                key={i}
                style={{ opacity, y }}
                className="transition duration-500"
              >
                {line}
              </motion.p>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
