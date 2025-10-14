import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Caraosell } from "../helpers/constants";

const Internship = () => {
  const [activeTabs, setActiveTabs] = useState(0);
  const [currentMobileCard, setCurrentMobileCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(Caraosell.length / itemsPerPage);
  const tabs = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getCurrentItems = () => {
    const startIndex = activeTabs * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return Caraosell.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        setCurrentMobileCard((prev) => (prev + 1) % Caraosell.length);
      } else {
        setActiveTabs((prev) => (prev + 1) % totalPages);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [totalPages, isMobile]);

  return (
    <div className="justify-center mx-auto overflow-x-hidden w-full">
      <div className="flex items-center justify-center text-center mt-10 sm:mt-16 md:mt-20 xl:mt-40 overflow-x-hidden px-4">
        <div className="w-full max-w-full overflow-x-hidden">
          <div className="flex items-center justify-center">
            <div className="w-6 sm:w-8 md:w-12 lg:w-16 border-t border-main"></div>
            <span className="mx-2 sm:mx-3 md:mx-4 text-xs sm:text-sm md:text-base lg:text-lg text-main font-bold whitespace-nowrap">
              Internship Journey
            </span>
            <div className="w-6 sm:w-8 md:w-12 lg:w-16 border-t border-main"></div>
          </div>

          <div className="flex max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl justify-center mx-auto mb-10 sm:mb-16 md:mb-24 lg:mb-40 py-3 sm:py-4 md:py-5 px-4 sm:px-6">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl text-center text-main">
              Discover real stories from interns as they share their journey,
              experiences, and growth throughout the program.
            </p>
          </div>

          {/* Cards Section */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              {isMobile ? (
                Caraosell[currentMobileCard] && (
                  <motion.div
                    key={currentMobileCard}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-center px-4"
                  >
                    <div className="w-full max-w-sm p-5 bg-white shadow-lg rounded-3xl flex flex-col justify-between">
                      <div className="flex justify-center mb-4">
                        <img
                          src={Caraosell[currentMobileCard].img}
                          className="h-20 w-20 object-cover rounded-full"
                          alt=""
                        />
                      </div>

                      <div className="text-left flex flex-col gap-2 mb-4">
                        <p className="text-xs text-gray-500 uppercase">
                          {Caraosell[currentMobileCard].awards}
                        </p>
                        <p className="text-black/80 text-sm uppercase font-medium">
                          {Caraosell[currentMobileCard].quotes}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1 items-center">
                          <span className="text-yellow-300">
                            {Caraosell[currentMobileCard].icon}
                          </span>
                          <h3 className="text-left font-thin uppercase text-xs">
                            {Caraosell[currentMobileCard].name}
                          </h3>
                        </div>
                        <div className="flex ml-1">
                          <p className="text-xs text-main uppercase">
                            {Caraosell[currentMobileCard].batch}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ) : (
                <motion.div
                  key={activeTabs}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-nowrap gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 justify-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
                >
                  {getCurrentItems().map((item, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-56 md:w-60 lg:w-64 p-5 bg-white shadow-lg rounded-3xl flex flex-col justify-between"
                    >
                      <div className="flex justify-center mb-4">
                        <img
                          src={item.img}
                          className="h-20 w-20 object-cover rounded-full"
                          alt=""
                        />
                      </div>

                      <div className="text-left flex flex-col gap-2 mb-4">
                        <p className="text-xs text-gray-500 uppercase">
                          {item.awards}
                        </p>
                        <p className="text-black/80 text-sm uppercase font-medium">
                          {item.quotes}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1 items-center">
                          <span className="text-yellow-300">{item.icon}</span>
                          <h3 className="text-left font-thin uppercase text-xs">
                            {item.name}
                          </h3>
                        </div>
                        <div className="flex ml-1">
                          <p className="text-xs text-main uppercase">
                            {item.batch}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="hidden lg:flex justify-center md:justify-end gap-2 md:gap-3 mt-8 md:mt-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
              {tabs.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTabs(index)}
                  className="flex flex-col items-center"
                >
                  <span
                    className={`text-xs sm:text-sm transition-colors duration-300 ${
                      activeTabs === index
                        ? "text-main font-semibold"
                        : "text-main/40"
                    }`}
                  >
                    {item}
                  </span>
                  <div
                    className={`border-t-2 w-8 sm:w-10 md:w-12 transition-all duration-300 ${
                      activeTabs === index ? "border-main" : "border-main/40"
                    }`}
                  ></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
