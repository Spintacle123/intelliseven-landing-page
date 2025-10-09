import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Caraosell } from '../helpers/constants'

const Internship = () => {
  const [activeTabs, setActiveTabs] = useState(0);
  const itemsPerPage = 5; 
  const totalPages = Math.ceil(Caraosell.length / itemsPerPage);
  const tabs = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getCurrentItems = () => {
    const startIndex = activeTabs * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return Caraosell.slice(startIndex, endIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTabs((prev) => (prev + 1) % totalPages);
    }, 4000); 
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <div className="justify-center mx-auto">
      <div className="h-[250vh] flex items-center justify-center text-center mt-24">
        <div>
          <div className="flex items-center justify-center">
            <div className="w-16 border-t border-main"></div>
            <span className="mx-4 text-main uppercase text-sm">Internship Journey</span>
            <div className="w-16 border-t border-main"></div>
          </div>

          <div className="flex justify-center mx-auto mb-40 py-5">
            <p className="text-4xl text-center text-main max-w-3xl">
              Discover real stories from interns as they share their journey, experiences, and growth throughout the program.
            </p>
          </div>

          {/* Carousel */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTabs}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex lg:grid md:grid-cols-2 lg:grid-cols-5 gap-10"
              >
                {getCurrentItems().map((item, index) => (
                  <div
                    key={index}
                    className="w-60 h-65 p-5 bg-white shadow-top-only rounded-4xl flex flex-col justify-between"
                  >
             
                    <div className="flex justify-center">
                      <img src={item.img} className="h-20 w-20" alt="" />
                    </div>

                    <div className="text-left flex flex-col gap-2">
                      <p className="text-xs text-[#989898] font-rajdhani uppercase">
                        {item.awards}
                      </p>
                      <p className="font-rajdhani text-black/80 text-sm uppercase font-medium">
                        {item.quotes}
                      </p>
                    </div>

                    <div className="flex-col items-center gap-2 mt-2">
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
            </AnimatePresence>

            <div className="flex justify-end gap-2 mt-6">
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
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Internship
