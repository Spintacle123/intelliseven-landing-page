// src/Components/ProjectsTabs.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsTabs({
  tabs = [
    {
      id: 1,
      title: "LAWSYS",
      projectName: "LAWSYS",
      number: "01",
      description:
        `One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.`,
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
  ],
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="px-4">
      {/* Tabs header */}
      <div className="flex max-w-xs sm:max-w-sm md:max-w-lg mx-auto">
        {tabs.map((item, index) => (
          <div key={item.id ?? item.number} className="flex-1">
            <button
              onClick={() => setActive(index)}
              className={`w-full flex flex-col items-end transition-all duration-300 cursor-pointer ${
                active === index ? "text-white" : "text-white/50"
              }`}
            >
              <motion.span
                animate={{
                  scale: active === index ? 1.1 : 1,
                  opacity: active === index ? 1 : 0.6,
                }}
                transition={{ duration: 0.25 }}
                className={`text-xs sm:text-sm mb-1 sm:mb-2 ${
                  active === index ? "text-white/60" : "text-white"
                }`}
              >
                {item.number}
              </motion.span>
              <motion.div
                animate={{
                  width: active === index ? "90%" : "80%",
                  opacity: active === index ? 1 : 0.5,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="border-b border-white mb-1 sm:mb-2"
              />
              <motion.h3
                animate={{
                  scale: active === index ? 1.05 : 1,
                  y: active === index ? -2 : 0,
                }}
                transition={{ duration: 0.25 }}
                className={`text-white text-[10px] sm:text-xs md:text-sm font-medium ${
                  active === index ? "text-white/60" : "text-white"
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
        <div className=" max-w-3xl md:max-w-3xl lg:max-w-3xl xl:max-w-6xl items-center mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
            <div className="relative flex flex-col items-center md:items-start">
              <div className="flex flex-col gap-3 sm:gap-4 absolute lg:-top-4 left-8 lg:-left-6 z-20">
                <img
                  src={tabs[active].icon}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 w-12 h-12 sm:w-auto sm:h-auto"
                  alt=""
                />
                <img
                  src={tabs[active].icon2}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 w-12 h-12 sm:w-auto sm:h-auto -ml-3 sm:-ml-4"
                  alt=""
                />
              </div>

              <motion.img
                key={`img-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                src={tabs[active].src}
                alt=""
                className="w-[260px] sm:w-[320px] lg:w-[300px] xl:w-[400px] h-auto object-contain relative z-10"
              />
            </div>

            <motion.div
              key={`text-${active}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="md:mt-20 text-center  justify-center mx-auto lg:max-w-full space-y-4sm:space-y-4 md:space-y-5"
            >
              <h1 className="text-white font-medium text-xl sm:text-2xl md:text-2xl lg:text-4xl">
                {tabs[active].projectName}
              </h1>
              <div className="max-w-[400px] md:max-w-[300px] mx-auto">
                              <p className="text-white/90 text-sm sm:text-sm">
                {tabs[active].description}
              </p>
              </div>
              <p className="text-[11px] sm:text-xs font-medium text-white/56">
                {tabs[active].comment}
              </p>
              <button className="flex items-center justify-between mx-auto mt-4 sm:mt-6 text-[10px] sm:text-xs w-[250px]  md:w-80 bg-[#AC0B0B] px-3 sm:px-4 py-2 rounded-full font-rajdhani uppercase text-white hover:bg-[#8A0909] transition-colors">
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
                  {tabs[active].button}
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
