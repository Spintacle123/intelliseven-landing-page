import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Members } from "../helpers/Members";

const TeamMember = () => {
  const [activeTabs, setActiveTabs] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const componentRef = useRef(null);

  const tabs = [
    { number: "01", role: "Founders" },
    { number: "02", role: "Developers" },
  ];

  const founders = Members.filter((m) => m.type === "founders");
  const developers = Members.filter((m) => m.type === "developers");
  const currentGroup = activeTabs === 0 ? founders : developers;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        setIsAutoPlaying(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (componentRef.current) observer.observe(componentRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || !isInView || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const step = isMobile ? 1 : 2;
        const isEvenLength = currentGroup.length % 2 === 0;

        if (isEvenLength) {
          if (prev + step >= currentGroup.length) return 0;
          return prev + step;
        } else {
          if (prev === currentGroup.length - 1) return 0;
          if (prev + step >= currentGroup.length)
            return currentGroup.length - 1;
          return prev + step;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isInView, currentGroup.length, isMobile, isPaused]);

  const handleTabClick = (index) => {
    setActiveTabs(index);
    setIsAutoPlaying(false);
    setCurrentIndex(0);
    setTimeout(() => setIsAutoPlaying(true), 700);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  let visibleMembers;
  if (isMobile) {
    visibleMembers = [currentGroup[currentIndex]];
  } else {
    if (currentIndex === currentGroup.length - 1) {
      visibleMembers = [currentGroup[currentIndex]];
    } else {
      visibleMembers = [
        currentGroup[currentIndex],
        currentGroup[currentIndex + 1],
      ];
    }
  }

  return (
    <div ref={componentRef}>
      <div className="max-w-6xl custom-1800:max-w-5xl justify-center mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8 lg:gap-0">
          {/* ==== LEFT SIDE ==== */}
          <div className="space-y-3 w-full lg:w-70 mt-8 lg:mt-20">
            <div className="flex items-center flex-col md:justify-center lg:items-start space-y-3">
              <h2 className="text-4xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl custom-1800:text-8xl bg-gradient-to-r from-[#BB3232] to-[#616161] bg-clip-text text-transparent">
                Meet our Team
              </h2>
              <h3 className="text-xs sm:text-sm text-black/80">
                The People Behind IntelliSeven
              </h3>
              <p className="text-[#AAAAAA] text-center lg:text-left font-poppins text-xs sm:text-sm">
                Our strength lies in our people—skilled innovators, problem
                solvers, and creators who bring passion and expertise to every
                project we deliver.
              </p>
            </div>

            <div className="flex mx-auto pt-4">
              {tabs.map((item, index) => (
                <div key={item.number} className="flex mx-auto lg:flex-1">
                  <button
                    onClick={() => handleTabClick(index)}
                    className={`w-full flex flex-col items-end transition cursor-pointer ${
                      activeTabs === index ? "text-main" : "text-[#AAAAAA]"
                    }`}
                  >
                    <span
                      className={`text-xs sm:text-sm mb-2 transition ${
                        activeTabs === index ? "text-main" : "text-[#AAAAAA]"
                      }`}
                    >
                      {item.number}
                    </span>
                    <div
                      className={`w-30 sm:w-20 lg:w-30 mb-2 ${
                        activeTabs === index
                          ? "border-b-2 border-main"
                          : "border-b-2 border-[#AAAAAA]"
                      }`}
                    ></div>
                    <h3
                      className={`text-xs sm:text-sm font-medium transition ${
                        activeTabs === index ? "text-main" : "text-[#AAAAAA]"
                      }`}
                    >
                      {item.role}
                    </h3>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ==== RIGHT SIDE ==== */}
          <div className="relative mt-8 lg:mt-0">
            <div
              className={`flex ${
                visibleMembers.length === 1
                  ? "justify-center"
                  : "justify-center gap-3 sm:gap-8 lg:gap-10 xl:gap-20 custom-1800:gap-24"
              }`}
            >
              {visibleMembers.map((item, index) => (
                <div
                  key={`${currentIndex}-${index}-${item.name}`}
                  className={`${
                    isMobile ? "w-72 h-[480px]" : "w-36 sm:w-52 lg:w-64"
                  } mx-auto flex-shrink-0 ${
                    !isMobile && visibleMembers.length === 2 && index % 2 === 1
                      ? "mt-10 sm:mt-16 lg:mt-20 custom-1800:mt-24"
                      : ""
                  } ${isInView ? "animate-slide" : ""}`}
                  style={{
                    animationPlayState: isPaused ? "paused" : "running"
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <div
                    className={`absolute border-white ${
                      isMobile
                        ? "h-[350px] w-72"
                        : "h-90 sm:h-90 lg:h-80 xl:h-[400px] custom-1800:h-[500px] w-36 sm:w-52 lg:w-[250px] xl:w-[300px] 3xl:w-[400px] 3xl:h-[500px] custom-1800:w-80"
                    } bg-white rounded-3xl shadow-lg transition-all duration-300 ${
                      isPaused ? "shadow-2xl scale-105" : ""
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      onClick={() => setSelectedImage(item.src)}
                      className={`cursor-pointer transition-transform duration-300 hover:scale-105 ${
                        isMobile
                          ? "h-[280px] w-full object-contain"
                          : "h-44 sm:h-60 lg:h-60 xl:h-72 3xl:h-96 custom-1800:h-96 w-full object-contain"
                      }`}
                    />
                    <span className="text-[9px] sm:text-xs text-white rotate-90 absolute top-14 sm:top-20 lg:top-24 bg-[#BB3232] p-1 sm:p-2 rounded-3xl -right-8 sm:-right-12 lg:-right-14">
                      {item.joined}
                    </span>
                  </div>

                  {/* Description box */}
                  <div
                    className={`relative ${
                      isMobile
                        ? "top-[230px] w-72 -left-10 lg:left-0"
                        : "top-28 sm:top-40 -left-20 lg:top-40 xl:top-54 custom-1800:top-72 w-44 sm:w-64 lg:w-[250px] xl:w-[300px] 3xl-[400px] custom-1800:w-96"
                    } bg-white rounded-2xl shadow-md mt-4 transition-all duration-300 ${
                      isPaused ? "shadow-xl" : ""
                    }`}
                  >
                    <div className="p-3 sm:p-4 lg:p-5 custom-1800:p-7">
                      <p className="text-[13px] sm:text-xs lg:text-sm custom-1800:text-base text-[#AAAAAA] font-poppins leading-tight sm:leading-normal custom-1800:leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="p-2 sm:p-2 sm:px-6 lg:px-8 custom-1800:px-10 custom-1800:py-4 bg-[#BB3232] rounded-b-2xl">
                      <h3 className="font-poppins text-white text-[13px] sm:text-sm custom-1800:text-lg leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-[10px] sm:text-xs lg:text-sm custom-1800:text-sm font-poppins font-thin text-white">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/*  Modal */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                  onClick={() => setSelectedImage(null)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="relative"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                  >
                    <img
                      src={selectedImage}
                      alt="Fullscreen view"
                      className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
                    />
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 text-white text-lg rounded-full px-3 py-1"
                    >
                      ✕
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <style>{`
              .animate-slide {
                animation: slideInFromRight 0.7s ease-in-out forwards, slideOutToLeft 0.7s ease-in-out 2.3s forwards;
              }

              @keyframes slideInFromRight {
                0% {
                  opacity: 0;
                  transform: translateX(150px);
                }
                100% {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
              
              @keyframes slideOutToLeft {
                0% {
                  opacity: 1;
                  transform: translateX(0);
                }
                100% {
                  opacity: 0;
                  transform: translateX(-150px);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;