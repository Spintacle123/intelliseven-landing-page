import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'Web Development',
    description:
      'IntelliSeven provides expert web development services, building sleek websites and dynamic web applications tailored to your brand. We focus on responsive design, smooth navigation, and secure, high-performance solutions to help businesses thrive online.',
    src: '/Images/mask-group.png',
    color: '#FFFFFF',
    SecondDescription: 'IntelliSeven builds sleek, secure, and high-performing websites and web apps that power your digital growth.',
    number: '01',
    shadow: '0 -25px 50px -12px rgba(0, 0, 0, 0.1)',
  },
  {
    title: 'Web Development',
    description:
      'IntelliSeven provides expert web development services, building sleek websites and dynamic web applications tailored to your brand. We focus on responsive design, smooth navigation, and secure, high-performance solutions to help businesses thrive online.',
    src: '/Images/mask-group.png',
    color: '#FFFFFF',
    SecondDescription: 'IntelliSeven builds sleek, secure, and high-performing websites and web apps that power your digital growth.',
    number: '02',
    shadow: '0 -25px 50px -12px rgba(0, 0, 0, 0.1)',
  },
  {
    title: 'App Development',
    description:
      'IntelliSeven provides expert web development services, building sleek websites and dynamic web applications tailored to your brand. We focus on responsive design, smooth navigation, and secure, high-performance solutions to help businesses thrive online.',
    src: '/Images/mask-group.png',
    color: '#FFFFFF',
    SecondDescription: 'IntelliSeven builds sleek, secure, and high-performing websites and web apps that power your digital growth.',
    number: '03',
    shadow: '0 -25px 50px -12px rgba(0, 0, 0, 0.1)',
  },
];

const Card = ({ i, title, description, SecondDescription, src, number, color, progress, range, targetScale, shadow }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    
    <div ref={container} className="h-screen flex items-center justify-center sticky top-24">
      
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          zIndex: projects.length - i,
          boxShadow: shadow || '0 25px 50px 12px rgba(0, 0, 0, 0)',
        }}
        className="flex flex-col relative h-[550px] w-[70%] max-w-4xl rounded-4xl p-8 origin-top"
      >
        <div className="flex h-full  gap-8">
          <div className='border-2 border-gray-500/10 rounded-full  w-70 h-70 absolute top-40 left-36'></div>
          <div className='border-2 border-gray-500/10 rounded-full  w-40 h-40 absolute top-56 left-51 -z-10'></div>
          <div className="relative w-[60%] h-full rounded-xl overflow-hidden z-40">
            <h3 className='font-rajdhani text-[#777777] bg-white border border-gray-400/40 py-2 px-4 rounded-xl text-xs z-50 mx-auto bottom-40 absolute'>YOUR VISION, OUR WEB.</h3>
            <motion.div className="w-full h-full relative" >
              <img src={src} alt={title} className="w-full ml-3 mt-7  h-full object-cover" />
            <div>
            </div>
            </motion.div> 
            
          </div>

          <div className="w-[40%] relative top-[10%] text-black">
            <h2 className="text-md font-rajdhani w-sm absolute font-medium -left-16 uppercase  py-4 text-main bg-main/15 rounded-full mb-6 border">
              <span className="ml-4 mr-5 rounded-full bg-main font-rajdhani text-white py-2 px-2">
                {number}
              </span> 
              {title}
            </h2>
            <div>
              <p className="text-sm text-[#555555] font-poppins leading-relaxed mb-4 mt-28 ">{description}</p>
              <div className='text-[#AAAAAA]'>
              <p className='text-xs text-[#AAAAAA]'>{SecondDescription}</p>
            </div>
            </div> 

            <div className=''>
              <button className="flex items-center mt-6 text-xs w-60 bg-main px-4 py-2 rounded-full duration-200 cursor-pointer font-rajdhani uppercase text-white gap-24">
                <span className='border py-2 px-2 text-main bg-white rounded-4xl'>
              <svg xmlns="http://www.w3.org/2000/svg" 
              width="10" 
              height="10" 
              viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" 
              stroke-width="2" d="m7 2l10 10L7 22"
              />
              </svg>
                </span>
              Know More
            </button>

            </div>
            <div className="flex items-center gap-2 mt-4">
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
    offset: ['start start', 'end end'],
  });

  return (
    <div className="text-white" ref={container}>
      <section className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.02;
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