import React from 'react'

const Footer = () => {
  return (
    <div className="h-40 flex items-center justify-center bg-white">
      <div className="grid grid-cols-3 gap-10 w-full max-w-6xl text-center">
        <div className="flex justify-center gap-10">
          <div className="flex flex-col text-left space-y-3">
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">TOP</a>
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">SERVICES</a>
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">ABOUT US</a>
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">MEET THE TEAM</a>
          </div>
          <div className="flex flex-col text-left space-y-3">
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">DOCUMENTATION</a>
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">INTERNSHIP JOURNEY</a>
            <a href="#" className="text-xs text-[#555555] font-rajdhani font-semibold">INTELLISEVEN HISTORY</a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src="/Images/i7-Logo.png"
            alt=""
            className="w-auto h-[80px]"
          />
          <span className="text-xs font-rad text-[#AAAAAA] mt-2">
            © 2025 Intelliseven Technology Solutions Inc.
          </span>
        </div>

        <div className="flex justify-center text-left gap-10">
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
    </div>
  )
}

export default Footer
