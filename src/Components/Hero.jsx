import React from "react";

const Hero = () => {
  return (
    <section className="bg-[url('/Images/bg-building.png')] bg-cover bg-center mx-auto relative min-h-screen">
      <div className="md:hidden flex min-h-screen flex-col items-center  justify-start px-5 pt-16">
        <img
          src="/Images/i7-Logo.png"
          alt="IntelliSeven Logo"
          className="h-20 w-auto mb-5"
        />
        <h1 className="font-bold text-heroColor text-center leading-tight">
          <span className="block text-[32px] z-10">Your Trusted Partner in</span>
          <span className="block mt-1 bg-gradient-to-r from-[#D8A4A4] to-[#BB3232] bg-clip-text text-transparent text-[45px] ">
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
      <div className="hidden md:flex justify-center h-screen py-7">
        <div className="flex flex-col items-center justify-center mb-40 -left-36 relative">
          <div className="mt-15 z-40 relative">
            <img
              src="/Images/i7-Logo.png"
              alt="IntelliSeven Logo"
              className="w-xs h-xs object-contain"
            />
          </div>
          <h1 className="relative font-poppins lg:text-6xl xl:text-7xl font-medium text-heroColor text-center leading-tight">
            <span className="relative z-5">Your Trusted Partner in</span> <br />
            <span className="relative xl:text-8xl lg:text-6xl bg-gradient-to-r from-[#D8A4A4] to-[#BB3232] bg-clip-text text-transparent z-40">
              Digital Growth. 
            </span>
          </h1>
        </div>

        <div className="absolute lg:right-40 xl:right-28 z-20">
          <img
            src="/Images/Hero.png"
            className="w-100 h-159 lg:w-[500px] xl:w-[600px] xl:h-[800px] v2xl:w-[800px] 2xl:h-[full]"
            alt=""
          />
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;