import { useState, useEffect, useRef } from "react";

const IntelliText = () => {
  const [fillProgress, setFillProgress] = useState({
    text1: 0,
    text2: 0,
    text3: 0,
    text4: 0
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
    
    setTimeout(() => {
      let progress = 0;
      const interval1 = setInterval(() => {
        progress += 1;
        setFillProgress(prev => ({ ...prev, text1: progress }));
        if (progress >= 12) {
          clearInterval(interval1);
          
          setTimeout(() => {
            let progress2 = 0;
            const interval2 = setInterval(() => {
              progress2 += 1;
              setFillProgress(prev => ({ ...prev, text2: progress2 }));
              if (progress2 >= 12) {
                clearInterval(interval2);
                
                setTimeout(() => {
                  let progress3 = 0;
                  const interval3 = setInterval(() => {
                    progress3 += 1;
                    setFillProgress(prev => ({ ...prev, text3: progress3 }));
                    if (progress3 >= 12) {
                      clearInterval(interval3);
                    
                      setTimeout(() => {
                        let progress4 = 0;
                        const interval4 = setInterval(() => {
                          progress4 += 1;
                          setFillProgress(prev => ({ ...prev, text4: progress4 }));
                          if (progress4 >= 12) {
                            clearInterval(interval4);
              
                            setTimeout(() => {
                              animateText();
                            }, 1000);
                          }
                        }, 100);
                      }, 300);
                    }
                  }, 100);
                }, 300);
              }
            }, 100);
          }, 300);
        }
      }, 150);
    }, 500);
  };

  const renderAnimatedText = (text, progress) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className={`transition-all duration-300 ${
          index < progress
            ? 'text-main drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]'
            : 'text-[#DDDDDD]  '
        }`}
        style={{
          transitionDelay: `${index * 50}ms`
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div ref={sectionRef} className="w-full min-h-screen relative overflow-hidden">
      <div className="w-full mt-10 relative z-20">
        <div className="flex gap-12">
          <div>
            <div className="flex gap-12">
              <h1 className="text-8xl font-thin tracking-wider">
                {renderAnimatedText('INTELLISEVEN', fillProgress.text1)}
              </h1>
              <h1 className="text-8xl font-thin tracking-wider">
                {renderAnimatedText('INTELLISEVEN', fillProgress.text2)}
              </h1>
            </div>
            <div className="flex text-end gap-16 ml-60 py-8">
              <h1 className="text-8xl font-thin tracking-wider">
                {renderAnimatedText('INTELLISEVEN', fillProgress.text3)}
              </h1>
              <h1 className="text-8xl font-thin tracking-wider">
                {renderAnimatedText('INTELLISEVEN', fillProgress.text4)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelliText;