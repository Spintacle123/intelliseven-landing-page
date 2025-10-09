import { useState, useEffect } from 'react';
  import { Interns } from '../helpers/Interns'


export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % Interns.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + Interns.length) % Interns.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Interns.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const getPositionClasses = (index) => {
    const diff = (index - currentIndex + Interns.length) % Interns.length;
    
    if (diff === 0) {
      return 'translate-x-0 scale-100 z-30 opacity-100';
    } else if (diff === 1 || diff === -4) {
      return 'translate-x-[70%] scale-75 z-20 opacity-60';
    } else if (diff === 2 || diff === -3) {
      return 'translate-x-[120%] scale-50 z-10 opacity-30';
    } else if (diff === 4 || diff === -1) {
      return '-translate-x-[70%] scale-75 z-20 opacity-60';
    } else {
      return '-translate-x-[120%] scale-50 z-10 opacity-30';
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-5xl flex justify-center items-center mx-auto mb-8">
        <div className="w-16 border-t-2 border-main"></div>
        <span className="mx-4 font-medium text-main uppercase text-xs tracking-wider">
          Gallery Memories of IntelliSeven
        </span>
        <div className="w-16 border-t-2 border-main"></div>
      </div>

      <div className="flex justify-center mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl text-main font-rajdhani text-center px-4">
          A Visual Journey Through Creativity and Innovation
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="relative h-[400px] md:h-[500px] flex justify-center items-center">
          {Interns.map((intern, index) => (
            <div
              key={index}
              className={`absolute w-[80%] md:w-[50%] lg:w-[40%] transition-all duration-700 ease-in-out ${getPositionClasses(index)}`}
            >
              <img
                src={intern.img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:px-8 z-40">
          <button
            onClick={handlePrev}
            className="bg-white/90 hover:bg-white rounded-full p-3 md:p-4 shadow-xl transition-all hover:scale-110 active:scale-95 group"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-main transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-white/90 hover:bg-white rounded-full p-3 md:p-4 shadow-xl transition-all hover:scale-110 active:scale-95 group"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-main transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center items-center gap-3 mt-12">
          {Interns.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-10 h-3 bg-main'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}