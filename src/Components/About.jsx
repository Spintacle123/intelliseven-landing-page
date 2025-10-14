import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <div className="mt-10 sm:mt-16 md:mt-20 max-w-2xl text-center px-4">
          <div className="flex items-center justify-center">
            <div className="w-16 border-t border-main"></div>
            <span className="mx-4 text-[12px] sm:text-sm md:text-lg  text-main font-bold font-poppins">
              About us
            </span>
            <div className="w-16 border-t border-main"></div>
          </div>
        </div>
      </div>

      <div className="h-full  px-4 sm:px-6">
        <div
          className="justify-center max-w-sm md:max-w-md lg:max-w-4xl xl:max-w-6xl mx-auto mt-5 sm:mt-7 
                bg-white shadow-top-only rounded-2xl sm:rounded-[50px] md:rounded-[50px] p-5 sm:p-7 md:p-10 xl:p-14"
        >
          <div className="mb-6 sm:mb-8 md:mb-10 text-left justify-center">
            <p className="font-poppins  text-sm sm:text-xs md:text-[20px] leading-relaxed">
              Intelliseven is an innovative IT company dedicated to providing
              comprehensive and tailored solutions to meet the evolving needs of
              businesses. Our team of experienced professionals utilizes the
              latest technologies to deliver scalable and cost-effective
              solutions, while ensuring exceptional customer service and support
              throughout the project lifecycle. We strive to exceed expectations
              and drive success for our clients.
            </p>
            <span className="text-main font-rajdhani font-semibold text-xs">
              <a href="">READ MORE...</a>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center bg-white">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-6 max-w-7xl mx-auto">
            <div className="relative w-full flex items-center justify-center lg:order-2">
              <img
                src="/Images/blueBall.svg"
                alt="Blue Ball"
                className="absolute left-0 w-50 top-2 translate-x-[1rem] drop-shadow-xl"
              />
              <img
                src="/Images/whiteBall.svg"
                alt="White Ball"
                className="z-10 translate-x-[1rem] translate-y-[-3rem] w-full h-full drop-shadow-2xl"
              />
              <img
                src="/Images/pinkBall.svg"
                alt="Pink Ball"
                className="absolute z-20 w-60 translate-x-[6rem] translate-y-[1rem] drop-shadow-xl"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-sm lg:max-w-full self-center justify-self-center lg:justify-self-end text-center lg:text-left lg:order-1"
            >
              <h1 className="font-poppins text-lg font-medium text-[#878787] tracking-wider pb-4">
                Mission
              </h1>
              <p className="font-poppins text-sm sm:text-xs md:text-sm leading-relaxed">
                At IntelliSeven Solutions Inc., our mission is to empower
                businesses in the Philippines and beyond by delivering
                comprehensive IT solutions and services that drive digital
                transformation, foster innovation, and enable sustainable
                growth. We strive to be the trusted partner that leverages
                technology to unlock the full potential of our clients'
                businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-sm lg:max-w-full self-center justify-self-center lg:justify-self-end text-center lg:text-left lg:order-3"
            >
              <h1 className="font-rajdhani text-lg font-medium text-[#878787] tracking-wider pb-4">
                Vision
              </h1>
              <p className="font-poppins text-sm sm:text-xs md:text-sm leading-relaxed">
                Our vision is to be the premier provider of innovative and
                transformative IT solutions, empowering businesses in the
                Philippines and globally to thrive in the digital age. We aspire
                to be the catalyst for positive change, driving digital
                transformation, fostering innovation, and creating sustainable
                value for our clients and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
