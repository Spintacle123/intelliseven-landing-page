import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  textAnimations,
  slideFromLeft,
  scaleUp,
  fadeUp,
  desktopTextSlide,
  desktopGradientScale,
  glowEffect,
  accentLine,
  backgroundOverlay,
  imageAnimation,
  getParticleAnimation,
  animationTimings,
} from "../ui/animation";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const mobileTextY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const mobileTextOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const mobileImageY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/bg-building.png')" }}
    >
      {/* ========== MOBILE ========== */}
      <div className="md:hidden flex min-h-screen flex-col items-center justify-start px-5 pt-16">
        <motion.h1
          variants={textAnimations}
          initial="hidden"
          animate="visible"
          transition={{
            duration: animationTimings.mobile.headline,
            ease: "easeOut",
          }}
          style={{ y: mobileTextY, opacity: mobileTextOpacity }}
          className="font-bold text-heroColor text-center leading-tight"
        >
          <motion.span
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            transition={{
              duration: animationTimings.mobile.firstLine,
              delay: animationTimings.mobile.delays.firstLine,
            }}
            className="block text-[32px]"
          >
            Your Trusted Partner in
          </motion.span>

          <motion.span
            variants={scaleUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: animationTimings.mobile.secondLine,
              delay: animationTimings.mobile.delays.secondLine,
              ease: "easeOut",
            }}
            className="block mt-1 bg-gradient-to-r from-[#D8A4A4] to-[#BB3232] bg-clip-text text-transparent text-[45px]"
          >
            Digital Growth.
          </motion.span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            duration: animationTimings.mobile.image,
            delay: animationTimings.mobile.delays.image,
            ease: "easeOut",
          }}
          style={{ y: mobileImageY }}
          className="relative mt-8 w-full"
        >
          <img
            src="/Images/Hero.png"
            alt="Hero"
            className="mx-auto block w-full max-w-sm object-contain"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        </motion.div>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:flex relative h-screen w-full items-center justify-center">
        <motion.div
          initial={backgroundOverlay.initial}
          animate={backgroundOverlay.animate}
          transition={{ duration: animationTimings.desktop.background }}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20 pointer-events-none"
        />

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute left-1/2 top-1/2 -translate-y-1/2 z-20 -translate-x-[320px] md:-translate-x-[340px] lg:-translate-x-[400px] xl:-translate-x-[550px] 2xl:-translate-x-[550px] max-w-[720px] px-2"
        >
          <h1 className="font-poppins font-medium leading-tight">
            <motion.span
              variants={desktopTextSlide}
              initial="hidden"
              animate="visible"
              transition={{
                duration: animationTimings.desktop.firstLine,
                delay: animationTimings.desktop.delays.firstLine,
                ease: "easeOut",
              }}
              className="block text-center md:text-4xl lg:text-5xl xl:text-7xl text-gray-300"
            >
              Your business is
            </motion.span>

            <motion.span
              variants={desktopGradientScale}
              initial="hidden"
              animate="visible"
              transition={{
                duration: animationTimings.desktop.secondLine,
                delay: animationTimings.desktop.delays.secondLine,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 block md:text-5xl lg:text-6xl xl:text-8xl bg-gradient-to-r from-[#D8A4A4] to-[#BB3232] bg-clip-text text-transparent"
            >
              our business.
            </motion.span>
          </h1>

          <motion.div
            initial={accentLine.initial}
            animate={accentLine.animate}
            transition={{
              duration: 1.2,
              delay: animationTimings.desktop.delays.accentLine,
              ease: "easeOut",
            }}
            className="mt-8 h-[2px] bg-gradient-to-r from-transparent via-[#BB3232] to-transparent"
          />
        </motion.div>

        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute left-1/2 top-0 bottom-0 z-10 flex items-end -translate-x-[40px] md:-translate-x-[60px] lg:-translate-x-[90px] xl:-translate-x-[10px] 2xl:-translate-x-[10px]"
        >
          <div className="relative">
            <motion.img
              variants={imageAnimation}
              initial="hidden"
              animate="visible"
              transition={{
                duration: animationTimings.desktop.image,
                delay: animationTimings.desktop.delays.image,
                ease: "easeOut",
              }}
              src="/Images/Hero.png"
              alt="Hero"
              className="w-auto object-contain object-bottom h-[540px] md:h-[620px] lg:h-[700px] xl:h-[720px] 2xl:h-[700px]"
            />

            <motion.div
              initial={glowEffect.initial}
              animate={glowEffect.animate}
              transition={glowEffect.transition}
              className="absolute inset-0 bg-gradient-radial from-[#BB3232]/20 via-transparent to-transparent blur-3xl -z-10"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
          </div>
        </motion.div>

        {[...Array(8)].map((_, i) => {
          const particleAnim = getParticleAnimation(i);
          return (
            <motion.div
              key={i}
              initial={particleAnim.initial}
              animate={particleAnim.animate}
              transition={particleAnim.transition}
              className="absolute w-1 h-1 bg-[#BB3232]/40 rounded-full blur-sm"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
