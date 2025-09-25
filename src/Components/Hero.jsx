import React from 'react'

const Hero = () => {
  return (
    <div className="bg-[url('/Images/bg-building.png')] h-screen bg-cover bg-center mx-auto ">
        
        <div className='flex justify-center h-full py-7'>
           <div className="flex flex-col items-center justify-center mb-40 -left-36 relative ">
               <div className="mt-25">
                   <img 
                       src="/Images/i7-Logo.png" 
                       alt="IntelliSeven Logo" 
                       className="w-xs h-xs object-contain"
                   />
               </div>
                 <h1 className="text-6xl font-bold text-heroColor text-center leading-tight z-10">
                   Your Trusted Partner in <br />
                   <span className="text-7xl bg-gradient-to-r from-[#D8A4A4] to-[#BB3232] bg-clip-text text-transparent z-50">
                     Digital Growth.
                   </span>
                 </h1>

           </div>
           <div className='absolute right-44'>
                <img src="/Images/Hero.png"
                 className='w-[600px] h-full'
                alt="" />
                <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white to-transparent"></div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero