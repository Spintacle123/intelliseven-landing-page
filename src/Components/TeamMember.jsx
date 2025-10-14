import React, { useState, useEffect, useRef } from "react";
import { Members } from "../helpers/Members";

const TeamMember = () => {
  const [activeTabs, setActiveTabs] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");
  const [isInView, setIsInView] = useState(false);
  const componentRef = useRef(null);

  const tabs = [
    { number: "01", role: "Founders" },
    { number: "02", role: "Developers" },
  ];

  const founders = Members.filter((m) => m.type === "founders");
  const developers = Members.filter((m) => m.type === "developers");
  const currentGroup = activeTabs === 0 ? founders : developers;
  const loopedGroup = [...currentGroup, ...currentGroup];

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
    if (!isAutoPlaying || !isInView) return;
    const interval = setInterval(() => {
      setSlideDirection("right");
      setCurrentIndex((prev) => prev + 2);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isInView]);

  useEffect(() => {
    if (currentIndex >= currentGroup.length) {
      const timeout = setTimeout(() => setCurrentIndex(0), 700);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentGroup.length]);

  const handleTabClick = (index) => {
    setActiveTabs(index);
    setIsAutoPlaying(false);
    setCurrentIndex(0);
    setTimeout(() => setIsAutoPlaying(true), 700);
  };

  let visibleMembers;
  if (currentIndex === currentGroup.length - 1) {
    visibleMembers = [currentGroup[currentIndex]];
  } else {
    visibleMembers = loopedGroup.slice(currentIndex, currentIndex + 2);
  }

  return (
    <div ref={componentRef}>
      <div className="max-w-5xl justify-center mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-8 lg:gap-0">
          {/* ==== LEFT SIDE ==== */}
          <div className="space-y-3 w-full lg:w-70 mt-8 lg:mt-20">
            <div className="flex items-center flex-col md:items-start space-y-3 ">
              <h2 className="text-4xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-[#BB3232] to-[#616161] bg-clip-text text-transparent">
                Meet our Team
              </h2>
              <h3 className="text-xs  sm:text-sm text-black/80">
                The People Behind IntelliSeven
              </h3>
              <p className="text-[#AAAAAA] text-center font-poppins text-xs sm:text-sm">
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
                  : "justify-center gap-3 sm:gap-8 lg:gap-20"
              }`}
            >
              {visibleMembers.map((item, index) => (
                <div
                  key={currentIndex + index}
                  className={`w-36 sm:w-52 lg:w-64 mx-auto flex-shrink-0 ${
                    visibleMembers.length === 2 && index % 2 === 1
                      ? "mt-10 sm:mt-16 lg:mt-20"
                      : ""
                  }`}
                  style={{
                    animation:
                      isInView && currentIndex !== 0
                        ? `slideInFromRight 0.7s ease-in-out both`
                        : "none",
                  }}
                >
                  <div className="absolute border-white h-60 sm:h-80 lg:h-96 w-36 sm:w-52 lg:w-[250px] bg-white rounded-3xl shadow-lg">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="h-44 sm:h-60 lg:h-72 w-full object-contain"
                    />
                    <span className="text-[9px] sm:text-xs text-white rotate-90 absolute top-14 sm:top-20 lg:top-24 bg-[#BB3232] p-1 sm:p-2 rounded-3xl -right-8 sm:-right-12 lg:-right-14">
                      {item.joined}
                    </span>
                  </div>

                  <div className="relative top-28 sm:top-40 lg:top-48 w-44 sm:w-64 lg:w-[300px] -left-6 sm:-left-12 lg:-left-20 bg-white rounded-2xl shadow-md mt-4">
                    <div className="p-2.5 sm:p-4 lg:p-5">
                      <p className="text-[12px] sm:text-xs lg:text-sm text-[#AAAAAA] font-poppins leading-tight sm:leading-normal">
                        {item.description}
                      </p>
                    </div>
                    <div className="p-1.5 px-3 sm:p-2 sm:px-6 lg:px-8 bg-[#BB3232] rounded-b-2xl">
                      <h3 className="font-poppins text-white text-[12px] sm:text-sm leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-[9px] sm:text-xs lg:text-sm font-poppins font-thin text-white">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <style>{`
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
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
