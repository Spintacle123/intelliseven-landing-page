import React from "react";

const Hero = () => {
  return (
    <section className="bg-[url('/Images/bg-building.png')] bg-cover bg-center relative min-h-screen w-full overflow-hidden">
      
      {/* Mobile Layout */}
      <div className="md:hidden flex min-h-screen flex-col items-center justify-start px-5 pt-16">

        <h1 className="font-bold text-heroColor text-center leading-tight">
          <span className="block text-[32px] z-10">
            Your Trusted Partner in
          </span>
          <span className="block mt-1 bg-gradient-to-r from-[#D8A4A4] to-[#BB3232] bg-clip-text text-transparent text-[45px]">
            Digital Growth.
          </span>
        </h1>

        <div className="relative mt-8 w-full">
          <img
            src="/Images/Hero.png"
            alt="Hero"
            className="mx-auto block w-auto max-w-sm object-contain"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex relative w-full h-screen items-center justify-center">
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[420px] lg:-translate-x-[450px] xl:-translate-x-[450px] z-30">
          <h1 className="font-poppins font-medium leading-tight">
            <span className="block text-center  md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-7xl text-gray-300">
              Your business is
            </span>
            <span className=" mt-2 md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-8xl bg-gradient-to-r from-[#D8A4A4] to-[#BB3232] bg-clip-text text-transparent">
             our business.
            </span>
          </h1>
        </div>

        <div className="absolute left-1/2  top-0 bottom-0 translate-x-[50px] lg:translate-x-[60px]  2xl:translate-x-[100px]  flex items-end z-20">
          <div className="relative">
            <img
              src="/Images/Hero.png"
              alt="Hero"
              className="h-[650px] md:h-[700px] lg:h-[750px] xl:h-[700px] 2xl:h-[750px] w-auto object-contain object-bottom"
            />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
