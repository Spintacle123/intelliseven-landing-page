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
      <div className="max-w-5xl justify-center mx-auto h-[100vh]">
        <div className="grid grid-cols-2 mx-auto">
          {/* ==== LEFT SIDE ==== */}
          <div className="space-y-3 w-70 mt-20">
            <h2 className="text-4xl bg-gradient-to-r from-[#BB3232] to-[#616161] bg-clip-text text-transparent">
              Meet our Team
            </h2>
            <h3 className="text-sm text-black/80">
              The People Behind IntelliSeven
            </h3>
            <p className="text-[#AAAAAA] font-poppins text-sm">
              Our strength lies in our people—skilled innovators, problem
              solvers, and creators who bring passion and expertise to every
              project we deliver.
            </p>

            <div className="flex mx-auto">
              {tabs.map((item, index) => (
                <div key={item.number} className="flex-1">
                  <button
                    onClick={() => handleTabClick(index)}
                    className={`w-full flex flex-col items-end transition cursor-pointer ${
                      activeTabs === index ? "text-main" : "text-[#AAAAAA]"
                    }`}
                  >
                    <span
                      className={`text-sm mb-2 transition ${
                        activeTabs === index ? "text-main" : "text-[#AAAAAA]"
                      }`}
                    >
                      {item.number}
                    </span>
                    <div
                      className={`w-30 mb-2 ${
                        activeTabs === index
                          ? "border-b-2 border-main"
                          : "border-b-2 border-[#AAAAAA]"
                      }`}
                    ></div>
                    <h3
                      className={`text-sm font-medium transition ${
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
          <div className="relative">
            <div
              className={`flex ${
                visibleMembers.length === 1
                  ? "justify-center"
                  : "justify-between gap-20"
              }`}
            >
              {visibleMembers.map((item, index) => (
                <div
                  key={currentIndex + index}
                  className={`w-64 mx-auto ${
                    visibleMembers.length === 2 && index % 2 === 1
                      ? "mt-20"
                      : ""
                  }`}
                  style={{
                    animation:
                      isInView && currentIndex !== 0
                        ? `slideInFromRight 0.7s ease-in-out both`
                        : "none",
                  }}
                >
                  <div className="absolute border-white h-96 w-[250px] bg-white rounded-3xl shadow-lg">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="h-72 w-full object-contain"
                    />
                    <span className="text-xs text-white rotate-90 absolute top-24 bg-[#BB3232] p-2 rounded-3xl -right-14">
                      {item.joined}
                    </span>
                  </div>

                  <div className="relative top-48 w-[300px] -left-20 bg-white rounded-2xl shadow-md mt-4">
                    <div className="p-5">
                      <p className="text-sm text-[#AAAAAA] font-poppins">
                        {item.description}
                      </p>
                    </div>
                    <div className="p-2 px-8 bg-[#BB3232] rounded-b-2xl">
                      <h3 className="font-poppins text-white text-sm">
                        {item.name}
                      </h3>
                      <span className="text-sm font-poppins font-thin text-white">
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
