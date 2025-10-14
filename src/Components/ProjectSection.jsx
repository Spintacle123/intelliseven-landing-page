// src/Components/ProjectsSection.jsx
import BackgroundFrame from "./BackgroundFrame";
import Internship from "./Internship";
import IntroCopy from "./IntroCopy";
import ProjectsTabs from "./ProjectTabs";
import { motion } from "framer-motion";
import TeamMember from "./TeamMember";

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
      {/* Deeper anchor for particles */}
      <div
        className="absolute left-0 right-0 -z-0 project-shapes-layer"
        style={{
          top: "90svh", // mobile position
          height: "100svh",
        }}
      >
        {/* Desktop-only deeper offset */}
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
              top: 120svh !important;
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
      <div className="relative pt-[70svh] md:pt-[65svh] lg:pt-[50svh] xl:pt-[80svh] pb-[8svh] md:pb-[10svh]">
        <IntroCopy text={intro} />

        {/* Adjusted spacing between intro and tabs */}
        <div className="mt-[14svh] md:mt-[18svh] lg:mt-[20svh] xl:mt-[30svh]">
          <ProjectsTabs />
        </div>

        <div className="mt-[30svh] md:mt-[40svh] lg:mt-[40svh] xl:mt-[80svh]">
          <Internship />
        </div>
        <div className="mt-[30svh] md:mt-[45svh] lg:mt-[40svh] xl:mt-[80svh]">
          <TeamMember />
        </div>
      </div>
    </BackgroundFrame>
  );
}
