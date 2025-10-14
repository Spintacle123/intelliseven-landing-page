import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Caraosell } from '../helpers/constants'

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
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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
      <div className="h-[190vh] lg:h-[200vh] flex items-center justify-center text-center mt-20 xl:mt-40 overflow-x-hidden">
        <div className="w-full max-w-full overflow-x-hidden">
          <div className="flex items-center justify-center">
            <div className="w-8 md:w-16 border-t border-main"></div>
            <span className="mx-2 md:mx-4 text-[12px] sm:text-sm md:text-lg text-main font-bold font-poppins">
              Internship Journey
            </span>
            <div className="w-8 md:w-16 border-t border-main"></div>
          </div>

          <div className="flex max-w-4xl md:max-w-4xl justify-center mx-auto mb-40 py-5 px-1">
            <p className="text-lg md:text-lg lg:text-4xl text-center text-main lg:max-w-5xl">
              Discover real stories from interns as they share their journey, experiences, and growth throughout the program.
            </p>
          </div>

          <div className="w-full overflow-x-hidden">
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
                    <div className="w-full max-w-sm p-5 bg-white shadow-top-only rounded-4xl flex flex-col justify-between">
                      <div className="flex justify-center mb-4">
                        <img src={Caraosell[currentMobileCard].img} className="h-20 w-20" alt="" />
                      </div>

                      <div className="text-left flex flex-col gap-2 mb-4">
                        <p className="text-xs text-[#989898] font-rajdhani uppercase">
                          {Caraosell[currentMobileCard].awards}
                        </p>
                        <p className="font-rajdhani text-black/80 text-sm uppercase font-medium">
                          {Caraosell[currentMobileCard].quotes}
                        </p>
                      </div>

                      <div className="flex-col items-center gap-2">
                        <div className="flex gap-1">
                          <span className="text-yellow-300">{Caraosell[currentMobileCard].icon}</span>
                          <h3 className="font-rajdhani text-left font-thin uppercase text-[12px]">
                            {Caraosell[currentMobileCard].name}
                          </h3>
                        </div>
                        <div className="flex ml-1">
                          <p className="text-xs text-main uppercase">{Caraosell[currentMobileCard].batch}</p>
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
                  className="flex flex-wrap gap-6 lg:gap-10 justify-center max-w-full px-4"
                >
                  {getCurrentItems().map((item, index) => (
                    <div
                      key={index}
                      className="w-60 p-5 bg-white shadow-top-only rounded-4xl flex flex-col justify-between"
                    >
                      <div className="flex justify-center mb-4">
                        <img src={item.img} className="h-20 w-20" alt="" />
                      </div>

                      <div className="text-left flex flex-col gap-2 mb-4">
                        <p className="text-xs text-[#989898] font-rajdhani uppercase">
                          {item.awards}
                        </p>
                        <p className="font-rajdhani text-black/80 text-sm uppercase font-medium">
                          {item.quotes}
                        </p>
                      </div>

                      <div className="flex-col items-center gap-2">
                        <div className="flex gap-1">
                          <span className="text-yellow-300">{item.icon}</span>
                          <h3 className="font-rajdhani text-left font-thin uppercase text-[12px]">
                            {item.name}
                          </h3>
                        </div>
                        <div className="flex ml-1">
                          <p className="text-xs text-main uppercase">{item.batch}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {!isMobile && (
              <div className="flex justify-end gap-2 mt-6 px-4">
                {tabs.map((item, index) => (
                  <button key={index} onClick={() => setActiveTabs(index)}>
                    <span
                      className={`text-xs ${
                        activeTabs === index ? "text-main" : "text-main/40"
                      }`}
                    >
                      {item}
                    </span>
                    <div
                      className={`border-t-2 w-10 transition ${
                        activeTabs === index ? "border-main" : "border-main/40"
                      }`}
                    ></div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Internship