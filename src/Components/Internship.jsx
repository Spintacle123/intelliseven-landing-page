import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Caraosell } from "../helpers/constants";

const Internship = () => {
  const [activeTabs, setActiveTabs] = useState(0);
  const [currentMobileCard, setCurrentMobileCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // DITO MO ADJUST ILANG CARD GUSTO MO PER SCREEN
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerPage(1); 
      else if (width < 1024) setItemsPerPage(3);
      else if (width < 1280) setItemsPerPage(4);
      else setItemsPerPage(5); 
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

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
      <div className="flex items-center justify-center text-center mt-10 sm:mt-16 md:mt-20 xl:mt-40 px-4">
        <div className="w-full max-w-full">

          <div className="flex items-center justify-center">
            <div className="w-6 sm:w-8 md:w-12 lg:w-16 border-t border-main"></div>
          <span className="mx-4 text-[12px] sm:text-sm md:text-lg lg:text-4xl  text-main font-bold font-poppins">
              Internship Journey
            </span>
            <div className="w-6 sm:w-8 md:w-12 lg:w-16 border-t border-main"></div>
          </div>

    
          <div className="flex justify-center mx-auto mb-10 sm:mb-16 md:mb-24 py-3 sm:py-4 md:py-5 px-4 sm:px-6">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-main max-w-3xl">
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
                    <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-3xl flex flex-col justify-between">
                      <div className="flex justify-center mb-4">
                        <img
                          src={Caraosell[currentMobileCard].img}
                          className="h-24 w-24 object-cover rounded-full"
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
                        <p className="text-xs text-main uppercase ml-1">
                          {Caraosell[currentMobileCard].batch}
                        </p>
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
                  className="
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    xl:grid-cols-5
                    gap-6 
                    px-4 sm:px-6 md:px-8 lg:px-12 
                    justify-items-center
                  "
                >
                  {getCurrentItems().map((item, index) => (
                    <div
                      key={index}
                      className="
                        bg-white shadow-lg rounded-3xl p-6 
                        flex flex-col justify-between 
                        w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[300px]
                        hover:scale-105 transition-transform duration-300
                      "
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
                          <h3 className="text-left uppercase text-xs">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-xs text-main uppercase ml-1">
                          {item.batch}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="hidden lg:flex justify-center gap-2 mt-10">
              {tabs.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTabs(index)}
                  className="flex flex-col items-center"
                >
                  <span
                    className={`text-xs transition-colors duration-300 ${
                      activeTabs === index
                        ? "text-main font-semibold"
                        : "text-main/40"
                    }`}
                  >
                    {item}
                  </span>
                  <div
                    className={`border-t-2 w-8 transition-all duration-300 ${
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
