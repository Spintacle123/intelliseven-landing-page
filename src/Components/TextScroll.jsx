import { useState } from "react";
import { motion } from "framer-motion";

// Floating decorative shape
const FloatingShape = ({
  src,
  top,
  left,
  size = "clamp(120px,18vw,300px)",
  rotateSpeed = 20,
}) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        transform: "translate(-50%, -50%) translateZ(0)",
        willChange: "transform",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: rotateSpeed, repeat: Infinity, ease: "linear" }}
      className="pointer-events-none select-none"
    >
      <img src={src} alt="" className="w-full h-full object-contain" />
    </motion.div>
  );
};

// Word fade-in animation
const Word = ({ word, index }) => (
  <motion.span
    initial={{ opacity: 0.2 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.25, delay: index * 0.02 }}
    className="inline-block"
  >
    {word}{" "}
  </motion.span>
);

export default function TextScroll() {
  const [activeTabs, setActiveTabs] = useState(0);

  const tabs = [
    {
      id: 1,
      title: "LAWSYS",
      projectName: "LAWSYS",
      number: "01",
      description:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
      comment:
        "He found himself transformed in his bed into a horrible vermin.",
      button: "EXPLORE MORE ABOUT HRIS SYSTEM",
      src: "/Images/HRIS.png",
      icon: "/icons/Calendar.png",
      icon2: "/icons/coin.png",
    },
    {
      id: 2,
      title: "iTimeHR",
      projectName: "iTimeHR",
      number: "02",
      description:
        "Advanced time tracking and HR management system for modern businesses.",
      comment: "Streamline your workforce management efficiently.",
      button: "EXPLORE MORE ABOUT iTimeHR",
      src: "/Images/HRIS.png",
      icon: "/icons/Calendar.png",
      icon2: "/icons/coin.png",
    },
    {
      id: 3,
      title: "LAWSYS MOBILE",
      projectName: "LAWSYS MOBILE",
      number: "03",
      description:
        "Mobile-first legal system management platform for on-the-go professionals.",
      comment: "Access your legal systems anywhere, anytime.",
      button: "EXPLORE MORE ABOUT HRIS LAWSYS MOBILE",
      src: "/Images/HRIS.png",
      icon: "/icons/Calendar.png",
      icon2: "/icons/coin.png",
    },
  ];

  const paragraph =
    "A showcase of the systems and solutions we've developed designed to streamline processes, improve efficiency, and deliver real value to businesses across industries.";
  const words = paragraph.split(" ");

  return (
    <section className="relative overflow-hidden min-h-[100dvh] bg-cover bg-center bg-[url('/Images/bg-mid.png')]">
      <div className="absolute inset-0 -z-0">
        <FloatingShape
          src="/Images/animation1.png"
          top="30svh"
          left="8vw"
          size="clamp(80px,14vw,220px)"
          rotateSpeed={25}
        />
        <FloatingShape
          src="/Images/animation2.png"
          top="55svh"
          left="10vw"
          size="clamp(160px,22vw,360px)"
          rotateSpeed={30}
        />
        <FloatingShape
          src="/Images/animation3.png"
          top="38svh"
          left="72vw"
          size="clamp(90px,10vw,200px)"
          rotateSpeed={18}
        />
        <FloatingShape
          src="/Images/animation4.png"
          top="60svh"
          left="85vw"
          size="clamp(160px,22vw,360px)"
          rotateSpeed={22}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {/* Section title */}
        <div className="flex items-center justify-center">
          <div className="w-16 border-t border-main" />
          <span className="mx-4 text-[12px] sm:text-sm md:text-lg text-main font-bold font-poppins">
            Project that we have
          </span>
          <div className="w-16 border-t border-main" />
        </div>

        {/* Animated paragraph */}
        <div className="flex justify-center mx-auto max-w-4xl py-8 sm:py-10 mb-10 sm:mb-16 px-4">
          <p className="text-[16px] sm:text-xl md:text-2xl lg:text-4xl text-center text-white font-poppins font-light leading-relaxed">
            <span className="flex flex-wrap justify-center gap-1 sm:gap-2">
              {words.map((w, i) => (
                <Word key={i} word={w} index={i} />
              ))}
            </span>
          </p>
        </div>

        {/* Tabs */}
        <div className="px-4">
          <div className="flex max-w-xs sm:max-w-sm md:max-w-lg mx-auto">
            {tabs.map((item, index) => (
              <div key={item.number} className="flex-1">
                <button
                  onClick={() => setActiveTabs(index)}
                  className={`w-full flex flex-col items-end transition-all duration-300 cursor-pointer ${
                    activeTabs === index ? "text-white" : "text-white/50"
                  }`}
                >
                  <motion.span
                    animate={{
                      scale: activeTabs === index ? 1.1 : 1,
                      opacity: activeTabs === index ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.25 }}
                    className={`text-xs sm:text-sm mb-1 sm:mb-2 ${
                      activeTabs === index ? "text-white/60" : "text-white"
                    }`}
                  >
                    {item.number}
                  </motion.span>
                  <motion.div
                    animate={{
                      width: activeTabs === index ? "90%" : "80%",
                      opacity: activeTabs === index ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="border-b border-white mb-1 sm:mb-2"
                  />
                  <motion.h3
                    animate={{
                      scale: activeTabs === index ? 1.05 : 1,
                      y: activeTabs === index ? -2 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className={`text-white text-[10px] sm:text-xs md:text-sm font-medium ${
                      activeTabs === index ? "text-white/60" : "text-white"
                    }`}
                  >
                    {item.title}
                  </motion.h3>
                </button>
              </div>
            ))}
          </div>

          {/* Active tab content */}
          <div className="mt-8">
            <div className="max-w-4xl items-center mx-auto">
              <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
                <div className="relative flex flex-col items-center md:items-start">
                  <div className="flex flex-col gap-3 sm:gap-4 absolute lg:-top-4 left-8 lg:-left-6 z-20">
                    <img
                      src={tabs[activeTabs].icon}
                      className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 w-12 h-12 sm:w-auto sm:h-auto"
                      alt=""
                    />
                    <img
                      src={tabs[activeTabs].icon2}
                      className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 w-12 h-12 sm:w-auto sm:h-auto -ml-3 sm:-ml-4"
                      alt=""
                    />
                  </div>

                  <motion.img
                    key={activeTabs}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    src={tabs[activeTabs].src}
                    alt=""
                    className="h-[250px] sm:h-[300px] md:h-[350px] relative z-10"
                  />
                </div>

                <motion.div
                  key={`${activeTabs}-text`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35 }}
                  className="md:mt-20 max-w-full md:max-w-sm space-y-3 sm:space-y-4 md:space-y-5"
                >
                  <h1 className="text-white font-medium text-xl sm:text-2xl md:text-3xl">
                    {tabs[activeTabs].projectName}
                  </h1>
                  <p className="text-white font-extralight text-xs sm:text-sm">
                    {tabs[activeTabs].description}
                  </p>
                  <p className="text-[10px] sm:text-xs font-medium text-white/56">
                    {tabs[activeTabs].comment}
                  </p>
                  <button className="flex items-center justify-between mt-4 sm:mt-6 text-[10px] sm:text-xs w-full md:w-80 bg-[#AC0B0B] px-3 sm:px-4 py-2 rounded-full font-rajdhani uppercase text-white hover:bg-[#8A0909] transition-colors">
                    <span className="border py-1.5 px-1.5 sm:py-2 sm:px-2 text-main bg-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          d="m7 2l10 10L7 22"
                        />
                      </svg>
                    </span>
                    <span className="flex-1 text-center">
                      {tabs[activeTabs].button}
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
