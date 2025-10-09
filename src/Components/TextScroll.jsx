import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingShape from "./FloatingShape";
const TextScroll = () => {
  const [activeTabs, setActiveTabs] = useState(0);

  const tabs = [
    {
      id: 1,
      title: "LAWSYS",
      projectName: "LAWSYS",
      number: "01",
      description:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.",
      comment: "He found himself transformed in his bed into a horrible vermin.",
      button: "EXPLORE MORE ABOUT HRIS SYSTEM",
      src: "/Images/HRIS.png",
      icon: "/icons/Calendar.png",
      icon2: "/icons/coin.png",
    },
    {
      title: "iTimeHR",
      number: "02",
      button: "EXPLORE MORE ABOUT iTimeHR",
    },
    {
      title: "LAWSYS MOBILE",
      number: "03",
      button: "EXPLORE MORE ABOUT HRIS LAWSYS MOBILE",
    },
  ];

  const paragraph =
    "A showcase of the systems and solutions we’ve developed—designed to streamline processes, improve efficiency, and deliver real value to businesses across industries.";

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 75%"],
  });

  const words = paragraph.split(" ");

  return (
    <div>

      <section className="">
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden", 
            pointerEvents: "none", 
          }}
        >
          <FloatingShape
            src="/Images/animation1.png"
            top="23%"
            left="4%"
        
            rotateSpeed={25}
          />
          <FloatingShape
            src="/Images/animation2.png"
            top="34%"
            left="2%"
            width="550px"
            height="550px"
            rotateSpeed={30}
          />
          <FloatingShape
            src="/Images/animation3.png"
            top="27%"
            left="65%"
            width="200px"
            height="200px"
            rotateSpeed={18}
          />
          <FloatingShape
            src="/Images/animation4.png"
            top="35%"
            left="78%"
            width="500px"
            height="500px"
            rotateSpeed={22}
          />
        </div>

        <div className="max-w-5xl flex justify-center mx-auto mt-60">
          <div className="w-16 border-t border-white/50"></div>
          <span className="mx-4 font-rajdhani font-medium text-white uppercase text-xs">
            Project that we have
          </span>
          <div className="w-16 border-t border-white/50"></div>
        </div>

        <div className="flex justify-center mx-auto max-w-4xl py-10 mb-44">
          <p ref={ref} className="text-4xl text-center text-white font-poppins font-light leading-relaxed">
            <span className="flex flex-wrap justify-center gap-2">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = (i + 1) / words.length;
                const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        
                return (
                  <motion.span
                    key={i}
                    style={{ opacity }}
                    className="transition duration-300"
                  >
                    {word}
                  </motion.span>
                );
              })}
            </span>
          </p>
        </div>

        <div className="">
          <div className="flex max-w-lg mx-auto ">
            {tabs.map((item, index) => (
              <div key={item.number} className="flex-1">
                <button
                  onClick={() => setActiveTabs(index)}
                  className={`w-full flex flex-col items-end transition cursor-pointer ${
                    activeTabs === index ? "text-white" : "text-white/50"
                  }`}
                >
                  <span
                    className={`text-sm mb-2 transiton 
                                ${
                                  activeTabs === index
                                    ? "text-white/60"
                                    : "text-white"
                                }`}
                  >
                    {item.number}
                  </span>
                  <div className="w-40 border-b border-white mb-2"></div>
                  <h3
                    className={`text-white text-sm font-medium 
                                ${
                                  activeTabs === index
                                    ? "text-white/60"
                                    : "text-white"
                                }`}
                  >
                    {item.title}
                  </h3> 
                </button>
              </div>
            ))}
          </div>

          
          <div className="">
            <div className="max-w-4xl items-center mx-auto ">
              <div className="flex justify-between mt-16">
                <div className="">
                  <img
                    src={tabs[activeTabs].src}
                    alt=""
                    className="h-[350px] text-start absolute "
                  />
                  <img
                    src={tabs[activeTabs].icon}
                    className="relative right-4 bg-white rounded-2xl p-4"
                    alt=""
                  />
                  <img
                    src={tabs[activeTabs].icon2}
                    className="relative right-1 bg-white rounded-2xl p-4 top-2"
                    alt=""
                  />
                </div>
                <div className="mt-20 max-w-sm space-y-5 ">
                  <h1 className="text-white font-medium text-3xl">
                    {tabs[activeTabs].projectName}
                  </h1>
                  <p className="text-white font-extralight text-sm">
                    {tabs[activeTabs].description}
                  </p>
                  <p className="text-xs font-medium text-white/56">
                    {tabs[activeTabs].comment}
                  </p>
                  <div>
                    <button className="flex items-center mt-6 text-xs w-80 bg-[#AC0B0B] px-4 py-2 rounded-full duration-200 cursor-pointer font-rajdhani uppercase text-white gap-4">
                      <span className="border py-2 px-2 text-main bg-white rounded-4xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            d="m7 2l10 10L7 22"
                          />
                        </svg>
                      </span>
                      {tabs[activeTabs].button}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextScroll;
