import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textY = Math.min(scrollY * -0.3, 0);
  const opacity = Math.max(1 - scrollY / 500, 0.2);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/bg-building.png')" }}
    >
      {/* Mobile */}
      <div className="md:hidden flex min-h-screen flex-col items-center justify-start px-5 pt-16">
        <h1 className="font-bold text-heroColor text-center leading-tight">
          <span className="block text-[32px]">Your Trusted Partner in</span>
          <span className="block mt-1 bg-gradient-to-r from-[#D8A4A4] to-[#BB3232] bg-clip-text text-transparent text-[45px]">
            Digital Growth.
          </span>
        </h1>

        <div className="relative mt-8 w-full">
          <img
            src="/Images/Hero.png"
            alt="Hero"
            className="mx-auto block w-auto max-w-sm object-contain"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex relative h-screen w-full items-center justify-center">
        {/* Text */}
        <motion.div
          style={{ y: textY, opacity }}
          className="
            absolute left-1/2 top-1/2 -translate-y-1/2 z-20
            -translate-x-[320px] md:-translate-x-[340px]
            lg:-translate-x-[400px] xl:-translate-x-[550px] 2xl:-translate-x-[550px]
            max-w-[720px] px-2
          "
        >
          <h1 className="font-poppins font-medium leading-tight">
            <span className="block text-center md:text-4xl lg:text-5xl xl:text-7xl text-gray-300">
              Your business is
            </span>
            <span className="mt-2 block md:text-5xl lg:text-6xl xl:text-8xl bg-gradient-to-r from-[#D8A4A4] to-[#BB3232] bg-clip-text text-transparent">
              our business.
            </span>
          </h1>
        </motion.div>

        {/* Image */}
        <div
          className="
            absolute left-1/2 top-0 bottom-0 z-10 flex items-end
            -translate-x-[40px] md:-translate-x-[60px]
            lg:-translate-x-[90px] xl:-translate-x-[70px] 2xl:-translate-x-[60px]
          "
        >
          <div className="relative">
            <img
              src="/Images/Hero.png"
              alt="Hero"
              className="w-auto object-contain object-bottom
                         h-[540px] md:h-[620px] lg:h-[700px] xl:h-[720px] 2xl:h-[760px]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
