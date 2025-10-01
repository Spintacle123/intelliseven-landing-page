import React from 'react'
import { Members } from '../helpers/Members'
import { useState } from 'react';

const TeamMember = () => {

       const [activeTabs, setActiveTabs] = useState(0);
       const [activeImage, setactiveImage] = useState(0);

       const tabs = [ 
        {
            number: "01",
            role: "Founders"
        },
        {
            number: "02",
            role: "Developers"
        },
       ]

       
   
  return (
    <div className=''>
      <div className='max-w-5xl justify-center mx-auto'>
        <div className='grid grid-cols-2  mx-aut'>
            <div className='space-y-3 w-70 mt-20'>
                <h2 className='text-4xl text-main font-medium'>Meet our Team</h2>
                <h3 className='text-sm text-black/80'>The People Behind IntelliSeven</h3>
                <p className='text-[#AAAAAA] font-poppins text-sm'>Our strength lies in our people—skilled innovators, problem solvers, and creators who bring passion and expertise to every project we deliver.</p>

                <div className=''>
               <div 

               className="flex  mx-auto  ">
                   {tabs.map((item, index) => (
                       <div key={item.number} className="flex-1">
                           <button 
                           onClick={() => setActiveTabs(index)}
                          className={`w-full flex flex-col items-end transition cursor-pointer ${
                                activeTabs === index ? "text-main" : "text-[text-[#AAAAAA]]"
                              }`}
                            >
                               <span className={` text-sm mb-2 transiton 
                                ${ activeTabs === index ? "text-main" : "text-[#AAAAAA]"}`}>

                               {item.number}</span>
                               <div className={`w-30  mb-2 ${
                                activeTabs === index
                                ? "border-b-2 border-main"
                                : "border-b-2 text-[#AAAAAA]"
                               }`}>

                               </div>
                               <h3 className={` text-sm font-medium transition
                                ${ activeTabs === index ? "text-main" : "text-[#AAAAAA]"}`}>
                                {item.role}
                                </h3>
                           </button>
                       </div>
                   ))}
               </div>
                </div>
            </div>

            <div>
              <div className="flex justify-between gap-20">
                {Members.map((item, index) => (
                  <div 
                    key={index} 
                    className={`w-64 mx-auto ${index % 2 === 1 ? "mt-20" : ""}`}
                  >
              
                    <div className="absolute border-white h-96 w-[250px] bg-white rounded-3xl shadow-lg">
                      <img 
                        src={item.src} 
                        alt="" 
                        className="h-72 w-full object-contain"
                      />
                      <span className="text-xs text-white rotate-90 absolute top-24 bg-[#BB3232] p-2 rounded-3xl -right-14">
                        {item.joined}
                      </span>
                    </div>
              
                    <div className="relative top-48 w-[300px] -left-20 bg-white rounded-2xl shadow-md mt-4">
                      <div className="p-5">
                        <p className="text-sm text-[#AAAAAA] font-poppins">
                          {item.description}
                        </p>
                      </div>
                      <div className="p-2 px-8 bg-[#BB3232] rounded-b-2xl">
                        <h3 className="font-poppins text-white text-sm">{item.name}</h3>
                        <span className="text-sm font-poppins font-thin text-white">{item.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember
