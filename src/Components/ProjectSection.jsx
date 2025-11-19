// src/Components/ProjectsSection.jsx
import BackgroundFrame from "./BackgroundFrame";
import Internship from "./Internship";
import IntroCopy from "./IntroCopy";
import ProjectsTabs from "./ProjectTabs";
import { motion } from "framer-motion";
import TeamMember from "./TeamMember";
import WhyChoose from "./WhyChoose";

const Shape = ({ src, className, speed }) => (
  <motion.img
    src={src}
    alt=""
    className={`absolute pointer-events-none select-none ${className}`}
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
      <div className="absolute inset-x-0 -z-0 top-[140vh] md:top-[80vh] lg:top-[90vh] h-screen">
        {/* LEFT SIDE */}
        <Shape
          src="/Images/animation1.png"
          className="top-[25%] left-[6%] w-[clamp(100px,12vw,220px)] -translate-x-1/2 -translate-y-1/2"
          speed={25}
        />
        <Shape
          src="/Images/animation2.png"
          className="top-[60%] left-[10%] w-[clamp(160px,22vw,360px)] -translate-x-1/2 -translate-y-1/2"
          speed={30}
        />

        {/* RIGHT SIDE */}
        <Shape
          src="/Images/animation3.png"
          className="top-[35%] left-[78%] w-[clamp(90px,10vw,200px)] -translate-x-1/2 -translate-y-1/2"
          speed={18}
        />
        <Shape
          src="/Images/animation4.png"a
          className="top-[75%] left-[86%] w-[clamp(160px,22vw,360px)] -translate-x-1/2 -translate-y-1/2"
          speed={22}
        />
      </div>

      {/* ====================== CONTENT AREA ====================== */}
        <div className="relative space-y-2 md:space-y-1 lg:space-y-2 xl:space-y-20">
          <div className="xl:pt-16">
            <WhyChoose />
          </div>

          <div className="pt-5 md:pt-0">
            <IntroCopy text={intro} />
          </div>

          <div className="pt-14 md:pt-0 lg:pt-2 xl:pt-32">
            <ProjectsTabs />
          </div>

          <div className="pt-10 md:pt-1 lg:pt-0 xl:pt-20 2xl:pt-52">
            <Internship />
          </div>

          <div id="team" className="pt-30 md:pt-20 lg:pt-30 xl:pt-72 2xl:pt-72">
            <TeamMember />
          </div>
        </div>  
    </BackgroundFrame>
  );
}