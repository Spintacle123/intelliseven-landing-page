import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div className="order-2 lg:order-2 md:order-1 flex flex-col sm:flex-row justify-center md:justify-start gap-10">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">TOP</a>
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">SERVICES</a>
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">ABOUT US</a>
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">MEET THE TEAM</a>
          </div>

          <div className="flex flex-col space-y-3">
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">DOCUMENTATION</a>
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">INTERNSHIP JOURNEY</a>
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">INTELLISEVEN HISTORY</a>
          </div>
        </div>

        <div className="order-3 lg:order-2 md:order-2 flex flex-col items-center justify-center">
          <img
            src="/Images/i7-Logo.png"
            alt="IntelliSeven Logo"
            className="h-16 w-auto mb-2"
          />
          <span className="text-xs font-rajdhani text-[#AAAAAA] mt-2 text-center">
            © 2025 Intelliseven Technology Solutions Inc.
          </span>
        </div>

        <div className="order-2 lg:order-3 flex flex-col sm:flex-row justify-center md:justify-end gap-10">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">BRAND SITE</a>
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">CORPORATE SITE</a>
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">CONTACT US</a>
          </div>

          <div className="flex flex-col space-y-3">
            <a href="#" className="text-xs text-[#AAAAAA] font-rajdhani font-semibold">PH / EN</a>
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
