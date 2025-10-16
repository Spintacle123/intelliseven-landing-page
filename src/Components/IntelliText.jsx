import { useState, useEffect, useRef } from "react";

const IntelliText = () => {
  const [fillProgress, setFillProgress] = useState({
    text1: 0,
    text2: 0,
    text3: 0,
    text4: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;
    animateText();
  }, [isVisible]);

  const animateText = () => {
    setFillProgress({ text1: 0, text2: 0, text3: 0, text4: 0 });

    const animateLine = (key, length, delay, callback) => {
      let i = 0;
      const step = () => {
        setFillProgress((prev) => ({ ...prev, [key]: i }));
        if (i < length) {
          i++;
          setTimeout(step, 100);
        } else if (callback) {
          setTimeout(callback, 300);
        }
      };

      setTimeout(step, delay);
    };

    animateLine("text1", 12, 500, () => {
      animateLine("text2", 12, 0, () => {
        animateLine("text3", 12, 0, () => {
          animateLine("text4", 12, 0, () => {
            setTimeout(animateText, 1000);
          });
        });
      });
    });
  };

  const renderAnimatedText = (text, progress) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className={`transition-all duration-300 ${
          index < progress ? "text-main" : "text-[#DDDDDD]  "
        }`}
        style={{
          transitionDelay: `${index * 50}ms`,
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div ref={sectionRef} className="w-full relative overflow-hidden">
      <div className="w-full mt-10 relative z-20">
        <div className="flex gap-5">
          <div>
            <div className="flex gap-4 lg:gap-12">
              <h1 className="text-[30px] lg:text-7xl xl:text-[100px] font-thin tracking-wider">
                {renderAnimatedText("INTELLISEVEN", fillProgress.text1)}
              </h1>
              <h1 className="text-[30px] lg:text-7xl xl:text-[100px] font-thin tracking-wider">
                {renderAnimatedText("INTELLISEVEN", fillProgress.text2)}
              </h1>
            </div>
            <div className="flex text-end gap-4 lg:gap-12 xl:gap-16 ml-10 xl:ml-40 py-8">
              <h1 className="text-[30px] lg:text-7xl xl:text-[100px] font-thin tracking-wider">
                {renderAnimatedText("INTELLISEVEN", fillProgress.text3)}
              </h1>
              <h1 className="text-[30px] lg:text-7xl xl:text-[100px] font-thin tracking-wider">
                {renderAnimatedText("INTELLISEVEN", fillProgress.text4)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelliText;
