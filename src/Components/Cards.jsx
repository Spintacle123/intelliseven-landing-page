import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Web Development",
    description:
      "IntelliSeven creates sleek, high-performing websites and web applications tailored to your brand, focusing on responsive design, smooth navigation, and reliable security",
    src: "/Images/mask-group.png",
    color: "#FFFFFF",
    SecondDescription:
      "IntelliSeven builds sleek, secure, and high-performing websites and web apps that power your digital growth.",
    number: "01",
    shadow: "0 -25px 50px -12px rgba(0, 0, 0, 0.1)",
  },
  {
    title: "Mobile Development",
    description:
      "We develop mobile applications that are fast, reliable, and provide exceptional user experiences across all platforms.",
    src: "/Images/mask-group.png",
    color: "#FFFFFF",
    SecondDescription:
      "Our apps are designed to connect businesses and customers seamlessly.",
    number: "02",
    shadow: "0 -25px 50px -12px rgba(0, 0, 0, 0.1)",
  },
  {
    title: "App Development",
    description:
      "From concept to deployment, IntelliSeven builds scalable applications that align with your business goals.",
    src: "/Images/mask-group.png",
    color: "#FFFFFF",
    SecondDescription:
      "We merge creativity with technology to develop apps that drive engagement and efficiency.",
    number: "03",
    shadow: "0 -25px 50px -12px rgba(0, 0, 0, 0.1)",
  },
];

const Card = ({
  i,
  title,
  description,
  SecondDescription,
  src,
  number,
  color,
  progress,
  range,
  targetScale,
  shadow,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-16 sm:top-25 md:top-12 lg:top-20 xl:top-24 pt-2"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          zIndex: projects.length - i,
          boxShadow: shadow || "0 25px 50px 12px rgba(0, 0, 0, 0)",
        }}
        className="flex flex-col relative h-[530px] sm:h-[540px] md:h-[500px] lg:h-[450px] xl:h-[550px] w-[92%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[70%] max-w-4xl rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl p-5 sm:p-6 md:p-7 lg:p-8 origin-top"
      >
        <div className="flex flex-col md:flex-row h-full gap-5 sm:gap-6 md:gap-6 lg:gap-8">
          {/* Left Image Section */}
          <div className="relative w-full md:w-[55%] lg:w-[60%] h-[52%] sm:h-[50%] md:h-full rounded-xl md:rounded-2xl overflow-hidden flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-60 lg:h-60 border-2 border-gray-300/30 rounded-full flex items-center justify-center"></div>

              <span className="absolute top-34 -left-24 mt-4 font-rajdhani text-[#777777] bg-white border border-gray-400/40 py-1.5 px-3 sm:py-2 sm:px-3 md:py-2 md:px-4 rounded-lg text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap shadow-sm">
                YOUR VISION, OUR WEB.
              </span>
            </div>

            <motion.div className="absolute inset-0 flex items-center justify-center">
              <img
                src={src}
                alt={title}
                className="w-full h-full object-contain md:object-cover"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-[45%] lg:w-[40%] relative md:top-[5%] text-black flex flex-col justify-between md:justify-start">
            <div>
              <h2 className="text-sm sm:text-sm md:text-sm lg:text-md font-rajdhani font-medium uppercase flex items-center justify-start md:absolute md:top-6 md:-left-16 bg-[#FFE0E0] border border-[#FF6565] text-main rounded-full py-2 px-4 md:py-3 md:px-5 w-full">
                <span className="mr-3 rounded-full bg-main text-white py-1 px-2 text-[10px] sm:text-xs font-semibold">
                  {number}
                </span>
                <span className="tracking-wide">{title}</span>
              </h2>
              <div className="mt-4 sm:mt-6 md:mt-20 lg:mt-28">
                <p className="text-sm sm:text-sm md:text-sm md:block text-[#555555] font-poppins leading-relaxed mb-3 md:mb-4">
                  {description}
                </p>
                <div className="text-[#AAAAAA]">
                  <p className="text-[11px] text-sm md:text-xs text-[#999999] font-poppins leading-relaxed line-clamp-2 sm:line-clamp-2 md:line-clamp-none">
                    {SecondDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 md:mt-6">
              <button className="group flex items-center justify-center md:justify-between text-[10px] sm:text-xs md:text-xs w-full bg-main px-3 sm:px-4 md:px-4 py-2.5 sm:py-2.5 md:py-2 rounded-full duration-200 cursor-pointer font-rajdhani uppercase text-white hover:bg-main/90 transition-all">
                <span className="flex items-center justify-center border py-1.5 px-1.5 sm:py-2 sm:px-2 md:py-2 md:px-2 text-main bg-white rounded-full group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    className="sm:w-[9px] sm:h-[9px] md:w-[10px] md:h-[10px]"
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
                <span className="ml-2 font-medium tracking-wide">See more</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function StackingCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="text-white" ref={container}>
      <section className="text-center py-24 sm:py-28 md:py-32">
        <div className="flex items-center justify-center">
          <div className="w-16 border-t border-main"></div>
          <span className="mx-4 text-[12px] sm:text-sm md:text-lg  text-main font-bold font-poppins">
            What we offer
          </span>
          <div className="w-16 border-t border-main"></div>
        </div>

        <p className="max-w-3xl mx-auto text-[#555555] text-xs sm:text-sm md:text-base font-poppins leading-relaxed px-5 mt-5">
          We provide innovative software solutions and reliable systems tailored
          to your business needs—helping you optimize operations, enhance
          productivity, and achieve sustainable growth.
        </p>
      </section>

      {/* === STACKING CARDS === */}
      <section className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.035;
          return (
            <Card
              key={`project_${i}`}
              i={i}
              title={project.title}
              color={project.color}
              description={project.description}
              SecondDescription={project.SecondDescription}
              number={project.number}
              src={project.src}
              progress={scrollYProgress}
              range={[i * 0.2, 1]}
              targetScale={targetScale}
              shadow={project.shadow}
            />
          );
        })}
        <div className="h-screen"></div>
      </section>
    </div>
  );
}
