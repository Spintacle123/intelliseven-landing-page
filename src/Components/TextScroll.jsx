import { useState, useRef } from "react";
import { motion } from "framer-motion";

// FloatingShape component
const FloatingShape = ({ src, top, left, width = "300px", height = "300px", rotateSpeed = 20 }) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: rotateSpeed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <img
        src={src}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </motion.div>
  );
};

const Word = ({ word, index, total }) => {
  return (
    <motion.span
      initial={{ opacity: 0.2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 1 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.02 
      }}
      className="inline-block"
    >
      {word}
    </motion.span>
  );
};

const TextScroll = () => {
  const [activeTabs, setActiveTabs] = useState(0);

  const tabs = [
    {
      id: 1,
      title: "LAWSYS",
      projectName: "LAWSYS",
      number: "01",
      description:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
      comment: "He found himself transformed in his bed into a horrible vermin.",
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
      description: "Advanced time tracking and HR management system for modern businesses.",
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
      description: "Mobile-first legal system management platform for on-the-go professionals.",
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
    <div>
      <section className="relative">
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <FloatingShape
            src="/Images/animation1.png"
            top="23%"
            left="4%"
            rotateSpeed={25}
          />
          <FloatingShape
            src="/Images/animation2.png"
            top="34%"
            left="2%"
            width="550px"
            height="550px"
            rotateSpeed={30}
          />
          <FloatingShape
            src="/Images/animation3.png"
            top="27%"
            left="65%"
            width="200px"
            height="200px"
            rotateSpeed={18}
          />
          <FloatingShape
            src="/Images/animation4.png"
            top="35%"
            left="78%"
            width="500px"
            height="500px"
            rotateSpeed={22}
          />
        </div>

        <div className="flex items-center justify-center  ">
          <div className="w-16 border-t border-main"></div>
          <span className="mx-4 text-[12px] sm:text-sm md:text-lg text-main font-bold font-poppins">
            Project that we have
          </span>
          <div className="w-16 border-t border-main"></div>
        </div>

        <div className="flex h-[400px] justify-center mx-auto max-w-4xl py-6 sm:py-8 md:py-10 mb-20 sm:mb-32  px-4">
          <p className="text-[16px] sm:text-xl md:text-2xl lg:text-4xl text-center text-white font-poppins font-light leading-relaxed">
            <span className="flex flex-wrap justify-center gap-1 sm:gap-2">
              {words.map((word, i) => (
                <Word
                  key={i}
                  word={word}
                  index={i}
                  total={words.length}
                />
              ))}
            </span>
          </p>
        </  div>

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
                    transition={{ duration: 0.3 }}
                    className={`text-xs sm:text-sm mb-1 sm:mb-2 transition-all ${
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
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="border-b border-white mb-1 sm:mb-2"
                  ></motion.div>
                  <motion.h3
                    animate={{
                      scale: activeTabs === index ? 1.05 : 1,
                      y: activeTabs === index ? -2 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`text-white text-[10px] sm:text-xs md:text-sm font-medium transition-all ${
                      activeTabs === index ? "text-white/60" : "text-white"
                    }`}
                  >
                    {item.title}
                  </motion.h3>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 ">
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
                    transition={{ duration: 0.4 }}
                    src={tabs[activeTabs].src}
                    alt=""
                    className="h-[250px] sm:h-[300px] md:h-[350px] relative z-10"
                  />
                </div>
                <motion.div
                  key={activeTabs}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
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
                  <div>
                    <button className="flex items-center justify-between mt-4 sm:mt-6 text-[10px] sm:text-xs w-full md:w-80 bg-[#AC0B0B] px-3 sm:px-4 py-2 rounded-full duration-200 cursor-pointer font-rajdhani uppercase text-white hover:bg-[#8A0909] transition-colors">
                      <span className="border py-1.5 px-1.5 sm:py-2 sm:px-2 text-main bg-white rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          className="sm:w-[10px] sm:h-[10px]"
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
                      <span className="flex-1 text-center">{tabs[activeTabs].button}</span>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextScroll;