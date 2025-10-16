import React from 'react'
import { useState } from 'react'

const Contacts = () => {

  const p = "Reach out to us today—we're here to answer your questions, provide support, and explore opportunities together."

  return (
    <div className='py-2  flex flex-col px-4 overflow-x-hidden'>
      <div className='mb-40'>
          <div className="flex items-center justify-center">
            <div className="w-8 md:w-16 border-t border-main"></div>
          <span className="mx-4 text-[12px] sm:text-sm md:text-lg lg:text-4xl  text-main font-bold font-poppins">
              Contact us</span>
            <div className="w-8 md:w-16 border-t border-main"></div>
          </div>

        <div className='max-w-5xl w-full bg-white shadow-top-only rounded-[30px] md:rounded-[50px] min-h-[400px] flex justify-center mx-auto mt-8 md:mt-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-10 w-full'>
            <div className='w-full h-[250px] md:h-auto'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.85074129474!2d121.07723607487286!3d14.607577185879586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b81d5c038825%3A0x6a41cc28ed2ed15d!2sEmapta%20Office%20%E2%80%93%20IBM%20Plaza%2C%20Eastwood%2C%20Quezon%20City%2C%20Philippines!5e0!3m2!1sfil!2sph!4v1759475130834!5m2!1sfil!2sph"
                style={{ border: 0, borderRadius: "20px", width: '100%', height: '100%', filter: 'grayscale(100%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className='flex flex-col'>
              <p className='uppercase font-rajdhani pt-2 md:pt-10 font-light leading-relaxed text-xs md:text-sm text-[#ADADAD]'>Let's Get to Business</p>
              <p className='mt-2 text-xs md:text-sm font-rajdhani uppercase'>
                {p}
              </p>

              <div className='mt-4 space-y-4 md:space-y-6'>
                <div className='flex gap-3 items-start'>          
                    <span className='flex-shrink-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" className='text-main font-rajdhani md:w-[25px] md:h-[25px]'><g 
                        fill="none" stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2">
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></g></svg>
                    </span>
                     <p className='font-light font-rajdhani text-xs md:text-sm break-all'>hello@intelliseven.com.ph</p> 
                </div>
                <div className='flex gap-3 items-start'>          
                    <span className='font-rajdhani flex-shrink-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" className='text-main font-rajdhani md:w-[25px] md:h-[25px]'><g 
                        fill="none" stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2">
                       <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </g>
                        </svg>
                    </span>
                     <p className='font-light font-rajdhani text-xs md:text-sm'>Intelliseven Inc. </p> 
                </div>
                <div className='flex gap-3 items-start'>          
                    <span className='flex-shrink-0'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                     width="20" 
                     height="20" 
                     viewBox="0 0 24 24"
                     className='text-main md:w-[25px] md:h-[25px]'
                     >
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="64" strokeDashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path strokeDasharray="4" strokeDashoffset="4" d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="4;0"/></path><path strokeDasharray="6" strokeDashoffset="6" d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.3s" values="6;0"/></path></g></svg>
                    </span>
                     <p className='font-light font-rajdhani text-xs md:text-sm'>+63918-909-0331 <span className='text-[#B2B2B2] font-rajdhani block md:inline'>(Sales No.)</span></p>
                </div>
                <div className='flex gap-3 items-start'>          
                    <span className='flex-shrink-0'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                     width="20" 
                     height="20" 
                     viewBox="0 0 24 24"
                     className='text-main md:w-[25px] md:h-[25px]'
                     >
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="64" strokeDashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path strokeDasharray="4" strokeDashoffset="4" d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="4;0"/></path><path strokeDasharray="6" strokeDashoffset="6" d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.3s" values="6;0"/></path></g></svg>
                    </span>
                     <p className='font-light font-rajdhani text-xs md:text-sm'>+63918-909-0331 <span className='text-[#B2B2B2] font-rajdhani block md:inline'>(Support No.)</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
          <div className='flex justify-center mx-auto mt-8 md:mt-12 w-full'>
            <div className='max-w-3xl w-full min-h-[120px] md:h-32  border border-gray-100 rounded-lg'>
              <div className='flex flex-col md:flex-row justify-center items-center h-full gap-4 md:gap-5 px-4 md:px-6 py-4 md:py-0'>
                <button className='bg-[#343434] uppercase text-white font-rajdhani font-regular rounded-md w-full md:w-64 h-12 md:h-14 flex items-center justify-between px-4 md:px-6 text-sm md:text-base'>
                  <span>Job Hiring</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="md:w-6 md:h-6">
                    <path fill="currentColor" d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01"/>
                  </svg>
                </button>
                
                <button className='bg-main uppercase text-white font-rajdhani font-regular rounded-md w-full md:w-64 h-12 md:h-14 flex items-center justify-between px-4 md:px-6 text-sm md:text-base'>
                  <span>Internship Hiring</span>
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="md:w-6 md:h-6">
                    <path fill="currentColor" d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contacts