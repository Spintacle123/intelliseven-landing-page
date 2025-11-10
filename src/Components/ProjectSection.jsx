// src/Components/ProjectsSection.jsx
import BackgroundFrame from "./BackgroundFrame";
import Internship from "./Internship";
import IntroCopy from "./IntroCopy";
import ProjectsTabs from "./ProjectTabs";
import { motion } from "framer-motion";
import TeamMember from "./TeamMember";
import WhyChoose from "./WhyChoose";

const Shape = ({ src, top, left, size, speed }) => (
  <motion.img
    src={src}
    alt=""
    className="absolute pointer-events-none select-none"
    style={{
      top,
      left,
      width: size,
      height: size,
      transform: "translate(-50%, -50%)",
    }}
    animate={{ rotate: 360 }}
    transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
  />
);

export default function ProjectsSection() {
  const intro =
    "A showcase of the systems and solutions we've developed designed to streamline processes, improve efficiency, and deliver real value to businesses across industries.";

  return (
    <BackgroundFrame src="/Images/bg-mid.png" ratio={2.805} position="50% 42%">
      {/* ====================== FLOATING SHAPES ====================== */}
      <div
        className="absolute left-0 right-0 -z-0 project-shapes-layer"
        style={{
          top: "90svh", // mobile position
          height: "100svh",
        }}
      >
        <style>{`
          @media (min-width: 768px) {
            .project-shapes-layer {
              top: 150svh !important;
            }
          }
          @media (min-width: 1024px) {
            .project-shapes-layer {
              top: 90svh !important;
            }
          }
          @media (min-width: 1536px) {
            .project-shapes-layer {
              top: 80svh !important;
            }
          }
        `}</style>

        {/* LEFT SIDE */}
        <Shape
          src="/Images/animation1.png"
          top="25%"
          left="6%"
          size="clamp(80px,14vw,220px)"
          speed={25}
        />
        <Shape
          src="/Images/animation2.png"
          top="60%"
          left="10%"
          size="clamp(160px,22vw,360px)"
          speed={30}
        />

        {/* RIGHT SIDE */}
        <Shape
          src="/Images/animation3.png"
          top="35%"
          left="78%"
          size="clamp(90px,10vw,200px)"
          speed={18}
        />
        <Shape
          src="/Images/animation4.png"
          top="75%"
          left="86%"
          size="clamp(160px,22vw,360px)"
          speed={22}
        />
      </div>

      {/* ====================== CONTENT AREA ====================== */}
      <div className="relative  pt-0 md:pt-[0svh] lg:pt-0 lg:pb-0 xl:pt-[4svh] 2xl:pt-[0svh]"></div>
      <WhyChoose />
      <div className="relative pt-[5svh] md:pt-[0svh] ">
        <IntroCopy text={intro} />
      </div>
      <div />
      <div className="mt-[14svh] md:mt-0  lg:mt-[20svh] xl:mt-[30svh] 2xl:mt-[30svh] custom-1800:pt-0">
        <ProjectsTabs />
      </div>

      <div className="mt-[10svh] md:mt-[20svh]  xl:mt-[0svh] 2xl:mt-[90svh]  custom-1840:pt-[30svh]">
        <Internship />
      </div>
      <div className="mt-[30svh]  md:mt-[26svh] lg:mt-[40svh] xl:mt-[50svh] 2xl:mt-[90svh]  ">
        <TeamMember />
      </div>
    </BackgroundFrame>
  );
}
